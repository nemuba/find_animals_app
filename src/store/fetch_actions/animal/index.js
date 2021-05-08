import { goBack } from 'connected-react-router'
import api from '../../../services/api'
import { listAllAnimal, addAnimal } from '../../ducks/animal'

export const listAllAnimalsFetch = () => {
  return dispatch => {
    api.get('/animals')
      .then(res => dispatch(listAllAnimal(res.data)))
      .catch(error => {
        dispatch(goBack())
        console.log(error.message)
      })
  }
}

export const addAnimalFetch = (animal) => {
  return dispatch => {
    api.post('/animals', { animal: animal })
      .then(res => dispatch(addAnimal(res.data)))
      .catch(error => {
        dispatch(goBack())
        console.log(error.message)
      })
  }
}