import React, { useState } from 'react'
import data from './data'
function App() {
  const [count, setCount] = useState(0)
  const [items, setItems] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(count)
    if(count <= 0) {
      amount = 1
    }
    if (count > 8) {
      amount = items.lenght
    }
    setItems(data.slice(0, amount))
  }
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
      <article className='lorem-text'>
      {items.map((item, index) => {
        return (
          <p key={index}>{item}</p>
        )
      })}
      </article>
    </div>
  )
}

export default App
