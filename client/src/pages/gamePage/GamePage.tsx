import React from 'react';
import { useSelector } from 'react-redux';
import Theme from './Theme';
import type { RootState } from '../../app/store/store';
import type { GameLineWithQuestion } from '../../entities/game/types/gameTypes';

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
  const { gameLines } = useSelector((state: RootState) => state.game);
  const { category } = useSelector((state: RootState) => state.categories);
  function filterAndSortById(array: GameLineWithQuestion[]): GameLineWithQuestion[] {
    const arrayCopy = [...array];
    return arrayCopy.sort((a, b) => a.id - b.id);
  }
  const sortedGameLines = filterAndSortById(gameLines);

  return (
    <div className="GamePage">
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1 style={{ marginBottom: '60px' }}>Темки</h1>
        {category.map((elCategory) => (
          <Theme elCategory={elCategory} gameLines={sortedGameLines} key={elCategory.id} />
        ))}
      </div>
    </div>
  );
}

export default GamePage;
