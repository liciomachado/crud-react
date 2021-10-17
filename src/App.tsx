import Routes from './routes/index';

import { AuthProvider } from './Context/auth';

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
