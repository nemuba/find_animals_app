import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const categorySlice = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {
    listAllCategory: (state, action) => {
      return state = action.payload
    },
    addCategory: (state, action) => {
      return state.push(action.payload)
    },
    updateCategory: (state, action) => {
      return state.filter(category => category.id !== action.payload.id).push(action.payload)
    },
    removeCategory: (state, action) => {
      return state.filter(category => category.id !== action.payload.id)
    }
  },
})

export const {
  listAllCategory,
  addCategory,
  updateCategory,
  removeCategory
} = categorySlice.actions
export default categorySlice.reducer
