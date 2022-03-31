"use strict";

const list = ["Ana", "Patricia", "Celia", "Rosa", "Carmen"];

console.log(list.length);

// Método PUSH - Añade elememntos al final del array
list.push("Paula");
console.log(list);

// Método SHIFT - Añade elemento al inicio del array
list.shift("Alejandra");
console.log(list);

// Método indexOf - Saber índice de un elemento
const index = list.indexOf("Celia");
console.log(index);

// Si buscas algo que NO está en la lista, la consola te devuelve -1
// En este caso la consola devuelve -1 porque Gloria no está en la lista
const index1 = list.indexOf("Gloria");
console.log(index1);

// Método REVERSE - Pone array al revés

list.reverse();
console.log(list);

// Método CONCAT - Concatena. Genera nuevo array concatenado
const list2 = ["Lucía", "Lorena"];
const newList = list.concat(list2);
console.log(newList);
console.log(list);

// Método SLICE - Extrae conjunto de elementos del array y los guarda en una variable pero SIN modificar el array original (copy-paste)
// Dos parámetros:
// 1. Desde dónde quiero empezar a extraer elementos - Posición final
// 2. Hasta dónde extraigo, pero ese último NO lo extraigo
const slice = newList.slice (2,5);
console.log(newList);
console.log(list);

// Método SPLICE - Elimina un elemento de un array pero sí que modifica el original (cut)
// Dos parámetros:
// 1. Desde dónde quiero eliminiar - Posición final
// 2. Cuántos elimino
newList.splice(3,4);
console.log(newList);

// Método SPLICE para añadir elementos
list2.splice(1,1,"Alicia");
console.log(list2);



// Ejercicio
// for (let i=0; i<list.length; i++) {
//     if (list[i] === "Celia") {
//         console.log(i);
//     }
// }
