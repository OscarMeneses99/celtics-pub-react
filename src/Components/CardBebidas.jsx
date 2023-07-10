const CardBebidas = (data) => {
    return (
        <aside className="px-4 md:w-1/2 lg:w-11/12">
            <div className="bg-white rounded-lg shadow-md p-4">
                <p className="text-lg font-bold">{data.data.title}</p>
                <p className="text-gray-700">${data.data.price}</p>
                <p className="text-gray-700">Cantidad: {data.data.cantidad} ml</p>
                <button className="mt-4 bg-lime-800 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded">
                    Añadir al carrito
                </button>
            </div>
        </aside>

    )
}

export default CardBebidas
