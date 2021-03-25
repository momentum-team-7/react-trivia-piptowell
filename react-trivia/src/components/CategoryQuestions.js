import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Question from './Question'


export default function CategoryQuestions({ category, handleGoBack }) {
    const [categoryQuestions, setCategoryQuestions] = useState([])
    const [correct, setCorrect] = useState(null)
    // const answer === correct ? 'green' : answer === incorrect ? 'red' : 'white' 

    useEffect(() => {
        axios
            .get(`https://opentdb.com/api.php?amount=10&category=${category.id}`)
            .then((response) => {
                // console.log('RESPONSE:', response.data.results)
                const data = response.data.results.map((dataByCategory) => ({
                    category: dataByCategory.category,
                    type: dataByCategory.type,
                    difficulty: dataByCategory.difficulty,
                    incorrect_answers: dataByCategory.incorrect_answers,
                    correct_answer: dataByCategory.correct_answer,
                    question: dataByCategory.question,
                }))
            setCategoryQuestions(data)
            })
    }, [category])

    return (
        <div>
            <h3>{category.name} Questions and also Questions</h3>
            <button
            className="pa0 bw0 bg-white blue pointer underline-hover"
            onClick={handleGoBack}>
            Back to other categories
            </button>
            <ul>
            {/* // const answer === correct ? 'green' : answer === incorrect ? 'red' : 'white'  */}

                {categoryQuestions.map((dataByCategory, idx) => (
                <Question
                    question={dataByCategory.question} 
                    incorrect_answers={dataByCategory.incorrect_answers} 
                    correct_answer={dataByCategory.correct_answer}
                />    
                ))}
            </ul>
        </div>
    )
}
