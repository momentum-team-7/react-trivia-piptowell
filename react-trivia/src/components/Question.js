import React from 'react'
import he from 'he'
import Answer from './Answer'


export default function Question( { question, incorrect_answers, correct_answer } ) {


    return (
        <div>
            <li>{he.decode(question)}
                <dl>
                    <dt>Choose your answer</dt>
                    <Answer
                        incorrect_answers={incorrect_answers}
                        correct_answer={correct_answer}
                    />
                    </dl>
                </li>
                
        </div>
    )
}
