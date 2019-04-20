import React from 'react'
import Characters from './Characters'
import SingleCharacterView from './SingleCharacter/SingleCharacterView'
import SingleCharacterNavBar from './SingleCharacter/SingleCharacterNavBar'
import {connect} from 'react-redux'
import {fetchCurrentCharacter} from '../store/currentCharacterReducer'
const AllCharacters = props => {
  return (
    <div>
      <Characters characters={props.characters}
                  isAdmin={props.isAdmin}
                  />;
    </div>
  )
}

const mapStateToProps = state => ({
  characters: state.characters,
  isAdmin: state.user.role === 'admin'
  // currentCharacter: state.currentCharacter,
})

const mapDispatchToProps = dispatch => ({
  getCurrentCharacter: id => dispatch(fetchCurrentCharacter(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(AllCharacters)
