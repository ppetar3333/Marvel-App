import React from "react";
import { useState } from "react";

const Search = ({ search }) => {
  const [text, setText] = useState("");

  const onSearch = (q) => {
    setText(q);
    search(q);
  };

  return (
    <div className="t">
      <div className="search">
        <div className="search__wrapper container">
          <form method="GET" className="search__form">
            <input
              className="search__input"
              type="text"
              placeholder="Search Character"
              autoFocus
              onChange={(e) => onSearch(e.target.value)}
              value={text}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
