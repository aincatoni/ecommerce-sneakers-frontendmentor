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
