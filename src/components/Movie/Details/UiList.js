import React from "react";

const UiList = ({ genres, poster, ratings, dates, address }) => {
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
    return splitDates.map((date) => {
      return (
        <div className="item" key={date}>
          {convertTimeString(date)}
        </div>
      );
    });
  } else if (address) {
    return (
      <div className="item">
        <i className="map marker icon"></i>
        {address}
      </div>
    );
  }
};

export default UiList;
