import { createAction, createReducer } from '@reduxjs/toolkit'

const INITIAL_STATE = []
export const getLocation = createAction('GET_LOCATION')
export const setLocation = createAction('SET_LOCATION')


export default createReducer(INITIAL_STATE, {
  [getLocation.type]: (state, action) => [...action.payload],
  [setLocation.type]: (state, action) => [...action.payload],
})
