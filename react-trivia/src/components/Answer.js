import React from 'react'
import he from 'he'

export default function Answer(correct_answer, incorrect_answers) {
    return (
        <div>
            <button><dd>{he.decode(correct_answer)}</dd></button>
                    {incorrect_answers.map((incorrect_answer, idx) =>
                        (
                            <button key={idx}><dd>{he.decode(incorrect_answer)}</dd></button>
                        ))}
        </div>
    )
}
