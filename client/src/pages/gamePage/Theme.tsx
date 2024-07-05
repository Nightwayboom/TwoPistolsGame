import React, { useState } from 'react';
import type { Themes } from './GamePage';
import './ThemeLine.css';
import ModalWindow from '../../shared/ui/Modal/Modal';
import ModalQuest from './ModalQuest';
import type { GameLineWithQuestion } from '../../entities/game/types/gameTypes';

type ThemeProps = {
  //   theme: Themes;
  //   questions: Questions[];
  elCategory: Themes;
  gameLines: GameLineWithQuestion[];
};

function Theme({ elCategory, gameLines }: ThemeProps): JSX.Element {
  const [activeQuestionId, setActiveQuestionId] = useState<number | null>(null);

  const handleOpenModal = (id: number): void => {
    setActiveQuestionId(id);
  };

  const handleCloseModal = (): void => {
    setActiveQuestionId(null);
  };

  return (
    <div className="ThemeLine">
      <div className="theme">{elCategory.title}</div>
      {gameLines
        .filter((gameLine) => gameLine.Question.categoryId === elCategory.id)
        .map((gameLine) => (
          <div key={gameLine.Question.id}>
            {gameLine.status ? (
              <button type="button" onClick={() => handleOpenModal(gameLine.Question.id)} disabled>
                <h2 className="question">{gameLine.Question.name}</h2>
              </button>
            ) : (
              <button type="button" onClick={() => handleOpenModal(gameLine.Question.id)}>
                <h2 className="question">{gameLine.Question.name}</h2>
              </button>
            )}
            {activeQuestionId === gameLine.Question.id && (
              <ModalWindow active={activeQuestionId} setActive={handleCloseModal}>
                <ModalQuest gameLine={gameLine} />
              </ModalWindow>
            )}
          </div>
        ))}
    </div>
  );
}
export default Theme;
