import React from 'react';
import { Questions, Themes } from './GamePage';

type ThemeProps = {
  theme: Themes;
  questions: Questions[];
};

const Theme = ({ theme, questions }: ThemeProps): JSX.Element => {
  return (
    <div>
      <div>{theme.theme}</div>
      {questions
        .filter((question) => question.categoryId === theme.id)
        .map((question) => (
          <>
            <h2>{question.quest}</h2>
          </>
        ))}
    </div>
  );
};
export default Theme;
