import React from 'react'
import axios from 'axios'


/**
 *
 * @param {*} description
 * Split description is used in the case of a description that is
 * too long to fit on the background image of the page.
 * Current, one page can hold 2100 characters.
 * Split Description splits the description in to an array of pages
 * that can be rendered in different chunks
 */
function splitDescription(description){
  let descriptionArray = [];
  let currentId = 0;
  let pageBreak = 2100;
  while (currentId < description.length){
    let end = currentId + pageBreak;
    //check if end is less than 2100 characters out
    if (end >= description.length) {
      end = description.length - 1;
    }
    //push substring of current to end
    descriptionArray.push("Num 1" + description.slice(currentId, end));
    //update currentId
    currentId = end + 1
  }
  return descriptionArray;
}


const CityCard = props => {
  console.log(props);
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
    {props.description.length <= 2100 ?
   ( //Smaller Description => One Page
    <div className="flexDown" className="city-card-contents font-Merienda">
      <h1> {props.name} </h1>
      <p> {props.description} </p>
    </div> ) :
    ( <div>
      {splitDescription(props.description).map((page, id) => (
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
