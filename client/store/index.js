import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import characters from './charactersReducer'
import cities from './citiesReducer'
import currentCharacter from './currentCharacterReducer'
import currentEpisode from './currentEpisodeReducer'
import episodes from './episodesReducer'

const reducer = combineReducers({
  user,
  characters,
  cities,
  currentCharacter,
  currentEpisode,
  episodes
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './episodesReducer'
export * from './citiesReducer'
export * from './currentCharacterReducer'
export * from './charactersReducer'
export * from './currentEpisodeReducer'
