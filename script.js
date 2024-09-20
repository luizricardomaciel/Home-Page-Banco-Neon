const btnDropdown = document.querySelector(".js-btn-dropdown");
const dropdown = document.querySelector(".js-dropdown");

function openDropdown(event) {
  event.preventDefault();
  dropdown.classList.add("active");
}
function closeDropdown(event) {
  event.preventDefault();
  dropdown.classList.remove("active");
}

btnDropdown.addEventListener("mousemove", openDropdown);
dropdown.addEventListener("mouseleave", closeDropdown);
