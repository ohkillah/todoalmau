import React from "react";
import "./search-panel.css";

const SearchPanel = ({ onSearch }) => {
  return (
    <input
      onChange={(event) => onSearch(event.target.value)}
      type="text"
      className={"form-control search-input"}
      placeholder={"search"}
    />
  );
};

export default SearchPanel;
