import React, { useState, useEffect } from "react";
import "./module.about.css";

const About = () => {
  return (
    <div className="about-container">
      <div>
        <h1 className="category-title about-header">
          Enjoy a movie in the parks!
        </h1>
      </div>
      <div className="summary-container">
        <p>
          The big screen in your backyard, Movies in the Parks returns this
          summer, bringing Hollywood movies and local films to local parks for
          the twentieth season. Join us in-person at the parks for classics from
          the Golden Age of Hollywood and retro childhood favorites, to the best
          family-friendly box office favorites from recent years.
        </p>
      </div>
    </div>
  );
};

export default About;
