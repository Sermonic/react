import React from "react";
import { Switch, Route } from "react-router-dom";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <h1>Palette List</h1>} />
      <Route exact path="/palette/:id" render={() => <h1>Palette ID</h1>} />
    </Switch>

    // <div className="App">
    //   <Palette palette={generatePalette(seedColors[0])} />
    // </div>
  );
}

export default App;
