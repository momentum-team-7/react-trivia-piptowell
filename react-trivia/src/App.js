// import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [categories, setCategories] = useState([])
  
  useEffect(() => {
    console.log('useEffect runs', categories)
    axios.get('https://opentdb.com/api.php?amount=10').then((response) => {
    setCategories(response.data.results)
    })
  }, [])

  console.log('RENDERING:', categories)

  return (
    <div className='wrapper'>
      <h1>Trivia, ya dangus</h1>
      <ul>
        {categories.map((category, idx) => (
          <li key={idx}>{category.question}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
