import { AxiosResponse } from "axios";
import { Produto } from "../model/Produto";
import { axiosInstance } from "./api.service";

export default class ProdutoService {

    async get(): Promise<AxiosResponse<Produto[], any>> {
        return axiosInstance.get('Product')
    }

    async getById(id: string): Promise<AxiosResponse<Produto[], any>> {
        return axiosInstance.get(`Product/${id}`)
    }

    async post(produto: Produto): Promise<AxiosResponse<Produto, any>> {
        return axiosInstance.post('Product', { ...produto, launchDate: Date.now })
    }

    async put(produto: Produto): Promise<AxiosResponse<Produto, any>> {
        return axiosInstance.put('Product', produto)
    }

    async delete(id: string): Promise<AxiosResponse<Produto, any>> {
        return axiosInstance.delete(`Product/${id}`)
    }
}
