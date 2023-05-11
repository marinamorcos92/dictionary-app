import "./App.css";
import dictionary from "./dictionary.jpeg";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={dictionary} alt="logo" className="App-logo img-fluid" />
        </header>
        <Dictionary />
        <footer className="text-center">
          Coded By Marina Morcos{" "}
          <a
            href="https://github.com/marinamorcos92/dictionary-app"
            target="-blank"
          >
            Open source code
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
