import { useAuth } from "../context/authContext";
import { IconeCasa, IconeEmpenho, IconeSair } from "./icons";
import MenuItem from "./MenuItem";
import IconOM from './icons/iconOM.png';
import useAppData from "../hooks/useAppData";

export default function MenuLateral() {
    const { tema } = useAppData()
    const { Logout } = useAuth()
    return (
        <aside className={`flex flex-col
         text-gray-700 ${tema === 'dark' ? 'bg-gray-900' : 'bg-gray-200'} `}>
            <div className={`
                flex flex-col 
                items-center justify-center
                h-16 w-20 
            `}>
                <img src={IconOM} alt="Picture of the author" width="50" height="50" />
            </div>
            <ul className="flex-grow">
                <MenuItem url="/" texto="Início" icone={IconeCasa} />
                <MenuItem url="/endereco" texto="Enderecos" icone={IconeEmpenho()} />

            </ul >
            <ul className="">
                <MenuItem onCLick={Logout}
                    texto="Sair"
                    icone={IconeSair}
                    className={`text-red-600 dark:text-red-400
                     hover:bg-red-400 hover:text-white 
                     dark:hover:text-white`} />
            </ul>
        </aside >
    )
}
