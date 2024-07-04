import React from 'react';
import Theme from './Theme';
import Quest from './Quest';

export type Themes = {
  theme: string;
  id: number;
};

export type Questions = {
  quest: string;
  id: number;
  categoryId: number
};

const themes: Themes[] = [
  { theme: '1 theme', id: 1 },
  { theme: '2 theme', id: 2 },
  { theme: '3 theme', id: 3 },
];

const questions: Questions[] = [
  { quest: '1 quest', id: 1, categoryId: 1 },
  { quest: '2 quest', id: 2, categoryId: 3 },
  { quest: '3 quest', id: 3, categoryId: 2 },
  { quest: '4 quest', id: 4, categoryId: 1 },
  { quest: '5 quest', id: 5, categoryId: 2 },
  { quest: '6 quest', id: 6, categoryId: 1 },
  { quest: '7 quest', id: 7, categoryId: 3 },
  { quest: '8 quest', id: 8, categoryId: 1 },
  { quest: '9 quest', id: 9, categoryId: 2 },
];

type GamePageProps = {};

const GamePage = ({}: GamePageProps): JSX.Element => {
  return (
    <div className=" GamePage">
      <div style={{display: 'flex', flexDirection: 'column'}}>
        {themes.map((theme) => (
          <Theme theme={theme} questions={questions} key={theme.id} />
        ))}
      </div>

    </div>
  );
};
export default GamePage;
