import { AxiosResponse } from "axios";
import { Usuario } from "../model/Usuario";
import { axiosInstance } from "./api.service";

export default class UsuarioService {

    async login(userName: string, password: string): Promise<AxiosResponse<Usuario, any>> {
        return axiosInstance.post('Auth/signin', { userName, password })
    }

    async register(userName: string, password: string): Promise<AxiosResponse<Usuario, any>> {
        return axiosInstance.post('Auth/register', { userName, password })
    }
}
