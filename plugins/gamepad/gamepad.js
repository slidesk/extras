let mapping = {};

let throttleTimer;

const throttle = (callback, time) => {
  if (throttleTimer) return;
  throttleTimer = true;
  setTimeout(() => {
    callback();
    throttleTimer = false;
  }, time);
};

const buttonPressed = (b) => {
  if (typeof b === "object") {
    return b.pressed;
  }
  return b === 1.0;
};

const gameLoop = () => {
  const gamepads = navigator.getGamepads();
  if (!gamepads) {
    return;
  }

  // the pad is not always at index 0
  const gp = [...gamepads].find(Boolean);
  if (!gp) return;
  for (let i = 0; i < 16; i += 1) {
    if (buttonPressed(gp.buttons[i]) && mapping[i]) {
      if (typeof window.slidesk[mapping[i]] !== "undefined") {
        window.slidesk[mapping[i]]();
      } else {
        // an action of the speaker view; falls back to the BroadcastChannel
        window.slidesk.sendMessage({ action: mapping[i] });
      }
    }
  }

  requestAnimationFrame(() =>
    throttle(gameLoop, window.slidesk.animationTimer),
  );
};

const fetchMapping = async () => {
  try {
    const response = await fetch("./gamepad.json");
    const json = await response.json();
    mapping = json;
  } catch (erreur) {
    mapping = {
      15: "next",
      14: "previous",
      6: "next",
      7: "previous",
    };
  }
  window.addEventListener("gamepadconnected", () => {
    gameLoop();
  });
};

fetchMapping();
