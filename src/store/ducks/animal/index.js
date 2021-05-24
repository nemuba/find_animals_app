import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  animals: [],
  animals_by_category: [],
  total: 0
}

const animalSlice = createSlice({
  name: 'animals',
  initialState: initialState,
  reducers: {
    listAllAnimal: (state, action) => {
      const animals = action.payload
      state.animals = animals
      state.total = animals.length
      return state
    },
    listAnimalByCategory: (state, action) => {
      const animals = action.payload
      state.animals_by_category = animals
      return state
    },
    addAnimal: (state, action) => {
      const animals = state.animals.push(action.payload)
      state.animals = animals
      state.total = animals.length
      return state
    },
    updateAnimal: (state, action) => {
      const animals = state.animals.filter(category => category.id !== action.payload.id).push(action.payload)
      state.animals = animals
      state.total = animals.length
      return state
    },
    removeAnimal: (state, action) => {
      const animals = state.animals.filter(category => category.id !== action.payload.id)
      state.animals = animals
      state.total = animals.length
      return state
    }
  },
})

export const {
  listAllAnimal,
  listAnimalByCategory,
  addAnimal,
  updateAnimal,
  removeAnimal
} = animalSlice.actions
export default animalSlice.reducer
