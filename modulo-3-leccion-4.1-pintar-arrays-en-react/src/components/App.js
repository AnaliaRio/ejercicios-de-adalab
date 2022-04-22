// Fichero src/components/App.js

function App() {
  const list = [];

  for (let index = 0; index < 10; index++) {
    list.push(<li>Elemento #{index}</li>);
  }

  // map

  return (
    <div>
      <h1>Trabajando con Arrays</h1>
      <ul>{list}</ul>
    </div>
  );
}

export default App;