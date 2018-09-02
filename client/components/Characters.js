import Character from './Character'
import React from 'react'

const Characters = props => {
  return (
    <div id="party_main_card">
      {props.characters.map(character => (
        <Character
          key={character.id}
          character={character}
          handleClick={props.handleClick}
        />
      ))}
    </div>
  )
}

export default Characters
