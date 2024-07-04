import React from 'react';
import { Questions } from './GamePage';
import './ThemeLine.css'

type ModalQuestProps = {
  question: Questions;
};

const ModalQuest = ({ question }: ModalQuestProps): JSX.Element => {
    console.log(question);
    
  return (
    <div className='ModalQuest'>
      <h1 style={{color: 'black'}}>{question.name}</h1>
        <img src={question.img} alt="img" style={{height: '120px'}} />
      <input type="text" placeholder='Ответ'/>
      <button>Ответить</button>
    </div>
  );
};
export default ModalQuest;
