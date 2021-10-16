import { useEffect } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import useAuth from "../hooks/useAppAuth";
import useProdutos from "../hooks/useProdutos";

export default function Home() {
    const { authenticated, handleLogout } = useAuth()


    const { produtos, tabelaVisivel, exibirTabela, selecionarProduto, excluirProduto, produto, salvarProduto, novoProduto } = useProdutos()

    function sair() {
        handleLogout()
    }

    return (
        <div className={`
      flex justify-center
      bg-gradient-to-r 
      text-white
    `}>

            <Layout titulo="Lista de compras">
                {tabelaVisivel ? (
                    <>
                        <div className="flex justify-between">
                            <Botao cor="gray" className={"mb-4"} onClick={sair}>Sair</Botao>
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
        </div>
    )
}