import React, { useEffect } from 'react';
import NavBar from '../widgets/navbar/NavBar';
import AppRoutes from './provider/router/AppRoutes';
import { useAppDispatch } from './store/store';
import { refreshUser } from '../entities/users/authSlice';
import { loadCurrentGameAndGameLineThunk } from '../entities/game/gameSlices'
import { loadCategoriesThunk } from '../entities/categories/categorySlices'

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(refreshUser());
    void dispatch(loadCurrentGameAndGameLineThunk())
    void dispatch(loadCategoriesThunk())
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      <AppRoutes />
    </div>
  );
}

export default App;
