import { Link } from 'react-router-dom'
import { useAuth } from "../context/authContext";

interface AvatarUsuarioProps {
    className?: string
}

export default function AvatarUsuario(props: AvatarUsuarioProps) {
    const { user } = useAuth()

    return (
        <Link to="/perfil">
            <img src={'/images/avatar.svg'} alt="Avatar do Usuário"
                className={`h-10 w-10 rounded-full cursor-pointer ${props.className}`}
            />
        </Link>
    )
}
