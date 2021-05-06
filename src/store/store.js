import { configureStore } from '@reduxjs/toolkit'
import calculatorReducer from './ducks/calculator'
import categoryReducer from './ducks/category'

export default configureStore({
  reducer: {
    calculator: calculatorReducer,
    categories: categoryReducer
  }
})
