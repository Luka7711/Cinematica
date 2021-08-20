import React, { Fragment } from "react";

const Carousel = ({ images }) => {
  const imgs = images.map((image, i) => {
    return (
      <div key={i}>
        <img
          src={image}
          style={{ width: "180px", height: "180px", objectFit: "cover" }}
          alt={image}
        />
      </div>
    );
  });
  return (
    <Fragment>
      <h1 className="category-title">Photos</h1>
      <div className="imglist-container">{imgs}</div>
    </Fragment>
  );
};

export default Carousel;
