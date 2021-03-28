import React, { useState } from 'react'
import he from 'he'
import Answer from './Answer'
import '../App.css'
import lodash from 'lodash'

export default function Question( { categoryQuestions, currentQuestion, setCurrentQuestion, handleAnswerButtonClick } ) {
    const [correct, setCorrect] = useState(null)
    // const [incorrect, setIncorrect] = useState(null)


    return (
        <div>
                <p>{categoryQuestions[currentQuestion].question}</p>                
                <div>Choose your answer
                    <Answer
                        categoryQuestions={categoryQuestions}
                        setCorrect={setCorrect}
                        currentQuestion={currentQuestion}
                        setCurrentQuestion={setCurrentQuestion}
                        handleAnswerButtonClick={handleAnswerButtonClick}
                    />
                </div>        
                
        </div>
    )
}
