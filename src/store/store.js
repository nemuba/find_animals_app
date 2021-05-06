import { combineReducers, createStore } from 'redux'
import calculatorReducer from './Calculator/calculator.reducer';

const rootReducer = combineReducers({
  calculator: calculatorReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store