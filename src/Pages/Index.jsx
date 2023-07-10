import Layout from "../Components/Layout.jsx"
import logo from '../Images/logo-celtics.png'

const Index = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    return (
        <Layout>
            <div className='flex justify-center items-center top-28'>
                <h1>
                    <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center">
                        <h1 className="text-4xl text-green-600 font-bold mb-4 text-center">¡Bienvenido a Celtics Pub {user.name}!</h1>
                        <p className="text-lg text-gray-800 mb-8 text-center">Disfruta de nuestra auténtica comida y cervezas irlandesas.</p>
                        <img
                            className="w-1/2 sm:w-1/4 rounded-full border-4 border-green-600"
                            src={logo}
                            alt="Irish Pub"
                        />
                    </div>
                </h1>
            </div>
        </Layout>
    )
}

export default Index
