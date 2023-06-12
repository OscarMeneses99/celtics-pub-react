import { Link } from 'react-router-dom'
import { ChevronRightIcon } from "@heroicons/react/24/solid"
import Bebidas from '../../Images/bebidas.png'
import Alimentos from '../../Images/alimentos.png'

const IndexCondesa = () => {
  return (
    <div className="fixed justify-center items-center top-28">
      <div className='justify-center items center m-5'>
        <h2 className="text-2xl font-bold text-center">¡Bienvenid@ al Pub!</h2>
        <p className='text-lg font-light text-center text-black/60'>Realiza tu orden seleccionando una opción</p>
      </div>

      <Link to="/condesa/alimentos">
        <figure className='flex justify-between items-center border border-black/60 rounded-lg mb-5 p-5'>
          <div className='flex justify-center items-center'>
            <img src={Alimentos} alt="alimentos"
              className='h-32 w-32 object-cover mr-4' />
            <p className='font-bold text-2xl'>Alimentos</p>
          </div>
          <ChevronRightIcon className="w-20 h-20" />
        </figure>
      </Link>
      <Link to="/condesa/bebidas">
        <figure className='flex justify-between items-center border border-black/60 rounded-lg mb-5 p-5'>
          <div className='flex justify-center items-center'>
            <img src={Bebidas} alt="bebidas"
              className='h-32 w-32 object-cover mr-8' />
            <p className='font-bold text-2xl'>Bebidas</p>
          </div>
          <ChevronRightIcon className="w-20 h-20" />
        </figure>
      </Link>

      <Link to="/condesa/sobrenosotros">
        <button className='primary-button'>
          Conoce más sobre nosotros
        </button>
      </Link>
    </div>
  )
}

export default IndexCondesa

