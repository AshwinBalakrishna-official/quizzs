import React from 'react'


import './questionCard.css';



// Declaring TS requirement for datatypes
type Props ={
    question : string;
    answers : string[];
    callback : any;
    userAnswer : any;
    questionNo : number ;
    totalQuestions : number;

}



const QuestionCard :React.FC<Props> = ({question, answers, callback, userAnswer, questionNo, totalQuestions,}) => {
  return (
        <div>
            <p className='qno'>
                Questions : {questionNo} / {totalQuestions}
            </p>

            <p dangerouslySetInnerHTML={{__html:question}}></p>
            <div>
                {answers.map(answer => (
                    <div>
                        <button disabled={userAnswer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{__html :answer}}></span>    
                        </button>
                    </div>
                ))}
            </div>

        </div>
  )
}

export default QuestionCard