import { AxiosResponse } from "axios";
import { Endereco } from "../model/Endereco";
import { axiosInstance } from "./api.service";

export default class EnderecoService {

    async get(): Promise<AxiosResponse<Endereco[], any>> {
        return axiosInstance.get('Endereco')
    }

    async getById(id: string): Promise<AxiosResponse<Endereco[], any>> {
        return axiosInstance.get(`Endereco/${id}`)
    }

    async post(produto: Endereco): Promise<AxiosResponse<Endereco, any>> {
        return axiosInstance.post('Endereco', { ...produto, launchDate: Date.now })
    }

    async put(produto: Endereco): Promise<AxiosResponse<Endereco, any>> {
        return axiosInstance.put('Endereco', produto)
    }

    async delete(id: string): Promise<AxiosResponse<Endereco, any>> {
        return axiosInstance.delete(`Endereco/${id}`)
    }
}
