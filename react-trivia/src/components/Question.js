import React, { useState } from 'react'
import he from 'he'
import Answer from './Answer'
import '../App.css'
import lodash from 'lodash'

export default function Question( { categoryQuestions, currentQuestion, setCurrentQuestion, handleAnswerButtonClick, score, setScore } ) {
    const [correct, setCorrect] = useState(null)
    // const [incorrect, setIncorrect] = useState(null)


    return (
        <div>
                <p>{he.decode(categoryQuestions[currentQuestion].question)}</p>                
                <div>Choose your answer
                    <Answer
                        categoryQuestions={categoryQuestions}
                        setCorrect={setCorrect}
                        currentQuestion={currentQuestion}
                        setCurrentQuestion={setCurrentQuestion}
                        handleAnswerButtonClick={handleAnswerButtonClick}
                        score={score}
                        setScore={setScore}
                    />
                </div>        
                
        </div>
    )
}
