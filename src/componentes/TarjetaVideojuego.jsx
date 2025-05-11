function TarjetaVideojuego({ videojuego, eliminarVideojuego, iniciarEdicion }) {
  return (
    <div className="bg-white text-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      {videojuego.imagen && (
        <img
          src={videojuego.imagen}
          alt={videojuego.nombre}
          className="w-full h-40 object-cover"
        />
      )}
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-bold">{videojuego.nombre}</h3>
        <p className="text-sm"><strong>Plataforma:</strong> {videojuego.plataforma}</p>
        <p className="text-sm"><strong>Género:</strong> {videojuego.genero}</p>

        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={() => iniciarEdicion(videojuego)}
            className="bg-yellow-500 text-white px-3 py-1 text-sm rounded hover:bg-yellow-600"
          >
            Editar
          </button>
          <button
            onClick={() => eliminarVideojuego(videojuego.id)}
            className="bg-red-600 text-white px-3 py-1 text-sm rounded hover:bg-red-700"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default TarjetaVideojuego;
