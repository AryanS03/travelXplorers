window.addEventListener("scroll", () => {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
const year = document.querySelector(".year");
const copyrightYear = new Date();
const newYear = copyrightYear.getFullYear();
year.innerHTML = newYear;
const menu = document.querySelector(".menu");
const menuMain = menu.querySelector(".menu-main");
const closeMenu = menu.querySelector(".mobile-menu-close");
const toggle = document.querySelector(".toggle");

menuMain.addEventListener("click", (e) => {
  console.log(e.target);
});
toggle.addEventListener("click", () => {
  toggleMenu();
});
closeMenu.addEventListener("click", () => {
  toggleMenu();
});
document.querySelector(".menu-overlay").addEventListener("click", () => {
  toggleMenu();
});
function toggleMenu() {
  menu.classList.toggle("active-nav");
  document.querySelector(".menu-overlay").classList.toggle("active-nav");
}
