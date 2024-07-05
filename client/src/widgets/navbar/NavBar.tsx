import React, { useState } from 'react';
import './NavBar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store/store';
import { useAppDispatch } from '../../app/store/store';
import { logoutThunk } from '../../entities/users/authSlice';
import RatingModal from '../../shared/ui/modalRating/RatingModal';

function NavBar(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { user, game } = useSelector((state: RootState) => state);
  const dispatch = useAppDispatch();
  console.log(game.rating);

  const openModal = (): void => setIsModalOpen(true);
  const closeModal = (): void => setIsModalOpen(false);

  const onHandleLogout = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    dispatch(logoutThunk()).then().catch(console.log);
    navigate('/');
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
        <li>
          <button type="button" onClick={openModal} className='RatingButton'>
            Рейтинг
          </button>
        </li>
        {user.user ? (
          <>
            {user.user && (
              <>
                <li>Привет {user.user.login}</li>
                {game.game && <li>Твой счет: {game.game.point}</li>}
              </>
            )}
            <button type="button" onClick={onHandleLogout} className='logoutButton'>
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
      {isModalOpen && <RatingModal users={game.rating} onClose={closeModal} />}
    </nav>
  );
}
export default NavBar;
