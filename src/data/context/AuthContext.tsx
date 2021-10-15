import { createContext, useEffect, useState } from 'react'
import Usuario from '../../model/Usuario'

interface AuthContextProps {
    usuario?: Usuario
    carregando?: boolean
    login?: (email: string, senha: string) => Promise<void>
    cadastrar?: (email: string, senha: string) => Promise<void>
    loginGoogle?: () => Promise<void>
    logout?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})

export function AuthProvider(props: any) {
    const [carregando, setCarregando] = useState(true)
    const [usuario, setUsuario] = useState();

    async function login(email: string, senha: string) {

    }

    async function cadastrar(email: string, senha: string) {

    }

    async function logout() {


    }


    return (
        <AuthContext.Provider value={{
            usuario,
            carregando,
            logout,
            login,
            cadastrar
        }}>
            {props.children}
        </AuthContext.Provider>

    )
}
export default AuthContext
