window.slidesk.makeTheater = () => {
  const ps = [...document.querySelectorAll("#sd-sv-notes p")];
  for (const p of ps) {
    const str = p.innerHTML;
    const match = str.match(/^\{([^}]*)\}\s*(.*)/s);
    if (match) {
      const inBraces = match[1];
      const rest = match[2];
      p.classList.add(inBraces);
      p.innerHTML = `<small>${inBraces}:</small> ${rest}`;
    }
  }
};
