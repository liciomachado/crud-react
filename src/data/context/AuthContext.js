import { createContext } from 'react'
import useAuth from '../../hooks/useAppAuth';

const Context = createContext()


function AuthProvider({ children }) {
  const { authenticated, handleLogin, handleLogout, loading, userLogged } = useAuth();

  return (
    <Context.Provider value={{ authenticated, loading, handleLogin, handleLogout, userLogged }}>
      {children}
    </Context.Provider>
  )
}

export { Context, AuthProvider }
