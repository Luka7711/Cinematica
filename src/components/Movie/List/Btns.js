import React from "react";

const Btns = ({ pages, changeCurrentPage, currentPage }) => {
  let forRender = [];
  for (let i = 1; i <= pages; i++) {
    let element = (
      <div
        onClick={() => changeCurrentPage(i)}
        key={i}
        style={{ border: "1px solid #eee", width: "100px", padding: "10px" }}
      >
        <div>{i}</div>
      </div>
    );
    forRender.push(element);
  }
  return (
    <div>
      <button onClick={() => changeCurrentPage(currentPage - 1)}>Prev</button>
      {forRender}
      <button onClick={() => changeCurrentPage(currentPage + 1)}>Next</button>
    </div>
  );
};

export default Btns;
