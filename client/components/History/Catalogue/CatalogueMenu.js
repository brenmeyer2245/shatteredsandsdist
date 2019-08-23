import React from 'react'
import {filterByCategory} from '../../../utils'
const CatalogueMenu = (props) => {
   let itemsCategorized = filterByCategory(props.listOfItems, props.currentCategory);
  return(
   <div>
         <div className="history-catalogue-menu elevatedCard bg-primary mt-4 flex font-DancingScript p-2 justify-content-center" title="Scroll down the papers above to see more items" >
            <div className="flex">
               <h4 className="ml-4" onClick={() => props.updateCategory("Ship")}> Ships </h4>
               <h4 className="ml-4" onClick={() => props.updateCategory("Weapon")}> Weapons</h4>
               <h4 className="ml-4" onClick={() => props.updateCategory("Artifact")}> Artifacts</h4>
               <h4 className="ml-4" onClick={() => props.updateCategory("History")}> History</h4>
               <h4 className="ml-4" onClick={() => props.updateCategory("Gods")}> Gods </h4>
            </div>

         </div>
   </div>
  )}


  export default CatalogueMenu;
