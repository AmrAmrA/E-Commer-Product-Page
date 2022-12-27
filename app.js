let menuIcon = document.querySelector(".hamburger__menu");
let mobileMenu = document.querySelector(".mobile__menu");
let crossSign = document.querySelector(".cross__sign");
let filter = document.querySelector(".globalFilter");
console.log(filter);

menuIcon.addEventListener("click", menuAppearance);
crossSign.addEventListener("click", menuDisppearance);
mobileMenu.classList.remove("appearance");

function menuAppearance() {
  mobileMenu.classList.add("appearance");
  mobileMenu.classList.remove("disAppearance");

  filter.classList.add("toggleVisibilty");
}
function menuDisppearance() {
  mobileMenu.classList.add("disAppearance");
  mobileMenu.classList.remove("appearance");
  filter.classList.remove("toggleVisibilty");
}

console.log(document.body);
