import React, {Fragment} from 'react'
import {connect} from 'react-redux'
const CharacterSelect = props => {
  return (
    <Fragment>
      <button
        className={props.hidden ? 'btn-primary' : 'btn-outline-primary'}
        id="character_add_btn"
        type="button"
        onClick={props.showSelect}
      >
        {' '}
        {props.hidden ? 'Add Characters' : 'Hide Characters'}
      </button>
      <div
        className={
          props.hidden
            ? 'character_select hidden'
            : 'character_select elevatedCard red-trim'
        }
      >
        {props.characters.map(character => (
          <div key={character.id}>
            <label> {character.name} </label>
            <input
              type="checkbox"
              value={character.id}
              onChange={props.addCharacter}
            />
          </div>
        ))}
      </div>
    </Fragment>
  )
}

const MapState = state => ({
  characters: state.characters
})

export default connect(MapState)(CharacterSelect)
