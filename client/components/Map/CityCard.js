import React from 'react'
import axios from 'axios'

const CityCard = props => (
  <div className="flex cityCard m-4 p-2 elevatedCard">
    <div>
      <img
        src={
          'http://jbmeyer.org/wp-content/uploads/ShatteredSands/pics/' +
          props.image
        }
      />
    </div>
    <div className="flexDown" className="cityContents m-2 p2">
      <h1> {props.name} </h1>
      <p> {props.description} </p>
    </div>
  </div>
)

export default CityCard
