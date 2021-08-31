import React from "react";
import { useParams } from "react-router";

const Notfound = () => {
  let { name } = useParams();
  return (
    <div className="notfound-container">
      <h3>Your search for {name} didn't have any matches.</h3>
    </div>
  );
};

export default Notfound;
