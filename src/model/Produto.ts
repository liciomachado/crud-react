import ProdutoService from "../service/produto.service";

export interface Produto {
    id?: string
    item: string
    description: string
    price: string
    launchDate?: Date
}

export { ProdutoService }
