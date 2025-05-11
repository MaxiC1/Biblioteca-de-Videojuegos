function TarjetaVideojuego({ videojuego, eliminarVideojuego, iniciarEdicion }) {
  return (
    <div className="bg-white text-gray-900 rounded-lg shadow-md overflow-hidden">
      {videojuego.imagen && (
        <img
          src={videojuego.imagen}
          alt={videojuego.nombre}
          className="w-full h-40 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{videojuego.nombre}</h3>
        <p><strong>Plataforma:</strong> {videojuego.plataforma}</p>
        <p><strong>Género:</strong> {videojuego.genero}</p>

        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={() => iniciarEdicion(videojuego)}
            className="bg-yellow-500 text-white text-sm px-3 py-1 rounded hover:bg-yellow-600"
          >
            Editar
          </button>
          <button
            onClick={() => eliminarVideojuego(videojuego.id)}
            className="bg-red-600 text-white text-sm px-3 py-1 rounded hover:bg-red-700"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default TarjetaVideojuego;
