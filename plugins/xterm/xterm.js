const OPTIONS_TERM = {
  useStyle: true,
  screenKeys: true,
  cursorBlink: true,
  cols: 100,
  theme: {
    foreground: "#f8dcc0",
    background: "#1f1d45",
    cursor: "#efbf38",

    black: "#050404",
    brightBlack: "#4e7cbf",

    red: "#bd0013",
    brightRed: "#fc5f5a",

    green: "#4ab118",
    brightGreen: "#9eff6e",

    yellow: "#e7741e",
    brightYellow: "#efc11a",

    blue: "#0f4ac6",
    brightBlue: "#1997c6",

    magenta: "#665993",
    brightMagenta: "#9b5953",

    cyan: "#70a598",
    brightCyan: "#c8faf4",

    white: "#f8dcc0",
    brightWhite: "#f6f5fb",
  },
};

// the server routes a message to the plugin named after its directory
window.slidesk.xtermPlugin =
  /plugins\/([^/]+)\/xterm\.js/.exec(document.currentScript.src)?.[1] ??
  "xterm";

window.slidesk.term = null;

// the server also publishes the hook's empty response: only output is written
window.slidesk.xterm_response = (data) => {
  if (window.slidesk.term && typeof data.data === "string")
    window.slidesk.term.write(data.data);
};

window.slidesk.xtemInit = () => {
  const term =
    window.slidesk.slides[window.slidesk.currentSlide].querySelector(".xterm");
  if (term !== null) {
    term.innerHTML = "";
    window.slidesk.term = new Terminal(OPTIONS_TERM);
    window.slidesk.term.open(term);
    window.slidesk.term.onData((data) => {
      window.slidesk.sendMessage({
        plugin: window.slidesk.xtermPlugin,
        data,
      });
    });
    window.slidesk.sendMessage({
      plugin: window.slidesk.xtermPlugin,
      data: "clear\n",
    });
    setTimeout(() => {
      const init = term.getAttribute("data-cmd");
      if (init) {
        window.slidesk.term.write(init);
        window.slidesk.sendMessage({
          plugin: window.slidesk.xtermPlugin,
          data: init,
        });
      }
    }, 200);
  } else {
    window.slidesk.term = null;
  }
};
