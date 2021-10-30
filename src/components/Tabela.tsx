import { Produto } from "../model/Produto";
import { IconeEdicao, IconeLixo } from "./icons";

interface TabelaProps {
    produtos: Produto[]
    produtoSelecionado?: (cliente: Produto) => void
    produtoExcluido?: (cliente: Produto) => void
}

export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.produtoExcluido || props.produtoSelecionado

    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left p-1">Código</th>
                <th className="text-left p-3">Produto</th>
                <th className="text-left p-3">Descricao</th>
                <th className="text-left p-3">Preço</th>
                {exibirAcoes ? <th className="text-left p-2">Ações</th> : false}
            </tr>
        )
    }

    function renderizarDados() {
        return props.produtos?.map((produto, i) => {
            return (
                <tr key={produto.id} className={`${i % 2 === 0 ? 'bg-blue-200' : 'bg-blue-100'}`}>
                    <td className="text-left p-1">{produto.id}</td>
                    <td className="text-left p-3">{produto.item}</td>
                    <td className="text-left p-3">{produto.description}</td>
                    <td className="text-left p-3">{produto.price}</td>
                    {exibirAcoes ? renderizarAcoes(produto) : false}
                </tr>
            )
        })
    }

    function renderizarAcoes(produto: Produto) {
        return (
            <td className="flex justify-center">
                {props.produtoSelecionado ? (
                    <button onClick={() => props.produtoSelecionado?.(produto)}
                        className={`flex justify-center 
                            items-center text-green-600 p-2 m-1
                            rounded-full hover:bg-purple-50`}>
                        {IconeEdicao}
                    </button>

                ) : false}
                {props.produtoExcluido ? (
                    <button onClick={() => props.produtoExcluido?.(produto)}
                        className={`flex justify-center 
                            items-center text-red-600 p-2 m-1
                            rounded-full hover:bg-purple-50`}>
                        {IconeLixo}
                    </button>
                ) : false}
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={` text-gray-100
                bg-gradient-to-r from-blue-500 to-blue-800
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}
