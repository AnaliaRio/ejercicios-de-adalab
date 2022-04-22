import '../styles/App.scss';
import { useState } from 'react';
import originalData from '../data/tasks.json';


function App() {

  const [data, setData] = useState(originalData);
  const [search, setSearch] = useState("");
  const [taskNew, setTaskNew] = useState("");

  // Controlar input
  const handleSearch = (ev) => {
    setSearch(ev.currentTarget.value);
  }

  // Controlar formulario
  const handleForm = (ev) => {
    ev.preventDefault();
  }

  // Controlar formulario nueva tarea
  const handleTaskNew = (ev)=> {
    setTaskNew(ev.preventDefault);
  }

  // Función nueva tarea
  const handleAddTask = () => {
    const newTaskObject = {
      task: taskNew,
      completed: false,
    }

    // data.push(newTaskObject);
    const newListData = [...data, newTaskObject]
    setData(newListData);
    setTaskNew("");

  }

  const filteredData = data.filter(dataItem => dataItem.task.toLowerCase().includes(search.toLowerCase()));

  const html = filteredData.map((dataItem, index) => {
    let completedClass = null;
    if (dataItem.completed) {
      completedClass = "completed"
    }
    //dataItem.completed ? "completed" : null
    return <li className={completedClass} key={index}>{dataItem.task}</li>
  });

  return (
    <div className='App'>
      <form action="" onSubmit={handleForm}>
        Filtrar por: <input type="text" name="" value={search} onChange={handleSearch}/>
      </form>

      <ul>
        {html}
      </ul>

      <form action="" onSubmit={handleForm}>
        Añadir tarea: <input type="text" name="" value={taskNew} onChange={handleTaskNew}/>
        <button onClick={handleAddTask}>Añadir</button>
      </form> 
    </div>
  );
}

export default App;

// Las propiedades del objeto que está dentro de JSON tienen que estar entre comillas