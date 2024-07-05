import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../app/store/store';
import Button, { ThemeButton } from '../../shared/ui/Button/Button';
import './auth.css';
import { registrationThunk } from '../../entities/users/authSlice';

function RegistrationPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (password.trim() === checkPassword.trim()) {
      dispatch(registrationThunk({ login, email, password }))
        .then(() => {
          window.location.href = '/';
        })
        .catch(console.log);
    }
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <label htmlFor="name">
        Name:
        <input
          type="text"
          name="name"
          required
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
      </label>
      <label htmlFor="email">
        Email:
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="password">
        Password:
        <input
          type="password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label htmlFor="password">
        Check password:
        <input
          type="password"
          name="password"
          required
          value={checkPassword}
          onChange={(e) => setCheckPassword(e.target.value)}
        />
      </label>
      <div className="button-container">
        <button type="submit" className="login-button">
          LET`S GO MY BOY
        </button>
      </div>
    </form>
  );
}

export default RegistrationPage;
