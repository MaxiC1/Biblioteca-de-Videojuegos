import TarjetaVideojuego from "./TarjetaVideojuego";

function ListaVideojuegos({ videojuegos, eliminarVideojuego, iniciarEdicion }) {
  if (videojuegos.length === 0) {
    return <p className="text-center text-gray-300">No hay videojuegos en la biblioteca.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
      {videojuegos.map((videojuego) => (
        <TarjetaVideojuego
            key={videojuego.id}
            videojuego={videojuego}
            eliminarVideojuego={eliminarVideojuego}
            iniciarEdicion={iniciarEdicion}
        />
      ))}
    </div>
  );
}

export default ListaVideojuegos;
