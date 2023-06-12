import { useContext } from "react"
import { CelticsContext } from "../Context/Context"
import { NavLink } from "react-router-dom"
import { UserIcon } from "@heroicons/react/24/solid"
import Layout from "./Layout"
import MiCuenta from "./MiCuenta"


const Navbar = () => {
    const context = useContext(CelticsContext)
    const activeStyle = 'underline underline-offset-4'
    return (
        <Layout>
            <nav className='flex justify-between items-center shadow-md bg-white fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
                <ul className='flex items-center gap-20'>
                    <li className="text-2xl font-bold text-green-950">
                        <NavLink
                            to='/home'
                        >
                            Celtics Pub
                        </NavLink>
                    </li>
                    <li className="font-medium text-lg">
                        <NavLink
                            to='/home/inventario'
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                        >
                            Inventario
                        </NavLink>
                    </li>
                    <li className="font-medium text-lg">
                        <NavLink
                            to='/home/ventas'
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                        >
                            Ventas
                        </NavLink>
                    </li>
                    <li className="font-medium text-lg">
                        <NavLink
                            to='/home/reportes'
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                        >
                            Reportes
                        </NavLink>
                    </li>
                </ul>
                <ul>
                    <li className="flex justify-between items-center gap-1 font-medium px-10 text-lg cursor-pointer"
                        onClick={context.toggleCuenta}>
                        <UserIcon className="w-6 h-6" />
                        Mi Cuenta
                    </li>
                </ul>
            </nav>
            {context.isCuenta && (<MiCuenta />)}
        </Layout>
    )
}

export default Navbar
