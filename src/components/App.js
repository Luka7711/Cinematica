import React from "react";
import List from "./Movie/List";
import About from "./About/About";
import Navigation from "./Navigation/Navigation";
import Details from "./Movie/Details/Details";
import "./module.app.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navigation />
        <div className="main-container" style={{ background: "black" }}>
          <Switch>
            <Route exact path="/">
              <List />
            </Route>

            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
