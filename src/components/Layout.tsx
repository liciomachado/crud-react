import useAppData from "../hooks/useAppData";
import Cabecalho from "./Cabecalho";
import MenuLateral from "./MenuLateral";
import Titulo from "./Titulo";

interface LayoutProps {
    titulo: string
    children: any
}

export default function Layout(props: LayoutProps) {
    const { tema } = useAppData()

    return (
        <div className={`${tema} flex h-screen w-screen`}>
            <MenuLateral />
            <div className={`flex flex-col w-full p-7 ${tema === 'dark' ? 'bg-gray-700' : 'bg-gray-300'} `}>
                <Cabecalho />
                <div className={`
                flex justify-center
                bg-gradient-to-r 
                text-white
                `}>
                    <div className={`
                        flex flex-col w-3/4
                        ${tema === 'dark' ? 'bg-gray-500' : 'bg-white'} text-gray-800 rounded-md
                    `}>
                        <Titulo>{props.titulo}</Titulo>
                        <div className="p-12">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
