import { useState, useEffect } from 'react'

import history from '../history'
import { axiosInstance } from '../service/api.service'
import { Usuario, UsuarioService } from '../model/Usuario'

export default function useAuth() {
    const usuarioService = new UsuarioService();
    const [authenticated, setAuthenticated] = useState<boolean>(false);
    const [loading, setLoading] = useState(true);
    const [userLogged, setUserLogged] = useState<Usuario | null>(null);

    useEffect(() => {
        const user = localStorage.getItem('admin-template-user')

        if (user) {
            const token = JSON.parse(user)
            axiosInstance.defaults.headers['Authorization'] = `Bearer ${token}`
            setUserLogged(token)
            setAuthenticated(true)
            console.log("auth: " + authenticated)
        }

        setLoading(false);
    }, []);

    async function handleLogin(username: string, password: string) {
        const { data } = await usuarioService.login(username, password)

        axiosInstance.defaults.headers['Authorization'] = `Bearer ${data.accessToken}`
        setAuthenticated(true)
        const user = await userModel(data)
        setUserLogged(user)
        localStorage.setItem('admin-template-user', JSON.stringify(user.accessToken))
        history.push('/')
    }

    async function handleRegister(username: string, password: string) {
        const { data } = await usuarioService.register(username, password)

        axiosInstance.defaults.headers['Authorization'] = `Bearer ${data.accessToken}`
        setAuthenticated(true)
        const user = await userModel(data)
        setUserLogged(user)
        localStorage.setItem('admin-template-user', JSON.stringify(user.accessToken))
        history.push('/')
    }

    async function userModel(user: Usuario): Promise<Usuario> {
        return {
            username: user.username,
            accessToken: user.accessToken
        }
    }

    async function handleLogout(): Promise<void> {
        setAuthenticated(false)
        localStorage.removeItem('admin-template-user')
        axiosInstance.defaults.headers['Authorization'] = undefined
        history.push('/')
    }

    return { authenticated, loading, handleLogin, handleRegister, handleLogout, userLogged }
}
