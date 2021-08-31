import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Result = ({ movies, keyword }) => {
  let { name } = useParams();
  const [foundMovies, setFoundMovies] = useState([]);

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
      <div key={i}>
        <h3 style={{ color: "#eee" }}>{movie.event.title}</h3>
      </div>
    );
  });

  return (
    <div>
      <h1 className="category-title">Search Result</h1>
      {listOfresults}
    </div>
  );
};

export default Result;
