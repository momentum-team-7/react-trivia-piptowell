import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import CategoryList from './components/CategoryList'
import CategoryQuestions from './components/CategoryQuestions'
import 'tachyons'

function App() {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  
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
      <h1>Trivia!</h1>
      {selectedCategory ? (
        <CategoryQuestions category={selectedCategory} 
        handleGoBack={() => setSelectedCategory(null)}/>
      ) : (
      <CategoryList categories={categories} 
      setSelectedCategory={setSelectedCategory}
      />
      )}
    </div>
  )
}

export default App
