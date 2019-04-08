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
      currentItem: {name: 'N/A', description: 'none', picture:''}
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
  render(){
    console.log("Catalogue State", this.state);
      return (
        <div className="history-catalogue-container">
              <CatalogueItem catalogueItem={this.state.currentItem}
                              />
              <CatalogueMenu listOfItems={this.props.listOfItems}
                             listOfCategories={createListOfCategories(this.props.listOfItems)}
                             updateItem={this.updateItem}
                             />
        </div>
      )
  }
}
