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

let buttonQuantity = document.querySelector(".button__quantity");
let buttonValue = 0;

console.log(buttonQuantity.innerHTML);

let plusSign = document.querySelector(".plus__button");
let minusSign = document.querySelector(".minus__button");
console.log(plusSign);
console.log(minusSign);
plusSign.addEventListener("click", incrementQuantity);
minusSign.addEventListener("click", decrementQuantity);
function incrementQuantity() {
  buttonValue++;
  buttonQuantity.textContent = buttonValue;
}
function decrementQuantity() {
  buttonValue--;
  buttonQuantity.textContent = buttonValue;

  if (buttonQuantity.textContent <= "0") {
    buttonValue = 0;
    buttonQuantity.textContent = "0";
  }
}
