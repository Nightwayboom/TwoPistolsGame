import React, { useState } from 'react';
import { Questions, Themes } from './GamePage';
import './ThemeLine.css';
import ModalWindow from '../../shared/ui/Modal/Modal';
import ModalQuest from './ModalQuest';

type ThemeProps = {
  theme: Themes;
  questions: Questions[];
};

const Theme = ({ theme, questions }: ThemeProps): JSX.Element => {
  const [activeQuestionId, setActiveQuestionId] = useState<number | null>(null);

  const handleOpenModal = (id: number) => {
    setActiveQuestionId(id);
  };

  const handleCloseModal = () => {
    setActiveQuestionId(null);
  };

  return (
    <div className='ThemeLine'>
      <div className="theme">{theme.title}</div>
      {questions
        .filter((question) => question.categoryId === theme.id)
        .map((question) => (
          <div key={question.id}>
            <button type="button" onClick={() => handleOpenModal(question.id)}>
              <h2 className="question">{question.name}</h2>
            </button>
            {activeQuestionId === question.id && (
              <ModalWindow active={true} setActive={handleCloseModal}>
                <ModalQuest question={question} />
              </ModalWindow>
            )}
          </div>
        ))}
    </div>
  );
};
export default Theme;
