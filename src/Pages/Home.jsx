import Navbar from "../Components/Navbar"
import Layout from "../Components/Layout"
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
