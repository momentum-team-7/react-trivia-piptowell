import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css'


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
                <div className={correct ? 'greenCorrect' : 'hasntChosen' }>    
                <li key={idx}>{dataByCategory.question}
                    <dl>
                        <dt>Choose your answer</dt>

                        <dd><button onClick={() => setCorrect(true)}>
                            {dataByCategory.correct_answer}</button></dd>

                        <dd><button onClick={() => setCorrect(false)}>{dataByCategory.incorrect_answers.[0]}</button></dd>
                        
                        <dd><button onClick={() => setCorrect(false)}>{dataByCategory.incorrect_answers.[1]}</button></dd>

                        <dd><button onClick={() => setCorrect(false)}>
                            {dataByCategory.incorrect_answers.[2]}</button></dd>
                        
                    </dl>
                </li>
                </div>
                ))}
            </ul>
        </div>
    )
}
