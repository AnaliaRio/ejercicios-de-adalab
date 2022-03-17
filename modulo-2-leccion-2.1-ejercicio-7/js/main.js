"use strict";

// Obtenemos el elemento con el que queremos trabajar usando document.querySelector()

const ulElement = document.querySelector(".ul");


// Declaramos el contenido que queremos añadir

const content = '<li>1</li><li>2</li><li>3</li>';

// Asignamos el contenido creado al ul

ulElement.innerHTML = content;

