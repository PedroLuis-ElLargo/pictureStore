export function setupMenu() {
  const menuLinks = document.querySelectorAll(".menu-links li a");
  const menuList = document.querySelector(".menu-links");
  const hamburgerIcon = document.querySelector(".hamburger-icon");

  if (!menuLinks.length || !menuList || !hamburgerIcon) return;

  menuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      document
        .querySelector(".menu-links li.active")
        ?.classList.remove("active");
      this.parentElement.classList.add("active");
    });
  });

  hamburgerIcon.addEventListener("click", function () {
    menuList.classList.toggle("left");
    this.classList.toggle("ham-style");
  });
}
