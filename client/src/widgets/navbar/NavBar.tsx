import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

function NavBar(): JSX.Element {
  return (
    <nav className="cyberpunk-navbar">
      <div className="logo">Игруля</div>
      <ul className="nav-links">
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
      </ul>
    </nav>
  );
}
export default NavBar;
