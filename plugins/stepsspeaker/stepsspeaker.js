let speakerCurrentStep = 0;
let speakerStepNotes = [];

const $svNotes = document.getElementById("sd-sv-notes");

// as the speaker view does: the socket when open, and the channel
const stepsSpeakerSend = (action) => {
  if (window.slidesk.io?.readyState === WebSocket.OPEN)
    window.slidesk.io.send(JSON.stringify({ action }));
  window.slidesk.channel?.postMessage({ action });
};

window.slidesk.stepsSpeaker = () => {
  if ($svNotes.querySelector("hr")) {
    const html = $svNotes.innerHTML;
    speakerStepNotes = html.split("<hr>");
    speakerCurrentStep = 0;
    $svNotes.innerHTML = speakerStepNotes[speakerCurrentStep];
  } else {
    speakerStepNotes = [];
  }
};

document.addEventListener("keydown", (e) => {
  // typing, Cmd/Ctrl/Alt shortcuts and held keys are left to the speaker view
  if (window.slidesk.ignoreKey(e) || e.repeat) return;
  if (e.key === "ArrowLeft") {
    e.preventDefault();
    e.stopPropagation();
    if (speakerStepNotes.length && speakerCurrentStep > 0) {
      $svNotes.innerHTML = speakerStepNotes[--speakerCurrentStep];
    } else {
      stepsSpeakerSend("previous");
    }
  } else if (e.key === "ArrowRight") {
    e.preventDefault();
    e.stopPropagation();
    if (speakerStepNotes.length && speakerCurrentStep < speakerStepNotes.length - 1) {
      $svNotes.innerHTML = speakerStepNotes[++speakerCurrentStep];
    } else {
      stepsSpeakerSend("next");
    }
  }
}, true);
