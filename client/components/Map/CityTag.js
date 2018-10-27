import React from 'react'

const CityTag = props => (
  <div
    onClick={() => props.clickOnCity(props.city)}
    city={props.city}
    id={
      props.city.name === "Tear'an"
        ? 'Tear-an'
        : props.city.name.split(' ').join('-')
    }
    className={`cityTag ${
      props.currentCityId === props.city.id ? 'cityClicked' : ''
    }`}
  />
)

export default CityTag
