// Fichero src/components/App.js
const App = () => {
  const adalabers = ["María", "Lucía", "Sofía", "Nerea"];

  const renderAdalabers = () => {
    return adalabers.map((adalaber) => {
      return <li>{adalaber}</li>;
    });
  };

  return (
    <div>
      <h1>Lista de Adalabers</h1>
      <ul>{renderAdalabers()}</ul>
    </div>
  );
};

export default App;