import React, { useState, Fragment } from "react";

const Text = ({ context }) => {
  const [active, setActive] = useState(true);

  const extendComment = () => {
    setActive(!active);
  };

  const shrinkComment = (text, index) => {
    if (text.length > 150 && text.length > 250) {
      return (
        <Fragment>
          {text.substr(0, 150)}
          <span className={active ? "hide-comment" : null}>
            {text.substr(150, text.length)}
          </span>
          <div onClick={extendComment}>
            {active ? "... see more" : "... see less"}
          </div>
        </Fragment>
      );
    } else {
      return text;
    }
  };

  return <div className="text">{shrinkComment(context)}</div>;
};

export default Text;
