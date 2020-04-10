import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Dog from "./Dog";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/dog">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/">About</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/dog" component={Dog} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App;
