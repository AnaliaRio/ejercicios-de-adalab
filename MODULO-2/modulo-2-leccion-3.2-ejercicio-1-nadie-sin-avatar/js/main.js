'use strict';

// avatar por defecto
const DEFAULT_AVATAR = "http://placekitten.com/200/300";
// avatar que eligió el usuario al registrarse
let userAvatar = "http://www.fillmurray.com/300/300";

// 1. Hagamos la lógica para añadir, desde javascript, la imagen userAvatar a la etiqueta de HTML img.
const avatarImage = document.querySelector(".js_img");

// 2. Ahora vamos a plantear que userAvatar pueda no contener una URL porque, por ejemplo, cuando el usuario se registró no encontraba ninguna foto molona y decidió que la subiría en otro momento. Para ello tenemos que cambiar el contenido de userAvatar a comillas vacías let userAvatar = '';. ¡Ahora no debería verse ninguna imagen en la página!
// let userAvatar = '';  

// En lugar de innerHTML, con imágnes se usa src
avatarImage.src = userAvatar;

if(){
// Poner avatar por defecto
avatarImage.src = DEFAULT_AVATAR;
}
else {
// Poner avatar usuario
avatarImage.src = userAvatar;
}

// Con ternario en lugar de con if else
// avatarImage.src = userAvatar === "" ? DEFAULT_AVATAR :userAvatar;

// Otra opción
// avatarImage.setAttribute("src", userAvatar || DEFAULT_AVATAR);

// 3. Vamos a mejorar nuestro programa para que la ficha de usuario tenga una imagen sí o sí, de manera que:si tenemos el avatar del usuario se muestre este.si no tenemos datos del avatar del usuario, se muestre el avatar por defecto
document.querySelector('.user__avatar').src = userAvatar || DEFAULT_AVATAR;