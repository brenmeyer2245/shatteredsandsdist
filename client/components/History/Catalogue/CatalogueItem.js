import React from 'react'


const CatalogueItem = (props) => {
  let {picture, name, description} = props.catalogueItem;
  return(
      <div className="history-catalogue-item flex font-Merienda" >
        <img src={picture} />
        <div className="history-catalogue-item-description pr-5 pb-5 pt-5" style={{height: "93%", overflow: "scroll"}}>
          <h3 className="font-Merienda"> {name} </h3>
          <p> {description} </p>
        </div>
      </div>
  )

}

export default CatalogueItem
