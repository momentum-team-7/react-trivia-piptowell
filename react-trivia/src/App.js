// import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [categories, setCategories] = useState([])
  
  useEffect(() => {
    console.log('useEffect runs', categories)
    axios.get('https://opentdb.com/api_category.php').then((response) => {
      console.log(response)
    setCategories(response.data.trivia_categories)
    })
  }, [])

  console.log('RENDERING:', categories)

  return (
    <div className='wrapper'>
      <h1>Trivia, ya</h1>
      <ul>
        {categories.map((category, idx) => (
          <li key={idx}>{category.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
