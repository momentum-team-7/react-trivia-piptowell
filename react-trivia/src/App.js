// import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [categories, setCategories] = useState([])
  
  useEffect(() => {
    console.log('useEffect runs', categories)
    axios.get('https://opentdb.com/api_category.php').then((response) => {
    setCategories(response.data)
    })
  }, [])

  console.log('RENDERING:', categories)

  return (
    <div className='wrapper'>
      <h1>Trivia, ya dangus</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
