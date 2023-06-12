import '../Styles/Login.css'
import data from '../DataBase/login.json'
import md5 from 'md5'
import logo from '../Images/logo-celtics.png'


const Login = () => {



    const handleEnter = addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleLogin()
        }
    })

    const handleLogin = () => {
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value
        const message = document.querySelector('.inactive')
        const user = data.users.find(user => user.username === username && user.password === md5(password))
        if (user) {
            localStorage.setItem('user', JSON.stringify(user))
            if (user.perfil === 'admin') {
                window.location.href = '/home'
            }
            if (user.perfil === 'socio') {
                window.location.href = '/ventas'
            }
            if (user.perfil === 'cajero') {
                window.location.href = '/caja'
            }
            if (user.perfil === 'mesero') {
                window.location.href = '/iventario'
            }
        }
        else {
            message.classList.remove('inactive')
        }
    }

    return (
        <div className="login">
            <div className="form-container border border-solid rounded-lg border-black bg-white py-4 px-14 justify-center items-center">
                <img src={logo} alt="logo" className="logo-login w-auto h-auto" />
                <h1 className='title text-4xl text-center'>Iniciar Sesión</h1>

                <input
                    type="text"
                    id="username"
                    className="mt-5 px-3 py-4 border border-solid rounded-lg border-black bg-white"
                    placeholder="Usuario"
                    required
                />
                <input
                    type="password"
                    id="password"
                    placeholder="Contraseña"
                    className="mt-3 px-3 py-4 border border-solid rounded-lg border-black bg-white"
                    required
                />
                <a className='message inactive animate-pulse'>¡Usuario o contraseña incorrectos!</a>
                <button
                    type="submit"
                    className="bg-green-950/90 px-4 py-3 mt-7 mb-10 rounded-md text-white font-bold"
                    onClick={() => { handleLogin(), handleEnter }}
                >
                    Entrar
                </button>
            </div>
        </div>
    )
}



export default Login
