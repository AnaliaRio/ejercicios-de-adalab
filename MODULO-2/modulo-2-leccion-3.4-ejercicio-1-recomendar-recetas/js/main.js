"use strict";

// Vamos a hacer un pequeño programa que te sugiera una receta en función del ingrediente que le pasemos.
// Para resolverlo nos dan una variable en la que podemos declarar un ingrediente a elegir entre estos tres: pollo, merluza o espinacas
// Por defecto si no hay ingrediente pondrá 'Nada en la nevera'
// Según el ingrediente que le pasemos el programa nos devolverá un mensaje por consola diciéndote el ingrediente que has elegido y con las siguientes sugerencias de receta:
// Filete con patatas / Merluzita en salsa verde / Espinacas rehogadas. Ejemplo: Tu ingrediente es pollo. Puedes freirte un filete con patatas.

let ingredient = "";

if (ingredient === "Pollo") {
  console.log("Tu ingrediente es pollo. Puedes freirte un filete con patatas.");
} else if (ingredient === "Merluza") {
  console.log("Merluzita en salsa verde");
} else if (ingredient === "Espinacas") {
  console.log("Espinacas rehogadas");
} else if (ingredient !== "Pollo" && ingredient !== "Merluza" && ingredient !== "Espinacas") {
  console.log("Nada en la nevera");
}


// CON SWITCH

// switch (ingredient) {
//     case "Pollo":
//         console.log("Tu ingrediente es pollo. Puedes freirte un filete con patatas."); 
//         break;
//         case "Merluza":
//         console.log("Tu ingrediente es merluza. Hazte una merluzita en salsa verde."); 
//         break;
//         case "Espinacas":
//         console.log("Tu ingrediente es merluza. Hazte unas espinacas rehaogadas. Ñammm."); 
//         break;
// }