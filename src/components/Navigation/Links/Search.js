import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const Search = () => {
  const [searchStr, setSearchStr] = useState("");
  let history = useHistory();

  useEffect(() => {
    let timerId = setTimeout(() => {
      if (searchStr !== "") {
        history.push(`/search/${searchStr}`);
      } else history.push("/");
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchStr]);

  return (
    <div className="item">
      <div className="ui icon input">
        <input
          onChange={(e) => setSearchStr(e.target.value)}
          type="text"
          value={searchStr}
          placeholder="Search by title"
        />
        <i className="search icon"></i>
      </div>
    </div>
  );
};

export default Search;
