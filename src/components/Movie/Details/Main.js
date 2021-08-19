import React, { useState } from "react";
import "./module.details.css";
import UiList from "./UiList";

const Main = ({ mainDetails }) => {
  const [title, setTitle] = useState(mainDetails.event.title);
  const [genres, setGenres] = useState(mainDetails.details.genres);
  const [ratings, setRatings] = useState(mainDetails.details.ratings.rating);
  const [dates, setDates] = useState(mainDetails.event.date);
  const [address, setAddress] = useState(mainDetails.event.park_address);
  const [plot, setPlot] = useState(mainDetails.details.plotOutline.text);
  const [poster, setPoster] = useState(mainDetails.details.title.image.url);

  return (
    <div className="main-container">
      <div class="ui list event-container">
        <div className="item">
          <h1 className="movie-title">{title}</h1>
        </div>

        <div className="item">
          <i className="map marker icon"></i>
          {address}
        </div>

        <UiList dates={dates} />
        <UiList poster={poster} />
        <UiList ratings={ratings} />
      </div>

      <div className="movie-details">
        <div className="ui horizontal list">
          <UiList genres={genres} />
        </div>
        <div className="ui list">
          <div className="item">{plot}</div>
        </div>
      </div>
    </div>
  );
};

export default Main;
