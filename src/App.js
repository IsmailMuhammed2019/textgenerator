import React, { useState } from 'react'
import data from './data'
function App() {
  const [count, setCount] = useState(0)
  const [items, setItems] = useState([])

  return (
    <div className="section-center">
      <h3>Tired of boring Lorem Ipsum</h3>
      <form onSubmit={handleSubmit} className='lorem-form'>
        <label htmlFor='amount'>
          Paragraphs: 
        </label>
        <input type='number' name='amount' value={count} onChange={(e) => setCount(e.target.value)}/>
        <button type='submit' className='btn'>Generate</button>
      </form>
      
    </div>
  )
}

export default App
