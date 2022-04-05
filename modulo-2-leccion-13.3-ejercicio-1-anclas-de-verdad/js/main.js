"use strict";

// Vamos a crear una página con un menú con enlaces, donde los enlaces nos lleven a diferentes secciones de la página, y el objetivo es hacer un scroll hasta cada sección usando enlaces desde JS.
// Luego de tener la página html realizada, seguimos estos pasos:
// Ponemos un atributo data-id a los enlaces para indicar a qué elemento debemos hacer scroll.
// Al hacer click, eliminamos el comportamiento por defecto.
// Con getBoundingClientRect buscamos la posición del elemento en la página.
// Usando window.scrollTo hacemos scroll hasta el elemento pero restando alguno píxeles para que la cabecera fija no lo tape.

