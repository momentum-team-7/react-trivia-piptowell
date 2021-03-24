import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function CategoryQuestions({ category, handleGoBack }) {
    const [categoryQuestions, setCategoryQuestions] = useState([])

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
                    question: dataByCategory.question,
                    id: dataByCategory.id
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
                {categoryQuestions.map((dataByCategory) => (
                <li key={dataByCategory.id}>{dataByCategory.question}</li>
                ))}
            </ul>
        </div>
    )
}