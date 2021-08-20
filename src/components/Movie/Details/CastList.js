import React, { Fragment, useEffect } from "react";
import instance from "../../../apis/movies";

const CastList = ({ cast }) => {
  const list = cast.map((castItem) => {
    if (castItem) {
      return (
        <div key={castItem.id}>
          <img
            className="cast-image"
            src={castItem.image.url}
            alt={castItem.name}
          />
        </div>
      );
    } else {
      return null;
    }
  });

  return <Fragment>{list}</Fragment>;
};

export default CastList;
