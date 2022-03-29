"use strict";

// 1. Generar número aleatorio
// 2. Escuchar el click del botón
// 3. Recoger valor seleccionado (.value)
// 4. Comparar valores
// 5. Pintar mensaje que corresponda


// 1. CONSTANTS

const selectElement = document.querySelector(".js-onetosix");
const btn = document.querySelector(".btn");
const output = document.querySelector(".letsplay");

// 2. FUNCTIONS

// Function to generate random no

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

function game (selectValue, randomNumber){
    if (selectValue === randomNumber) {
        output.innerHTML = "Has ganado el doble de lo apostado :D";
    }
    else {
        output.innerHTML = "Has perdidido todo lo apostado :(";
    }
}

// Handling function

function handleClick(event) {

    // Prevent default SIEMPRE es la primera línea de la función manejadora
    event.preventDefault();

    // Recoger y parsear valor seleccionado (TODOS los valores son string)
    const selectValue = parseInt(selectElement.value);

    // Llamar a la función que genera número aleatorio
    const randomNumber = getRandomNumber(6);

    game(selectValue, randomNumber);

    console.log(selectValue, randomNumber);
}

//3. LISTEN FOR CLICK EVENT ON BUTTON
btn.addEventListener("click",handleClick);