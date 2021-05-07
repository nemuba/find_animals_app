import { goBack, goForward, } from 'connected-react-router'
import api from '../../../services/api'
import { isAuthenticated, login } from '../../../services/auth'
import { loginAction } from '../../ducks/auth'

export function loginFetch(data) {
  return dispatch => {
    api.post('/authenticate/sign_in', data)
      .then(res => {
        login(res.headers['access-token'])
        if (isAuthenticated()) {
          dispatch(loginAction());
          dispatch(goForward())
        }
        dispatch(goBack())
      })
      .catch(error => {
        dispatch(goBack())
        console.log(error.message)
      })
  }
}