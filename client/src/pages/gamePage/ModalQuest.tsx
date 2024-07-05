import React, { useState } from 'react';
import './css/ThemeLine.css';
import type { GameLineWithQuestion } from '../../entities/game/types/gameTypes';
import { useAppDispatch } from '../../app/store/store';
import {
  updateAnswerQuestionMinusThunk,
  updateAnswerQuestionPlusThunk,
} from '../../entities/game/gameSlices';

type ModalQuestProps = {
  gameLine: GameLineWithQuestion;
};

function ModalQuest({ gameLine }: ModalQuestProps): JSX.Element {
  const question = gameLine.Question;
  const dispatch = useAppDispatch();
  console.log(gameLine);
  const [answer, setAnswer] = useState('');

  const [ok, setOk] = useState('');
  const [verno, setVerno] = useState(false);
  const [verno1, setVerno1] = useState(false);

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (answer.toLowerCase().trim() === question.answer.toLowerCase().trim()) {
      setVerno(true);
      setOk('Правильно');
      void dispatch(updateAnswerQuestionPlusThunk(gameLine.id));
    } else {
      setVerno1(true);
      setOk('Не правильно');
      void dispatch(updateAnswerQuestionMinusThunk(gameLine.id));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === ' ') {
      e.preventDefault();
      setAnswer((prev) => `${prev} `);
    }
  };

  return (
    <div className="ModalQuest">
      <form onSubmit={onHandleSubmit}>
        <h1>{question.name}</h1>
        {gameLine.Question.categoryId !== 1 && <img src={question.img} alt="img" />}
        <input
          type="text"
          placeholder="Ответ"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button type="submit">Ответить</button>
        {verno && <p className="okk">{ok}</p>}
        {verno1 && <p className="okk">{ok}</p>}
      </form>
    </div>
  );
}
export default ModalQuest;
