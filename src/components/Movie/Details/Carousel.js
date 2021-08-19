import React from "react";

const Carousel = ({ images }) => {
  const imgs = images.map((image, i) => {
    return (
      <div key={i}>
        <img src={image} style={{ width: "350px" }} alt={image} />
      </div>
    );
  });
  return <div>{imgs}</div>;
};

export default Carousel;
