import api from '../../../services/api'
import { listAllCategory, addCategory } from '../../ducks/category'

export const listAllCategoryFetch = () => {
  return dispatch => {
    api.get('/categories').then(res => dispatch(listAllCategory(res.data))).catch(console.log)
  }
}

export const addCategoryFetch = (category) => {
  return dispatch => {
    api.post('/categories', { category: category })
      .then(res => dispatch(addCategory(res.data)))
      .catch(console.log)
  }
}