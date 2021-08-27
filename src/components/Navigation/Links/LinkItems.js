import React, { Fragment } from "react";
import Search from "./Search";
import { Link } from "react-router-dom";

const LinkItems = () => {
  return (
    <Fragment>
      <Link to="/" className="item">
        Cinema
      </Link>
      <Link to="/" className="active red item">
        Home
      </Link>
      <div className="right menu">
        <Link to="/about" className="item">
          About
        </Link>
        <Search />
      </div>
    </Fragment>
  );
};

export default LinkItems;
