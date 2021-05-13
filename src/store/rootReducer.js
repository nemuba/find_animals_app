import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import categoryReducer from './ducks/category'
import authReducer from './ducks/auth'
import mapReducer from './ducks/map'
import locationReducer from './ducks/location'
import animalReducer from './ducks/animal'

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  categories: categoryReducer,
  auth: authReducer,
  map: mapReducer,
  location: locationReducer,
  animals: animalReducer
})

export default rootReducer
