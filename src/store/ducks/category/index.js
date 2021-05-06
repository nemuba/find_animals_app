import { createAction, createReducer } from '@reduxjs/toolkit'

const INITIAL_STATE = []
export const listAllCategory = createAction('LIST_ALL_CATEGORY')
export const addCategory = createAction('ADD_CATEGORY')
export const updateCategory = createAction('UPDATE_CATEGORY')
export const removeCategory = createAction('REMOVE_CATEGORY')

export default createReducer(INITIAL_STATE, {
  [listAllCategory.type]: (state, action) => [...action.payload],
  [addCategory.type]: (state, action) => [...state, action.payload],
  [updateCategory.type]: (state, action) => [...state.filter(category => category.id !== action.payload.id), action.payload],
  [removeCategory.type]: (state, action) => [...state.filter(category => category.id !== action.payload.id)],
})