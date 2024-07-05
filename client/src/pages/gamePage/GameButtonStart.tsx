import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button, { ThemeButton } from '../../shared/ui/Button/Button';
import type { RootState } from '../../app/store/store';
import { useAppDispatch } from '../../app/store/store';
import { createNewGameLinesThunk } from '../../entities/game/gameSlices';

function Game(): JSX.Element {
  const { game } = useSelector((state: RootState) => state.game);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onHandleNewGame = (): void => {
    dispatch(createNewGameLinesThunk())
      .then(() => {
        navigate('/game');
      })
      .catch(console.log);
  };
  return (
    <div className=" Game">
      {game ? (
        <h2>Ты уже играешь</h2>
      ) : (
        <Button type="button" theme={ThemeButton.PRIMARY} onClick={onHandleNewGame}>
          START GAME MY BOY FRIENDS
        </Button>
      )}
    </div>
  );
}
export default Game;
