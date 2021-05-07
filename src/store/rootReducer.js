import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import categoryReducer from './ducks/category'
import authReducer from './ducks/auth'

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  categories: categoryReducer,
  auth: authReducer
})

export default rootReducer