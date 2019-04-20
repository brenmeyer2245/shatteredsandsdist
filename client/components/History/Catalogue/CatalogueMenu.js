import React from 'react'
import {filterByCategory} from '../../../utils'
const CatalogueMenu = (props) => {
   let itemsCategorized = filterByCategory(props.listOfItems, props.currentCategory);
   console.log(itemsCategorized)
  return(
   <div className="history-catalogue-menu elevatedCard bg-primary mt-4 flex font-DancingScript p-2 w-75">
      <div className="ml-3 mr-1 w-25">
         <h4 onClick={() => props.updateCategory("Ship")}> Ships </h4>
         <h4 onClick={() => props.updateCategory("Weapon")}> Weapons</h4>
         <h4 onClick={() => props.updateCategory("Artifact")}> Artifacts</h4>
         <h4 onClick={() => props.updateCategory("History")}> History</h4>
      </div>
      <div style={{overflow: "scroll"}} className="history-catalogue-menu-items w-75">
            {itemsCategorized.map(item => <h6 key={`item_${item.id}`}
                                              onClick={(evt) => props.updateItem(evt, item.id)}
                                                   > {item.name}
                                          </h6> )}
      </div>
   </div>
  )}


  export default CatalogueMenu;
