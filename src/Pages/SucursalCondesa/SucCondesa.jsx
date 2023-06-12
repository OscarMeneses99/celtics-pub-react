import NavbarClientes from '../../Components/NavbarClientes'
import { Outlet } from "react-router-dom"
import Layout from "../../Components/Layout"

const SucCondesa = () => {
    return (
        <Layout>
            <NavbarClientes />
            <div className="flex justify-center items-center mt-20">
                <Outlet />
            </div>
        </Layout>
    )
}

export default SucCondesa
