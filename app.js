let menuIcon = document.querySelector(".hamburger__menu");
let mobileMenu = document.querySelector(".mobile__menu");
let crossSign = document.querySelector(".cross__sign");
let filter = document.querySelector(".globalFilter");

let nextArrow = document.querySelector(".next__slide");
let prevArrow = document.querySelector(".prev__slide");
let centralImage = document.querySelector(".central__image");

let addProduct = document.querySelector(".add__product");
console.log(addProduct);
let orangeBubble = document.querySelector(".orange__bubble");
console.log(orangeBubble);
let productNumber = document.querySelector(".orange__number");
console.log(productNumber);

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
  if (buttonQuantity.textContent == "99") {
    buttonValue = 99;
    buttonQuantity.textContent = "99";
  } else {
    buttonValue++;
    buttonQuantity.textContent = buttonValue;
  }
}

function decrementQuantity() {
  if (buttonQuantity.textContent <= "0") {
    buttonValue = 0;
    buttonQuantity.textContent = "0";
  } else {
    buttonValue--;
    buttonQuantity.textContent = buttonValue;
  }
}

addProduct.addEventListener("click", addQuantity);

function addQuantity() {
  if (buttonQuantity.textContent > 0 && buttonQuantity.textContent <= 99) {
    orangeBubble.classList.add("display__cart");
    productNumber.textContent = buttonQuantity.textContent;
  } else {
    console.log("Impossible to add empty quantity");
  }
}

let smallestPhotos = document.querySelectorAll(".smallest__photo");
let biggestPhoto = document.querySelector(".biggest__photo");

for (let i = 0; i < smallestPhotos.length; i++) {
  smallestPhotos[i].addEventListener("click", function (e) {
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

function nextSlide() {
  items[count].classList.remove("central__image");
  if (count < items.length - 1) {
    count++;
  } else {
    count = 0;
  }
  items[count].classList.add("central__image");
  console.log(count);
  console.log(items);
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

// Slider for mobile photos
let nextPhoto = document.querySelector(".next__photo");
let prevPhoto = document.querySelector(".prev__photo");
let allPhotos = document.querySelectorAll(".mobile__image");
let mobileCount = 0;
console.log(nextPhoto);
console.log(prevPhoto);
console.log(allPhotos);

nextPhoto.addEventListener("click", nextOne);
prevPhoto.addEventListener("click", lastOne);

function nextOne() {
  allPhotos[mobileCount].classList.remove("first__image");
  if (mobileCount < allPhotos.length - 1) {
    mobileCount++;
  } else {
    mobileCount = 0;
  }
  allPhotos[mobileCount].classList.add("first__image");
}

function lastOne() {
  allPhotos[mobileCount].classList.remove("first__image");
  if (mobileCount > 0) {
    mobileCount--;
  } else {
    mobileCount = allPhotos.length - 1;
  }
  allPhotos[mobileCount].classList.add("first__image");
}

let cartHeader = document.querySelector(".cart__header");
console.log(cartHeader);
let invisibleCart = document.querySelector(".cart__section");

cartHeader.addEventListener("click", makeVisible);

function makeVisible() {
  invisibleCart.classList.toggle("visible__cart");
}
