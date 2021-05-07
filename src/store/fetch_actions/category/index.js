import { goBack } from 'connected-react-router'
import api from '../../../services/api'
import { listAllCategory, addCategory } from '../../ducks/category'

export const listAllCategoryFetch = () => {
  return dispatch => {
    api.get('/categories')
      .then(res => dispatch(listAllCategory(res.data)))
      .catch(error => {
        dispatch(goBack())
        console.log(error.message)
      })
  }
}

export const addCategoryFetch = (category) => {
  return dispatch => {
    api.post('/categories', { category: category })
      .then(res => dispatch(addCategory(res.data)))
      .catch(error => {
        dispatch(goBack())
        console.log(error.message)
      })
  }
}