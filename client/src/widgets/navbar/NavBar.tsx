import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store/store';
import { useAppDispatch } from '../../app/store/store';
import { logoutThunk } from '../../entities/users/authSlice';

function NavBar(): JSX.Element {
  const { user, game } = useSelector((state: RootState) => state);
  const dispatch = useAppDispatch();

  const onHandleLogout = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    dispatch(logoutThunk()).then().catch(console.log);
  };
  return (
    <nav className="cyberpunk-navbar">
      <div className="logo">Игруля</div>
      <ul className="nav-links">
        <li>
          <NavLink to="/">
            <a>Главная</a>
          </NavLink>
        </li>
        {user ? (
          <>
            {user.user && game.game && (
              <>
                <li>Привет {user.user.login}</li>
                <li>Твой счет: {game.game.point}</li>
              </>
            )}
            <button type="button" onClick={onHandleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/signUp">
                <a>Регистрейшен</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/signIn">
                <a>Авторизейшен</a>
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
export default NavBar;
