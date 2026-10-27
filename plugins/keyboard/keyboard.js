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
  // a mapped action runs here when it exists, else it is sent to the other view
  const run = (action) => {
    if (typeof window.slidesk[action] !== "undefined") window.slidesk[action]();
    else window.slidesk.io?.send(JSON.stringify({ action }));
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
    run(mapping[e.key]);
    run(`${mapping[e.key]}Down`);
  });
  document.addEventListener("keyup", (e) => {
    if (!ignore(e)) run(`${mapping[e.key]}Up`);
  });
};

fetchMapping();
