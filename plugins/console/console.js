// a drop-down terminal on the shell of the xterm plugin, which must be installed:
// it brings the Terminal lib, and its server hook runs the shell
let consoleTerm = null;

const toggleConsole = () => {
  const el = document.getElementById("console");
  if (!consoleTerm) {
    consoleTerm = new Terminal({ cursorBlink: true });
    consoleTerm.open(el);
    consoleTerm.onData((data) =>
      window.slidesk.sendMessage({ plugin: window.slidesk.xtermPlugin, data }),
    );
    // the shell is shared: its output goes to the slide terminal and the console
    const toSlide = window.slidesk.xterm_response;
    window.slidesk.xterm_response = (data) => {
      toSlide(data);
      if (typeof data.data === "string") consoleTerm.write(data.data);
    };
  }
  if (el.classList.toggle("open")) consoleTerm.focus();
};

document.addEventListener("keydown", (e) => {
  if (e.altKey && e.key === "•") toggleConsole();
});
