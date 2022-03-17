// Obtenemos el elemento con el que queremos trabajar usando document.querySelector()

const divElement = document.querySelector(".div");


// Declaramos el contenido que queremos añadir

const content = '<h1>Lorem ipsum</h1><img src="http://via.placeholder.com/350x150"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>'

// Asignamos el contenido creado al div

divElement.innerHTML = content;

