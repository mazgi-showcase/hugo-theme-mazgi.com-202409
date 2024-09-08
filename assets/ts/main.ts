window.onload = () => {
  const elements = document.querySelectorAll(".language-selector select");
  elements.forEach((el) => {
    const selectEl = el as HTMLSelectElement;
    selectEl.addEventListener("change", (event) => {
      const options = selectEl.querySelectorAll("option");
      const selected = options[selectEl.selectedIndex];
      const href = selected?.getAttribute("data-href") || window.location.href;
      window.location.href = href;
    });
  });
};
