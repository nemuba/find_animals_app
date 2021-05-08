import { createAction, createReducer } from '@reduxjs/toolkit'

const INITIAL_STATE = []
export const listAllAnimal = createAction('LIST_ALL_ANIMALS')
export const addAnimal = createAction('ADD_ANIMAL')
export const updateAnimal = createAction('UPDATE_ANIMAL')
export const removeAnimal = createAction('REMOVE_ANIMAL')

export default createReducer(INITIAL_STATE, {
  [listAllAnimal.type]: (state, action) => [...action.payload],
  [addAnimal.type]: (state, action) => [...state, action.payload],
  [updateAnimal.type]: (state, action) => [...state.filter(category => category.id !== action.payload.id), action.payload],
  [removeAnimal.type]: (state, action) => [...state.filter(category => category.id !== action.payload.id)],
})