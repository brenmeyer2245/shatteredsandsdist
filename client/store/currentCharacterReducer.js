import axios from 'axios'

const ActionTypes = {
  GET_CURRENT_CHARACTER: 'GET_CURRENT_CHARACTER'
}

//ACTION CREATORS
const getCurrentCharacter = character => ({
  type: ActionTypes.GET_CURRENT_CHARACTER,
  character
})

//THUNK CREATORS
export const fetchCurrentCharacter = charId => {
  return async function(dispatch) {
    const {data} = await axios(`/api/characters/${charId}`)
    dispatch(getCurrentCharacter(data))
  }
}

const charactersReducer = (characterState = {}, action) => {
  switch (action.type) {
    case 'GET_CURRENT_CHARACTER':
      return action.character
    default:
      return characterState
  }
}

export default charactersReducer
