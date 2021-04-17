import { DragSwitch } from "react-dragswitch";
import "react-dragswitch/dist/index.css";
import React, { useState } from "react";
import AdvancedSearch from './AdvancedSearch'
import { DropdownButton } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import SearchResults from './SearchResults'

const Search = () => {
  const [checked, setChecked] = useState(false);
  const [results, setResults] = useState(false);
  

  return (
    <div className="page-wrapper">
      <div className="input-group search-input">
        <input
          type="text"
          className="form-control"
          placeholder="Search Pets..."
          aria-label="Search"
          aria-describedby="search"
        />
      </div>
      <div className="m-3">
        Basic Search{" "}
        <DragSwitch
          onColor="#dfb89c"
          handleColor="#B45008"
          checked={checked}
          onChange={(e) => {
            setChecked(e);
          }}
        />{" "}
        Advanced Search
      </div>
      <div className="search-results"></div>
      <div className="pet-type row mb-3">
            <h3 className="mt-1 col-sm-2">Type of a pet</h3>
            <DropdownButton
              className="mt-1 col-sm-3"
              id="dropdown-basic-button"
              title="Choose..."
            >
              <Dropdown.Item href="#/action-1">Dog</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Cat</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Horse</Dropdown.Item>
              <Dropdown.Item href="#/action-4">Other</Dropdown.Item>
            </DropdownButton>
          </div>
      <AdvancedSearch checked={checked}/>
      <button className="btn btn-primary search-btn" onClick={(e) => {
            setResults(e);
          }}>Search</button>
          {results &&
          <SearchResults results={results}/>
}
    </div>
  );
};

export default Search;
