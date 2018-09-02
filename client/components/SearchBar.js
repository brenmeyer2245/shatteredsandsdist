import React from 'react'

const SearchBar = props => {
  return (
    <div id="filter" className="flex">
      <button id="filterBtn" type="submit">
        Filter
      </button>
      <input id="filterInput" type="search" />
    </div>
  )
}

export default SearchBar
