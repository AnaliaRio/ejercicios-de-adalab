import '../styles/App.scss';

function App() {
  const handleInput = (ev) => {
    console.log('la última letra pulsada es:', ev.key);
  };

  return (
    <form>
      <label>Escribe:</label>
      <input type="text" onKeyUp={handleInput} />
    </form>
  );
}

export default App;

/*En este ejercicio vamos a programar el típico menú de hamburguesa que se despliega desde la izquierda de la página.
Para ello necesitaremos:
Crea un nuevo ejercicio desde tu React Starter Kit.
Empieza por crear el HTML dentro de tu componente App. Debemos añadir:
Un icono que al pulsarlo abra el menú.
Un contenedor del menú.
Un icono que al pulsarlo cierre el menú. Este icono lo meteremos dentro del contenedor del menú.
A continuación debemos crear los estilos que nos permitan que, añadiendo y quitando una clase al contenedor del menú, este aparezca y desaparezca.
Por último tenemos que gestionar el estado del menú con React. Para ello:
Crearemos un estado para guardar si el menú está abierto o cerrado. ¿Qué tipo de dato crees que debe ser?
Crear una función manejadora que cada vez que se ejecute invierta el valor del estado.
Añadir esta única función manejadora a los dos iconos.
Como ves, aquí estamos trabajando con contenidos (HTML), estilos (CSS o Sass) y funcionalidad (React y JS). Mientras programamos este menú puede haber varios fallos. Para saber dónde está fallando debes inspeccionar el HTML generado con DevTools para saber si los fallos son de HTML o de estilos.*/