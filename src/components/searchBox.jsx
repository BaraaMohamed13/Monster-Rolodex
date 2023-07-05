import React, { Component } from "react";
import "../styles/searchBoxStyle.css";
const SearchBox = ({ onChangeHandler }) => {
  return (
    <div>
      <input
        className="searchBox"
        type="search"
        placeholder="Search for monstors"
        onChange={onChangeHandler}
      ></input>
    </div>
  );
};

export default SearchBox;
