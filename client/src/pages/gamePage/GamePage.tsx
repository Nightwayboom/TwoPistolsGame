import React from 'react';
import Theme from './Theme';

export type Themes = {
  title: string;
  img: string;
  id: number;
};

export type Questions = {
  name: string;
  id: number;
  categoryId: number;
  answer: string;
  img: string;
};

const themes: Themes[] = [
  { title: '1 theme', id: 1, img: '1 img' },
  { title: '2 theme', id: 2, img: '2 img' },
  { title: '3 theme', id: 3, img: '3 img' },
];

const questions: Questions[] = [
  { name: '1 quest', id: 1, categoryId: 1, answer: 'da', img: 'https://png.pngtree.com/png-clipart/20231017/original/pngtree-burger-food-png-free-download-png-image_13329458.png' },
  { name: '2 quest', id: 2, categoryId: 3, answer: 'da', img: 'asd' },
  { name: '3 quest', id: 3, categoryId: 2, answer: 'da', img: 'asd' },
  { name: '4 quest', id: 4, categoryId: 1, answer: 'da', img: 'asd' },
  { name: '5 quest', id: 5, categoryId: 2, answer: 'da', img: 'asd' },
  { name: '6 quest', id: 6, categoryId: 1, answer: 'da', img: 'asd' },
  { name: '7 quest', id: 7, categoryId: 3, answer: 'da', img: 'asd' },
  { name: '8 quest', id: 8, categoryId: 3, answer: 'da', img: 'asd' },
  { name: '9 quest', id: 9, categoryId: 2, answer: 'da', img: 'asd' },
];

const GamePage: React.FC = () => {
  return (
    <div className="GamePage">
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {themes.map((theme) => (
          <Theme theme={theme} questions={questions} key={theme.id} />
        ))}
      </div>
    </div>
  );
};

export default GamePage;
