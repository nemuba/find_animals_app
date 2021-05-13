import { goBack, push } from 'connected-react-router'
import { toast } from 'react-toastify'
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

export const listAnimalsByCategoryFetch = (category) => {
  return dispatch => {
    api.get(`/animals?category_id=${category.id}`)
      .then(res => {
        dispatch(listAllAnimal(res.data))
        dispatch(push(`/animals?category=${category.description}`))
      })
      .catch(error => {
        dispatch(goBack())
        console.log(error.message)
      })
  }
}

export const addAnimalFetch = (animal) => {
  return dispatch => {
    api.post('/animals', { animal: animal })
      .then(res => {
        dispatch(addAnimal(res.data))
        dispatch(push('/animals'))
        toast.success('Animal cadastrado com sucesso !')
      })
      .catch(error => {
        dispatch(goBack())
        console.log(error.message)
      })
  }
}
