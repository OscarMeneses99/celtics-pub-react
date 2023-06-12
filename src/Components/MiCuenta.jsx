import { useContext } from "react"
import { CelticsContext } from "../Context/Context"
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid"
const MiCuenta = () => {
    const context = useContext(CelticsContext)
    const user = JSON.parse(localStorage.getItem('user'))
    return (
        <div className="desktop-menu absolute right-0 mx-2">
            <ul>
                <li>
                    <p className="title text-black/60">{user.name} {user.lastname}</p>
                </li>

                <li>
                    <p className="title text-black/60">{user.perfil}</p>
                </li>

                <li className="title flex justify-center items-center border-t mt-5 border-black/60">
                    <button onClick={context.CerrarSesion}
                        className="flex mt-5 items-center">
                        Cerrar Sesion
                        <ArrowRightOnRectangleIcon className="h-6 w-6" />
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default MiCuenta
