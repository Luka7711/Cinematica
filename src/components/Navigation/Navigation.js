import React, { useState } from "react";
import LinkItems from "./Links/LinkItems";

const Navigation = () => {
  return (
    <div className="ui inverted menu nav" style={{ margin: "0" }}>
      <LinkItems />
    </div>
  );
};

export default Navigation;
