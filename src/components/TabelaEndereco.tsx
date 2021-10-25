import { Endereco } from "../model/Endereco";
import { IconeEdicao, IconeLixo } from "./icons";

interface TabelaEnderecoProps {
    enderecos: Endereco[]
    enderecoSelecionado?: (endereco: Endereco) => void
    enderecoExcluido?: (endereco: Endereco) => void
}

export default function TabelaEndereco(props: TabelaEnderecoProps) {

    const exibirAcoes = props.enderecoExcluido || props.enderecoSelecionado

    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left p-2">Código</th>
                <th className="text-left p-3">Estado</th>
                <th className="text-left p-2">Cidade</th>
                <th className="text-left p-3">Logradouro</th>
                <th className="text-left p-2">Numero</th>
                {exibirAcoes ? <th className="text-left p-4">Ações</th> : false}
            </tr>
        )
    }

    function renderizarDados() {
        return props.enderecos?.map((endereco, i) => {
            return (
                <tr key={endereco.id} className={`${i % 2 === 0 ? 'bg-blue-200' : 'bg-blue-100'}`}>
                    <td className="text-left p-2">{endereco.id}</td>
                    <td className="text-left p-3">{endereco.estado}</td>
                    <td className="text-left p-2">{endereco.cidade}</td>
                    <td className="text-left p-3">{endereco.logradouro}</td>
                    <td className="text-left p-2">{endereco.numero}</td>
                    {exibirAcoes ? renderizarAcoes(endereco) : false}
                </tr>
            )
        })
    }

    function renderizarAcoes(endereco: Endereco) {
        return (
            <td className="flex justify-center">
                {props.enderecoSelecionado ? (
                    <button onClick={() => props.enderecoSelecionado?.(endereco)}
                        className={`flex justify-center 
                            items-center text-green-600 p-2 m-1
                            rounded-full hover:bg-purple-50`}>
                        {IconeEdicao}
                    </button>

                ) : false}
                {props.enderecoExcluido ? (
                    <button onClick={() => props.enderecoExcluido?.(endereco)}
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
