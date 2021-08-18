import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Guest = () => {
  return (
    <Fragment>
      <Link to="/" className="item">
        Sign in
      </Link>
      <Link to="/" className="item">
        Sign up
      </Link>
    </Fragment>
  );
};

export default Guest;
