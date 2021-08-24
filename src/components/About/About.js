import React, { useState, useEffect } from "react";
import Slider from "react-slick";

export default function About() {
  const [elements, setElements] = useState([]);

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    content();
  }, []);

  const content = () => {
    let arr = [];
    for (let i = 0; i < 20; i++) {
      let element = (
        <div
          className="wrap"
          style={{ display: "flex !important", flexDirection: "row" }}
        >
          <div
            className="img"
            style={{
              background: "blue",
              width: "150px",
              height: "100px",
              border: "1px solid #eee",
            }}
          ></div>
          <div
            className="img"
            style={{
              width: "150px",
              height: "100px",
              border: "1px solid #eee",
            }}
          ></div>
          <div
            class="img"
            style={{
              width: "150px",
              height: "100px",
              border: "1px solid #eee",
            }}
          ></div>
        </div>
      );
      arr.push(element);
    }
    setElements(arr);
  };
  return (
    <div
      className="slider"
      style={{
        width: "500px",
        height: "500px",
        margin: "50px auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Slider {...settings}>{elements}</Slider>
    </div>
  );
}
