import React from 'react'
import {filterByCategory} from '../../../utils'
const CatalogueMenu = (props) => {
   let itemsCategorized = filterByCategory(props.listOfItems, props.listOfCategories);
   console.log(itemsCategorized)
  return(
   <div className="history-catalogue-menu elevatedCard bg-primary mt-4 flex font-DancingScript">
      {itemsCategorized.map( (categoryItems) =>
      (<details key={categoryItems[0].category} className="history-catalogue-menu-list">
      <summary> {categoryItems[0].category} </summary>
       <ul>
        {categoryItems.map(item => (
         <li key={'listItem_' + item.id }
             onClick={(evt) => props.updateItem(evt, item.id)}
             className="history-catalogue-menu-list-item">
            {item.name}
         </li>
        ))}
      </ul>
        </details> ))}
   </div>
  )}


  export default CatalogueMenu;
