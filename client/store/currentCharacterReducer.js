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
    dispatch(addCharacter(data))
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

export default charactersReducer
