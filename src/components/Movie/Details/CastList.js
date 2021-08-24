import React from "react";

const CastList = ({ cast }) => {
  const list = cast.map((castItem) => {
    if (castItem.image) {
      return (
        <div key={castItem.id}>
          <img
            className="cast-image"
            src={castItem.image.url}
            alt={castItem.name}
          />
          <div>{castItem.name}</div>
        </div>
      );
    } else {
      return null;
    }
  });

  return (
    <div>
      <h1 className="category-title">Cast</h1>
      <div className="cast-list">{list}</div>
    </div>
  );
};

export default CastList;
