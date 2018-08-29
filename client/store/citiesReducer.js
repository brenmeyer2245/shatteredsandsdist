import axios from 'axios'

const ActionTypes = {
  ADD_CITY: 'ADD_CITY',
  GET_CITIES: 'GET_CITIES',
  SET_CURRENT_CITY: 'SET_CURRENT_CITY'
}

//ACTION CREATORS
const getCities = cities => ({
  type: ActionTypes.GET_CITIES,
  cities
})

const addCity = city => ({
  type: ActionTypes.ADD_CITY,
  city
})

// const setCurrentCity = id => ({
//   type: ActionTypes.SET_CURRENT_CITY,
//   id,
// });

//THUNK CREATORS
export const fetchCities = () => {
  return async function(dispatch) {
    const {data} = await axios.get('/api/cities')
    dispatch(getCities(data))
  }
}

export const postCities = city => {
  return async function(dispatch) {
    const {data} = await axios.post('/api/cities', {
      city
    })
    dispatch(addCity(data))
  }
}

const citiesReducer = (citiesState = [], action) => {
  switch (action.type) {
    case 'GET_CITIES':
      return action.cities
    case 'ADD_CITY':
      return [...citiesState, action.city]
    // case 'SET_CURRENT_CITY': {

    // }
    default:
      return citiesState
  }
}

export default citiesReducer
