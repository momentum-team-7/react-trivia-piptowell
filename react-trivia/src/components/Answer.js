import React from 'react'
import he from 'he'

export default function Answer({ correct_answer, incorrect_answers, setCorrect, setIncorrect }) {
    return (
        <div>
            <button onClick={() => setCorrect(true)}><dd>{he.decode(correct_answer)}</dd></button>
            {incorrect_answers.map((incorrect_answer, idx) =>
                (
                    <button key={idx}><dd>{he.decode(incorrect_answer)}</dd></button>
                ))}
        </div>
    )
}

{/* <button><dd>{incorrect_answers[0]}</dd></button>
            <button><dd>{incorrect_answers[1]}</dd></button>
            <button><dd>{incorrect_answers[2]}</dd></button>         */}

// map for when we get decode working

// {incorrect_answers.map((incorrect_answer, idx) =>
//     (
//         <button key={idx}><dd>{incorrect_answer}</dd></button>
//     ))}