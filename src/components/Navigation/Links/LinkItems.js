import React, { Fragment } from "react";
import User from "./User";
import Guest from "./Guest";
import Search from "./Search";
import { Link } from "react-router-dom";

const LinkItems = ({ auth }) => {
  const signed = auth ? <User /> : <Guest />;

  return (
    <Fragment>
      <Link to="/" className="item">
        Cinema
      </Link>
      <Link to="/" className="active red item">
        Home
      </Link>
      <Link to="/about" className="item">
        About
      </Link>
      <Search />
      <div className="right menu">{signed}</div>
    </Fragment>
  );
};

export default LinkItems;
