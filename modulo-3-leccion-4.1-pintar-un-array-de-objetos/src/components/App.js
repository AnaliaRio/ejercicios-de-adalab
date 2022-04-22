// Fichero src/components/App.js
const App = () => {
  const adalabers = [
    { id: "8341", name: "María" },
    { id: "2676", name: "Lucía" },
    { id: "1004", name: "Sofía" },
  ];

  const renderAdalabers = () => {
    return adalabers.map((adalaber) => {
      {
        /* Aquí puedes consolear adalaber y verás que es cada uno de los elementos del array */
      }
      console.log(adalaber);
      return (
        <li>
          <span className="adalaber__prefix">El nombre de la alumna es: </span>
          {/* Aquí podemos usar adalaber.name porque adalaber es un objeto que tiene la propiedad name */}
          <strong className="adalaber__name">{adalaber.name}</strong>
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