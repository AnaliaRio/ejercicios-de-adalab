"use strict";

// Crea un div que contenga un título "NOTIFICACIÓN" y un texto "Mensaje por defecto".
// Crea también tres clases:
// La primera, .success, aplicará un borde verde oscuro, un fondo verde claro y el color de fuente verde oscuro
// La segunda, .error, igual pero sustituyendo el verde por rojo
// La tercera, .warning, lo mismo pero usando el color amarillo

// Si contiene la clase warning, el título sea 'AVISO' y el texto sea: 'Tenga cuidado'

// Si contiene la clase error, el título sea 'ERROR' y el texto sea: 'Ha surgido un error'

// Si contiene la clase success, el título sea 'CORRECTO' y el texto sea: 'Los datos son correctos'

// Cambia la clase en HTML y comprueba que el código de JavaScript funciona.

const success = document.querySelector(".success");
const error = document.querySelector(".error");
const warning = document.querySelector(".warning");
// const div = document.querySelector("div");

if (div.classList.contains("warning"))
{div.innerHTML = `<p>AVISO</p>`}

else if (div.classList.contains("error"))
{div.innerHTML = `<p>ERROR</p>`}

else if (div.classList.contains("sucess"))
{div.innerHTML = `<p>CORRECTO</p>`}

