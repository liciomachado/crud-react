import { useState, useEffect } from 'react'

import UsuarioService from '../service/usuario.service'
import history from '../history'
import { axiosInstance } from '../service/api.service'
import { Usuario } from '../model/Usuario'

export default function useAuth() {
    const usuarioService = new UsuarioService();
    const [authenticated, setAuthenticated] = useState<boolean>(false);
    const [loading, setLoading] = useState(true);
    const [userLogged, setUserLogged] = useState<Usuario | null>(null);

    useEffect(() => {
        const user = localStorage.getItem('admin-template-user')

        if (user) {
            const token = JSON.parse(user)
            setAuthenticated(true)
            axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
            setUserLogged(token)
            console.log("auth: " + authenticated)
        }

        setLoading(false);
    }, []);

    async function handleLogin(username: string, password: string) {
        const { data } = await usuarioService.login(username, password)

        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`
        setAuthenticated(true)
        const user = await userModel(data)
        setUserLogged(user)
        localStorage.setItem('admin-template-user', JSON.stringify(user.accessToken))
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

    return { authenticated, loading, handleLogin, handleLogout, userLogged }
}
