"use strict";

// Crear una función que reciba por parámetro un número y devuelva true si es par y false si es impar.
// Ejecútala e imprime el resultado para comprobar que funciona.

// SOLUTION 1

function oddeven(a) {

    const result = a % 2;

    // operacion modulo vista en condicionales 3.4
    if(result === 0) {
        return `This is an even number.`;
    }
    else {
         return `This is an odd number.`;
     }
    };
 
 console.log(oddeven(7));


// SOLUTION 2

 // program to check if the number is even or odd
// take input from the user
// const number = prompt("Enter a number: ");

//check if the number is even
// if(number % 2 == 0) {
//     console.log("The number is even.");
// }

// if the number is odd
// else {
//     console.log("The number is odd.");
// }



// SOLUTION 3

// program to check if the number is even or odd
// take input from the user
// const number = prompt("Enter a number: ");

// ternary operator
// const result = (number % 2  == 0) ? "even" : "odd";

// display the result
// console.log(`The number is ${result}.`);