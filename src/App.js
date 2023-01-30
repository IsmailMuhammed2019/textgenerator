import React, { useState } from 'react'
import data from './data'
function App() {
const [count, setCount] = useState(0)
const [items,setItems] = useState([])

const handleClick = (e) => {
  e.preventDefault()
  let amount = parseInt(count)

  setItems(data.slice(0, amount))
    if (count <= 0) {
      amount = 1
    }
    if (count > items.length) {
      amount = items.length
    }

}

  return (
    <div className="section-center">
      <h2>Tired of boring lorem-ipusm text</h2>
      <form onSubmit={handleClick} className="lorem-form">
        <label htmlFor='amount' className='amount'>Paragraph</label>
        <input type="number" name="amount" id="amount" onChange={(e) => setCount(e.target.value)} value={count} />
        <button className="btn" type='submit'>Generate</button>
      </form>
      <article className="lorem-text">
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
