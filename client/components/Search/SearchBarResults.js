import React  from 'react';


const SearchBarResults = ({searchResults, travel}) => (
<div id="searchBar-results">
    {searchResults.map((searchResult) => (
      <span key={`${searchResult.type}_${searchResult.id}`} className="searchBar-resultWindow-result">
      {searchResult.type === 'episode' ?
        <span onClick={(evt) => travel(evt, `/episodes/${searchResult.id}`)} >{searchResult.title}</span>
        : <span onClick={(evt) => travel(evt, `/characters`)} >{searchResult.name}</span>
      }
      </span>
    ))}
  </div>)

  export default SearchBarResults;
