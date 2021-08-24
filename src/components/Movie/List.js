import React, { Fragment, useEffect, useState } from "react";
import instance from "../../apis/movies";
import Loader from "../Loader/Loader";
import "./module.list.css";
import { useHistory } from "react-router-dom";

const List = () => {
  const [movies, setMovies] = useState([]);
  let history = useHistory();

  useEffect(() => {
    getMovieList();
  }, []);

  const getMovieList = async () => {
    const response = await instance.retrieveMovies("/movies");
    setMovies(response.data.movies);
    console.log(movies);
  };

  const redirectToDetails = (id) => {
    history.push(`/details/${id}`);
  };

  const collection = movies.map((movie) => {
    if (movie.details.title.image) {
      return (
        <div
          key={movie._id}
          onClick={() => redirectToDetails(movie._id)}
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
      <div className="flex-box">{collection}</div>
    </Fragment>
  );
};

export default List;
