const supportsPopover = () => HTMLElement.prototype.hasOwnProperty("popover");

// the core no longer keeps the markdown of a slide (data-source): its HTML is shown
window.slidesk.changeSource = () => {
  if (!supportsPopover()) return;
  const slide = window.slidesk.slides[window.slidesk.currentSlide].cloneNode(true);
  slide.querySelectorAll(".sd-notes").forEach((n) => n.remove());
  document.querySelector("#sd-source pre").innerText = slide.innerHTML.trim();
};

if (!supportsPopover()) {
  document.querySelector("#sd-showSource").style.display = "none";
  document.querySelector("#sd-source").style.display = "none";
}
