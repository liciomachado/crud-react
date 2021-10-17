import { useState } from "react";
import { Produto } from "../model/Produto";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
    produto: Produto
    produtoMudou?: (produto: Produto) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
    const id = props.produto?.id
    const [item, setItem] = useState(props.produto?.item ?? '')
    const [description, setDescription] = useState(props.produto?.description ?? '')
    const [price, setPrice] = useState(props.produto?.price ?? '')

    return (
        <div>
            {id ? (
                <Entrada texto="Código" valor={id} somenteLeitura />
            ) : false}
            <Entrada
                texto="Item"
                valor={item}
                valorMudou={setItem}
                className="mb-2"
            />
            <Entrada
                texto="Descricao"
                tipo="text"
                valor={description}
                valorMudou={setDescription}
                className="mb-2"
            />
            <Entrada
                texto="Valor"
                tipo="text"
                valor={price}
                valorMudou={setPrice}
                className="mb-2"
            />
            <div className="flex justify-end mt-7">
                <Botao cor="blue"
                    onClick={() => props.produtoMudou({ id, item, description, price })}
                    className="mr-2">
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao cor="gray" onClick={props.cancelado}>Cancelar</Botao>
            </div>
        </div>
    )
}
