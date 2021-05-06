import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { sum, subtract } from '../src/store/Calculator/calculator.actions'

const App = () => {
  const result = useSelector(state => state.calculator)
  const dispatch = useDispatch()
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  return (
    <div className="App">
      <h1>Calculadora</h1>
      <input
        type="text"
        placeholder="Enter a"
        onChange={e => setA(Number(e.target.value))}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter b"
        onChange={e => setB(Number(e.target.value))}
      />
      <br />
      <br />
      <button onClick={() => dispatch(sum(a, b))}>Somar</button>
      <button onClick={() => dispatch(subtract(a, b))}>Subtrair</button>
      <h1>Resultado: {result}</h1>
    </div>
  )

}

export default App;
