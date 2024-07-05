import React, { useState } from 'react';
import { useAppDispatch } from '../../app/store/store';
import './auth.css';
import { authorizationThunk } from '../../entities/users/authSlice';

function AuthorizationPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(authorizationThunk({ email, password }))
      .then(() => {
        window.location.href = '/';
      })
      .catch(console.log);
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <label htmlFor="email">
        Email:
        <input
          type="login"
          name="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="password">
        Password:
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">LET`S GO</button>
    </form>
  );
}

export default AuthorizationPage;