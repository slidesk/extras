let mapping = {};

const fetchMapping = async () => {
  try {
    const response = await fetch("./keyboard.json");
    const json = await response.json();
    mapping = json;
  } catch (_) {
    mapping = {
      f: "fullscreen",
    };
  }
  // the keys mapped here take over the ones SliDesk binds
  for (const key of Object.keys(mapping)) delete window.slidesk.keys?.[key];
  // an action this view lacks goes to the other view (the speaker view has
  // no sendMessage); fullscreen is not sent: it needs a key press on that page
  const send = (action) => {
    if (window.slidesk.sendMessage) return window.slidesk.sendMessage({ action });
    if (window.slidesk.io?.readyState === WebSocket.OPEN)
      window.slidesk.io.send(JSON.stringify({ action }));
    window.slidesk.channel?.postMessage({ action });
  };
  // the X action, and the optional XDown / XUp, which are never sent
  const run = (action, remote = false) => {
    if (Object.hasOwn(window.slidesk, action)) window.slidesk[action]();
    else if (remote && action !== "fullscreen") send(action);
  };
  // Cmd/Ctrl/Alt shortcuts and typing in a field are left alone
  const ignore = (e) =>
    !mapping[e.key] ||
    e.metaKey ||
    e.ctrlKey ||
    e.altKey ||
    e.target.isContentEditable ||
    !!e.target.closest?.("input, textarea, select, .xterm");
  document.addEventListener("keydown", (e) => {
    if (ignore(e)) return;
    e.preventDefault();
    // a held key fires once, its Up comes on release
    if (e.repeat) return;
    run(mapping[e.key], true);
    run(`${mapping[e.key]}Down`);
  });
  document.addEventListener("keyup", (e) => {
    if (!ignore(e)) run(`${mapping[e.key]}Up`);
  });
};

fetchMapping();
