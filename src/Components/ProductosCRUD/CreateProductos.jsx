import { useForm } from "react-hook-form"
import { createAlimento } from "../../api/admin"

const CreateProductos = () => {
    const { AgregarProductos, handleSubmit } = useForm()
    return (
        <div className="flex justify-center items-center mr-5">
            <h1 className="text-2xl font-bold text-green-950">Agregar Alimentos</h1>
            {/*<form onSubmit={handleSubmit(async (values) => {
                createAlimento(values)
            })}>
                <input
                    type="text"
                    placeholder="Titulo"
                    {...AgregarProductos('Titulo', { require: true })}
                    className="border border-gray-300 p-2 rounded mr-2" />
                <select name="Category">
                    <option {...AgregarProductos('Category')}>Para Picar</option>
                    <option {...AgregarProductos('Category')}>Hamburguesas</option>
                </select>
                <input
                    type="text"
                    placeholder="Descripción"
                    className="border border-gray-300 p-2 rounded mr-2"
                    required
                    {...AgregarProductos('description', { require: true })} />
                <input
                    type="number"
                    placeholder="Cantidad (gr)"
                    className="border border-gray-300 p-2 rounded mr-2"
                    {...AgregarProductos('cant', { require: true })} />
                <input
                    type="number"
                    placeholder="Precio"
                    className="border border-gray-300 p-2 rounded mr-2"
                    {...AgregarProductos('price', { require: true })} />
                <button>Agregar</button>
            </form>*/
            }
        </div>
    )
}

export default CreateProductos
