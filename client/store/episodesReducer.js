import axios from 'axios'

const ActionTypes = {
  ADD_EPISODE: 'ADD_EPISODE',
  GET_EPISODES: 'GET_EPISODES'
}

//ACTION CREATORS
const getEpisode = episodes => ({
  type: ActionTypes.GET_EPISODES,
  episodes
})

const addEpisode = episode => ({
  type: ActionTypes.ADD_EPISODE,
  episode
})

//THUNK CREATORS
export const fetchEpisodes = () => {
  return async function(dispatch) {
    const {data} = await axios('/api/episodes')
    dispatch(getEpisode(data))
  }
}

export const postEpisode = episode => {
  return async function(dispatch) {
    const {data: newEpisode} = await axios.post('/api/episodes', {
      episode
    })
    dispatch(addEpisode(newEpisode))
  }
}

const episodesReducer = (episodesState = [], action) => {
  switch (action.type) {
    case 'GET_EPISODES':
      return action.episodes
    case 'ADD_EPISODE':
      return [...episodesState, action.episode]
    default:
      return episodesState
  }
}

//Reducer Selectors

export const getEpisodeById = (episodes, id) => {
  return episodes.find(episode => episode.id === id)
}

export default episodesReducer
