import React, { Fragment } from "react";
import Search from "./Search";
import { Link } from "react-router-dom";

const LinkItems = () => {
  return (
    <Fragment>
      <Link
        to="/"
        className="active item"
        style={{ backgroundColor: "#a7db28" }}
      >
        Cinema
      </Link>
      <div className="right menu">
        <Search />
      </div>
    </Fragment>
  );
};

export default LinkItems;
