// Fichero src/components/App.js
import { useState } from "react";
import '../styles/App.scss';


const App = () => {
  // Iniciamos giftWrapper en false porque al arrancar asumimos que la usuaria no lo quiere envuelto para regalo
  const [giftWrapper, setGiftWrapper] = useState(false);

  const handleGiftWraperInput = (ev) => {
    // Guardamos en el estado la propiedad checked que siempre es un booleano
    setGiftWrapper(ev.target.checked);
  };

  const handleResetGiftWrapper = () => {
    // Al resetear indicamos que la usuaria no lo quiere envuelto para regalo
    setGiftWrapper(false);
    // Si más arriba hubiéramos puesto useState(true), aquí deberíamos poner setGiftWrapper(true)
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Tienda online:</h1>
        <label htmlFor="giftWrapper">
          Marca esta opción si quieres envolver tu producto para regalo:
        </label>
        {/* Usamos giftWrapper para controlar la propiedad checked del input */}
        <input
          type="checkbox"
          name="giftWrapper"
          id="giftWrapper"
          checked={giftWrapper}
          onClick={handleGiftWraperInput}
        />
        <button onClick={handleResetGiftWrapper}>Resetear el formulario</button>
        {/* Pintamos el valor desde giftWrapper */}
        <p>¿Te lo envolvemos para regalo? {giftWrapper ? "Sí" : "No"}</p>
      </form>
    </div>
  );
};

export default App;