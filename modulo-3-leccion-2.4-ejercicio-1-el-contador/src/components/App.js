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

/*Vamos a crear un contador incremental. Para ello necesitamos combinar lo que hemos aprendido sobre el estado y los eventos de React. Sigue los siguientes pasos:
Crea un nuevo proyecto a partir de tu React Starter Kit.
Añade el texto: Contador: 0.
Añade un botón a tu página que al pulsarlo incremente el valor del texto para que ponga Contador: 1.
Añade otra funcionalidad que quieras como por ejemplo:
Un botón para reducir el contador.
Un botón para resetear el contador.
¿Cómo vas a guardar el valor actual del contador en el estado: como un string o un number? Se puede hacer de las dos formas, así que te recomendamos que inicies un apasionado debate con tu compañera de pair sobre qué ventajas y desventajas tiene guardarlo como string vs. number.*/
