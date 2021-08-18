import React from "react";
import { useParams } from "react-router";

const Details = () => {
  let { id } = useParams();
  console.log(id);
  return <div>Hello</div>;
};

export default Details;
