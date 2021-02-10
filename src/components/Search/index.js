import React from "react";
import "./search.css";

const Search = (props) => {
  const { value, onValueChange } = props;
  return (
    <div className="search">
      <input
        type="text"
        value={value}
        placeholder="Search..."
        onChange={(event) => {
          onValueChange(event.target.value);
        }}
      />
    </div>
  );
};

export default Search;
