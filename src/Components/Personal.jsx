import React from "react";

function Personal(props) {
  const { name, age } = props;
  return (
    <div className="pers">
      <h1>Name: {name}</h1>
      <h2>Age : {age}</h2>
    </div>
  );
}

export default Personal;
