import React, { Fragment, useEffect, useState } from "react";
import instance from "../../apis/movies";
import "./module.list.css";
import {
  BrowserRouter as router,
  Redirect,
  useHistory,
} from "react-router-dom";

const List = () => {
  const [movies, setMovies] = useState([]);
  let history = useHistory();

  useEffect(() => {
    getMovieList();
  }, []);

  const getMovieList = async () => {
    const response = await instance.retrieveMovies("/movies");
    setMovies(response.data.movies);
  };

  const redirectToDetails = (e) => {
    history.push("/about");
  };

  const collection = movies.map((movie) => {
    if (movie.details.title.image) {
      return (
        <div
          key={movie.event.title}
          onClick={redirectToDetails}
          className="poster-container"
        >
          <img
            className="poster"
            src={movie.details.title.image.url}
            alt={movie.event.title}
          />
        </div>
      );
    }
    return null;
  });

  return (
    <Fragment>
      <div className="cover-container"></div>
      <div className="ui compact selection dropdown">
        <i className="dropdown icon"></i>
        <div className="text">Sort by</div>
        <div className="menu">
          <div className="item"></div>
          <div className="item">B</div>
          <div className="item">C</div>
        </div>
      </div>
      <div className="flex-box">{collection}</div>
    </Fragment>
  );
};

export default List;
