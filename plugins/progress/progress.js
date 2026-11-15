// slides are only collected in window.onload, registered before this listener
window.addEventListener("load", () => {
  const $progress = document.querySelector("#sd-progress");
  const nb = window.slidesk.slides.length;
  $progress.innerHTML = [...window.slidesk.slides]
    .map((s, i) => {
      // the core no longer sets data-slug: the slide title names it
      const title = (s.querySelector("h1, h2")?.textContent ?? "")
        .trim()
        .replaceAll('"', "&quot;");
      return `<a href="javascript:window.slidesk.goto(${i});" title="${i + 1}. ${title}" class="sd-progression" style="width: calc(${100 / nb}% - 2px);"></a>`;
    })
    .join("");
  window.slidesk.progressActive();
});

window.slidesk.progressActive = () => {
  document.querySelectorAll("#sd-progress .sd-progression").forEach((s, i) => {
    s.classList.toggle("active", i <= window.slidesk.currentSlide);
  });
};
