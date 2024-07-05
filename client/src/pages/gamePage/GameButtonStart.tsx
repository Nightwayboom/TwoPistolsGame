import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './css/ButtomMainAnime.css'
import './css/h2style.css'
import type { RootState } from '../../app/store/store';
import { useAppDispatch } from '../../app/store/store';
import { createNewGameLinesThunk } from '../../entities/game/gameSlices';

function Game(): JSX.Element {
  const { game } = useSelector((state: RootState) => state.game);
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onHandleNewGame = (): void => {
    dispatch(createNewGameLinesThunk())
      .then(() => {
        navigate('/game');
      })
      .catch(console.log);
  };
  console.log(user);
  
  return (
    <div className="game">
      {user ? (<>
      {user && game ? (
        <h2>Ты уже играешь</h2>
      ) : (
        <button type="button" onClick={onHandleNewGame} className='glow-on-hover'>
          ПОГНАЛИ В ИГРУ
        </button>
      )}
      
      </>) : (<>
        <h2 className='h2style'>ЗАРЕГАЙСЯ ИЛИ ВОЙДИ, ЧТОБЫ СЫГРАТЬ</h2>
      </>)}
    </div>
  );
}
export default Game;
