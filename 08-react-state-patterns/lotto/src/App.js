import React from "react";
import Ball from "./Ball";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Ball num={7} />
      <Ball num={12} />
      <Ball num={9} />
      <Ball num={1} />
    </div>
  );
}

export default App;
