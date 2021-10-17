import { useEffect, useState } from "react"
import { Produto, ProdutoService } from "../model/Produto"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useProdutos() {
    const repo = new ProdutoService()
    const { tabelaVisivel, exibirFormulario, exibirTabela } = useTabelaOuForm()

    const [produto, setProduto] = useState<Produto>()
    const [produtos, setProdutos] = useState<Produto[]>([])

    //useEffect(obterTodos, [])

    useEffect(() => {
        obterTodos()
    })

    async function obterTodos() {
        const res = await repo.get()
        setProdutos(res.data)
    }

    function selecionarProduto(produto: Produto) {
        setProduto(produto)
        exibirFormulario()
    }

    async function excluirProduto(produto: Produto) {
        await repo.delete(produto.id)
        obterTodos()
        exibirTabela()
    }

    async function salvarProduto(produto: Produto) {
        if (produto.id)
            await repo.put(produto)
        else
            await repo.post(produto)
        obterTodos()
        exibirTabela()
    }

    function novoProduto() {
        setProduto(null)
        exibirFormulario()
    }

    return {
        produto,
        produtos,
        salvarProduto,
        novoProduto,
        excluirProduto,
        selecionarProduto,
        obterTodos,
        tabelaVisivel,
        exibirTabela
    }
}
