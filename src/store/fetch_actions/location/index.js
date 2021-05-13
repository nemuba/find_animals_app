import api from '../../../services/api'
import { setAddress } from '../../ducks/location'

export const setLocationFetch = ({ lat, lng }) => {
  return dispatch => {
    api.get(`/getlocation?latitude=${lat}&longitude=${lng}`)
      .then(res => dispatch(setAddress(res.data)))
      .catch(error => {
        console.log(error.message)
      })
  }
}
