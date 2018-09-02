import React from 'react'
import Characters from './Characters'
import SingleCharacterView from './SingleCharacter/SingleCharacterView'
import SingleCharacterNavBar from './SingleCharacter/SingleCharacterNavBar'
import {connect} from 'react-redux'
import {fetchCurrentCharacter} from '../store/currentCharacterReducer'
const AllCharacters = props => {
  return (
    <div>
      {/* {currentCharacter.Stat ? (
          <SingleCharacterView
            currentStats={currentCharacter.Stat}
            currentCharacter={currentCharacter}
            characterId={currentCharacter.characterId}
          />
        ) : (
          <p> No Characters in the Database</p>
        )}
        <SingleCharacterNavBar characterId={currentCharacter.characterId} /> */}
      <Characters characters={props.characters} />;
    </div>
  )
}

const mapStateToProps = state => ({
  characters: state.characters
  // currentCharacter: state.currentCharacter,
})

const mapDispatchToProps = dispatch => ({
  getCurrentCharacter: id => dispatch(fetchCurrentCharacter(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(AllCharacters)
