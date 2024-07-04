import React, { useEffect } from 'react';
import NavBar from '../widgets/navbar/NavBar';
import AppRoutes from './provider/router/AppRoutes';
import { useAppDispatch } from './store/store'
import { refreshUser } from '../entities/users/authSlice'

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(refreshUser()).catch(console.log);
   
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      <AppRoutes />
    </div>
  );
}

export default App;
