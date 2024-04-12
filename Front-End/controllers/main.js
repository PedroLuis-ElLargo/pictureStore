document.addEventListener("DOMContentLoaded", function () {
  // Click en enlaces del menú
  document.querySelectorAll(".menu-links li a").forEach(function (link) {
    link.addEventListener("click", function (event) {
      document
        .querySelector(".menu-links li.active")
        .classList.remove("active");
      this.parentElement.classList.add("active");
    });
  });

  // Click en el ícono del menú hamburguesa
  document
    .querySelector(".hamburger-icon")
    .addEventListener("click", function () {
      document.querySelector(".menu-links").classList.toggle("left");
      this.classList.toggle("ham-style");
    });

  // Cambio de tema
  const themeSwitch = document.querySelector("#checkbox");
  themeSwitch.addEventListener("change", function () {
    document.body.classList.toggle("dark-theme");
  });
});
