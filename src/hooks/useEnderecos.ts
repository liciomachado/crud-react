import { useEffect, useState } from "react"
import { Endereco, EnderecoService } from "../model/Endereco"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useEnderecos() {
    const repo = new EnderecoService()
    const { tabelaVisivel, exibirFormulario, exibirTabela } = useTabelaOuForm()

    const [endereco, setEndereco] = useState<Endereco>()
    const [enderecos, setEnderecos] = useState<Endereco[]>([])

    //useEffect(obterTodos, [])

    useEffect(() => {
        obterTodos()
    })

    async function obterTodos() {
        const res = await repo.get()
        setEnderecos(res.data)
    }

    function selecionarEndereco(endereco: Endereco) {
        setEndereco(endereco)
        exibirFormulario()
    }

    async function excluirEndereco(endereco: Endereco) {
        await repo.delete(endereco.id)
        obterTodos()
        exibirTabela()
    }

    async function salvarEndereco(endereco: Endereco) {
        if (endereco.id)
            await repo.put(endereco)
        else
            await repo.post(endereco)
        obterTodos()
        exibirTabela()
    }

    function novoEndereco() {
        setEndereco(null)
        exibirFormulario()
    }

    return {
        endereco,
        enderecos,
        salvarEndereco,
        novoEndereco,
        excluirEndereco,
        selecionarEndereco,
        obterTodos,
        tabelaVisivel,
        exibirTabela
    }
}
