import React, { useState } from "react";
import Personal from "./Components/Personal";
import "./App.css";

function App() {
  const temp = ["apple", "banana", "Grapes", "Orange"];
  const [products, setProducts] = useState(temp);
  return (
    <div className="App">
      <header className="App-header">
        {products.map((ele, key) => {
          return <li key={key}>{ele}</li>;
        })}
      </header>
    </div>
  );
}

export default App;
