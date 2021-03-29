import React from 'react'
import he from 'he'
// import lodash from 'lodash'

export default function Answer ( { categoryQuestions, setCorrect, currentQuestion, setCurrentQuestion, handleAnswerButtonClick, score, setScore } ) {
// verifies which is correct_answer
const _ = require('lodash');
console.log('Answer.js log for CQ', categoryQuestions)
let incorrect_answers = categoryQuestions[currentQuestion].incorrect_answers;
let correct_answer = categoryQuestions[currentQuestion].correct_answer;
console.log('correct answer is ', correct_answer)
let answers = [
    ...incorrect_answers, 
    correct_answer,
];
const shuffledAnswers = _.shuffle(answers)
console.log(shuffledAnswers)




return (
    <div className={'answers'}>
        {shuffledAnswers.map((answerOption, index) =>
        (
            <button key={index} onClick = {() => handleAnswerButtonClick()}>{he.decode(answerOption)}</button> 
        ))}
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

// hard-coded buttons from pre-map answer.js BETA
{/* <button onClick = {() => handleAnswerButtonClick()}>{categoryQuestions[currentQuestion].correct_answer}</button>
        <button onClick = {() => handleAnswerButtonClick()}>{categoryQuestions[currentQuestion].incorrect_answers[0]}</button>
        <button onClick = {() => handleAnswerButtonClick()}>{categoryQuestions[currentQuestion].incorrect_answers[1]}</button>
        <button onClick = {() => handleAnswerButtonClick()}>{categoryQuestions[currentQuestion].incorrect_answers[2]}</button>  */}