import '../styles/App.scss';

// Fichero src/components/App.js
import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleCounterInput = (ev) => {
    setCounter(ev.target.value);
  };

  const handleResetCounter = () => {
    setCounter(0);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>El contador:</h1>
        <label htmlFor="counter">Escribe aquí el valor del contador:</label>
        <input
          type="number"
          name="counter"
          id="counter"
          value={counter}
          onChange={handleCounterInput}
        />
        <button onClick={handleResetCounter}>Resetear el contador</button>
        <p>Valor de contador: {counter}</p>
      </form>
    </div>
  );
};

export default App;