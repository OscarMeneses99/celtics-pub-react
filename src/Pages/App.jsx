import { BrowserRouter, Outlet, useRoutes } from 'react-router-dom'
import { ContextProvider } from '../Context/Context.jsx'
import NotFound from './NotFound.jsx'
import Home from './Home.jsx'
import Login from './Login.jsx'
import Index from './Index.jsx'
import Alimentos from './SucursalCondesa/Alimentos.jsx'
import Bebidas from './SucursalCondesa/Bebidas.jsx'
import MyOrder from './MyOrder.jsx'
import MyOrders from './MyOrders.jsx'
import Inventario from './Inventario.jsx'
import Ventas from './Ventas.jsx'
import Reportes from './Reportes.jsx'
import SucCondesa from './SucursalCondesa/SucCondesa.jsx'
import SobreNosotros from './SucursalCondesa/SobreNosotros.jsx'
import IndexCondesa from './SucursalCondesa/IndexCondesa.jsx'
import Productos from './Productos.jsx'
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