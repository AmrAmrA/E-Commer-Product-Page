let menuIcon = document.querySelector(".hamburger__menu");
let mobileMenu = document.querySelector(".mobile__menu");
let crossSign = document.querySelector(".cross__sign");
console.log(crossSign);

menuIcon.addEventListener("click", menuAppearance);
crossSign.addEventListener("click", menuDisppearance);

function menuAppearance() {
  mobileMenu.classList.add("appearance");
  mobileMenu.classList.remove("disAppearance");
}
function menuDisppearance() {
  mobileMenu.classList.add("disAppearance");
  mobileMenu.classList.remove("appearance");
}
