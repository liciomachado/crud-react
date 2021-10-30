import EnderecoService from "../service/endereco.service";

export interface Endereco {
    id?: string
    estado: string
    cidade: string
    logradouro: string
    numero: string
}

export { EnderecoService }
