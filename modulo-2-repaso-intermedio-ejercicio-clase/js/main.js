

// 1. Elementos que necesitamos del HTML

const btn = document.querySelector(".js-btn");
const caritaSelect = document.querySelector(".js-select");
const caritaDiv = document.querySelector(".js-carita");
const mainElement = document.querySelector(".js-main");

// 2. Declarar funciones y eventos

function generarNumeroAleatorio(max) {
    const numAleat = parseInt(Math.random()*max);
    return numAleat;

}

function actualizarCarita() {
    // Coger el value del select
    const caritaSeleccionada = caritaSelect.value;

    // Actualizar el elemento con la carita
    caritaDiv.innerHTML = caritaSeleccionada;
}

function cambiarElFondo() {
    // Generar un número aleatorio
    const numAleat = generarNumeroAleatorio(100);


    if (numAleat % 2 === 0) {
        // Es par
        mainElement.classList.remove("naranjaFuegoChileno");
        mainElement.classList.add("amarilloCorrecto");

    } else {
        // Es impar
        mainElement.classList.remove("amarilloCorrecto");
        mainElement.classList.add("naranjaFuegoChileno");
    }
}


function handleClickBtn(event) {
    event.preventDefault();

    actualizarCarita();
    cambiarElFondo ();
}

// 3. Escuchar al botón
btn.addEventListener("click", handleClickBtn);