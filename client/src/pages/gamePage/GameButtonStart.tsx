import React from 'react';
import Button, { ThemeButton } from '../../shared/ui/Button/Button';
import { Link } from 'react-router-dom';

type GameProps = {};
const Game = ({}: GameProps): JSX.Element => {
  return (
    <div className=" Game">
      <Link to='/game'>

        <Button type="button" theme={ThemeButton.PRIMARY}>
          START GAME MY BOY FRIENDS
        </Button>
      </Link>
    </div>
  );
};
export default Game;
