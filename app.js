let menuIcon = document.querySelector(".hamburger__menu");
let mobileMenu = document.querySelector(".mobile__menu");
let crossSign = document.querySelector(".cross__sign");
let filter = document.querySelector(".globalFilter");

let nextArrow = document.querySelector(".next__slide");
let prevArrow = document.querySelector(".prev__slide");
let centralImage = document.querySelector(".central__image");

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

nextArrow.addEventListener("click", nextSlide);
prevArrow.addEventListener("click", prevSlide);

let items = document.querySelectorAll(".product__image");
let count = 0;
console.log(items);

function nextSlide() {
  items[count].classList.remove("central__image");
  if (count < items.length - 1) {
    count++;
  } else {
    count = 0;
  }
  items[count].classList.add("central__image");
  console.log(items[count]);
}

function prevSlide() {
  items[count].classList.remove("central__image");
  if (count > 0) {
    count--;
  } else {
    count = items.length - 1;
  }
  items[count].classList.add("central__image");
}

biggestPhoto.addEventListener("click", samePhoto);
function samePhoto() {
  centralImage.src = biggestPhoto.src;
}
samePhoto();

let thumbnailPhotos = document.querySelectorAll(".thumbnail__photo");
for (let i = 0; i < thumbnailPhotos.length; i++) {
  thumbnailPhotos[i].addEventListener("click", function (e) {
    let activePhoto = document.querySelector(
      ".thumbnail__photo.small__opacity"
    );
    if (activePhoto) {
      activePhoto.classList.remove("small__opacity");
    }

    e.target.classList.add("small__opacity");
  });
}
