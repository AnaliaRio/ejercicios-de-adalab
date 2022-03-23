"use strict";

// Crea una función que reciba por parámetro un número, que representará un precio, y devuelva un texto en el que ponga el precio sin IVA, el IVA (21%) y el total. Por ejemplo, si pasamos por parámetro un 10, la función pintará en la consola "Precio sin IVA: 10, IVA: 2,1 y Total: 12,1".

// Para probar que funciona, ejecuta la función recogiendo el resultado en una variable e imprímela en la consola para comprobarlo.

// Declarar función
function vat(a) {

    // Declarar constante IVA
    const vat = a * 0.21;

    // Declarar constante precio total
    const total = a + vat;

    // Pintar resultado
    return (`Precio sin IVA: ${a}, IVA: ${vat} Total: ${total}`);
}

console.log(vat(20));