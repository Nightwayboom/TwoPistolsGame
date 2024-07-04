import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button, { ThemeButton } from '../../shared/ui/Button/Button';
import { useAppDispatch } from '../../app/store/store';
import { createNewGameLinesThunk } from '../../entities/game/gameSlices';

type GameProps = {};
function Game({}: GameProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onHandleNewGame = (): void => {
    dispatch(createNewGameLinesThunk())
      .then(() => {
        navigate('/game')
      })
      .catch(console.log);
  };
  return (
    <div className=" Game">
      {/* <Link to="/game"> */}
      <Button type="button" theme={ThemeButton.PRIMARY} onClick={onHandleNewGame}>
        START GAME MY BOY FRIENDS
      </Button>
      {/* </Link> */}
    </div>
  );
}
export default Game;
