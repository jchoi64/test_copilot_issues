import { useState } from 'react'
import './App.css'

function App() {
  const [number1, setNumber1] = useState('')
  const [number2, setNumber2] = useState('')
  const [result, setResult] = useState('')

  const handleCalculate = () => {
    const num1 = parseFloat(number1) || 0
    const num2 = parseFloat(number2) || 0
    const sum = num1 + num2
    setResult(sum)
  }

  return (
    <>
      <h1>Simple Calculator</h1>
      <div className="card">
        <div className="calculator">
          <div className="input-group">
            <label htmlFor="number1">First Number:</label>
            <input
              id="number1"
              type="number"
              value={number1}
              onChange={(e) => setNumber1(e.target.value)}
              placeholder="Enter first number"
            />
          </div>
          <div className="input-group">
            <label htmlFor="number2">Second Number:</label>
            <input
              id="number2"
              type="number"
              value={number2}
              onChange={(e) => setNumber2(e.target.value)}
              placeholder="Enter second number"
            />
          </div>
          <button onClick={handleCalculate} className="calculate-btn">
            Calculate
          </button>
          {result !== '' && (
            <div className="result">
              Result: {result}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App
