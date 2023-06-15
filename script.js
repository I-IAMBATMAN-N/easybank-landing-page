const hamburgerButton = document.querySelector(".hamburger-menu-button");
const hamburgerIcons = document.querySelectorAll(
  ".hamburger-menu-button .hamburger-icon"
);
const mobileNavList = document.querySelector(".mobile-nav-list");

hamburgerButton.addEventListener("click", (e) => {
  mobileNavList.classList.toggle("visible");
  hamburgerIcons.forEach((e) => {
    e.classList.toggle("d-none");
  });
});
