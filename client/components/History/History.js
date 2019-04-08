import React, {Component} from 'react'
import Catalogue from './Catalogue/Catalogue'
import axios from 'axios'

export default class History extends Component{
  constructor(){
    super()
    this.state = {
      listOfItems: []
    }
  }

  async componentDidMount(){
    let {data: loadedItems} = await axios.get('/api/history');
    this.setState({listOfItems: loadedItems});
  }

  render(){
    return (
      <div className="history-container">
        <Catalogue listOfItems={this.state.listOfItems}/>
      </div>
    )
  }

}
