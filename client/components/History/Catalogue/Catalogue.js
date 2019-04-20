import React, {Component} from 'react';
import CatalogueItem  from './CatalogueItem';
import CatalogueMenu from './CatalogueMenu';
import {createListOfCategories} from '../../../utils'
import axios from 'axios'
export default class Catalogue extends Component{
  constructor(props){
    super(props);
    this.state =  {
      currentItemId: 1,
      currentItem: {name: '', description: 'none', picture:''},
      currentCategory: ""

    }
  }
  async componentDidMount(){
    let {data} = await axios.get('/api/history/' + this.state.currentItemId);
    this.setState({currentItem: data})
  }
  updateItem = async(evt, newId) => {
    evt.preventDefault();
    let {data: loadedItem} = await axios.get('/api/history/' + newId);
    this.setState({currentItemId: newId, currentItem: loadedItem});
  }
  updateCategory = (newCategory) => {
    this.setState({currentCategory: newCategory});
  }

  render(){
    console.log("Catalogue State", this.state);
      return (
        <div className="history-catalogue-container">
              <CatalogueItem catalogueItem={this.state.currentItem}
                              />
              <CatalogueMenu listOfItems={this.props.listOfItems}
                             listOfCategories={createListOfCategories(this.props.listOfItems)}
                             currentCategory={this.state.currentCategory}
                             updateItem={this.updateItem}
                             updateCategory={this.updateCategory}
                             />
        </div>
      )
  }
}
