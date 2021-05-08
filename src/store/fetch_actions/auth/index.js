import { goBack, push, } from 'connected-react-router'
import { toast } from 'react-toastify'
import api from '../../../services/api'
import { isAuthenticated, login, logout } from '../../../services/auth'
import { loginAction, logoutAction } from '../../ducks/auth'

export function loginFetch(data) {
  return dispatch => {
    api.post('/authenticate/sign_in', data)
      .then(res => {
        login(res.headers['access-token'])
        if (isAuthenticated()) {
          dispatch(loginAction());
          dispatch(push('/'))
          toast.success('Logado com sucesso !')
        } else {
          dispatch(goBack())
        }
      })
      .catch(error => {
        dispatch(goBack())
        console.log(error.message)
      })
  }
}

export function logoutFetch() {
  return dispatch => {
    dispatch(logoutAction())
    logout()
    toast.success('Saiu com sucesso !')
  }
}