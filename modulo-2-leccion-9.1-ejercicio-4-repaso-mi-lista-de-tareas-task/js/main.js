'use strict';

/*
Flujo de datos 1 - Qué hago cuando carga la página

1. Pedir los datos al servidor porque los tengo en una API
2. Pinto los datos en el HTML
3. Escuchar el evento sobre checkbox

Flujo de datos 2 - Qué pasa cuando ocurren las acciones de la usuaria

1. Cuando la usuaria haga click en el checkbox, recojo los datos
2. Modifico los datos
3. Repintar los datos
4. Volver a escuchar eventos

*/

const listTask = document.querySelector('.js-list');

// Variable global donde guardo las tareas que me dé el servidor
let tasks = [];

// Primera tarea, pedir los datos al servidor (función)
function getData() {
  fetch('http://api.igarrido.es/tasks.json')
    .then((response) => response.json())
    .then((data) => {
      tasks = data;
      renderList();
    });
}

// Llamar a la función (si no, NO se ejecuta!!!) - Petición al servidor
getData();

// esta funcion de renderList se va a ejecutar cada vez que se haga click en un checkbox
function renderList() {

  // Variable para guardar los li que voy a pintar
  let html = '';

  // Bucle
  for (let i = 0; i < tasks.length; i++) {
    // esto lo hago para que al pintar si la propiedad completed === true  le añada la clase de tachado crossout

    if (tasks[i].completed) {
      html += `<li class="crossout">`;
    } else {
      html += `<li>`;
    }

    html += `<input type="checkbox" class="js-complete" value="${i}"> ${tasks[i].name}`;
    html += `</li>`;
  }
  listTask.innerHTML = html;
  listenCheckbox();
}

function handleClick(event) {
  console.log('he hecho click en el checkbox');
  const index = parseInt(event.currentTarget.value);
  // cambiar el valor de la propiedad complete del objeto clicado array
  // Establezco la tarea como no-completada (si completed === true)
  // o la marco como completada (si completed === false --> el else)
  /*   
  if (tasks[indexList].completed) {
    tasks[indexList].completed = false;
  }
  else {
    tasks[indexList].completed = true;
  }
  */
  tasks[index].completed = !tasks[index].completed;
  renderList();
}


// Escucho un evento click sobre  cada checkbox para  poder cambiar la propiedad  completed

function listenCheckbox() {
  const checkboxList = document.querySelectorAll('.js-complete');
  for (const oneCheckbox of checkboxList) {
    oneCheckbox.addEventListener('click', handleClick);
  }
}
