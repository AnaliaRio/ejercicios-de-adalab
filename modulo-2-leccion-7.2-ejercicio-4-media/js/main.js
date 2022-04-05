"use strict";

// a) Vamos a crear un nuevo array numbers que contendrá 5 números cualesquiera. Vamos a recorrer el array mediante un bucle para calcular la media de los números (la suma de los números dividido por cuántos hay, es decir, 5). Necesitaremos una variable (acumulador) para ir almacenando la suma de todos los números y después poder hacer la media. Para comprobar si el resultado es correcto, vamos a loguearlo en la consola.
// b) Ahora vamos añadir un nuevo número al array y repetir el cálculo de la media. En este caso, para calcular la media habrá que sumar todos y dividir entre el total, que ahora es 6.
// c) Vamos a generalizar el código anterior creando una función average. Esta función toma como parámetro un array numbers, calula la media del array (de cualquier longitud) y devuelve la media. Para poder trabajar con arrays de cualquier longitud, deberemos consultar la longitud del array mediante su propiedad length. Para comprobar que la función hace el cálculo correcto, la invocaremos (o ejecutaremos para que no suene tan esotérico) varias veces pasándole como argumento un array con diferente longitud cada vez y mostraremos el resultado en la consola del navegador.


// 1. Crear array con valores con const y corchetes
const list = [4, 6, 7, 8, 9];
const list2 = [4, 6, 7, 8, 9, 7, 9]

// 2. Guardar suma de todos los números en una variable e INICIALIZARLA dándole valor 0

// let suma = 0; - Pasada a la función

// 3. Sumar números recorriendo el array (bucle/iteración)
// Pasado a la función

// for (let index = 0; index < list.length; index++) {
//     suma += list[index];
// }

// const media = suma/list.length;
// console.log(media);


// Crear función que calcula media del parámetro que le pases

function average(list) {
    let suma = 0;
    for (let index = 0; index < list.length; index++) {
        suma += list[index];
    }
    const media = suma/list.length;
    return media;
}

// Guardar retorno de la función en una constante
const medialist1 = average(list);
console.log(medialist1);

// Ver en DevTools > Source el recorrido de esto