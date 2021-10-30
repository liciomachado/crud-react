import Botao from "../../components/Botao";
import FormularioEndereco from "../../components/FormularioEndereco";
import Layout from "../../components/Layout";
import TabelaEndereco from "../../components/TabelaEndereco";
import { useAuth } from "../../context/authContext";
import useEnderecos from "../../hooks/useEnderecos";

export default function Endereco() {
    const { user } = useAuth()

    const { enderecos, tabelaVisivel, exibirTabela, selecionarEndereco, excluirEndereco, endereco, salvarEndereco, novoEndereco } = useEnderecos()

    return (
        <Layout titulo={`Lista de Enderecos de ${user.username}`}>
            {tabelaVisivel ? (
                <>
                    <div className="flex justify-end">
                        <Botao cor="green" className={"mb-4"} onClick={novoEndereco}>Novo Endereco</Botao>
                    </div>
                    <TabelaEndereco enderecos={enderecos}
                        enderecoSelecionado={selecionarEndereco}
                        enderecoExcluido={excluirEndereco} />
                </>
            ) : (
                <FormularioEndereco
                    endereco={endereco}
                    cancelado={exibirTabela}
                    enderecoMudou={salvarEndereco}
                />
            )}
        </Layout>
    )
}
