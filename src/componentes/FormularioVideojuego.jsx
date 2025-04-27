import { useState } from "react";

function FormularioVideojuego({ agregarVideojuego }) {
  const [nombre, setNombre] = useState("");
  const [plataforma, setPlataforma] = useState("");
  const [genero, setGenero] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (nombre.trim() === "") return;

    const nuevoVideojuego = {
      id: Date.now(),
      nombre,
      plataforma,
      genero,
    };

    agregarVideojuego(nuevoVideojuego);
    setNombre("");
    setPlataforma("");
    setGenero("");
  };

  return (
    <form
      onSubmit={manejarEnvio}
      className="bg-white p-6 rounded-lg shadow-md text-gray-900 flex flex-col gap-4"
    >
      <h2 className="text-2xl font-bold mb-4">Agregar un videojuego</h2>

      <input
        type="text"
        className="border p-2 rounded"
        placeholder="Nombre del videojuego"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        type="text"
        className="border p-2 rounded"
        placeholder="Plataforma (ej: PC, PS5, Xbox)"
        value={plataforma}
        onChange={(e) => setPlataforma(e.target.value)}
      />

      <input
        type="text"
        className="border p-2 rounded"
        placeholder="Género (ej: Aventura, RPG, Acción)"
        value={genero}
        onChange={(e) => setGenero(e.target.value)}
      />

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Agregar a la Biblioteca
      </button>
    </form>
  );
}

export default FormularioVideojuego;
