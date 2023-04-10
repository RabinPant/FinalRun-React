import Personal from "./Components/Personal";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Personal name="rabin" age="24" />
        <Personal name="Shalini" age="44" />
        <h1>Rabin</h1>
      </header>
    </div>
  );
}

export default App;
