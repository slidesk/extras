const autoClass = (slide) =>
  [...(slide?.classList ?? [])].find((c) => c.startsWith("auto-"));

window.slidesk.autonext = () => {
  // a stale timer of the previous auto- slide would skip one more slide
  clearTimeout(window.slidesk.autonextTimer);
  const auto = autoClass(window.slidesk.slides[window.slidesk.currentSlide]);
  if (auto)
    window.slidesk.autonextTimer = setTimeout(
      () => window.slidesk.next(),
      Number(auto.replace("auto-", "")) + Number(window.slidesk.animationTimer),
    );
};

// the speaker view has no slides: the current one is shown in #sd-sv-current
window.slidesk.autonextNotes = () => {
  const current = document.querySelector("#sd-sv-current");
  current.classList.toggle(
    "autonexted",
    !!autoClass(current.querySelector(".sd-slide")),
  );
};
