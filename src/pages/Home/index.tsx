import Botao from "../../components/Botao";
import Formulario from "../../components/Formulario";
import Layout from "../../components/Layout";
import Tabela from "../../components/Tabela";
import { useAuth } from "../../context/authContext";
import useProdutos from "../../hooks/useProdutos";

export default function Home() {
    const { user } = useAuth()

    const { produtos, tabelaVisivel, exibirTabela, selecionarProduto, excluirProduto, produto, salvarProduto, novoProduto } = useProdutos()

    return (

        <Layout titulo={`Lista de compras de ${user.username}`}>
            {tabelaVisivel ? (
                <>
                    <div className="flex justify-end">
                        <Botao cor="green" className={"mb-4"} onClick={novoProduto}>Novo Produto</Botao>
                    </div>
                    <Tabela produtos={produtos}
                        produtoSelecionado={selecionarProduto}
                        produtoExcluido={excluirProduto} />
                </>
            ) : (
                <Formulario
                    produto={produto}
                    cancelado={exibirTabela}
                    produtoMudou={salvarProduto}
                />
            )}
        </Layout>
    )
}
