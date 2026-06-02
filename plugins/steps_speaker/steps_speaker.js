let speakerCurrentStep = 0;
let speakerStepNotes = [];

const $svNotes = document.getElementById("sd-sv-notes");

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
  if (e.key === "ArrowLeft") {
    e.preventDefault();
    e.stopPropagation();
    if (speakerStepNotes.length && speakerCurrentStep > 0) {
      $svNotes.innerHTML = speakerStepNotes[--speakerCurrentStep];
    } else {
      window.slidesk.io?.send(JSON.stringify({ action: "previous" }));
      if (window.slidesk.channel) {
        window.slidesk.channel.postMessage({ action: "previous" });
      }
    }
  } else if (e.key === "ArrowRight") {
    e.preventDefault();
    e.stopPropagation();
    if (speakerStepNotes.length && speakerCurrentStep < speakerStepNotes.length - 1) {
      $svNotes.innerHTML = speakerStepNotes[++speakerCurrentStep];
    } else {
      window.slidesk.io?.send(JSON.stringify({ action: "next" }));
      if (window.slidesk.channel) {
        window.slidesk.channel.postMessage({ action: "next" });
      }
    }
  }
}, true);
