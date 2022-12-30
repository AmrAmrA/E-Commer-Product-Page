let menuIcon                  = document.querySelector(".hamburger__menu");
let mobileMenu                = document.querySelector(".mobile__menu");
let crossSign                 = document.querySelector(".cross__sign");
let filter                    = document.querySelector(".globalFilter");
let nextArrow                 = document.querySelector(".next__slide");
let prevArrow                 = document.querySelector(".prev__slide");
let centralImage              = document.querySelector(".central__image");
let addProduct                = document.querySelector(".add__product");
let orangeBubble              = document.querySelector(".orange__bubble");
let productNumber             = document.querySelector(".orange__number");
let emptyMessage              = document.querySelector(".empty__message");
let buttonQuantity            = document.querySelector(".button__quantity");
let buttonValue               = 0;
let plusSign                  = document.querySelector(".plus__button");
let minusSign                 = document.querySelector(".minus__button");
let smallestPhotos            = document.querySelectorAll(".smallest__photo");
let biggestPhoto              = document.querySelector(".biggest__photo");
let cartHeader                = document.querySelector(".cart__header");
let invisibleCart             = document.querySelector(".cart__section");
let modalBlock                = document.querySelector(".modal__block");
let closeModal                = document.querySelector(".close__modal");
let nextPhoto                 = document.querySelector(".next__photo");
let prevPhoto                 = document.querySelector(".prev__photo");
let allPhotos                 = document.querySelectorAll(".mobile__image");
let mobileCount               = 0;
let thumbnailPhotos           = document.querySelectorAll(".thumbnail__photo");
let items                     = document.querySelectorAll(".product__image");
let count                     = 0;
let shoesPrice                = document.querySelector('.new__price').textContent.replace('$', '');
let singlePrice               = document.querySelector('.single__price'); 
let shoesQuantity             = document.querySelector('.full__quantity');
let fullTotal                 = document.querySelector('.full__total');
let trashIcon                 = document.querySelector('.trash__icon');
let fullCart                  = document.querySelector('.full__cart'); 

singlePrice.textContent = shoesPrice;


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
    shoesQuantity.textContent = parseInt(buttonQuantity.textContent);
    fullTotal.textContent =
      parseInt(shoesQuantity.textContent) * parseInt(shoesPrice).toFixed(2);
    emptyMessage.classList.add("hide__message");
    fullCart.classList.add("visible__cart");
    setLocalStorage()
  } else {
    
  }
}

trashIcon.addEventListener("click", deleteCart);
function deleteCart() {
  fullCart.classList.remove("visible__cart");
  emptyMessage.classList.remove("hide__message");
  orangeBubble.classList.remove("display__cart");
}

let shoesContainer = shoesQuantity.innerText; 
let priceContainer = parseInt(shoesPrice).toFixed(2);
let totalContainer = parseInt(shoesContainer) * parseInt(priceContainer); 


let productContainer = {
  shoesContainer, 
  priceContainer, 
  totalContainer
}

let cart = localStorage.getItem("cart") || [];
function setLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(productContainer));
  localStorage.getItem("cart", productContainer);
}


for (let i = 0; i < smallestPhotos.length; i++) {
  smallestPhotos[i].addEventListener("click", function (e) {
    let active = document.querySelector(".smallest__photo.small__opacity");
    if (active) {
      active.classList.remove("small__opacity");
    }

    e.target.classList.add("small__opacity");
  });
}

biggestPhoto.addEventListener("click", function () {
  modalBlock.classList.add("active__modale");
});

closeModal.addEventListener("click", function () {
  modalBlock.classList.remove("active__modale");
});

nextArrow.addEventListener("click", nextSlide);
prevArrow.addEventListener("click", prevSlide);
function nextSlide() {
  items[count].classList.remove("central__image");
  if (count < items.length - 1) {
    count++;
  } else {
    count = 0;
  }
  items[count].classList.add("central__image");
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

cartHeader.addEventListener("click", makeVisible);
function makeVisible() {
  invisibleCart.classList.toggle("visible__cart");
}