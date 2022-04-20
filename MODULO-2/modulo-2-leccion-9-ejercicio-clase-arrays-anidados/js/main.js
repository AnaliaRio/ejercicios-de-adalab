"use strict";

// ARRAY ANIDADO
const listPeople = [
["Pedro", "Pérez"],
["Mari Carmen", "Ruiz"],
["Almudena", "Sánchez"],
]

// Para recorrer un array dentro de otro, hay que usar un ciclo iterativo (for) dentro de otro

// for (const person of listPeople) {
//     console.log(person);
// }
// Pinta las 3 iteraciones en la consola

// FOR ANIDADO - Coger solo los nombres
for (const person of listPeople) {
    // console.log(person);
    // for(const name of person) {
    //     console.log(name);
    // }
    for (let i =0; i< person.length; i++) {
        if (i ===0) {
            console.log(person[i]);
        }
    }
}

// Lo mismo de otra forma
for (let index=0; index<listPeople.length; index++){
    console.log(listPeople[index][0]);
}