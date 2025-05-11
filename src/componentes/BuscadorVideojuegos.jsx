import { useState } from "react";
import { buscarVideojuegosPorNombre } from "../servicios/apiVideojuegos";

function BuscadorVideojuegos({ agregarVideojuego }) {
  const [nombreBusqueda, setNombreBusqueda] = useState("");
  const [resultados, setResultados] = useState([]);

  const manejarBusqueda = async (e) => {
    e.preventDefault();
    if (nombreBusqueda.trim() === "") return;

    const juegosEncontrados = await buscarVideojuegosPorNombre(nombreBusqueda);
    setResultados(juegosEncontrados);
  };

  return (
    <div className="bg-white text-gray-900 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">🔍 Buscar videojuego</h2>

      <form onSubmit={manejarBusqueda} className="flex gap-2 mb-4">
        <input
          type="text"
          className="border p-2 rounded w-full"
          placeholder="Escribe el nombre del juego..."
          value={nombreBusqueda}
          onChange={(e) => setNombreBusqueda(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Buscar
        </button>
      </form>

      <ul className="space-y-4">
        {resultados.map((juego) => (
          <li
            key={juego.id}
            className="p-4 border rounded bg-gray-50 hover:bg-gray-100 flex gap-4 items-center"
          >
            <img
              src={juego.background_image}
              alt={juego.name}
              className="w-20 h-20 object-cover rounded"
            />
            <div className="flex-1">
              <strong className="block text-lg">{juego.name}</strong>
              <p className="text-sm text-gray-600">Fecha: {juego.released}</p>
            </div>
            <button
              className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-sm"
              onClick={() =>
                agregarVideojuego({
                  id: Date.now(),
                  nombre: juego.name,
                  plataforma: juego.platforms
                    ? juego.platforms.map((p) => p.platform.name).join(", ")
                    : "Desconocida",
                  genero: juego.genres
                    ? juego.genres.map((g) => g.name).join(", ")
                    : "Desconocido",
                  imagen: juego.background_image,
                })
              }
            >
            Agregar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BuscadorVideojuegos;
