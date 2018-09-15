import axios from 'axios'

const ActionTypes = {
  GET_CURRENT_EPISODE: 'GET_CURRENT_EPISODE'
}

//ACTION CREATORS
const getCurrentEpisode = episode => ({
  type: ActionTypes.GET_CURRENT_EPISODE,
  episode
})

//THUNK CREATORS
export const fetchCurrentEpisode = episodeId => {
  return async function(dispatch) {
    const {data: episode} = await axios('/api/episodes/' + episodeId)
    dispatch(getCurrentEpisode(episode))
  }
}

const currentEpisodeReducer = (currentEpisodeState = {}, action) => {
  switch (action.type) {
    case 'GET_CURRENT_EPISODE':
      return action.episode
    default:
      return currentEpisodeState
  }
}

export default currentEpisodeReducer
