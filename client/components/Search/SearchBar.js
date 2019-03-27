import React, {Component} from 'react';
import axios from 'axios'
import SearchBarResults from './SearchBarResults'
import history from '../../history'

export default class SearchBar extends React.Component{
    constructor(){
      super();
      this.state = {
        searchString: "",
        searchResults: [{type:"episode", title:"testing", id: 0}]
      }
      this.updateSearchString = this.updateSearchString.bind(this);
      this.getResults = this.getResults.bind(this);
      this.clearResults = this.clearResults.bind(this);
    }

    travel(evt, pathName){
      console.log(pathName);
      history.replace(pathName);
    }
    updateSearchString(evt) {
        this.setState({searchString: evt.target.value})
    }

    getResults(evt){
        evt.preventDefault();
        //Get Search Results
       axios(`/api/search/${this.state.searchString}`)
        .then(({data}) => {
        console.log(data);
        this.setState({searchResults: data});
        })
      }

    goToResults(){
        console.log("Go to the link info in the results ")
    }

    clearResults(){
      this.setState({searchResults: []})
    }


    render(){
     return ( <div id="searchBar-container">
        <form id="searchBar" onSubmit={this.getResults}>
          <input id="searchBar-input"
                type="text"
                onChange={this.updateSearchString}
            />
          <button id="searchBar-button" type="submit"> Search </button>
        </form>
        <SearchBarResults travel={this.travel} searchResults={this.state.searchResults}/>
      </div>)
    }
}
