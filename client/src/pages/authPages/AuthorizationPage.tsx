/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import { useAppDispatch } from '../../app/store/store';
import './auth.css';

function AuthorizationPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form>
      <input
        type="login"
        name="login"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">login</button>
    </form>
  );
}

export default AuthorizationPage;
