// EasyLab has no API key yet: the plugin signs in as its admin page does
// ponytail: relies on the routes of the admin page, an API key of EasyLab would replace login()
const { EASYLAB_URL, EASYLAB_LAB, EASYLAB_PASSWORD } = process.env;
let session;

const login = async () => {
  const res = await fetch(`${EASYLAB_URL}/login`, {
    method: "POST",
    redirect: "manual",
    // the page sends the SHA-256 of the password, not the password
    body: new URLSearchParams({
      password_hash: new Bun.CryptoHasher("sha256")
        .update(EASYLAB_PASSWORD)
        .digest("hex"),
    }),
  });
  const cookies = res.headers.getSetCookie().map((c) => c.split(";")[0]);
  const csrf = cookies.find((c) => c.startsWith("csrf_token="));
  if (!csrf) throw new Error("the admin password is refused");
  session = { cookie: cookies.join("; "), csrf: csrf.slice(11) };
};

const notify = (message) =>
  fetch(
    `${EASYLAB_URL}/api/labs/${encodeURIComponent(EASYLAB_LAB)}/notifications`,
    {
      method: "POST",
      redirect: "manual",
      headers: { Cookie: session.cookie, "X-CSRF-Token": session.csrf },
      body: new URLSearchParams({ message, level: "info", ttl_minutes: "60" }),
    },
  );

export default async (raw, _server, socket) => {
  // any viewer can write to the socket: only the speaker talks to the students
  if (!socket?.canSend) return { error: "Only the speaker sends to EasyLab" };
  if (!EASYLAB_URL || !EASYLAB_LAB || !EASYLAB_PASSWORD)
    return { error: "Set EASYLAB_URL, EASYLAB_LAB and EASYLAB_PASSWORD" };
  const { message } = JSON.parse(raw);
  try {
    if (!session) await login();
    let res = await notify(message);
    // the session expired, or EasyLab restarted and forgot it
    if (res.status === 303 || res.status === 403) {
      await login();
      res = await notify(message);
    }
    const body = await res.text();
    // EasyLab answers with its list of messages, or with what went wrong
    if (!body.includes("lab-notify-item"))
      return {
        error: `EasyLab: ${body.replaceAll(/<[^>]+>/g, " ").trim() || res.status}`,
      };
    return { sent: message };
  } catch (e) {
    return { error: `EasyLab: ${e.message}` };
  }
};
