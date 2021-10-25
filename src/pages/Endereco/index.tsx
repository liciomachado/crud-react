import { useHistory } from "react-router-dom";
import Botao from "../../components/Botao";
import FormularioEndereco from "../../components/FormularioEndereco";
import Layout from "../../components/Layout";
import TabelaEndereco from "../../components/TabelaEndereco";
import { useAuth } from "../../context/authContext";
import useEnderecos from "../../hooks/useEnderecos";

export default function Endereco() {
    const history = useHistory();
    const { Logout, user } = useAuth()

    const { enderecos, tabelaVisivel, exibirTabela, selecionarEndereco, excluirEndereco, endereco, salvarEndereco, novoEndereco } = useEnderecos()

    return (
        <div className={`
      flex justify-center
      bg-gradient-to-r 
      text-white
    `}>

            <Layout titulo={`Lista de Enderecos de ${user.username}`}>
                {tabelaVisivel ? (
                    <>
                        <div className="flex justify-between">
                            <Botao cor="gray" className={"mb-4"} onClick={Logout}>Sair</Botao>
                            <Botao cor="green" className={"mb-4"} onClick={() => history.push('/')}>Produtos</Botao>
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
        </div>
    )
}
