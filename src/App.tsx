import React from 'react';
import './App.css';

// Components
import Header from './components/header/Header';
import QuestionCard from './components/questionCard/QuestionCard';

function App() {

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


      <QuestionCard />

      <button className='next' onClick={nextQuestion }>Next</button>
    </div>
  );
}

export default App;
