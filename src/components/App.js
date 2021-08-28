import React from "react";
import List from "./Movie/List/List";
import About from "./About/About";
import Navigation from "./Navigation/Navigation";
import Detail from "./Movie/Details/Detail";
import "./module.app.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Footer/Footer";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <List />
          </Route>

          <Route path="/details/:id">
            <Detail />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
