import Routes from './routes/index';

import { AuthProvider } from './context/authContext';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <Routes />
      </AppProvider>
    </AuthProvider>
  );
}

export default App;
