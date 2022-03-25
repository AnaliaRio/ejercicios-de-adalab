'use strict';

// 1. OBTENER ELEMENTOS HTML (campos de entrada -> input, campos de salida -> tabla, que es donde quiero pintar el resultado, y sobre quién voy a escuchar el evento: el botón)

    // Input
    const inputId = document.querySelector(".js-id");
    const inputName = document.querySelector(".js-name");
    const inputBusiness = document.querySelector(".js-business");
    const inputContact = document.querySelector(".js-contact");

    // Tabla
    const table = document.querySelector(".js-table");

    // Botón
    const inputBtn = document.querySelector(".js-button");


// 2. ESCUCHAR EVENTO SOBRE EL BOTÓN (crear el objeto del cliente) + crear función:
    
    // Crear función que se va a usar en add event listener. Hay que usar prevent default porque el botón es de submit!!!

    // Hay que RECOGER LOS VALORES DE LOS INPUTS para meterlos en la función, porque en la función queremos usar lo que escriben los usuarios dentro de la caja del input, no lo que está en la caja vacía cuando se carga la página.
    // Estas variables de los valores van DENTRO de la función

    function getClientData (event) {
        event.preventDefault();
        const clientData = {name, id, business, contact};
        const name = inputName.value;
        const id = inputId.value;
        const business = inputBusiness.value;
        const contact = inputContact.value;
        return clientData;
    }

    function paintHTML (client) {
        table.innerHTML += `<tr>
        <td>${client.id}</td>
        <td>${client.name}</td>
        <td>${client.business}</td>
        <td>${client.contact}</td>
        <tr>`
    }
 
    // Crear función manejadora/directora, encargada de ejecutar otras funciones:
    function handleClick(event) {
        event.preventDefault();
        const clientInfo = getClientData();
        paintHTML(clientInfo);
    }

    // Escuchar al botón
    inputBtn.addEventListener("click", getClientData);

// 3. CREAR FUNCIONALIDAD PARA PINTAR EN LA TABLA

