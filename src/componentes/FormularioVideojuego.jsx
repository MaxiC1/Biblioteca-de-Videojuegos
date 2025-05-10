import { useState, useEffect } from "react";

function FormularioVideojuego({
  agregarVideojuego,
  modoEdicion,
  videojuegoEnEdicion,
  editarVideojuego,
}) {
  const [nombre, setNombre] = useState("");
  const [plataforma, setPlataforma] = useState("");
  const [genero, setGenero] = useState("");

  useEffect(() => {
    if (modoEdicion && videojuegoEnEdicion) {
      setNombre(videojuegoEnEdicion.nombre);
      setPlataforma(videojuegoEnEdicion.plataforma);
      setGenero(videojuegoEnEdicion.genero);
    }
  }, [modoEdicion, videojuegoEnEdicion]);

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (nombre.trim() === "") return;

    const datos = {
      id: modoEdicion && videojuegoEnEdicion ? videojuegoEnEdicion.id : Date.now(),
      nombre,
      plataforma,
      genero,
    };

    if (modoEdicion) {
      editarVideojuego(datos);
    } else {
      agregarVideojuego(datos);
    }

    setNombre("");
    setPlataforma("");
    setGenero("");
  };

  return (
    <form
      onSubmit={manejarEnvio}
      className="bg-white p-6 rounded-lg shadow-md text-gray-900 flex flex-col gap-4"
    >
      <h2 className="text-2xl font-bold mb-4">
        {modoEdicion ? "Editar videojuego" : "Agregar un videojuego"}
      </h2>

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
        placeholder="Plataforma"
        value={plataforma}
        onChange={(e) => setPlataforma(e.target.value)}
      />

      <input
        type="text"
        className="border p-2 rounded"
        placeholder="Género"
        value={genero}
        onChange={(e) => setGenero(e.target.value)}
      />

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        {modoEdicion ? "Guardar cambios" : "Agregar a la Biblioteca"}
      </button>
    </form>
  );
}

export default FormularioVideojuego;
