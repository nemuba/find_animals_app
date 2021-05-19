import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const animalSlice = createSlice({
  name: 'animals',
  initialState: initialState,
  reducers: {
    listAllAnimal: (state, action) => {
      return action.payload
    },
    addAnimal: (state, action) => {
      return state.push(action.payload)
    },
    updateAnimal: (state, action) => {
      return state.filter(category => category.id !== action.payload.id).push(action.payload)
    },
    removeAnimal: (state, action) => {
      return state.filter(category => category.id !== action.payload.id)
    }
  },
})

export const {
  listAllAnimal,
  addAnimal,
  updateAnimal,
  removeAnimal
} = animalSlice.actions
export default animalSlice.reducer
