import React from 'react';
import NavBar from '../widgets/navbar/NavBar';
import AppRoutes from './provider/router/AppRoutes';

function App(): JSX.Element {
  return (
    <div className="App">
      <NavBar />
      <AppRoutes />
    </div>
  );
}

export default App;
