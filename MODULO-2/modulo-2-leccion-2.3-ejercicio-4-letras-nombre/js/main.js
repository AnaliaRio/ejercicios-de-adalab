"use strict";

// LONGITUD DE STRING

// Con todo lo aprendido hasta ahora vamos a hacer un programa que pinte en HTML lo siguiente: "El nombre de mi compañera es Leticia Fernández Sánchez, y está compuesto por 23 caracteres", remplazando Leticia Fernández Sánchez por el nombre de nuestra compañera y 23 por la longitud de la cadena con su nombre.


// SOLUCIÓN

// Declarar constante en JS
const name = "Leticia Fernández Sánchez";

// Interpolar cadena en consola escribiendo lo siguiente:
console.log("El nombre de mi compañera es " + name + ", y está compuesto por " +  name.length + " caracteres");