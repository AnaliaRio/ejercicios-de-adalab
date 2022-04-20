"use strict";

// Vamos a partir de un HTML con un botón 'Empezar'. Al hacer click, vamos a pintar en el HTML un listado de películas que tenemos en JavaScript:
const list = document.querySelector(".ul");


const inception = "Inception";
const theButterFlyEffect = "The butterfly effect";
const eternalSunshineOfTheSM = "Eternal sunshine of the spotless mind";
const blueVelvet = "Blue velvet";
const split = "Split";

const button = document.querySelector(".button");


button.addEventListener("click", () => {
    console.log("Listado");
    list.innerHTML = `<li> ${inception}</li><li> ${theButterFlyEffect}</li><li> ${eternalSunshineOfTheSM}</li><li> ${blueVelvet}</li><li> ${split}</li>`;
});



// Después vamos a escuchar eventos sobre cada elemento de la lista, de forma que al hacer click sobre el nombre de una película aparezca en la consola el nombre de esa película.

// Escuchar los li. Poner misma clase a todos
// EVENT CURRENT TARGET