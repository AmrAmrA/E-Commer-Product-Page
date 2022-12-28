let menuIcon = document.querySelector(".hamburger__menu");
let mobileMenu = document.querySelector(".mobile__menu");
let crossSign = document.querySelector(".cross__sign");
let filter = document.querySelector(".globalFilter");

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

let buttonQuantity = document.querySelector(".button__quantity");
let buttonValue = 0;

let plusSign = document.querySelector(".plus__button");
let minusSign = document.querySelector(".minus__button");

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

let smallestPhotos = document.querySelectorAll(".smallest__photo");
let biggestPhoto = document.querySelector(".biggest__photo");

for (let i = 0; i < smallestPhotos.length; i++) {
  smallestPhotos[i].addEventListener("click", function (e) {
    biggestPhoto.src = `${e.explicitOriginalTarget.src.replace(
      "-thumbnail",
      ""
    )}`;

    let active = document.querySelector(".smallest__photo.small__opacity");
    if (active) {
      active.classList.remove("small__opacity");
    }

    e.target.classList.add("small__opacity");
  });
}

let modalBlock = document.querySelector(".modal__block");
let closeModal = document.querySelector(".close__modal");

biggestPhoto.addEventListener("click", function () {
  modalBlock.classList.add("active__modale");
});

closeModal.addEventListener("click", function () {
  modalBlock.classList.remove("active__modale");
});
