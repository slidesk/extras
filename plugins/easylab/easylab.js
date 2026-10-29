// each "easylab:" line of the notes goes to the students once
const sent = new Set();

window.slidesk.easylab = () => {
  const notes = document.querySelector("#sd-sv-notes")?.innerText ?? "";
  for (const [, message] of notes.matchAll(/^\s*easylab:\s*(.+)$/gim)) {
    if (sent.has(message)) continue;
    sent.add(message);
    window.slidesk.io?.send(JSON.stringify({ plugin: "easylab", message }));
  }
};

// what EasyLab answered, shown to the speaker for a few seconds
window.slidesk.easylab_response = ({ response }) => {
  const toast = document.createElement("div");
  toast.textContent = response.error ?? `Sent to EasyLab: ${response.sent}`;
  toast.style.cssText = `position:fixed;right:1rem;bottom:1rem;z-index:9;padding:.5rem 1rem;border-radius:6px;color:#fff;background:${response.error ? "#c33" : "#25ba92"}`;
  document.body.append(toast);
  setTimeout(() => toast.remove(), 5000);
};
