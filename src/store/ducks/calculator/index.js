import { createAction, createReducer } from '@reduxjs/toolkit'

const INITIAL_STATE = 0
export const sumAction = createAction('SUM')
export const subtractAction = createAction('SUBTRACT')

export default createReducer(INITIAL_STATE, {
  [sumAction.type]: (state, action) => action.payload[0] + action.payload[1],
  [subtractAction.type]: (state, action) => action.payload[0] - action.payload[1],
})