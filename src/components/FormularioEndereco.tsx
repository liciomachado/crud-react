import { useState } from "react";
import { Endereco } from "../model/Endereco";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
    endereco: Endereco
    enderecoMudou?: (endereco: Endereco) => void
    cancelado?: () => void
}

export default function FormularioEndereco(props: FormularioProps) {
    const id = props.endereco?.id
    const [estado, setEstado] = useState(props.endereco?.estado ?? '')
    const [cidade, setCidade] = useState(props.endereco?.cidade ?? '')
    const [logradouro, setLogradouro] = useState(props.endereco?.logradouro ?? '')
    const [numero, setNumero] = useState(props.endereco?.numero ?? '')

    return (
        <div>
            {id ? (
                <Entrada texto="Código" valor={id} somenteLeitura />
            ) : false}
            <Entrada
                texto="Estado"
                valor={estado}
                valorMudou={setEstado}
                className="mb-2"
            />
            <Entrada
                texto="Cidade"
                tipo="text"
                valor={cidade}
                valorMudou={setCidade}
                className="mb-2"
            />
            <Entrada
                texto="Logradouro"
                tipo="text"
                valor={logradouro}
                valorMudou={setLogradouro}
                className="mb-2"
            />
            <Entrada
                texto="Numero"
                tipo="text"
                valor={numero}
                valorMudou={setNumero}
                className="mb-2"
            />
            <div className="flex justify-end mt-7">
                <Botao cor="blue"
                    onClick={() => props.enderecoMudou({ id, estado, cidade, logradouro, numero })}
                    className="mr-2">
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao cor="gray" onClick={props.cancelado}>Cancelar</Botao>
            </div>
        </div>
    )
}
