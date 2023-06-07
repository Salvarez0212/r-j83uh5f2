import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [characters, setCharacters] = useState(0);

  const handleCharacters = (event) => {
    const value = event.target.value;
    const count = value.split("");
    setCharacters(count.length);
  };
  return (
    <div className="container">
      <textarea rows="3" onChange={handleCharacters}></textarea>
      <div className="counter">{characters}</div>
    </div>
  );
};

export default App;
