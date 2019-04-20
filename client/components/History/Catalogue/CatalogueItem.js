import React, {Fragment} from 'react'
import { urlPrefix } from '../../../../Common/Constants';


const CatalogueItem = (props) => {
  let {picture, name, description} = props.catalogueItem;
  return(
      <div className="history-catalogue-item flex font-Merienda" >
         { name.length ? (
         <Fragment> <img src={urlPrefix.pics.catalogue + picture} />
        <div className="history-catalogue-item-description pr-5 pb-5 pt-5" style={{height: "93%", overflow: "scroll"}}>
          <h3 className="font-Merienda"> {name} </h3>
          <p> {description} </p>
        </div>
        </Fragment> ) : null }
      </div>
  )

}

export default CatalogueItem
