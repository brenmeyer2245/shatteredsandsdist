import axios from 'axios'

const ActionTypes = {
  ADD_CHARACTER: 'ADD_CHARACTER',
  GET_CHARACTERS: 'GET_CHARACTERS'
}

//ACTION CREATORS
const getCharacters = characters => ({
  type: ActionTypes.GET_CHARACTERS,
  characters
})

const addCharacter = character => ({
  type: ActionTypes.ADD_CHARACTER,
  character
})

//THUNK CREATORS
export const fetchCharacters = () => {
  return async function(dispatch) {
    const {data} = await axios('/api/characters')
    dispatch(getCharacters(data))
  }
}

export const postCharacters = character => {
  return async function(dispatch) {
    const {data} = await axios.post('/api/characters', {
      character: character
    })
    //fetch the new character info, eager load in stats
    const {data: newCharacter} = await axios.get(
      '/api/characters/' + data.character.id
    )
    console.log(newCharacter)
    dispatch(addCharacter(newCharacter))
  }
}

const charactersReducer = (charactersState = [], action) => {
  switch (action.type) {
    case 'GET_CHARACTERS':
      return action.characters
    case 'ADD_CHARACTER':
      return [...charactersState, action.character]
    default:
      return charactersState
  }
}

//Reducer Selectors
export const getCharacterById = (characters, id) => {
  return characters.find(character => character.id === id)
}

export default charactersReducer
