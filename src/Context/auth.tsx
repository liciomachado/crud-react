import React, { createContext, useState, useEffect, useContext } from 'react';
import { Usuario, UsuarioService } from '../model/Usuario';
import { axiosInstance } from '../service/api.service';


interface AuthContextData {
  signed: boolean;
  user: Usuario | null;
  handleLogin(username: string, password: string): Promise<void>;
  handleRegister(username: string, password: string): Promise<void>;
  Logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<Usuario | null>(null);

  const usuarioService = new UsuarioService();

  useEffect(() => {
    const storagedUser = sessionStorage.getItem('@App:user');
    const storagedToken = sessionStorage.getItem('@App:token');

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
      axiosInstance.defaults.headers['Authorization'] = `Bearer ${storagedToken}`
    }
  }, []);

  async function handleLogin(username: string, password: string) {
    const { data } = await usuarioService.login(username, password)

    const user = await userModel(data)
    setUser(user);
    axiosInstance.defaults.headers['Authorization'] = `Bearer ${data.accessToken}`

    sessionStorage.setItem('@App:user', JSON.stringify(data));
    sessionStorage.setItem('@App:token', data.accessToken);
  }

  async function handleRegister(username: string, password: string) {
    const { data } = await usuarioService.register(username, password)

    const user = await userModel(data)
    setUser(user);
    axiosInstance.defaults.headers['Authorization'] = `Bearer ${user.accessToken}`

    sessionStorage.setItem('@App:user', JSON.stringify(user));
    sessionStorage.setItem('@App:token', user.accessToken);
  }

  async function userModel(user: Usuario): Promise<Usuario> {
    return {
      username: user.username,
      accessToken: user.accessToken
    }
  }

  function Logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), user, handleLogin, handleRegister, Logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
