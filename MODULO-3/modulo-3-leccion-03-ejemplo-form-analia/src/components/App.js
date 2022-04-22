import '../styles/App.scss';
// Importar useState para controlar los estados. Siempre que se usa variable de estado de usa useState
import {useState} from "react";

/* 
OBETO DATA (línea 25)
{
  title: nombre de la peli,
synopsis: descripción,
}
*/

function App() {

  /*
  const [title, setTitle] = useState("");

  const handleInputTitle = (ev) => {
    const newValue = ev.currentTarget.value;

    setTitle({
      title: newValue,
      synopsis: data.synopsis,
      language: data.age,
    });

    setData({
      ...data, [prop]: newValue
    });
  }
  */

  // const [synopsis, setSynopsis] = useState("");




  // RADIO BUTTONS & CHECKBOX
  const [age, setAge] = useState("all");

  const handleChangeRadio = (ev) => {
    setAge(ev.currentTarget.value);
  }

  const [data, setData] = useState({
    title: "",
    synopsis: "",
    language: "",
    age: "",
  });

  // FUNCIÓN GENERAL
  const handleInput = (ev) => {
    const newValue = ev.currentTarget.value;
    const prop= ev.currentTarget.name;
    console.log(prop);

    setData({
      ...data, [prop]: newValue
    });

  }

  // En la línea 28, en ev.currentTarget.name, "name" es el atributo "name" del input.

  // PROP - Accede al índice de un array, es la forma de acceder a una propiedad dentro de un objeto


  // const handleInputSynopsis = (ev) => {
  //   const newValue = ev.currentTarget.value;
  //   setSynopsis();
  // }

  // const handleReset = (ev) => {
  //   ev.preventDefault();
  //   setTitle("");
  // }

  return (
    <div className="App page">
      <header className="header">
        <h1>Añadir películas</h1>
      </header>
      <main>
        <form action="" className="form">

          <div className="col2 mb-1">
            <label className="form__label" htmlFor="title">
              Título:
            </label>
            <input
              type="text"
              placeholder="Ej: Die hard"
              className="form__input-text"
              name="title"
              id="title"
              value={data.title}
              onChange={handleInput}
            />
          </div>


          <div className="col2 mb-1">

            <label htmlFor="synopsis">Sinopsis:</label>
            <textarea
              placeholder="Érase una vez..."
              name="synopsis"
              id="synopsis"
              value={data.synopsis}
              onChange={handleInput}
            ></textarea>
          </div>


          <div className="col2 mb-1">
            <label htmlFor="language">Idioma:</label>
            <select
              name="language"
              id="language">
              <option disabled value="">
                Escoge una opción
                </option>
              <option value="es">Español</option>
              <option value="cat">Catalán</option>
              <option value="gal">Gallego</option>
              <option value="eus">Euskera</option>
            </select>
          </div>

          <div className="col2">
            <p>Clasificación por edad</p>
            <div>
              <label htmlFor="age-all">
                <input
                  type="radio"
                  name="age"
                  id="age-all"
                  value="all"
                  onChange={handleChangeRadio}
                  checked={age === "all"}
                />
              Todas las edades
            </label>
              <label htmlFor="age-7">
                <input
                  type="radio"
                  name="age"
                  id="age-7"
                  value="7"
                  onChange={handleChangeRadio}
                  checked={age === "7"}
                />
              +7 años
            </label>
            </div>
          </div>

          <button>Enviar</button>
          <button>Borrar</button>
        </form>
      </main>
    </div>
  );
}

export default App;