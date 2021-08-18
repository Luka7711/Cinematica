import React from "react";

const Main = ({ mainDetails }) => {
  console.log(mainDetails);
  return (
    <div>
      <img src={mainDetails.details.title.image.url} />
    </div>
  );
};

export default Main;
