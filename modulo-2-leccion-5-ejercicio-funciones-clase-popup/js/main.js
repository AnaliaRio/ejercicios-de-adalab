'use strict';

// PARTE 1 - Al hacer click en el botón "Claro que sí" se debe ocultar el popup

// 1. Seleccionar elemento HTML
const closeButton = document.querySelector(".js-close");
const overlay = document.querySelector(".js-overlay");

// 2. Crear una función que se va a usar en el add event listener. Esta función es un bloque de instrucciones que puede ser tan grande como se necesite, y así ahorramos espacio en el add event listener
function closePopUp(){
    console.log("holis"); 
    overlay.classList.add(hidden);
}

// 3. Escuchar evento click - En en segundo parámetro se ejecuta la función declarada en el paso anterior, así no ocupa espacio aquí
//Importante!! Cuando el un parámetro es una función, NO lleva paréntesis
closeButton.addEventListener("click", closePopUp);

// PARTE 2 - Al hacer click en una comida se va a añadir a la sección de orden de compra

// 1. Seleccionar elemento HTML uno  auno
const order = document.querySelector(".js-order");
const liOption1 = document.querySelector(".js-add1");
const liOption2 = document.querySelector(".js-add2");
const liOption3 = document.querySelector(".js-add3");

// 2. Creamos una función arrowque se va a usar en el add event listener para hacer ese proceso y asignarle variable
const addItem = (event) => {
    const liValue = event.currentTarget.innerHTML;
    order.innerHTML += `<p>${liValue}</p>`;
}

// 3. Escucho sobre cada uno de los elementos sobre los que se va a ejecutar esa función. Se ponen 3 listener, uno a cada uno, pero todos usan la misma función.
liOption1.addEventListener("click",addItem);
liOption2.addEventListener("click",addItem);
liOption3.addEventListener("click",addItem);

// OTRA FORMA DE HACERLOS SIN sin hacer un listener para cada uno:

// 1. Traerlo a JS
// const liFood = document.querySelector(."js-foodList");

// 2. Declarar función - TARGET y CURRENT TARGET son diferentes
// function addItem2(event){
// console.log(event.currentTarget);
// console.log(event.target);
// const LiValue = event.target.innerHTML;
// order.innerHTML += `<p>${liValue}</p>`;
// }

// Current target - Sobre el que escucho
// Target - Sobre el que haces click

// 3. Event listener
// listFood.addEventListener("click", addItem2);