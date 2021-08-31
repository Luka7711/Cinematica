import React, { useState, useEffect } from "react";
import Category from "./Category";
import { useHistory } from "react-router-dom";

const Page = ({ currentList, displayByCategory, children }) => {
  let history = useHistory();
  const list = currentList.map((movie) => {
    return (
      <div
        onClick={() => history.push(`details/${movie._id}`)}
        key={movie.event.title}
        className="image-container"
      >
        <img
          src={movie.details.title.image.url}
          style={{ width: "100%", border: "3px solid black" }}
        />
      </div>
    );
  });
  return (
    <div className="movielist-container">
      <div className="movielist">
        <div className="movie-box">{list}</div>
        {children}
      </div>
      <Category displayByCategory={displayByCategory} />
    </div>
  );
};

export default Page;
