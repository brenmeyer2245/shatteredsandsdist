import Character from './Character'
import React, {Fragment} from 'react'

const Characters = props => {
  let col = 0;
  let row = 0;
  return (
    <Fragment>
    <div id="party_main_card">
      {props.characters.map(character => {

       let x = col * 15.5
       let y = row * 21

       if (col >= 2) {
         col = 0
         row++;
       } else col++;
       return (
        <Character
          key={character.id}
          character={character}
          handleClick={props.handleClick}
          coords = {{xPosition: x, yPosition: y}}
        />
      )
        })}
    </div>
    </Fragment>
  )
}

export default Characters
