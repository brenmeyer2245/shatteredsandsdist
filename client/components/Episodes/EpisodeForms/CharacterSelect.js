import React, {Fragment} from 'react'
import {connect} from 'react-redux'

const filterSelectedCharacters = (selectedIds, characterList) => {
  let selected = []
  let unselected = []
  characterList.forEach(character => {
    //look the character up in the selectedIds Hash
    if (selectedIds[character.id]) selected.push(character)
    else unselected.push(character)
  })
  return [selected, unselected]
}
const nameSlice = charName => {
  let comma = charName.indexOf(',')
  let space = charName.indexOf(' ')
  if (comma > 0) return charName.slice(0, comma)
  if (space > 0) return charName.slice(0, space)
  return charName
}

const CharacterSelect = props => {
  const [selected, unselected] = filterSelectedCharacters(
    props.selectedCharacters,
    props.allCharacters
  )
  return (
    <Fragment>
      <button
        className={
          props.hidden
            ? 'btn-primary col-6 p-2 rounded'
            : 'btn-outline-primary col-6 p-2 rounded'
        }
        id="character_add_btn"
        type="button"
        onClick={props.showSelect}
      >
        Add Characters
      </button>
      <div
        className={
          props.hidden
            ? 'character_select hidden'
            : 'character_select elevatedCard red-trim'
        }
      >
        <div style={{display: 'block'}}>
          <div className="flex justify-content-between">
            <h4> Characters in this Episode </h4>
            <button
              className="btn-primary rounded"
              type="button"
              onClick={props.showSelect}
            >
              Hide Characters
            </button>
          </div>
          {selected.map(character => (
            <div className="border card-footer" key={character.id}>
              <label> {nameSlice(character.name)} </label>
              <input
                type="checkbox"
                value={character.id}
                onChange={props.addCharacter}
              />
            </div>
          ))}
        </div>
        <hr />
        <h4> Available Characters </h4>

        {unselected.map(character => (
          <div key={character.id}>
            <label> {nameSlice(character.name)} </label>
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
  allCharacters: state.characters
})
export default connect(MapState)(CharacterSelect)
