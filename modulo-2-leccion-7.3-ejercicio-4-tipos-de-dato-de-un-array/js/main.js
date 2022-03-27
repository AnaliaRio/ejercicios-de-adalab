"use strict";

// Para finalizar la lección de hoy queremos hacer un ejercicio que muestre en consola el tipo datos que hay en un array. Dado el siguiente array:

const items = [
    "Ada",
    1815,
    ["Informática", "Matemática", "Escritora"],
    {
      mother: "Anna Isabella",
      father: "Lord Byron",
    },
];

//   Escribid un script que recorra los datos de este array y pinte en consola por cada elemento: "El dato VALOR está en la posición X y es de tipo TIPO".
// Por ejemplo "El dato Ada está en la posición 0 y es de tipo string".

Array.isArray(items);

for(const adalaber of items){
    console.log{
        "El dato " + items[0] + "está en la posición " 
    }
}