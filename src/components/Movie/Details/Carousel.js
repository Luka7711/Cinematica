import React from "react";

const Carousel = ({ images }) => {
  let currPos = 0;

  const imgs = images.map((image, i) => {
    return (
      <div key={i} className="img-box">
        <img
          src={image}
          style={{
            width: "180px",
            height: "180px",
            objectFit: "cover",
          }}
          alt={image}
        />
      </div>
    );
  });

  const moveRight = () => {
    if (currPos > -3000) {
      currPos -= 200;
      console.log(currPos);
      const imgBoxs = document.getElementsByClassName("img-box");
      for (let i = 0; i < imgBoxs.length; i++) {
        imgBoxs[i].style.left = `${currPos}px`;
      }
    }
  };

  const moveLeft = () => {
    console.log(currPos);
    if (currPos < 0) {
      currPos += 200;
      const imgBoxs = document.getElementsByClassName("img-box");
      for (let i = 0; i < imgBoxs.length; i++) {
        imgBoxs[i].style.left = `${currPos}px`;
      }
    }
  };
  return (
    <div className="detail-sub-4">
      <h1 className="category-title">Photos</h1>
      <div className="slider-container">
        <div className="btn-slider" onClick={() => moveLeft()}>
          <i className="arrow alternate circle left outline icon"></i>
        </div>

        <div className="imglist-container">{imgs}</div>
        <div className="btn-slider" onClick={() => moveRight()}>
          <i className="arrow alternate circle right outline icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
