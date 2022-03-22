"use strict";

// Hemos preparado un HTML con tres tarjetas. Al pinchar en un elemento del listado tenemos que:

// 1. AÑADIR CLASE .teacher--selected si no la tiene, o QUITARLA si la tiene.

// Seleccionar elemento HTML
const teacher = document.querySelector(".teacher")

// Añadir clase teacher--selected
teacher.classList.add(teacher--selected);

// 2. MODIFICAR TEXTO SPAN .favorite sustituyéndolo por 'Quitar' si en ese momento contiene 'Añadir', o por 'Añadir' si contiene 'Quitar'.
const favorite = document.querySelector(".favorite")


// Nota: con querySelector buscamos un elemento dentro de otro. Hasta ahora lo habíamos usado para buscar dentro de document (todo nuestro documento HTML), con document.querySelector().

// Si tuviéramos una constante llamada, por ejemplo, sectionAboutElement en la que hemos guardado un elemento de HTML, podríamos buscar dentro él otro elemento, tal que así sectionAboutElement.querySelector().