import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function CategoryQuestions({ category, handleGoBack }) {
    const [categoryQuestions, setCategoryQuestions] = useState([])

    useEffect(() => {
        axios
            .get(`https://opentdb.com/api.php?amount=10&category=${category.id}`)
            .then((response) => {
                console.log(response)
                // const data = response.data.map()
            })
    })

    return (
        <div>
            <h3>{category.name} Questions</h3>
            <button
            className="pa0 bw0 bg-white blue pointer underline-hover"
            onClick={handleGoBack}>
            Back to other categories
            </button>
            <ul>

            </ul>
        </div>
    )
}
