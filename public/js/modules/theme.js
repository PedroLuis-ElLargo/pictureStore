export function setupTheme() {
  const themeSwitch = document.querySelector("#checkbox");
  if (!themeSwitch) return;

  themeSwitch.addEventListener("change", () => {
    document.body.classList.toggle("dark-theme");
  });
}
