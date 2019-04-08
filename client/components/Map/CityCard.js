import React from 'react'
import axios from 'axios'
import {splitSummaryToPages, testSummary} from '../../utils'

const CityCard = props => {
  let description = props.description || testSummary
  return (
  <div className="city-card-container">

  {/* City Image Carosel   */}
    <div className="city-card-img elevatedCard flex">
      <img style={{border: "1px solid black", maxWidth: "90%", maxHeight: "25em"}}
        src={
          // 'http://jbmeyer.org/wp-content/uploads/ShatteredSands/pics/' +
          '/pics/' + props.pictures[props.currentPictureId]
        }
      />
      <div id="city-card-updateImageButtonGrid">
            {props.pictures.map((pictures, id) => {
              return <div key={"picGrid" + id}
                          className="city-card-img-updateButton cityTag"
                          onClick={() => props.updateCarosel(id)}
                      >

                </div>
            })}
      </div>
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
