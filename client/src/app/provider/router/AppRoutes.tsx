import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthorizationPage from '../../../pages/authPages/AuthorizationPage';
import RegistrationPage from '../../../pages/authPages/RegistrationPage';
import Game from '../../../pages/gamePage/GameButtonStart';
import GamePage from '../../../pages/gamePage/GamePage';

function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Game />} />
      <Route path="/signIn" element={<AuthorizationPage />} />
      <Route path="/signUp" element={<RegistrationPage />} />
      <Route path="/game" element={<GamePage />} />
    </Routes>
  );
}
export default AppRoutes;
