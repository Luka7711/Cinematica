import React, { useState, useEffect } from "react";
import "./module.about.css";

const About = () => {
  const options = ["home", "about", "signup", "others"];
  const [active, setActive] = useState(true);

  let links = options.map((item, i) => {
    return <li key={i}>{item}</li>;
  });

  return (
    <div className="about">
      <ul className="main-select">
        <li>
          Dropdown
          <i
            onClick={() => setActive(!active)}
            className="angle down icon dropdown-icon"
          ></i>
        </li>
        <ul className={active ? "hide" : "show"}>{links}</ul>
      </ul>
    </div>
  );
};

export default About;
