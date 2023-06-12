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