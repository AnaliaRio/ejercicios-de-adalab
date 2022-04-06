"use strict";

const p = document.querySelector(".js-p");
const section = document.querySelector(".js-section");
const img = document.querySelector(".js-img");

// Crear nodo de texto - CREATE TEXT NODE
const textoP = document.createTextNode("Bienvenidas a JS");

// Este nodo de texto está huérfano, porque no se le ha dicho dónde hay que ponerlo, hay que decir quién es el PARENT - APPEND CHILD
p.appendChild(textoP);

// ¿Qué pasa si no tengo el párrafo en HTML? Si quiero crear un section o un párrafo. Hay que crear un ELEMENTO, crear un CONTENIDO DE TEXTO y decir de quién va a ser CHILD.

/* Crear etiqueta ARTICLE que va a ser CHILD del section en el HTML.
1. Seleccionar section del HTML
2. Crear elemento
3. Decir quién es parent de el
4. Si hay texto, crear nodo de texto.
5. Decir dónde va el nodo de texto*/

// 1. Seleccionar section del HTML (variable global que está más arriba)
// const section = document.querySelector(".js-section");

// 2. Crear elemento - CREATE ELEMENT
const article = document.createElement("article");

// 3. Decir quién es parent de article - APPEND CHILD
section.appendChild(article);

// 4. Crear texto - CREATE TEXT NODE
const textArticle = document.createTextNode("Texto del artículo.");
// Ahora el texto está en el limbo. Hay que meterlo en algún sitio

// 5. Decir dónde va el nodo de texto
article.appendChild(textArticle);


/*******************************************/

// OPCIONAL - AÑADIR VARIOS PÁRRAFOS

// 1. Crear elemento párrafo en HTML
const pArticle = document.createElement("p");

// 2. Crear texto nuevo
const textParticle = document.createTextNode("Párrafo del artículo nuevo");

// 3. Meter el texto nuevo en el párrafo creado
pArticle.appendChild(textParticle);


// 4. Meter el párrafo creado en paso 1 dentro del artículo que ya teníamos en el html
article.appendChild(pArticle);

// Por cada hijo que quiera crearle a un elemento, tengo que crear un append child!!!!!!!!

// OPCIONAL - AÑADIR CLASE CON ESTILOS
article.classList.add("color");

// Añadir atributos a elementos - función SET ATTRIBUTE
img.setAttribute("src", "https://ruta");
// img.src = "https://ruta"; --forma anterior

// USAR DOM DENTRO DE UN ARRAY

// Crear array
const listAdalabers = ["Sara", "Paula", "Analía", "Laura"];

// Traer ul de HTML
const ul = document.querySelector(".js-ul");

// Recorrer array con bucle
for(const item of listAdalabers){

  // Crear li
  const li = document.createElement("li");

  // Ponerle PARENT al li
  ul.appendChild(li);

  // Crear texto sacándolo del array
  const textLi = document.createTextNode(item);

  // Meter texto dentro del li
  li.appendChild(textLi);

  // Poner listener al li para añadir EVENTO
  li.addEventListener("click", handleClick);

  // Crear función handleClick para activar EVENTO
  console.log("He hecho click.");

  // Se pueden meter más funciones
  // const age = parseint(event.currentTarget.dataset.age);
  // if (age < 25 ) {
  //   console.log("eres una jovencita");
  // }

}