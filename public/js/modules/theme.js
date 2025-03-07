export function setupTheme() {
  const themeSwitch = document.querySelector("#checkbox");
  themeSwitch.addEventListener("change", function () {
    document.body.classList.toggle("dark-theme");
  });
}
