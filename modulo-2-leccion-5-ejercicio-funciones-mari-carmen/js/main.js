'use strict';

const nameInput = document.querySelector(".js-name");
const lastnameInput = document.querySelector(".js-lastname");
const sayHiButton = document.querySelector(".js-button");
const greetingParagraph = document.querySelector(".js-greeting");

// 1. Se va a lanzar cuando haga click en saludar
// 2. Coger nombre y apellido de usuario
// 3. Juntar el nombre y el apellido
// 4. Mostrar un mensajito con el saludo

function handleClick () {
    const name = nameInput.value
    const lastName = lastnameInput.value
    greetingParagraph.innerHTML = `Hola! ${name} ${lastName}`;

}

sayHiButton.addEventListener("click", handleClick)