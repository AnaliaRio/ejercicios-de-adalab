"use strict";

// Nos vamos de cena de Navidad, ¡qué alegría! Somos en total 9 personas y la cuenta del restaurante japonés es de 128€. Ana tiene que pagar 2€ más que los demás porque ha pedido un chupito de sake. ¿Cuánto tenemos que pagar cada una? ¿Y Ana? Hagamos un pequeño programa en JavaScript para calcularlo. El resultado debe mostrarse en la consola del navegador.


// SOLUCIÓN

// Declarar constantes
const check = 128;
const ana = 2;
const people = 9;

// Restar extra de Ana al precio total y dividir entre n.º pax. Eso paga cada uno.
console.log((check-ana)/people);
Resultado = 14 €

// Ana paga eso + 2 €
console.log(((check-ana)/people)+ana);
Resultado = 16 €
