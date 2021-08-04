import React from "react";
import instance from "../apis/movies";

class App extends React.Component {
  state = {
    authorized: false,
    movies: [],
  };

  componentDidMount() {
    this.addMoviesToDatabase();
  }

  addMoviesToDatabase = async () => {
    const response = await instance.retrieveMovies("/movies");
    console.log(response);
  };

  render() {
    return <div>Hello World</div>;
  }
}

export default App;
