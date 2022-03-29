"use strict";

// Lista personas

const people = [
{
name: "noelia",
age: 21,
city: "madrid",
}
{
name: "prado",
age: 23,
city: "barcelona",
}
{
name: "sandra",
age: 25,
city: "murcia",
}
{
name: "satory",
age: 24,
city: "barcelona",
},
];

// Usando for clásico (comentado para dejar el siguiente activo)

const sectionList = document.querySelector(".js-result");
// for(let index = 0; index < people.length; index++) {
//     sectionList.innerHTML += `<p>El nombre es ${people[index].name}, vive en ${people[index].city}</p>;
// }

// Escribir lo mismo usando for of en lugar de for:

for (let person of people){
sectionList.innerHTML += `<p>Nombre: ${person.name} Ciudad: ${person.city}</p>`
}

// Hacer función que diga cuál es el promedio de edades de personas en el listado

function avgAgePeople(list){
let sumAge = 0;
for(let i = 0; i < list.length; i++){
    // Sumar / Acumular edades
    sumAge += list[i].age;
}
    // Dividir age entre length
    const avg = sumAge / people.length;
    return avg;
}
console.log(avgAgePerson(people));

