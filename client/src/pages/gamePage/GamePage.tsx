import React from 'react';
import { useSelector } from 'react-redux';
import Theme from './Theme';
import type { RootState } from '../../app/store/store';
import type { GameLineWithQuestion } from '../../entities/game/types/gameTypes';
import { useNavigate } from 'react-router-dom'

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

function GamePage(): JSX.Element {
  const { gameLines, game } = useSelector((state: RootState) => state.game);
  const { user} = useSelector((state: RootState) => state.user);
  const { category } = useSelector((state: RootState) => state.categories);
  const navigate = useNavigate()
  if(!user){
    navigate('/')
  }
  function filterAndSortById(array: GameLineWithQuestion[]): GameLineWithQuestion[] {
    const arrayCopy = [...array];
    return arrayCopy.sort((a, b) => a.id - b.id);
  }
  const sortedGameLines = filterAndSortById(gameLines);
console.log(game);

  return (
    <div className="GamePage">
      {game&& !game.status ? (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h1 style={{ marginBottom: '60px' }}>Темки</h1>
          {category.map((elCategory) => (
            <Theme elCategory={elCategory} gameLines={sortedGameLines} key={elCategory.id} />
          ))}
        </div>
      ) : (
        <>
        <h2>Игра закончилась</h2>
        <h3>Твой счет: {game && game.point}</h3>
        <a href="/">На главную страницу </a>
        </>
      )}
    </div>
  );
}

export default GamePage;
