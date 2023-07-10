import Navbar from "../Components/Navbar.jsx"
import Layout from "../Components/Layout.jsx"
import { Outlet } from "react-router-dom"

const Home = () => {
  return (
    <Layout>
      <Navbar />
      <div className="flex justify-center items-center mt-20">
        <Outlet />
      </div>
    </Layout>
  )
}

export default Home
