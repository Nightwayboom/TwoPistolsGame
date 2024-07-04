import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store/store';
import { useAppDispatch } from '../../app/store/store';
import { logoutThunk } from '../../entities/users/authSlice';

function NavBar(): JSX.Element {
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();

  const onHandleLogout = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    dispatch(logoutThunk()).then().catch(console.log);
  };
  return (
    <nav className="cyberpunk-navbar">
      <div className="logo">Игруля</div>
      <ul className="nav-links">
        {user ? (
          <>
            <li>
              <NavLink to="/">
                <a>Главная</a>
              </NavLink>
            </li>
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
