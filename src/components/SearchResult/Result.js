import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./module.result.css";
import Notfound from "./Notfound";

const Result = ({ movies, keyword }) => {
  let { name } = useParams();
  const [foundMovies, setFoundMovies] = useState([]);
  let history = useHistory();

  useEffect(() => {
    findMovie();
  }, [name]);

  const findMovie = () => {
    let regex = new RegExp("^" + name, "i");
    let resultOfSearch = movies.filter((movie) => {
      let contains = regex.test(movie.event.title);
      if (contains) return movie;
    });
    setFoundMovies(resultOfSearch);
    return resultOfSearch;
  };

  let listOfresults = foundMovies.map((movie, i) => {
    return (
      <div
        onClick={() => history.push(`/details/${movie._id}`)}
        key={i}
        className="result-container"
      >
        <img className="poster" src={movie.details.title.image.url} />
        <h3 style={{ color: "#eee" }}>{movie.event.title}</h3>
      </div>
    );
  });

  return (
    <div className="main-page">
      {foundMovies.length > 0 ? listOfresults : <Notfound />}
    </div>
  );
};

export default Result;
