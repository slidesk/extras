window.slidesk.makeTheater = () => {
  const ps = [...document.querySelectorAll("#sd-sv-notes p")];
  for (const p of ps) {
    const str = p.innerHTML;
    const match = str.match(/^\{([^}]*)\}\s*(.*)/s);
    if (match) {
      const inBraces = match[1];
      const rest = match[2];
      // "Mr Smith" is styled with .Mr-Smith; an empty {} adds no class
      const cls = inBraces.trim().replaceAll(/\s+/g, "-");
      if (cls) p.classList.add(cls);
      p.innerHTML = `<small>${inBraces}:</small> ${rest}`;
    }
  }
};
