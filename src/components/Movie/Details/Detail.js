import React, { useState, useEffect, Fragment } from "react";
import CastList from "./CastList";
import Carousel from "./Carousel";
import Main from "./Main";
import { useParams } from "react-router";
import instance from "../../../apis/movies";

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

  const getMovieDetails = () => {
    instance.getDetails(`/${id}`).then(({ data }) => {
      setMovie(data);
    });
  };

  const displayDetails = ({ data }) => {
    if (data) {
      return (
        <Fragment>
          <Main mainDetails={data} />
          <CastList cast={data.details.cast_ids} />
          <Carousel images={data.details.images} />
        </Fragment>
      );
    } else {
      return "Loading";
    }
  };

  return <div>{displayDetails(movie)}</div>;
};

export default Detail;
