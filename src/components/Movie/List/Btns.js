import React from "react";

const Btns = ({ pages, changeCurrentPage, currentPage }) => {
  let forRender = [];
  for (let i = 1; i <= pages; i++) {
    let element = (
      <button onClick={() => changeCurrentPage(i)} key={i}>
        {i}
      </button>
    );
    forRender.push(element);
  }
  return (
    <div className="btn-container">
      <button
        className="btn-main btn-left"
        onClick={() => changeCurrentPage(currentPage - 1)}
      >
        Back
      </button>
      {forRender}
      <button
        className="btn-main btn-right"
        onClick={() => changeCurrentPage(currentPage + 1)}
      >
        Forward
      </button>
    </div>
  );
};

export default Btns;
