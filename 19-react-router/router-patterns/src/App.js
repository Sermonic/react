import React from "react";
import { Route, Switch } from "react-router-dom";
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
      <Switch>
        <Route
          exact
          path="/food/:name"
          render={(routeProps) => <Food {...routeProps} />}
        />
        <Route exact path="/food/:foodName/drink/:drinkName" component={Meal} />
        <Route exact path="/" render={() => <h1>Home Page</h1>} />
        <Route render={() => <h1>Not Found</h1>} />
      </Switch>
    </div>
  );
}

export default App;
