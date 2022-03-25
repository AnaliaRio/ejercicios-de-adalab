'use strict';

// 2. OBJETO LITERAL
const coche = {
	marca: “Audi”,
	modelo: “08”,
	year: 2022,
	color: “negro”,
	vendido: function () {
        this.vendido = true;
		console.log(“vendido” + this.vendido);
	},
    plate: "324BD",
    paint: ()=> {
        console.log("pintar el coche");
    }
};

// Pintar en la consola
console.log(coche.marca);
console.log(coche.vender());

// Ejecutar función SIN pintar en la consola. Define objeto de forma literal
coche.vender();

// Modificar valor propiedad
coche.year = 2021;

// Consolear ese valor
console.log(coche.year);

// 1. OBJETO VACÍO  - Se declara con llaves vacías y se rellenan luego
const coche2 = {}

// Añadir propiedades a objeto vacío. Usar este método del punto cuando ya nos sabemos la propiedad y el valor
coche2.marca = "mazda";
coche2.modelo = "cx5";

// Pintar estas propiedades en consola
console.log(coche2);

// Otra forma de añadir propiedades a objeto - Corchetes
// Conviene esta sintaxis cuando el nombre de la propiedad está en una variable, porque permite asignar la propiedad en una variable
console2["year"] = 2020;