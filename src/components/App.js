import React from "react";
import List from "./Movie/List/List";
import About from "./About/About";
import Navigation from "./Navigation/Navigation";
import Detail from "./Movie/Details/Detail";
import "./module.app.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Footer/Footer";
import SearchResult from "./SearchResult/Result";

class App extends React.Component {
  state = { movies: [] };

  moviesForApp = (dataOfMovies) => {
    this.setState({ movies: dataOfMovies });
  };
  render() {
    return (
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <List moviesForApp={this.moviesForApp} />
          </Route>

          <Route path="/details/:id">
            <Detail />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/search/:name">
            <SearchResult movies={this.state.movies} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
