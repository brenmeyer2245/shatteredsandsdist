import React, {Component} from 'react';
import CatalogueItem  from './CatalogueItem';
import CatalogueMenu from './CatalogueMenu';
import {createListOfCategories, filterByCategory} from '../../../utils'
import axios from 'axios'
export default class Catalogue extends Component{
  constructor(props){
    super(props);
    this.state =  {
      currentItemId: 1,
      currentCategory: "Ship"

    }
  }
  async componentDidMount(){
    let {data} = await axios.get('/api/history/' + this.state.currentItemId);
    this.setState({currentItem: data})
  }
  updateCategory = (newCategory) => {
    this.setState({currentCategory: newCategory});
  }

  render(){

      return (
        <div className="history-catalogue-container">
            <div className="history-catalogue-item-container">
            <div style={{height: "5em"}}/>
              {filterByCategory(this.props.listOfItems, this.state.currentCategory)
              .map(  item =>
                                            <CatalogueItem catalogueItem={item}
                                            key={item.id}
                                            />
                                          )
              }
               </div>
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
