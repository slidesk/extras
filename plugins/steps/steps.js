window.slidesk.oldNext = window.slidesk.next;

const isStepsSlide = () =>
  window.slidesk.slides[window.slidesk.currentSlide].classList.contains("steps");

const showStep = (i) => {
  // sendMessage falls back to the BroadcastChannel without a server
  window.slidesk.sendMessage({ action: "nextStep", payload: i });
  window.slidesk.$lis[i].classList.add("step-shown");
};

// coming forward, the items appear one by one; coming back or jumping to the
// slide (goto, reload), they are all shown
window.slidesk.prepareSteps = () => {
  if (!isStepsSlide()) return;
  window.slidesk.$lis =
    window.slidesk.slides[window.slidesk.currentSlide].querySelectorAll("li");
  window.slidesk.maxSteps = window.slidesk.$lis.length;
  window.slidesk.$lis.forEach((li) => li.classList.remove("step-shown"));
  window.slidesk.step = 0;
  if (window.slidesk.lastAction !== "next")
    while (window.slidesk.step < window.slidesk.maxSteps)
      showStep(window.slidesk.step++);
};

window.slidesk.next = () => {
  if (isStepsSlide() && window.slidesk.step < window.slidesk.maxSteps)
    showStep(window.slidesk.step++);
  else window.slidesk.oldNext();
};
