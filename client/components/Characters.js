import Character from './Character'
import React, {Fragment} from 'react'

const Characters = props => {
  return (
    <Fragment>
    <div id="party_main_card">
      {props.characters.map(character => {
       return (
        <Character
          key={character.id}
          character={character}
          handleClick={props.handleClick}
          isAdmin={props.isAdmin}
        />
      )
        })}
    </div>
    </Fragment>
  )
}

export default Characters
