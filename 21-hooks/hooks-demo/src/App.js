import React from "react";
import CounterClass from "./CounterClass";
import CounterHooks from "./CounterHooks";
import Toggler from "./Toggler";
import SimpleFormClass from "./SimpleFormClass";
import SimpleFormHooks from "./SimpleFormHooks";
import SimpleFormInputHook from "./SimpleFormInputHook";
import Clicker from "./Clicker";
import SWMovies from "./SWMovies";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SWMovies />
      {/* <Clicker />
      <SimpleFormInputHook />
      <SimpleFormHooks />
      <SimpleFormClass />
      <CounterClass />
      <CounterHooks />
      <Toggler /> */}
    </div>
  );
}

export default App;
