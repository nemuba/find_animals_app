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
      state.animals = action.payload
      state.total = action.payload.length

      return state
    },
    listAnimalByCategory: (state, action) => {
      state.animals_by_category = action.payload

      return state
    },
    addAnimal: (state, action) => {
      const animals = [...state.animals, action.payload]
      state.animals = animals
      state.total = animals.length

      return state
    },
    updateAnimal: (state, action) => {
      const animals = [...state.animals.filter(category => category.id !== action.payload.id), action.payload]
      state.animals = animals
      state.total = animals.length

      return state
    },
    removeAnimal: (state, action) => {
      const animals = [...state.animals.filter(category => category.id !== action.payload.id)]
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
