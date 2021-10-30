import { createContext, useEffect, useState } from "react";

interface AppContextProps {
    tema?: string
    alternarTema?: () => void
}

const AppContext = createContext<AppContextProps>({
})

export function AppProvider(props) {
    const [tema, setTema] = useState('')

    function alternarTema() {
        const novoTema = tema === '' ? 'dark' : ''
        setTema(novoTema)
        sessionStorage.setItem('tema', novoTema)
    }

    useEffect(() => {
        const temaSalvo = sessionStorage.getItem('tema')
        setTema(temaSalvo)
    }, [])

    return (
        <AppContext.Provider value={{
            tema,
            alternarTema
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext
