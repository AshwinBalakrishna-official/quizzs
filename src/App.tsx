import React , {useState,useEffect} from 'react';

import './App.css';




// GET QUIZ QUESTIONS AND TYPES OF ENUM
import { fetchQuizQuestions } from './API';
import { Difficulty } from './API';


// Components
import Header from './components/header/Header';
import QuestionCard from './components/questionCard/QuestionCard';

function App() {


  const totalQuestions =10;

  const [loading,setLoading]=useState(false);
  
  const [questions,setQuestions]= useState([]);
  const [number,setNumber]=useState(0);
  const [userAnswers,setUserAnswers]=useState('');
  const [score,setScore]=useState(0);
  const [gameOver,setGameOver]= useState(false)


  console.log("questions =>",fetchQuizQuestions(totalQuestions,Difficulty.EASY));

  const startTrivia =()=>{

  }

  const checkAnswer=(e : React.MouseEvent<HTMLButtonElement>)=>{


  }

  const nextQuestion = () =>{

  }


  return (
    <div className="App" >
      
      <Header />
      <button className='start' onClick={startTrivia}> Start Trivia </button>
      <p className='score'> Score : </p>
      <p>loading question .... </p>


      {/* <QuestionCard questionNo={number+1} totalQuestions={totalQuestions}  question={questions[number].question} answers={questions[number].answers} userAnswer={userAnswers ? userAnswers[number]: undefined}  callback={checkAnswer} /> */}

      <button className='next' onClick={nextQuestion }>Next</button>
    </div>
  );
}

export default App;
