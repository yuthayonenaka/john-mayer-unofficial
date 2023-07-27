const hamburgerMenu = document.querySelector(".navbar__menu");
const navMenu = document.querySelector(".navbar__nav");

hamburgerMenu.addEventListener("click", () => {
  navMenu.classList.contains("active")
    ? navMenu.classList.remove("active")
    : navMenu.classList.add("active");
});
