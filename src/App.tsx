import Routes from './routes/index';

import { AuthProvider } from './context/authContext';

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
