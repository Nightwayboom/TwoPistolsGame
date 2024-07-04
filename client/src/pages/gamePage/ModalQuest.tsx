import React from 'react';
import { Questions } from './GamePage';
import './ThemeLine.css'

type ModalQuestProps = {
  question: Questions;
};

const ModalQuest = ({ question }: ModalQuestProps): JSX.Element => {
    
  return (
    <div className='ModalQuest'>
      <h1>{question.name}</h1>
        <img src={question.img} alt="img" />
      <input type="text" placeholder='Ответ'/>
      <button type='button'>Ответить</button>
    </div>
  );
};
export default ModalQuest;
