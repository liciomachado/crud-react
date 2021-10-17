import { createContext } from 'react'
import { useAuth } from '../Context/auth';

const AppContext = createContext()

function AppProvider({ children }) {
    const { Logout, handleLogin, handleRegister, signed, user } = useAuth();

    return (
        <AppContext.Provider value={{ Logout, handleLogin, handleRegister, signed, user }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }
