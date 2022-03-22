"use strict";

// Vamos a partir de un HTML con un botón 'Empezar'. Al hacer click, vamos a pintar en el HTML un listado de películas que tenemos en JavaScript:


const inception = "Inception";
const theButterFlyEffect = "The butterfly effect";
const eternalSunshineOfTheSM = "Eternal sunshine of the spotless mind";
const blueVelvet = "Blue velvet";
const split = "Split";

const button = document.querySelector(".button");

const p = document.querySelector(".p");

button.addEventListener("click"), () => {console.log("Listado"); p.textContent = `${inception}`;

// Después vamos a escuchar eventos sobre cada elemento de la lista, de forma que al hacer click sobre el nombre de una película aparezca en la consola el nombre de esa película.

// inception.addEventListener("click"), () => {console.log(inception);
//   });

//   theButterFlyEffect.addEventListener("click"), () => {
//     console.log(theButterFlyEffect);});

//   eternalSunshineOfTheSM.addEventListener("click"), () => {
//     console.log(eternalSunshineOfTheSM);});

//   blueVelvet.addEventListener("click"), () => {
//     console.log(blueVelvet);
//   });

//   split.addEventListener("click"), () => {
//     console.log(split);
//   });