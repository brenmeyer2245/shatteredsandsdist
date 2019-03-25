import react, {Component} from 'react';
import SearchBarResults from './SearchBarResults'

export default class SearchBar extends react.Component{
    constructor(){
      super();
      this.state = {
        searchString: "",
        searchResults: []
      }
      this.updateSearchString = this.updateSearchString.bind(this)
      this.getResults = this
      this.clearResults = this
    }


    updateSearchString(evt) {
        this.setState({searchString: evt.target.value})
    }

    getResults(evt){
        evt.preventDefault();
        //Get Search Results
    }

    goToResults(){
        console.log("Go to the link info in the results ")
    }

    clearResults(){
      this.setState({searchResults: []})
    }


    render(){
      <div id="searchBar-container">
        <form id="searchBar">
          <input id="searchBar-input"
                type="text"
                onChange={this.updateSearchString}
            />
          <button id="searchBar-button"> Search </button>
        </form>
        <SearchBarResults/>
      </div>
    }
}
