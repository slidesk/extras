window.slidesk.PLUGIN_SBS = { next: window.slidesk.next, steps: [], currentStep: 0 };

const isSbsSlide = () =>
  window.slidesk.slides[window.slidesk.currentSlide].classList.contains("sbs");

const showSbs = (i) => {
  // sendMessage falls back to the BroadcastChannel without a server
  window.slidesk.sendMessage({ action: "nextSbs", payload: i });
  window.slidesk.PLUGIN_SBS.steps[i].classList.add("step-shown");
};

// coming forward, the steps appear one by one; coming back or jumping to the
// slide (goto, reload), they are all shown
window.slidesk.sbs = () => {
  if (!isSbsSlide()) return;
  const sbs = window.slidesk.PLUGIN_SBS;
  sbs.steps = [
    ...window.slidesk.slides[window.slidesk.currentSlide].querySelectorAll(".step"),
  ].sort(
    (a, b) =>
      Number(a.getAttribute("data-sbs") ?? 0) -
      Number(b.getAttribute("data-sbs") ?? 0),
  );
  sbs.steps.forEach((step) => step.classList.remove("step-shown"));
  sbs.currentStep = 0;
  if (window.slidesk.lastAction !== "next")
    while (sbs.currentStep < sbs.steps.length) showSbs(sbs.currentStep++);
};

window.slidesk.next = () => {
  const sbs = window.slidesk.PLUGIN_SBS;
  if (isSbsSlide() && sbs.currentStep < sbs.steps.length)
    showSbs(sbs.currentStep++);
  else sbs.next();
};
