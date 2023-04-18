import React, { useState } from "react";
import Personal from "./Components/Personal";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [data, setData] = useState("Default Data");

  const firstNameChangeHandler = (e) => {
    setFirstName(e.target.value);
  };
  const lastNameChangeHandler = (e) => {
    setLastName(e.target.value);
  };
  const showData = (e) => {
    e.preventDefault();
    setData(firstName + "," + lastName);
  };

  return (
    <div className="App">
      <form onSubmit={showData}>
        <input
          type="text"
          placeholder="FirstName"
          onChange={firstNameChangeHandler}
        />
        <br />
        <input
          type="text"
          placeholder="LastName"
          onChange={lastNameChangeHandler}
        />
        <br />
        <input type="submit" value="submit" />
      </form>
      {data}
    </div>
  );
}

export default App;
