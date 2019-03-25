import React from react;


const SearchBarResults = (props) => {
  <div id="searchBar-results">
    {props.searchResults.map((searchResult) => (
      <span className="searchBar-resultWindow-result">
        <a href="#"> {searchResult.text}</a>
      </span>
    ))}
  </div>
}

  export default SearchBarResults;
