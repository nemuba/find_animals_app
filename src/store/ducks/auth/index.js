import { isAuthenticated } from '../../../services/auth'
import { createAction, createReducer } from '@reduxjs/toolkit'


const INITIAL_STATE = {
  isAuthenticated: isAuthenticated(),
  user: {},
}

export const loginAction = createAction("LOGIN")
export const logoutAction = createAction("LOGOUT")
export const signupAction = createAction("SIGN_UP")
export const currentUserAction = createAction("GET_CURRENT_USER")

export default createReducer(INITIAL_STATE, {
  [loginAction]: (state, action) => ({ ...state, isAuthenticated: true }),
  [logoutAction]: (state, action) => ({ ...state, isAuthenticated: false }),
  [currentUserAction]: (state, action) => ({ ...state, user: action.payload }),
  [signupAction]: (state, action) => ({ ...state, isAuthenticated: true }),
})