const btnDropdown = document.querySelector(".js-btn-dropdown");
const dropdown = document.querySelector(".js-dropdown");
const header = document.getElementById("js-header");
const btnMobile = document.getElementById("js-btn-mobile");
const overlayMobile = document.querySelector(".js-overlay");

function openDropdown(event) {
  event.preventDefault();
  dropdown.classList.add("active");
}
btnDropdown.addEventListener("mousemove", openDropdown);

function closeDropdown(event) {
  event.preventDefault();
  dropdown.classList.remove("active");
}
dropdown.addEventListener("mouseleave", closeDropdown);

function fixedMenu() {
  if (window.pageYOffset > 80) {
    header.classList.add("fixed-menu");
  } else {
    header.classList.remove("fixed-menu");
  }
}
document.addEventListener("scroll", fixedMenu);

const MenuMobile = () => {
  document.documentElement.classList.toggle("menu-opened");
};
btnMobile.addEventListener("click", MenuMobile);
overlayMobile.addEventListener("click", MenuMobile);
