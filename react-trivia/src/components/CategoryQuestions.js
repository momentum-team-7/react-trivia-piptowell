import { useState, useEffect } from 'react'
import axios from 'axios'
import Question from './Question'

export default function CategoryQuestions({ category, handleGoBack }) {
    const [categoryQuestions, setCategoryQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0)

    useEffect(() => {
    axios
        .get(`https://opentdb.com/api.php?amount=10&category=${category.id}&type=multiple`)
        .then((response) => {
        console.log(response.data.results)
        const data = response.data.results.map((dataByCategory) => ({
            category: dataByCategory.category,
            type: dataByCategory.category,
            difficulty: dataByCategory.difficulty,
            incorrect_answers: dataByCategory.incorrect_answers,
            question: dataByCategory.question,
            correct_answer: dataByCategory.correct_answer,
            id: dataByCategory.id,
        }))
        setCategoryQuestions(data)
        })
    }, [category])

const handleAnswerButtonClick = (answerOption) => {
        const nextQuestion = currentQuestion + 1;
        setCurrentQuestion(nextQuestion)
    }

    return (
    <div>
        <h3>{category.name} Trivia</h3>
        <button
        className='pa0 bw0 bg-white blue pointer underline-hover'
        onClick={handleGoBack}>
        Back to all categories
        </button>

        <div className='question-text'>Question: 
            <Question
            categoryQuestions={categoryQuestions}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            handleAnswerButtonClick={handleAnswerButtonClick}
            />
        </div>
        



    </div>    
    )
}
