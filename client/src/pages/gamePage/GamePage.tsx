import React from 'react';
import { useSelector } from 'react-redux';
import Theme from './Theme';
import type { RootState } from '../../app/store/store';

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
  { title: 'ЧЕРНУХА', id: 1, img: '1 img' },
  { title: 'ключевое слово по фотке', id: 2, img: '2 img' },
  { title: '3 theme', id: 3, img: '3 img' },
];

const questions: Questions[] = [
  {
    name: 'суем в 300',
    id: 1,
    categoryId: 1,
    answer: 'da',
    img: 'https://png.pngtree.com/png-clipart/20231017/original/pngtree-burger-food-png-free-download-png-image_13329458.png',
  },
  { name: '300', id: 2, categoryId: 3, answer: 'da', img: 'asd' },
  { name: 'бахнем за 300', id: 3, categoryId: 2, answer: 'da', img: 'asd' },
  { name: 'пихаем в 500', id: 4, categoryId: 1, answer: 'da', img: 'asd' },
  { name: 'повторим за 500', id: 5, categoryId: 2, answer: 'da', img: 'asd' },
  { name: 'высушиваем за 600', id: 6, categoryId: 1, answer: 'da', img: 'asd' },
  { name: '500', id: 7, categoryId: 3, answer: 'da', img: 'asd' },
  { name: '600', id: 8, categoryId: 3, answer: 'da', img: 'asd' },
  { name: 'уйдем за 600', id: 9, categoryId: 2, answer: 'da', img: 'asd' },
];

function GamePage(): JSX.Element {
  const { game, gameLines } = useSelector((state: RootState) => state.game);
  console.log(game, 'Текущая игра');
  console.log(gameLines);

  return (
    <div className="GamePage">
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1 style={{ marginBottom: '60px' }}>Темки</h1>
        {themes.map((theme) => (
          <Theme theme={theme} questions={questions} key={theme.id} />
        ))}
      </div>
    </div>
  );
}

export default GamePage;
