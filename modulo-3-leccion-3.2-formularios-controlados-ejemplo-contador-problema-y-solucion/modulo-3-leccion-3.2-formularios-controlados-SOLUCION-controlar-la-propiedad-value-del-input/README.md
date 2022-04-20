# React Starter Kit

La solución es tan simple como añadir una línea de código. Fíjate bien en qué línea hemos añadido en el fichero src/components/App.js.

Al input le hemos añadido el atributo value={counter}.

Si pensamos en JS normal, lo que estaríamos haciendo es:

const inputElement = document.querySelector("input");
inputElement.value = counter;

Como se muestra en el diagrama de flujo de la imagen input-control, cuando cambia el counter, sea desde donde sea, React renderiza otra vez todo el componente y todas las etiquetas que usan la constante counter.

Tenemos que hacer esto con todos los inputs, o al menos con todos aquellos cuyo valor guardemos en el estado.
