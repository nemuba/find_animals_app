import { createAction, createReducer } from '@reduxjs/toolkit'

const INITIAL_STATE = {}
export const setAddress = createAction('SET_ADDRESS')


export default createReducer(INITIAL_STATE, {
  [setAddress.type]: (state, action) => ({ address: action.payload }),
})
