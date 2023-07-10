import { BrowserRouter, Outlet, useRoutes } from 'react-router-dom'
import { ContextProvider } from '../Context/Context'
import NotFound from './NotFound'
import Home from './Home'
import Login from './Login'
import Index from './Index'
import Alimentos from './SucursalCondesa/Alimentos'
import Bebidas from './SucursalCondesa/Bebidas'
import MyOrder from './MyOrder'
import MyOrders from './MyOrders.jsx'
import Inventario from './Inventario'
import Ventas from './Ventas'
import Reportes from './Reportes'
import SucCondesa from './SucursalCondesa/SucCondesa'
import SobreNosotros from './SucursalCondesa/SobreNosotros'
import IndexCondesa from './SucursalCondesa/IndexCondesa'
import Productos from './Productos'
import '../App.css'



const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Login />,
      errorElement: <NotFound />
    },
    {
      path: '/home',
      element: <Home />,
      children: [
        {
          index: true,
          element: <Index />
        },
        {
          path: '/home/productos',
          element: <Productos />
        },
        {
          path: '/home/ventas',
          element: <Ventas />
        },
        {
          path: '/home/reportes',
          element: <Reportes />
        },
        {
          path: '/home/inventario',
          element: <Inventario />
        },
      ],
    },
    {
      path: '/condesa',
      element: <SucCondesa />,
      children: [
        {
          index: true,
          element: <IndexCondesa />
        },
        {
          path: '/condesa/alimentos',
          element: <Alimentos />,
        },
        {
          path: '/condesa/bebidas',
          element: <Bebidas />,
        },
        {
          path: '/condesa/sobrenosotros',
          element: <SobreNosotros />,
        }
      ],
    },
    {
      path: '/my-orders',
      element: <MyOrders />,
    },
    {
      path: '/my-orders/last',
      element: <MyOrder />,
    },
    {
      path: '/my-orders/:id',
      element: <MyOrder />,
    },
    {
      path: '/my-order',
      element: <MyOrder />,
    },
  ])
  return routes
}

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <AppRoutes />
        <Outlet />
      </BrowserRouter>
    </ContextProvider>

  )
}

export default App