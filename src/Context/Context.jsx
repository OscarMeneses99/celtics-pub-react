import { useState } from "react"
import { createContext } from "react";


export const CelticsContext = createContext();

export const ContextProvider = ({ children }) => {

    //Cerrar Sesion
    const CerrarSesion = () => {
        localStorage.removeItem('user')
        window.location.href = '/'
    }

    //Productos
    const Alimentos = [
        {
            id: 1,
            title: "Irish Mix",
            category: "Para picar",
            description: "Alitas, bombas de papa, papas a la francesa, dedos de queso, nachos, camarones y pescado rebozados, acompañados de salsa tártara y crudités.",
            cant: 580,
            price: 280
        },
        {
            id: 2,
            title: "Costillas BBQ",
            category: "Para picar",
            description: "Acompañadas de papas a la francesa.",
            cant: 500,
            price: 220
        },
        {
            id: 3,
            title: "Alitas de pollo",
            category: "Para picar",
            description: "Marinadas con salsa picante, BBQ, parmesano y ajo, mango habanero o búfalo.",
            cant: 500,
            price: 240
        },
        {
            id: 4,
            title: "Boneless",
            category: "Para picar",
            description: "Aderezo ranch y verduras",
            cant: 280,
            price: 240
        },
        {
            id: 5,
            title: "Fish & Chips",
            category: "Para picar",
            description: "Tiras de pescado rebozado con papas a la francesa y aderezo",
            cant: 300,
            price: 170
        },
        {
            id: 6,
            title: "Tiras de pollo",
            category: "Para picar",
            description: "Aderezadas con Salsa Picante y BBQ",
            cant: 200,
            price: 150
        },
        {
            id: 7,
            title: "Dedos de queso",
            category: "Para picar",
            description: "Acompañados con Salsa de la Casa",
            cant: 200,
            price: 150
        },
        {
            id: 8,
            title: "Nachos",
            category: "Para picar",
            description: "Con queso y chilli",
            cant: 200,
            price: 95
        },
        {
            id: 9,
            title: "Papas Gajo",
            category: "Para picar",
            description: "",
            cant: 350,
            price: 105
        },
        {
            id: 10,
            title: "Bombas de papa y queso cheddar",
            category: "Para picar",
            description: "Acomáñadas con aderezo ranch",
            cant: 270,
            price: 80
        },
        {
            id: 11,
            title: "Papas a la Francesa",
            category: "Para picar",
            description: "",
            cant: 300,
            price: 90
        },
        {
            id: 12,
            title: "Aceitunas Prepadas",
            category: "Para picar",
            description: "",
            cant: 100,
            price: 65
        },
        {
            id: 13,
            title: "Hamburguesa Arrachera",
            category: "Hamburguesas",
            description: "Con hongo portobello",
            cant: 130,
            price: 250
        },
        {
            id: 14,
            title: "Hamburguesa Celtics de Rib Eye",
            category: "Hamburguesas",
            description: "",
            cant: 200,
            price: 250
        },
        {
            id: 15,
            title: "Veggie Burger",
            category: "Hamburguesas",
            description: "Elaborada con chicharo, acompañada de aragula y cebolla crujiente",
            cant: 280,
            price: 230
        },
        {
            id: 16,
            title: "Sandwich de Pollo BBQ",
            category: "Sandwich&HotDogs",
            description: "Con ensalada de col y aderezo Saracha",
            cant: 220,
            price: 210
        },
        {
            id: 17,
            title: "Hot Dog con chilli",
            category: "Sandwich&HotDogs",
            description: "",
            cant: 180,
            price: 165
        },
        {
            id: 18,
            title: "Hot Dog jumbo",
            category: "Sandwich&HotDogs",
            description: "",
            cant: 180,
            price: 140
        },
        {
            id: 19,
            title: "Margarita",
            category: "Pizzas",
            description: "Con tomate y albahaca",
            cant: 750,
            price: 260
        },
        {
            id: 20,
            title: "Hongos y Pimientos",
            category: "Pizzas",
            description: "Con jamon de pavo y tocino",
            cant: 750,
            price: 260
        },
        {
            id: 21,
            title: "Pera Caramelizada",
            category: "Pizzas",
            description: "Base de aceite de olivia y ajo, pera caramelizada, cebolla, nuez, queso gorgonzola, lechuga y aderezo Ranch",
            cant: 750,
            price: 260
        },
        {
            id: 21,
            title: "Peperoni",
            category: "Pizzas",
            description: "",
            cant: 750,
            price: 260
        },
        {
            id: 22,
            title: "Cinco Quesos",
            category: "Pizzas",
            description: "Base de aceite de oliva y ajo, queso mozzarella, queso gorgonzola, queso parmesano, queso de cabra y queso gouda",
            cant: 750,
            price: 280
        },
        {
            id: 23,
            title: "Camarón al pesto",
            category: "Pizzas",
            description: "Base pesto de albahaca, queso mozarela, cebolla, hongos, tomate cherry, camarones y queso parmesano",
            cant: 750,
            price: 280
        },
        {
            id: 24,
            title: "Jamón Serrano y arúgula",
            category: "Pizzas",
            description: "",
            cant: 750,
            price: 280
        },
        {
            id: 25,
            title: "Lasagna",
            category: "Pastas",
            description: "Bañada en salsa pomodoro y queso parmesano",
            cant: 280,
            price: 185
        },
        {
            id: 26,
            title: "Fetuccini",
            category: "Pastas",
            description: "Con carne arrachera, pollo o camarón y salsa de cuatro quesos, pesto o pomodoro",
            cant: 250,
            price: 185
        },

        {
            id: 27,
            title: "Pechuga al horno",
            category: "Pollo",
            description: "Con guarnición de hongos",
            cant: 250,
            price: 195
        },
        {
            id: 28,
            title: "Tacos de Arrachera",
            category: "Tacos",
            description: "En tortilla de maíz con salsa de la casa",
            cant: 200,
            price: 250
        },
        {
            id: 29,
            title: "Tacos de Camarón",
            category: "Tacos",
            description: "En tortilla de harina, mezcla de col, aderezo de siracha, acompañado con salsa macha",
            cant: 300,
            price: 205
        },
        {
            id: 30,
            title: "Pollo y Manzana",
            category: "Ensaladas",
            description: "Con espinaca, queso roquefort, nuez caramelizada y aderezo de mostaza",
            cant: 180,
            price: 150
        },
        {
            id: 31,
            title: "Chili",
            category: "Adicionales",
            description: "",
            cant: 100,
            price: 35
        },
        {
            id: 32,
            title: "Tocino",
            category: "Adicionales",
            description: "",
            cant: "",
            price: 30
        },
        {
            id: 33,
            title: "Aderezo",
            category: "Adicionales",
            description: "",
            cant: "",
            price: 25
        },
        {
            id: 34,
            title: "Chiles Toreados",
            category: "Adicionales",
            description: "",
            cant: "",
            price: 25
        },
        {
            id: 35,
            title: "Brownie",
            category: "Postres",
            description: "",
            cant: 220,
            price: 95
        },

    ]

    const Bebidas = [

        {
            "title": "Tempus",
            "category": "De barril",
            "cantidad": 1000,
            "price": 210
        },
        {
            "title": "Jabali Hellesbock",
            "category": "De barril",
            "cantidad": 1000,
            "price": 210
        },
        {
            "title": "Tarro",
            "category": "De barril",
            "cantidad": 1000,
            "price": 125
        },
        {
            "title": "Vaso",
            "category": "De barril",
            "cantidad": 500,
            "price": 70
        },
        {
            "title": "Bohemia oscura",
            "category": "Botella",
            "cantidad": 355,
            "price": 60
        },
        {
            "title": "XX Ambar",
            "category": "Botella",
            "cantidad": 355,
            "price": 55
        },
        {
            "title": "XX Lager",
            "category": "Botella",
            "cantidad": 355,
            "price": 55
        },
        {
            "title": "Corona ",
            "category": "Botella",
            "cantidad": 355,
            "price": 55
        },
        {
            "title": "Indio",
            "category": "Botella",
            "cantidad": 355,
            "price": 55
        },
        {
            "title": "Tecate",
            "category": "Botella",
            "cantidad": 355,
            "price": 55
        },
        {
            "title": "Tecate Ligth",
            "category": "Botella",
            "cantidad": 355,
            "price": 55
        },
        {
            "title": "Clamato",
            "category": "Adicionales",
            "cantidad": 10,
            "price": 25
        },
        {
            "title": "Lagrimas Negras",
            "category": "Artesanal",
            "cantidad": 355,
            "price": 140
        },
        {
            "title": "Minerva IPA",
            "category": "Artesanal",
            "cantidad": 355,
            "price": 130
        },
        {
            "title": "Zorra Imperial Peanut",
            "category": "Artesanal",
            "cantidad": 355,
            "price": 130
        },
        {
            "title": "Zorra",
            "category": "Artesanal",
            "cantidad": 355,
            "price": 130
        },
        {
            "title": "Minerva Stout",
            "category": "Artesanal",
            "cantidad": 355,
            "price": 130
        },

        {
            "title": "Reina Pale Ale",
            "category": "Artesanal",
            "cantidad": 355,
            "price": 130
        },
        {
            "title": "Kaiju Rice Lager",
            "category": "Artesanal",
            "cantidad": 355,
            "price": 130
        },
        {
            "title": "Reina Session IPA",
            "category": "Artesanal",
            "cantidad": 355,
            "price": 130
        },
        {
            "title": "Jabali Hellesbock",
            "category": "Artesanal",
            "cantidad": 355,
            "price": 130
        },
        {
            "title": "Tempus Dorada",
            "category": "Artesanal",
            "cantidad": 355,
            "price": 100
        },
        {
            "title": "Tempus Cream Stout",
            "category": "Artesanal ",
            "cantidad": 355,
            "price": 100
        },
        {
            "title": "Guinness",
            "category": "Importadas",
            "cantidad": 440,
            "price": 140
        },
        {
            "title": "Delirium Nocturnum",
            "category": "Importadas",
            "cantidad": 330,
            "price": 250
        },
        {
            "title": "Delirium Red",
            "category": "Importadas",
            "cantidad": 330,
            "price": 250
        },
        {
            "title": "London Poter",
            "category": "Importadas",
            "cantidad": 500,
            "price": 260
        },
        {
            "title": "Londo Pride",
            "category": "Importadas",
            "cantidad": 500,
            "price": 260
        },
        {
            "title": "Erdinger Weissbier",
            "category": "Importadas",
            "cantidad": 500,
            "price": 210
        },
        {
            "title": "Paulaner Hefe",
            "category": "Importadas",
            "cantidad": 500,
            "price": 210
        },
        {
            "title": "Stiegl Frambuesa",
            "category": "Importadas",
            "cantidad": 500,
            "price": 130
        },
        {
            "title": "Stella Artois",
            "category": "Importadas",
            "cantidad": 330,
            "price": 80
        },
        {
            "title": "Michelob Ultra",
            "category": "Importadas",
            "cantidad": 355,
            "price": 80
        },
        {
            "title": "Johnny Walker Blue Label",
            "category": "Whisky",
            "cantidad": undefined,
            "price": [650, 8450]

        },
        {
            "title": "Johnny Walker Gold Label",
            "category": "Whisky",
            "cantidad": undefined,
            "price": [205, 2660]
        },
        {
            "title": "Johnny Walker Black Label",
            "category": "Whisky",
            "cantidad": undefined,
            "price": [165, 2145]
        },
        {
            "title": "Johnny Walker Red Label",
            "category": "Whisky",
            "cantidad": undefined,
            "price": [100, 1300]
        },
        {
            "title": "Buchanans 18",
            "category": "Whisky",
            "cantidad": undefined,
            "price": [275, 3575]
        },
        {
            "title": "Bucahanas Two Select",
            "category": "Whisky",
            "cantidad": undefined,
            "price": [180, 2340]
        },
        {
            "title": "Buchanans 12",
            "category": "Whisky",
            "cantidad": undefined,
            "price": [160, 2080]
        },
        {
            "title": "Chivas 18",
            "category": "Whisky",
            "cantidad": undefined,
            "price": [710, 9230]
        },
        {
            "title": "Chivas 15",
            "category": "Whisky",
            "cantidad": undefined,
            "price": [285, 3705]
        },
        {
            "title": "Chivas Regal",
            "category": "Whisky",
            "cantidad": undefined,
            "price": [155, 1755]
        },
        {
            "title": "Ballantines",
            "category": "Whisky",
            "cantidad": undefined,
            "price": [120, 1560]
        },
        {
            "title": "Bushmills Black Bush",
            "category": "Whisky",
            "cantidad": undefined,
            "price": [130, 1690]
        },
        {
            "title": "Jameson",
            "category": "Whisky",
            "cantidad": undefined,
            "price": [105, 1365]
        },
        {
            "title": "Jack Daniels Honey",
            "category": "Whiskey",
            "cantidad": undefined,
            "price": [120, 1560]
        },
        {
            "title": "Jack Daniels",
            "category": "Whiskey",
            "cantidad": undefined,
            "price": [120, 1365]
        },
        {
            "title": "Jim Beam",
            "category": "Whisky",
            "cantidad": undefined,
            "price": [95, 1235]
        },
        {
            "title": "Macallan 12",
            "category": "Whisky",
            "cantidad": undefined,
            "price": [285, 3705]
        },
        {
            "title": "Glenfiddch 18",
            "category": "Whisky",
            "cantidad": undefined,
            "price": [280, 3640]
        },
        {
            "title": "Union Viejo",
            "category": "Mezcal",
            "cantidad": undefined,
            "price": [190, 2470]
        },
        {
            "title": "400 Conejos Joven",
            "category": "Mezcal",
            "cantidad": undefined,
            "price": [150, 1950]
        },

        {
            "title": "Don Julio 70",
            "category": "Tequila",
            "cantidad": undefined,
            "price": [235, 3055]
        },
        {
            "title": "Don Julio Reposado",
            "category": "Tequila",
            "cantidad": undefined,
            "price": [170, 2210]
        },
        {
            "title": "Don Julio Blanco",
            "category": "Tequila",
            "cantidad": undefined,
            "price": [145, 1885]
        },
        {
            "title": "Avion Cristalino",
            "category": "Tequila",
            "cantidad": undefined,
            "price": [510, 6630]
        },
        {
            "title": "Jose Cuervo Tradicional",
            "category": "Tequila",
            "cantidad": undefined,
            "price": [95, 1690]
        },
        {
            "title": "Maestro Dobel Diamante",
            "category": "Tequila",
            "cantidad": undefined,
            "price": [215, 2800]
        },
        {
            "title": "1800 Añejo",
            "category": "Tequila",
            "cantidad": undefined,
            "price": [160, 2080]
        },
        {
            "title": "1800 Reposado",
            "category": "Tequila",
            "cantidad": undefined,
            "price": [135, 1755]
        },
        {
            "title": "Torres 10",
            "category": "Brandy",
            "cantidad": undefined,
            "price": [95, 1235]
        },
        {
            "title": "Zacapa 23",
            "category": "Ron",
            "cantidad": undefined,
            "price": [220, 2860]
        },
        {
            "title": "Captain Morgan Spiced",
            "category": "Ron",
            "cantidad": undefined,
            "price": [85, 1105]
        },
        {
            "title": "Havana Seleccion",
            "category": "Ron",
            "cantidad": undefined,
            "price": [195, 2535]
        },
        {
            "title": "Havana Club 7 years",
            "category": "Ron",
            "cantidad": undefined,
            "price": [90, 1200]
        },
        {
            "title": "Matusalem Clasico",
            "category": "Ron",
            "cantidad": undefined,
            "price": [90, 1200]
        },
        {
            "title": "Flor De Caña 7",
            "category": "Ron",
            "cantidad": undefined,
            "price": [95, 1250]
        },
        {
            "title": "Bacardi Blanco",
            "category": "Ron",
            "cantidad": undefined,
            "price": [90, 1350]
        },
        {
            "title": "Malibu",
            "category": "Ron",
            "cantidad": undefined,
            "price": [85, 1105]
        },
        {
            "title": "Smirnoff Tamarind0",
            "category": "Vodka",
            "cantidad": undefined,
            "price": [95, 1235]
        },
        {
            "title": "Absolut Sabores",
            "category": "Vodka",
            "cantidad": undefined,
            "price": [95, 1235]
        },
        {
            "title": "Absolut Azul",
            "category": "Vodka",
            "cantidad": undefined,
            "price": [95, 1235]
        },
        {
            "title": "Wyborowa Tamarindo",
            "category": "Vodka",
            "cantidad": undefined,
            "price": [90, 1170]
        },
        {
            "title": "Martell XO",
            "category": "Cognac",
            "cantidad": undefined,
            "price": [920, 11040]
        },
        {
            "title": "Martell VSOP",
            "category": "Cognac",
            "cantidad": undefined,
            "price": [180, 2340]
        },
        {
            "title": "Hennesy VSOP",
            "category": "Cognac",
            "cantidad": undefined,
            "price": [235, 3055]
        },

        {
            "title": "Pure Irish",
            "category": "Cocteles",
            "cantidad": undefined,
            "price": 230
        },
        {
            "title": "Ninfa",
            "category": "Cocteles",
            "cantidad": undefined,
            "price": 190
        },
        {
            "title": "Johnie Beer",
            "category": "Cocteles",
            "cantidad": undefined,
            "price": 180
        },
        {
            "title": "Extra Paloma",
            "category": "Cocteles",
            "cantidad": undefined,
            "price": 175
        },
        {
            "title": "Tropical Black",
            "category": "Cocteles",
            "cantidad": undefined,
            "price": 155
        },
        {
            "title": "Hada Verde",
            "category": "Cocteles",
            "cantidad": undefined,
            "price": 150
        },
        {
            "title": "Margarita Frozen",
            "category": "Cocteles",
            "cantidad": undefined,
            "price": 150
        },
        {
            "title": "Lemon Ginger",
            "category": "Cocteles",
            "cantidad": undefined,
            "price": 150
        },
        {
            "title": "Submarine",
            "category": "Cocteles",
            "cantidad": undefined,
            "price": 145
        },
        {
            "title": "Long Island Iced Tea",
            "category": "Cocteles",
            "cantidad": undefined,
            "price": 140
        },
        {
            "title": "Pinky",
            "category": "Cocteles",
            "cantidad": undefined,
            "price": 120
        },

        {
            "title": "Piedra",
            "category": "Cocteles",
            "cantidad": undefined,
            "price": 120
        },
        {
            "title": "Whisky Cherry",
            "category": "Cocteles",
            "cantidad": undefined,
            "price": 100
        },
        {
            "title": "Mojito",
            "category": "Cocteles",
            "cantidad": undefined,
            "price": 100
        },
        {
            "title": "Ruso Blanco",
            "category": "Cocteles",
            "cantidad": undefined,
            "price": 100
        },
        {
            "title": "Clericot",
            "category": "Cocteles",
            "cantidad": undefined,
            "price": 290
        },
        {
            "title": "Bufanda",
            "category": "Shots",
            "cantidad": undefined,
            "price": 140
        },
        {
            "title": "ABC",
            "category": "Shots",
            "cantidad": undefined,
            "price": 135
        },
        {
            "title": "Bob Esponja",
            "category": "Shots",
            "cantidad": undefined,
            "price": 135
        },
        {
            "title": "Balas De Plata",
            "category": "Shots",
            "cantidad": undefined,
            "price": 130
        },
        {
            "title": "Boligoma",
            "category": "Shots",
            "cantidad": undefined,
            "price": 120
        },
        {
            "title": "Semen De Pitufo",
            "category": "Shots",
            "cantidad": undefined,
            "price": 100
        },
        {
            "title": "Baby Mango",
            "category": "Shots",
            "cantidad": undefined,
            "price": 60
        },
        {
            "title": "Mumm Grand Cordon",
            "category": "Champagne",
            "cantidad": 750,
            "price": 3200
        },
        {
            "title": "Mumm Cordon Rouge",
            "category": "Champagne",
            "cantidad": 750,
            "price": 2800
        },
        {
            "title": "Moet Chandon",
            "category": "Champagne",
            "cantidad": undefined,
            "price": 2100
        },
        {
            "title": "De La Casa",
            "category": "Vino Blanco",
            "cantidad": 750,
            "price": 400
        },
        {
            "title": "Zocajillo",
            "category": "Carajillos",
            "cantidad": undefined,
            "price": 150
        },
        {
            "title": "Agave Carajillo",
            "category": "Carajillo",
            "cantidad": undefined,
            "price": 140
        },

        {
            "title": "Irish Coffee",
            "category": "Cafe y Te",
            "cantidad": undefined,
            "price": 130
        },
        {
            "title": "Americano",
            "category": "Cafe y Te",
            "cantidad": undefined,
            "price": 40
        },
        {
            "title": "Te De Sabores",
            "category": "Cafe y Te",
            "cantidad": undefined,
            "price": 45
        },
        {
            "title": "Red Bull",
            "category": "Bebidas",
            "cantidad": 250,
            "price": 70
        },
        {
            "title": "Conga",
            "category": "Bebidas",
            "cantidad": 330,
            "price": 60
        },
        {
            "title": "Piñada",
            "category": "Bebidas",
            "cantidad": 330,
            "price": 60
        },
        {
            "title": "Clamato",
            "category": "Bebidas",
            "cantidad": 330,
            "price": 60
        },
        {
            "title": "Jugo",
            "category": "Bebidas",
            "cantidad": 330,
            "price": 40
        },
        {
            "title": "Topo Chico",
            "category": "Bebidas",
            "cantidad": 330,
            "price": 40
        },
        {
            "title": "Refresco",
            "category": "Bebidas",
            "cantidad": 235,
            "price": 35
        },
        {
            "title": "Agua",
            "category": "Bebidas",
            "cantidad": 355,
            "price": 30
        },
    ]

    //Mostrar Carrito * Open/Close
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const [isCuenta, setIsCuenta] = useState(false);
    const toggleCuenta = () => {
        setIsCuenta(!isCuenta);
    }




    return (
        <CelticsContext.Provider value={{
            Alimentos,
            Bebidas,
            isOpen,
            setIsOpen,
            toggleMenu,
            CerrarSesion,
            toggleCuenta,
            isCuenta,
            setIsCuenta
        }}>
            {children}
        </CelticsContext.Provider>
    )
}