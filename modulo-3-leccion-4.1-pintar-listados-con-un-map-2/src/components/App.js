// Fichero src/components/App.js
const App = () => {
  const adalabers = ["María", "Lucía", "Sofía"];

  const renderAdalabers = () => {
    return adalabers.map((adalaber) => {
      return (
        <li>
          {/* Aquí podemos poner todas las etiquetas que queramos */}
          <span className="adalaber__prefix">El nombre de la alumna es:</span>
          <strong className="adalaber__name">{adalaber}</strong>
        </li>
      );
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