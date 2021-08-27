import React, { useState, Fragment } from "react";

const UiList = ({ genres, poster, ratings, dates, address, cast }) => {
  const [active, setActive] = useState(false);
  const generateRatingStars = () => {
    let stars = [];
    let fixedRating = parseFloat(ratings.toFixed());
    for (let j = 1; j <= 10; j++) {
      if (j <= fixedRating) stars.push(<i className="star icon"></i>);
      else stars.push(<i className="star outline icon"></i>);
    }
    stars.push(<i className="icon rating-num">{ratings}/10</i>);
    return stars;
  };

  const convertTimeString = (date) => {
    let dateComponents = date.split("T");
    let datePieces = dateComponents[0].split("-");
    const [year, month, day] = datePieces;
    return `${month}/${day}/${year}`;
  };

  if (genres) {
    return genres.map((genre) => {
      return (
        <div className="item" key={genre}>
          <span className="genre">{genre}</span>
        </div>
      );
    });
  } else if (poster) {
    return (
      <div className="item">
        <img className="poster-img" src={poster} alt="poster" />
      </div>
    );
  } else if (ratings) {
    return <div className="item rating">{generateRatingStars()}</div>;
  } else if (dates) {
    let splitDates = dates.split(",");
    let dts = splitDates.map((date) => {
      return <div className="item">{convertTimeString(date)}</div>;
    });

    return (
      <div id="dropdown" className="ui selection dropdown">
        Date <i class="dropdown icon" onClick={() => setActive(!active)}></i>
        <div className={active ? "menu active" : "menu"}>{dts}</div>
      </div>
    );
  } else if (address) {
    return (
      <div className="item">
        <i className="map marker icon"></i>
        {address}
      </div>
    );
  } else if (cast) {
    return (
      <div className="ui horizontal list">
        <div className="item">
          <h3>Stars</h3>
        </div>
        <div className="item">{cast.length ? cast[0].name : null}</div>
        <div className="item">{cast.length ? cast[1].name : null}</div>
        <div className="item">{cast.length ? cast[2].name : null}</div>
      </div>
    );
  }
};

export default UiList;
