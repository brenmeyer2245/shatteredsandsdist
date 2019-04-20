import React from 'react'
import axios from 'axios'
import {splitSummaryToPages, testSummary} from '../../utils'
import { urlPrefix } from '../../../Common/Constants';

const CityCard = props => {
  let description = props.description || testSummary
  return (
  <div className="city-card-container">

  {/* City Image Carosel   */}
    <div style={{overflow: "scroll"}} className="city-card-img elevatedCard flex">
      {props.pictures.map( (picture, id ) =>
        <div className="city-card-img-container" key={"pic" + id}>
            <img style={{border: "1px solid black", maxHeight: "25em"}}
              src={
                urlPrefix.pics.cities + picture
              }
            />
        </div>


      )}
      <div className="city-card-img-container" >
            <div style={{maxHeight: "25em", backgroundColor:"transparent"}}

            />
       </div>
      <div style={{width:"1em"}}/>
    </div>

    {/* Text Summary of City */}
    {description.length <= 2100 ?
   ( //Smaller Description => One Page
    <div className="flexDown" className="city-card-contents font-Merienda">
      <h1> {props.name} </h1>
      <p> {description} </p>
    </div> ) :
    ( <div>
      {splitSummaryToPages(testSummary, 2100).map((page, id) => (
        <div key={"page" + id} className="flexDown" className="city-card-contents-repeated font-Merienda">
        {id === 0 && (<h1> {props.name} </h1> )}
        <p> {page} </p>
      </div>
      ))}
      </div>
    )
    }
  </div>
)}

export default CityCard
