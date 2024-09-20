const btnDropdown = document.querySelector(".js-btn-dropdown");
const dropdown = document.querySelector(".js-dropdown");

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

const header = document.getElementById("js-header");
function fixedMenu() {
  if (window.pageYOffset > 80) {
    header.classList.add("fixed-menu");
  } else {
    header.classList.remove("fixed-menu");
  }
}
document.addEventListener("scroll", fixedMenu);
