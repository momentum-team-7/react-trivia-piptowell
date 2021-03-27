import React from 'react'
import he from 'he'
import lodash from 'lodash'

export default function Answer ({correct_answer, incorrect_answers, setCorrect, setIncorrect}) {
    // const [selectedAnswer, setSelectedAnswer] = useState('')
    const _ = require('lodash')
    let answers = [
        ...incorrect_answers, correct_answer
    ];
    const shuffledAnswers = _.shuffle(answers)
    return (
        <div>
        {shuffledAnswers.map((answer, index) => { 
            return(
            <>      
            <input value={he.decode(answer)} key={index} id='answers' type='radio' name='options' onChange={(event) => console.log(event.target.value)} />
            <label for='answers'>{he.decode(answer)}</label>
            </>
            )
            
        })}
        </div>
    )
}

// <button onClick={() => setCorrect(true)}><dd>{he.decode(correct_answer)}</dd></button>
// {incorrect_answers.map((incorrect_answer, idx) =>
//     (
//         <button key={idx}><dd>{he.decode(incorrect_answer)}</dd></button>
//     ))}