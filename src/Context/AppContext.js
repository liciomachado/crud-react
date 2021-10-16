import { createContext } from 'react'
import useAuth from '../hooks/useAppAuth';

const AppContext = createContext()


function AppProvider({ children }) {
    const { authenticated, handleLogin, handleLogout, loading, userLogged } = useAuth();

    return (
        <AppContext.Provider value={{ authenticated, loading, handleLogin, handleLogout, userLogged }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }
