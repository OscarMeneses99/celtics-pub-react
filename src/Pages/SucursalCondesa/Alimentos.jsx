import { useContext } from "react"
import { CelticsContext } from "../../Context/Context"
import CardAlimentos from "../../Components/CardAlimentos"
const Alimentos = () => {
  const context = useContext(CelticsContext)

  return (
    <div className="grid justify-center mt-5">

      <h1 className="text-center text-2xl mb-1 font-bold underline underline-offset-4">Para Picar</h1>
      <div className="grid grid-cols-1 gap-4 w-full max-w-screen-lg">
        {context.Alimentos.map((item) => {
          if (item.category === "Para picar") {
            return <CardAlimentos key={item.id} data={item} className="w-full" />;
          } else {
            return null;
          }
        })}
      </div>

      <h1 className="text-center text-2xl mb-1 font-bold underline underline-offset-4">Hambrguesas</h1>
      <div className="grid grid-cols-1 gap-4 w-full max-w-screen-lg">
        {context.Alimentos.map((item) => {
          if (item.category === "Hamburguesas") {
            return <CardAlimentos key={item.id} data={item} />;
          } else {
            return null;
          }
        })}
      </div>

      <h1 className="text-center text-2xl mb-1 font-bold underline underline-offset-4">Sandwich & Hot Dogs</h1>
      <div className="grid grid-cols-1 gap-4 w-full max-w-screen-lg">
        {context.Alimentos.map((item) => {
          if (item.category === "Sandwich&HotDogs") {
            return <CardAlimentos key={item.id} data={item} />;
          } else {
            return null;
          }
        })}
      </div>

      <h1 className="text-center text-2xl mb-1 font-bold underline underline-offset-4">Pizzas</h1>
      <div className="grid grid-cols-1 gap-4 w-full max-w-screen-lg">
        {context.Alimentos.map((item) => {
          if (item.category === "Pizzas") {
            return <CardAlimentos key={item.id} data={item} />;
          } else {
            return null;
          }
        })}
      </div>

      <h1 className="text-center text-2xl mb-1 font-bold underline underline-offset-4">Pastas</h1>
      <div className="grid grid-cols-1 gap-4 w-full max-w-screen-lg">
        {context.Alimentos.map((item) => {
          if (item.category === "Pastas") {
            return <CardAlimentos key={item.id} data={item} />;
          } else {
            return null;
          }
        })}
      </div>

      <h1 className="text-center text-2xl mb-1 font-bold underline underline-offset-4">Pollo</h1>
      <div className="grid grid-cols-1 gap-4 w-full max-w-screen-lg">
        {context.Alimentos.map((item) => {
          if (item.category === "Pollo") {
            return <CardAlimentos key={item.id} data={item} />;
          } else {
            return null;
          }
        })}
      </div>

      <h1 className="text-center text-2xl mb-1 font-bold underline underline-offset-4">Tacos</h1>
      <div className="grid grid-cols-1 gap-4 w-full max-w-screen-lg">
        {context.Alimentos.map((item) => {
          if (item.category === "Tacos") {
            return <CardAlimentos key={item.id} data={item} />;
          } else {
            return null;
          }
        })}
      </div>

      <h1 className="text-center text-2xl mb-1 font-bold underline underline-offset-4">Ensaladas</h1>
      <div className="grid grid-cols-1 gap-4 w-full max-w-screen-lg">
        {context.Alimentos.map((item) => {
          if (item.category === "Ensaladas") {
            return <CardAlimentos key={item.id} data={item} />;
          } else {
            return null;
          }
        })}
      </div>

      <h1 className="text-center text-2xl mb-1 font-bold underline underline-offset-4">Adicionales</h1>
      <div className="grid grid-cols-1 gap-4 w-full max-w-screen-lg">
        {context.Alimentos.map((item) => {
          if (item.category === "Adicionales") {
            return <CardAlimentos key={item.id} data={item} />;
          } else {
            return null;
          }
        })}
      </div>

      <h1 className="text-center text-2xl mb-1 font-bold underline underline-offset-4">Postres</h1>
      <div className="grid grid-cols-1 gap-4 w-full max-w-screen-lg">
        {context.Alimentos.map((item) => {
          if (item.category === "Postres") {
            return <CardAlimentos key={item.id} data={item} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  )
}

export default Alimentos
