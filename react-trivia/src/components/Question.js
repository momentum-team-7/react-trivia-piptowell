import React, { useState } from 'react'
import he from 'he'
import Answer from './Answer'
import '../App.css'
import lodash from 'lodash'

export default function Question( { question, incorrect_answers, correct_answer } ) {
    const [correct, setCorrect] = useState(null)
    const [incorrect, setIncorrect] = useState(null)


    return (
        <div className={ correct ? 'greenCorrect' : 'hasntChosen' }>
            <li>{he.decode(question)}
                <dl>
                    <dt>Choose your answer</dt>
                    <Answer
                        incorrect_answers={incorrect_answers}
                        correct_answer={correct_answer}
                        setCorrect={setCorrect}
                        setIncorrect={setIncorrect}
                    />
                    </dl>
                </li>
                
        </div>
    )
}
