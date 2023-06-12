import logo from '../../Images/logo-celtics.png'
import arcos from '../../Images/celtics-arcos.jpg'

const SobreNosotros = () => {
    return (
        <>
            <div className='grid mt-5 justify-center items-center px-5'>
                <h1 className="text-xl font-bold text-center mt-5">Sobre Nosotros</h1>

                <br />
                <h2 className="text-sm font-light text-center text-black/60 ">CELTICS PUB IRLANDÉS SE HA CONSOLIDADO DURANTE LOS AÑOS DEMOSTRANDO SER UN CLÁSICO Y NO UNA MODA</h2>
                <img src={logo} alt="logo" className="h-auto w-auto" />
                <p className='text-lg text-justify'>
                    <br />
                    Surgió a partir de la idea del fundador y creador de la marca. Él vivió un largo tiempo en Europa y ya estando en México trabajó para una empresa europea durante muchos años. Fue entonces que decidió retirarse para crear su propio negocio y pensando en lugares que no existían en México decidió que un Pub Irlandés era definitivamente lo que faltaba, ya que en las grandes ciudades de todo el mundo siempre se topaba con un lugar como éste.
                    <br />
                    El nombre de Celtics se debió a que el origen del fundador tiene su raíz en la provincia de Asturias, misma que junto con Galicia, Bretaña, Irlanda, Gales y Escocia, forman la "Nación Celta", aunque usted no lo crea.
                    Al incorporar a toda la Nación Celta se permitió abrir un abanico más amplio a nivel gastronómico y cultural.
                    <br />
                    De ahí que el 14 de Febrero del 2003, Celtics abriese sus puertas en la Cd. de México, y en particular en La Condesa, barrio multicultural que le dio una formidable bienvenida a este nuevo concepto y que a la fecha perdura.
                    <br />
                    Lejos de lo que se pudiese pensar, la atmósfera de un pub irlandés es lo más cercano a una taberna en España, una brasserie en Francia o una cantina en México, lugares todos en los que priva fundamentalmente el respeto, la apertura, la informalidad y la sana diversión.
                </p>
                <img src={arcos} alt="arcos" className='mt-5 mb-5' />
                <p className='text-lg text-justify'>
                    Es importante recordar que Celtics fue el primer lugar en donde se pudo degustar de manera constante la cerveza tradicional de Irlanda como es Guinness, independientemente de contar con un menú inusitado para la época de cervezas provenientes de otros países.
                    <br />
                    Todo lo anterior es digno de mencionarlo ya que después de casi 12 años de existencia, esta idea original se ha multiplicado en todos los rincones de México, llámense Celtics o no.
                    <br />
                    Estamos convencidos de que nuestro concepto ha aportado una nueva forma de diversión y ello será siempre orgullosamente nuestro legado.
                    Como acontece en muchas ciudades del mundo, Celtics fue pionero en festejar el 17 de Marzo, día de San Patricio.
                    Para ello manejamos decoraciones puntuales con los íconos más importantes de Irlanda como son los tréboles, duendes y monedas, sombreros y verde, verde y más verde hasta en la cerveza.
                    <br />
                    Cada año y ya siendo una tradición, nuestros clientes esperan muy entusiasmados este gran día en el cual tenemos un recorrido en turibus donde pueden disfrutar de la buena música a cargo de Bandas y Dj's de la casa, cuya selección musical se conforma de éxitos de rock y pop internacional.
                    "Celtics es un clásico, no una moda".
                </p>
            </div>
        </>
    )
}

export default SobreNosotros
