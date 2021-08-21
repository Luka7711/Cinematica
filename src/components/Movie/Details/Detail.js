import React, { useState, useEffect, Fragment } from "react";
import CastList from "./CastList";
import Carousel from "./Carousel";
import Main from "./Main";
import { useParams } from "react-router";
import instance from "../../../apis/movies";
import "./module.details.css";

const Detail = () => {
  const [movie, setMovie] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    getMovieDetails();
    return () => {
      setMovie([]);
    };
  }, []);

  useEffect(() => {
    displayDetails(movie);
  }, [movie]);

  const getMovieDetails = (ids) => {
    instance.getDetails(`/${id}`).then(({ data }) => {
      setMovie(data);
    });
  };

  const displayDetails = ({ data }) => {
    if (data) {
      return <Main mainDetails={data} />;
    } else {
      return "Loading";
    }
  };

  return <div>{displayDetails(movie)}</div>;
};

export default Detail;
