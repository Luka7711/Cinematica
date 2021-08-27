import React, { useState, useEffect } from "react";

const Page = ({ currentList }) => {
  const list = currentList.map((movie) => {
    return (
      <div key={movie.event.title}>
        <div>{movie.event.title}</div>
        <img src={movie.details.title.image.url} style={{ width: "150px" }} />
      </div>
    );
  });
  return <div>{list}</div>;
};

export default Page;
