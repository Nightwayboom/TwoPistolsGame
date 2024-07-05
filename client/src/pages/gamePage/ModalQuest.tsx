import React from 'react';
import { Questions } from './GamePage';
import './ThemeLine.css';

type ModalQuestProps = {
  gameLine: {
    Question: Questions;
  };
};

const ModalQuest = ({ gameLine }: ModalQuestProps): JSX.Element => {
  const question = gameLine.Question;
  console.log(gameLine);

  return (
    <div className="ModalQuest">
      <h1>{question.name}</h1>
      {gameLine.Question.categoryId === 2 && (
        <img src={question.img} alt="img" />
      )}
      <input type="text" placeholder="Ответ" />
      <button type="button">Ответить</button>
    </div>
  );
};
export default ModalQuest;
