import { useContext } from "react"
import { CelticsContext } from "../../Context/Context"
import CardBebidas from "../../Components/CardBebidas"

const Bebidas = () => {
  const context = useContext(CelticsContext)
  return (
    <div className="grid justify-center mt-5">

      <h1 className="text-center text-2xl mb-1 font-bold underline underline-offset-4">De barril</h1>
      <div className="grid grid-cols-1 gap-4 w-full max-w-screen-lg">
        {context.Bebidas.map((item) => {
          if (item.category === "De Barril") {
            return <CardBebidas key={item.id} data={item} />;
          } else {
            return null;
          }
        })}
      </div>

      <h1 className="text-center text-2xl mb-1 font-bold underline underline-offset-4">Botella</h1>
      <div className="grid grid-cols-1 gap-4 w-full max-w-screen-lg">
        {context.Bebidas.map((item) => {
          if (item.category === "Botella") {
            return <CardBebidas key={item.id} data={item} />;
          } else {
            return null;
          }
        })}
      </div>

      <h1 className="text-center text-2xl mb-1 font-bold underline underline-offset-4">Adicionales</h1>
      <div className="grid grid-cols-1 gap-4 w-full max-w-screen-lg">
        {context.Bebidas.map((item) => {
          if (item.category === "Adicionales") {
            return <CardBebidas key={item.id} data={item} />;
          } else {
            return null;
          }
        })}
      </div>

      <h1 className="text-center text-2xl mb-1 font-bold underline underline-offset-4">Artesanal</h1>
      <div className="grid grid-cols-1 gap-4 w-full max-w-screen-lg">
        {context.Bebidas.map((item) => {
          if (item.category === "Artesanal") {
            return <CardBebidas key={item.id} data={item} />;
          } else {
            return null;
          }
        })}
      </div>

      <h1 className="text-center text-2xl mb-1 font-bold underline underline-offset-4">Importadas</h1>
      <div className="grid grid-cols-1 gap-4 w-full max-w-screen-lg">
        {context.Bebidas.map((item) => {
          if (item.category === "Importadas") {
            return <CardBebidas key={item.id} data={item} />;
          } else {
            return null;
          }
        })}
      </div>

      <h1 className="text-center text-2xl mb-1 font-bold underline underline-offset-4">Whisky</h1>
      <div className="grid grid-cols-1 gap-4 w-full max-w-screen-lg">
        {context.Bebidas.map((item) => {
          if (item.category === "Whisky") {
            return <CardBebidas key={item.id} data={item} />;
          } else {
            return null;
          }
        })}
      </div>

      <h1 className="text-center text-2xl mb-1 font-bold underline underline-offset-4">Whyskey</h1>
      <div className="grid grid-cols-1 gap-4 w-full max-w-screen-lg">
        {context.Bebidas.map((item) => {
          if (item.category === "Whiskey") {
            return <CardBebidas key={item.id} data={item} />;
          } else {
            return null;
          }
        })}
      </div>

      <h1 className="text-center text-2xl mb-1 font-bold underline underline-offset-4">Mezcal</h1>
      <div className="grid grid-cols-1 gap-4 w-full max-w-screen-lg">
        {context.Bebidas.map((item) => {
          if (item.category === "Mezcal") {
            return <CardBebidas key={item.id} data={item} />;
          } else {
            return null;
          }
        })}
      </div>

      <h1 className="text-center text-2xl mb-1 font-bold underline underline-offset-4">Tequila</h1>
      <div className="grid grid-cols-1 gap-4 w-full max-w-screen-lg">
        {context.Bebidas.map((item) => {
          if (item.category === "Tequila") {
            return <CardBebidas key={item.id} data={item} />;
          } else {
            return null;
          }
        })}
      </div>

      <h1 className="text-center text-2xl mb-1 font-bold underline underline-offset-4">Brandy</h1>
      <div className="grid grid-cols-1 gap-4 w-full max-w-screen-lg">
        {context.Bebidas.map((item) => {
          if (item.category === "Brandy") {
            return <CardBebidas key={item.id} data={item} />;
          } else {
            return null;
          }
        })}
      </div>

      <h1 className="text-center text-2xl mb-1 font-bold underline underline-offset-4">Ron</h1>
      <div className="grid grid-cols-1 gap-4 w-full max-w-screen-lg">
        {context.Bebidas.map((item) => {
          if (item.category === "Ron") {
            return <CardBebidas key={item.id} data={item} />;
          } else {
            return null;
          }
        })}
      </div>
      <h1 className="text-center text-2xl mb-1 font-bold underline underline-offset-4">Vodka</h1>
      <div className="grid grid-cols-1 gap-4 w-full max-w-screen-lg">
        {context.Bebidas.map((item) => {
          if (item.category === "Vodka") {
            return <CardBebidas key={item.id} data={item} />;
          } else {
            return null;
          }
        })}
      </div>
      <h1 className="text-center text-2xl mb-1 font-bold underline underline-offset-4">Cognac</h1>
      <div className="grid grid-cols-1 gap-4 w-full max-w-screen-lg">
        {context.Bebidas.map((item) => {
          if (item.category === "Cognac") {
            return <CardBebidas key={item.id} data={item} />;
          } else {
            return null;
          }
        })}
      </div>
      <h1 className="text-center text-2xl mb-1 font-bold underline underline-offset-4">Cocteles</h1>
      <div className="grid grid-cols-1 gap-4 w-full max-w-screen-lg">
        {context.Bebidas.map((item) => {
          if (item.category === "Cocteles") {
            return <CardBebidas key={item.id} data={item} />;
          } else {
            return null;
          }
        })}
      </div>
      <h1 className="text-center text-2xl mb-1 font-bold underline underline-offset-4">Shots</h1>
      <div className="grid grid-cols-1 gap-4 w-full max-w-screen-lg">
        {context.Bebidas.map((item) => {
          if (item.category === "Shots") {
            return <CardBebidas key={item.id} data={item} />;
          } else {
            return null;
          }
        })}
      </div>
      <h1 className="text-center text-2xl mb-1 font-bold underline underline-offset-4">Champagne</h1>
      <div className="grid grid-cols-1 gap-4 w-full max-w-screen-lg">
        {context.Bebidas.map((item) => {
          if (item.category === "Champagne") {
            return <CardBebidas key={item.id} data={item} />;
          } else {
            return null;
          }
        })}
      </div>
      <h1 className="text-center text-2xl mb-1 font-bold underline underline-offset-4">Vino Blanco</h1>
      <div className="grid grid-cols-1 gap-4 w-full max-w-screen-lg">
        {context.Bebidas.map((item) => {
          if (item.category === "Vino Blanco") {
            return <CardBebidas key={item.id} data={item} />;
          } else {
            return null;
          }
        })}
      </div>
      <h1 className="text-center text-2xl mb-1 font-bold underline underline-offset-4">Vino Tinto</h1>
      <div className="grid grid-cols-1 gap-4 w-full max-w-screen-lg">
        {context.Bebidas.map((item) => {
          if (item.category === "Vino Tinto") {
            return <CardBebidas key={item.id} data={item} />;
          } else {
            return null;
          }
        })}
      </div>
      <h1 className="text-center text-2xl mb-1 font-bold underline underline-offset-4">Carajillos</h1>
      <div className="grid grid-cols-1 gap-4 w-full max-w-screen-lg">
        {context.Bebidas.map((item) => {
          if (item.category === "Carajillos") {
            return <CardBebidas key={item.id} data={item} />;
          } else {
            return null;
          }
        })}
      </div>
      <h1 className="text-center text-2xl mb-1 font-bold underline underline-offset-4">Cafe y Te</h1>
      <div className="grid grid-cols-1 gap-4 w-full max-w-screen-lg">
        {context.Bebidas.map((item) => {
          if (item.category === "Cafe y Te") {
            return <CardBebidas key={item.id} data={item} />;
          } else {
            return null;
          }
        })}
      </div>
      <h1 className="text-center text-2xl mb-1 font-bold underline underline-offset-4">Bebidas</h1>
      <div className="grid grid-cols-1 gap-4 w-full max-w-screen-lg">
        {context.Bebidas.map((item) => {
          if (item.category === "Bebidas") {
            return <CardBebidas key={item.id} data={item} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  )
}

export default Bebidas
