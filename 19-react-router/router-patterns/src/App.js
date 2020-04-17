import React from "react";
import { Route } from "react-router-dom";
import Food from "./Food";
import Meal from "./Meal";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* This version using component works and is simpler */}
      {/* but it will not work if you need to pass additional props */}
      {/* <Route exact path="/food/:name" component={Food} /> */}

      {/* This version using render is less clean but more explicit */}
      {/* and you can pass in your own additional props */}
      <Route
        exact
        path="/food/:name"
        render={(routeProps) => <Food {...routeProps} />}
      />
      <Route exact path="/food/:foodName/drink/:drinkName" component={Meal} />
    </div>
  );
}

export default App;
