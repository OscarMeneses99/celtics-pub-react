const Card = (data) => {
  return (
    <aside className="p-4 md:w-1/2 lg:w-1/3">
      <div className="bg-white rounded-lg shadow-md p-4">
        <p className="text-lg font-bold">{data.data.title}</p>
        <p className="text-gray-700">${data.data.price}</p>
        <p className="text-gray-700">Cantidad: {data.data.cant} gramos</p>
        <p className="text-gray-700 text-justify">{data.data.description}</p>
        <button className="mt-4 bg-lime-800 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded">
          Añadir al carrito
        </button>
      </div>
    </aside>
  )
}

export default Card
