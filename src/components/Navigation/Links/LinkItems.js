import React, { Fragment } from "react";
import Search from "./Search";
import { Link } from "react-router-dom";

const LinkItems = () => {
  return (
    <Fragment>
      <Link to="/" className="active red item">
        Cinema
      </Link>
      <div className="right menu">
        <Search />
      </div>
    </Fragment>
  );
};

export default LinkItems;
