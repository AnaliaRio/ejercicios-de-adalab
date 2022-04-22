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

/*Arranca cualquiera de los ejercicios que has hecho hoy y prueba:
Qué valores aparecen en DevTools > Componentes > App > State.
Muestra en la consola los valores del estado.
Añade un debugger dentro de las funciones manejadoras de eventos.
Añade un debugger justo antes del retorno del componente.*/