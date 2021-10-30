import useAppData from "../hooks/useAppData";
import AvatarUsuario from "./AvatarUsuario";
import BotaoAlternarTema from "./BotaoAlternarTema";

interface CabecalhoProps {
}

export default function Cabecalho(props: CabecalhoProps) {
    const { tema, alternarTema } = useAppData()

    return (
        <div className={`flex`}>
            <div className={`flex flex-grow justify-end items-center`}>
                <BotaoAlternarTema tema={tema} alternarTema={alternarTema} />
                <AvatarUsuario className="ml-3" />
            </div>
        </div>
    )
}
