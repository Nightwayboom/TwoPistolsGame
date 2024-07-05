import React, { useState } from 'react';
import { Questions, Themes } from './GamePage';
import './ThemeLine.css';
import ModalWindow from '../../shared/ui/Modal/Modal';
import ModalQuest from './ModalQuest';

type ThemeProps = {
//   theme: Themes;
//   questions: Questions[];
  elCategory: Themes;
  gameLines: {
    Question: Questions;
  }[];
};

const Theme = ({ elCategory, gameLines }: ThemeProps): JSX.Element => {
  const [activeQuestionId, setActiveQuestionId] = useState<number | null>(null);

  const handleOpenModal = (id: number) => {
    setActiveQuestionId(id);
  };

  const handleCloseModal = () => {
    setActiveQuestionId(null);
  };

  return (
    <div className="ThemeLine">
      <div className="theme">{elCategory.title}</div>
      {gameLines
        .filter((gameLine) => gameLine.Question.categoryId === elCategory.id)
        .map((gameLine) => (
          <div key={gameLine.Question.id}>
            <button type="button" onClick={() => handleOpenModal(gameLine.Question.id)}>
              <h2 className="question">{gameLine.Question.name}</h2>
            </button>
            {activeQuestionId === gameLine.Question.id && (
              <ModalWindow active={true} setActive={handleCloseModal}>
                <ModalQuest gameLine={gameLine} />
              </ModalWindow>
            )}
          </div>
        ))}
    </div>
  );
};
export default Theme;
