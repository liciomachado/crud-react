import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes/auth.routes';
import history from './history';

import { AppProvider } from './Context/AppContext';

function App() {
  return (
    <AppProvider>
      <Router history={history}>
        <Routes />
      </Router>
    </AppProvider>
  );
}

export default App;
