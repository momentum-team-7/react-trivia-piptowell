import React from 'react'
import he from 'he'
// import lodash from 'lodash'

export default function Answer ( { categoryQuestions, setCorrect, currentQuestion, setCurrentQuestion, handleAnswerButtonClick } ) {
// need a map here that adds all answers to the same array
// lets call the array answerOptions and the .map item answerOption(s)
// shuffles the answers
// adds them to buttons
// with appropriate text and stuff
// also adds the handleAnswerButtonClick to them



return (
    <div>
        <p>Answer Choices:</p>
        {/* <button>{categoryQuestions[currentQuestion].correct_answer}</button>
        <button>{categoryQuestions[currentQuestion].incorrect_answers[0]}</button>
        <button>{categoryQuestions[currentQuestion].incorrect_answers[1]}</button>
        <button>{categoryQuestions[currentQuestion].incorrect_answers[2]}</button> */}
    </div>
    )
}

// <button onClick={() => setCorrect(true)}><dd>{he.decode(correct_answer)}</dd></button>
// {incorrect_answers.map((incorrect_answer, idx) =>
//     (
//         <button key={idx}><dd>{he.decode(incorrect_answer)}</dd></button>
//     ))}



// uhhh come back to this another time
// export default function Answer ({correct_answer, incorrect_answers, setCorrect, setIncorrect}) {

//     const _ = require('lodash')
//     let answers = [
//         ...incorrect_answers, correct_answer
//     ];
//     const shuffledAnswers = _.shuffle(answers)
//     return (
//         <div>
//         {shuffledAnswers.map((answer, index) => { 
//             return(
//             <>      
//             <button key={index} name='options' value={he.decode(answer)}  id='answers' onClick={(event) => console.log(event.currentTarget.value)}>{he.decode(answer)}</button>
//             </>
//             )
            
//         })}
//         </div>
//     )
// }