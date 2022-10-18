// Cambio de cantidad de artículos ingresados por el usuario

const minusBtn = document.querySelector(".input__minus");
const plusBtn = document.querySelector(".input__plus");
const userInput = document.querySelector(".input__number");

let userInputNumber = 0;

plusBtn.addEventListener("click", () => {
  userInputNumber++;
  userInput.value = userInputNumber;
  /*   console.log(userInputNumber); */
});

minusBtn.addEventListener("click", () => {
  if (userInputNumber > 0) {
    userInputNumber--;
    userInput.value = userInputNumber;
    /*     console.log(userInputNumber); */
  }
});

// Agrega el total de productos al carro, cuando se presiona el botón Add to cart
const addToCartBtn = document.querySelector(".details__button");
let cartNotification = document.querySelector(".header__cart--notification");

addToCartBtn.addEventListener("click", () => {
  let lastValue = parseInt(cartNotification.innerText);
  lastValue = lastValue + userInputNumber;

  cartNotification.innerText = lastValue;
  cartNotification.style.display = "block";
});


// muestra el modal con el detalle del carro

const cartIconBtn = document.querySelector('.header__cart-avatar');
const cartModal = document.querySelector('.cart-modal');

cartIconBtn.addEventListener("click", () => {
  cartModal.classList.toggle("show");
});

// muestra el menu modal mobile

const iconOpenMenuMobile = document.querySelector(".header__menu");
const iconCloseMenuMobile = document.querySelector(".modal-navbar__close-icon");
const modalMenuMobile = document.querySelector(".modal-navbar__background");
const menuMobile = document.querySelector(".modal-navbar");

iconOpenMenuMobile.addEventListener("click", () => {
  modalMenuMobile.classList.toggle("show");
  menuMobile.classList.toggle("show");
});
iconCloseMenuMobile.addEventListener("click", () => {
  modalMenuMobile.classList.toggle("show");
  menuMobile.classList.toggle("show");
});


