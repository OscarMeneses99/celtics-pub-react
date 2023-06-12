import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import Carrito from './Carrito'
import { useContext } from 'react'
import { CelticsContext } from '../Context/Context'
import { Link } from 'react-router-dom'


const NavbarClientes = () => {
    const context = useContext(CelticsContext)
    return (
        <nav className="flex justify-between items-center bg-white fixed z-10 top-0 w-full py-5 px-8 text-sm font-light gap-4">
            <ul className=" max-w-4xl p-4 mx-auto">
                <li className='text-center'>
                    <Link to='/condesa'>
                        <h1 className="text-2xl font-bold">Pub Irlandes</h1>
                    </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <button
                        className="text-xl focus:outline-none"
                        onClick={context.toggleMenu}
                    >
                        <ShoppingCartIcon className="w-6 h-6" />
                        <div className='w-5 h-5 text-white bg-black absolute flex justify-center items-center rounded-lg top-6 right-3'>
                            3
                        </div>
                    </button>
                    <div className='top-28 right-0'>
                        {context.isOpen && (
                            <Carrito />
                        )}
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default NavbarClientes
