import { useState } from "react";
import AuthInput from "../../components/AuthInput";
import { IconeAtencao } from "../../components/icons";
import { useAuth } from "../../context/authContext";

export default function Autenticacao() {
    const { handleLogin, handleRegister } = useAuth()
    const [erro, setErro] = useState(null)
    const [modo, setModo] = useState<'login' | 'cadastro'>('login')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function exibirErro(msg: any, tempoSegundos = 5) {
        setErro(msg)
        setTimeout(() => setErro(null), tempoSegundos * 1000)
    }

    async function submeter() {
        try {
            if (modo === 'login') {
                await handleLogin(email, senha)
            } else {
                await handleRegister(email, senha)
            }
        } catch (e: any) {
            exibirErro(e?.message ?? 'Erro inesperado')
        }
    }

    //https://source.unsplash.com/collection/2799326
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="hidden md:block md:w-1/2 lg:w-2/3">
                <img src="https://source.unsplash.com/collection/2799326"
                    alt="imagem tela" className="h-screen w-full object-cover" />
            </div>
            <div className="m-10 w-full md:w-1/2 lg:w-1/3">
                <h1 className={`text-3xl font-bold mb-5`}>
                    {modo === 'login' ? 'Entre com a sua conta' : 'Cadastre-se na Plataforma'}
                </h1>
                {erro ? (
                    <div className="flex items-center bg-red-400 text-white py-3 px-5 my-2 
                        border border-red-700 rounded-lg">
                        {IconeAtencao()}
                        <span className="ml-3">{erro}</span>
                    </div>
                ) : false
                }


                <AuthInput label="Usuario"
                    valor={email}
                    tipo="email"
                    valorMudou={setEmail}
                    obrigatorio
                />

                <AuthInput label="Senha"
                    valor={senha}
                    tipo="password"
                    valorMudou={setSenha}
                    obrigatorio
                />

                <button onClick={submeter} className={` w-full bg-indigo-500 hover:bg-indigo-400
                text-white rounded-lg px-4 py-3 mt-6
            `}>
                    {modo === 'login' ? 'Entrar' : 'Cadastrar'}
                </button>

                <hr className="my-6 border-gray-300 w-full" />



                {modo === 'login' ? (
                    <p className="mt-8">
                        Novo por aqui?
                        <a onClick={() => setModo('cadastro')} className={`
                            text-blue-500 hover:text-blue-700 font-semibold cursor-pointer
                        `}> Crie uma conta gratuitamente</a>
                    </p>
                ) : (
                    <p className="mt-8">
                        Já faz parte da nossa comunidade?
                        <a onClick={() => setModo('login')} className={`
                            text-blue-500 hover:text-blue-700 font-semibold cursor-pointer
                        `}> Entre com as suas credenciais</a>
                    </p>
                )}
            </div>
        </div>
    )
}
