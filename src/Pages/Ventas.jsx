import { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const Ventas = () => {
  const [ventas, setVentas] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [diaCorteCaja, setDiaCorteCaja] = useState("");
  const [cantidadVentas, setCantidadVentas] = useState("");
  const chartRef = useRef(null);

  useEffect(() => {
    // Crear el gráfico al cargar el componente
    const ctx = chartRef.current.getContext("2d");
    const chart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ventas.map((venta) => venta.diaCorteCaja),
        datasets: [
          {
            label: "Ventas",
            data: ventas.map((venta) => venta.cantidadVentas),
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#6A4C93",
              "#98E9D1",
              "#FF9F40",
            ],
            borderWidth: 1,
          },
        ],
      },
    });

    // Actualizar el gráfico cuando se modifican las ventas
    chart.data.labels = ventas.map((venta) => venta.diaCorteCaja);
    chart.data.datasets[0].data = ventas.map((venta) => venta.cantidadVentas);
    chart.update();

    // Limpiar el gráfico al desmontar el componente
    return () => chart.destroy();
  }, [ventas]);

  const handleAgregarVenta = () => {
    const nuevaVenta = {
      diaCorteCaja,
      cantidadVentas,
    };

    setVentas([...ventas, nuevaVenta]);
    setDiaCorteCaja("");
    setCantidadVentas("");
    setMostrarFormulario(false);
  };

  const handleEliminarVenta = (index) => {
    const nuevasVentas = ventas.filter((_, i) => i !== index);
    setVentas(nuevasVentas);
  };

  const totalVentas = ventas.reduce((total, venta) => total + Number(venta.cantidadVentas), 0);

  return (
    <div className="p-4 grid justify-center items-center mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">Ventas del lugar</h1>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={() => setMostrarFormulario(true)}
      >
        Agregar Venta
      </button>

      {mostrarFormulario && (
        <div className="mb-4">
          <input
            type="date"
            value={diaCorteCaja}
            onChange={(e) => setDiaCorteCaja(e.target.value)}
            className="border border-gray-300 p-2 rounded mr-2"
          />
          <input
            type="text"
            placeholder="Ventas del día"
            value={cantidadVentas}
            onChange={(e) => setCantidadVentas(e.target.value)}
            className="border border-gray-300 p-2 rounded mr-2 px-4"
          />
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleAgregarVenta}
          >
            Agregar
          </button>
        </div>
      )}

      <table className="w-full mt-4">
        <thead>
          <tr>
            <th className="px-4 py-2">Fecha</th>
            <th className="px-4 py-2">Ventas Totales</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {ventas.map((venta, index) => (
            <tr key={index}>
              <td className="border px-4 py-2 text-center">{venta.diaCorteCaja}</td>
              <td className="border px-4 py-2 text-center">$ {venta.cantidadVentas}</td>
              <td className="border px-4 py-2 text-center">
                <button
                  className="text-red-500 hover:text-red-600 font-bold"
                  onClick={() => handleEliminarVenta(index)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="border px-4 py-2 font-bold text-center">Total</td>
            <td className="border px-4 py-2 font-bold text-center">$ {totalVentas}</td>
            <td className="border px-4 py-2"></td>
          </tr>
        </tfoot>
      </table>
      <h1 className="font-bold text-2xl text-center mt-5">Grafica</h1>
      <canvas ref={chartRef} width={400} height={400} />
    </div>
  );
};

export default Ventas;
