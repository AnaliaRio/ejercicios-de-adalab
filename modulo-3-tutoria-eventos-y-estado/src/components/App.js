import {useState} from 'react';
import '../styles/App.css';

function App() {
  const [titleClassName, setTitleClassName] = useState("");
  const [name, setName] = useState("");

  // const handleClick = () => {
  //   if(titleClassName === "") {
  //     setTitleClassName("hidden");
  //   }
  //   else {
  //     setTitleClassName("");
  //   }
  // }

  const handleChange = (ev) => {
    setName(ev.currentTarget.value);
  }

  const handleFocus = (ev) => {};

  return (
    <div>
      <h1 className={titleClassName}>Hola {name}</h1>
      <input onChange={handleChange} onFocus={handleFocus}  type="text" name="firstname" id="firstname" />
      <button onClick={() => { setTitleClassName("hidden")}}>Ocultar</button>
    </div>
  );
}

export default App;
