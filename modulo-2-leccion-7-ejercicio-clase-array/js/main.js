"use strict";

// Lista de mascotas SIN array. Se añade cada mascota una a una:

const m1 = "lola";
const m2 = "pepe";
const m3 = "zeus";
const m4 = "toby;

const pets = document.querySelector(".js-pets");

pets.innerHTML += `<li> ${m1}</li>`;
pets.innerHTML += `<li> ${m2}</li>`;
pets.innerHTML += `<li> ${m3}</li>`;
pets.innerHTML += `<li> ${m4}</li>`;

// Para no hacer un innerHTML para cada uno, se usa una ARRAY.
// Primero se crea una constante;
const nameList = ["lola", "pepe", "zeus", "toby"];

// Acceder a un elemento del array. Con el siguiente código se accede a lola y toby:
console.log((nameList[0], nameList[3]));

// Se puede crear un array vacío y rellenarlo luego
const listPets = [];
listPets[0] = "lola";
listPets[1] = "pepe";
console.log(listPets[1]);

// For clásico

// Añadir lista de mascotas al HTML sin tener que hacer innerHTML 4 veces. Entre las llaves del FOR se escribe lo que se quiere repetir. Se escriben tres cosas en for:
// 1. Punto de partida por el que voy a empezar a recorrer lo que queremos recorrer. Variable LET I = 0
// 2. i < nameList.length
// 3. Acción a ejecutar - i++ = incrementar 1 = i = i+1
for (let i = 0; i < nameList.length; i++) {
    pets.innerHTML += `<li>${nameList[i]}</li>`
}

// For of
// No hay que decirle por dónde empezar. No se pone la variable let i = 0;
// En let pet of nameList, se declara que cada item de nameList se va a llamar pet
for (let pet of nameList) {
    pets.innerHTML += `<li>${pet}</li>;
}