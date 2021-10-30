import { Link } from 'react-router-dom';

interface MenuItemProps {
    url?: string
    texto: string
    icone: any
    className?: string
    onCLick?: (evento: any) => void
}

export default function MenuItem(props: MenuItemProps) {
    function renderizarLink() {
        return (
            <a className={`
                    flex flex-col 
                    justify-center items-center
                    h-20 w-20 text-gray-600 
                    dark:text-gray-200
                    ${props.className}
                `}>
                {props.icone}
                <span className={` text-xs font-light`}>
                    {props.texto}
                </span>
            </a>
        )

    }

    return (
        <li onClick={props.onCLick} className={`hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer`}>
            {props.url ? (
                <Link to={props.url}>
                    {renderizarLink()}
                </Link>
            ) : (
                renderizarLink()
            )}
        </li>
    )
}
