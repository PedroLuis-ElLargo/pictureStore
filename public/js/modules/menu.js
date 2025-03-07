export function setupMenu() {
  document.querySelectorAll(".menu-links li a").forEach((link) => {
    link.addEventListener("click", function () {
      document
        .querySelector(".menu-links li.active")
        ?.classList.remove("active");
      this.parentElement.classList.add("active");
    });
  });

  document
    .querySelector(".hamburger-icon")
    .addEventListener("click", function () {
      document.querySelector(".menu-links").classList.toggle("left");
      this.classList.toggle("ham-style");
    });
}
