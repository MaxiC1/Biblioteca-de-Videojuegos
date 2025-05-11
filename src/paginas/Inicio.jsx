import { useState, useEffect } from "react";
import FormularioVideojuego from "../componentes/FormularioVideojuego";
import ListaVideojuegos from "../componentes/ListaVideojuegos";
import BuscadorVideojuegos from "../componentes/BuscadorVideojuegos";

function Inicio() {
  const [videojuegos, setVideojuegos] = useState(() => {
    const datosGuardados = localStorage.getItem("videojuegos");
    return datosGuardados ? JSON.parse(datosGuardados) : [];
  });

  // Guardar videojuegos en LocalStorage cuando cambie la lista
  useEffect(() => {
    localStorage.setItem("videojuegos", JSON.stringify(videojuegos));
  }, [videojuegos]);

  const agregarVideojuego = (videojuegoNuevo) => {
    setVideojuegos([...videojuegos, videojuegoNuevo]);
  };

  const eliminarVideojuego = (id) => {
    const listaActualizada = videojuegos.filter(vj => vj.id !== id);
    setVideojuegos(listaActualizada);
  };

  const [modoEdicion, setModoEdicion] = useState(false);
  const [videojuegoEnEdicion, setVideojuegoEnEdicion] = useState(null);

  const iniciarEdicion = (videojuego) => {
    setModoEdicion(true);
    setVideojuegoEnEdicion(videojuego);
  };

  const editarVideojuego = (videojuegoEditado) => {
    const listaActualizada = videojuegos.map((vj) =>
      vj.id === videojuegoEditado.id ? videojuegoEditado : vj
    );
    setVideojuegos(listaActualizada);
    setModoEdicion(false);
    setVideojuegoEnEdicion(null);
  };
  

  return (
    <div className="container mx-auto py-12 px-4 max-w-6xl">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <h1 className="text-5xl font-extrabold text-center mb-10 text-blue-400 drop-shadow">
          🎮 Biblioteca de Videojuegos
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Formulario + Buscador | Lista de juegos */}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <FormularioVideojuego
            agregarVideojuego={agregarVideojuego}
            modoEdicion={modoEdicion}
            videojuegoEnEdicion={videojuegoEnEdicion}
            editarVideojuego={editarVideojuego}
          />
  
          <div className="mt-8">
            <BuscadorVideojuegos agregarVideojuego={agregarVideojuego} />
          </div>
        </div>

        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Mis videojuegos</h2>
          <ListaVideojuegos
            videojuegos={videojuegos}
            eliminarVideojuego={eliminarVideojuego}
            iniciarEdicion={iniciarEdicion}
          />
        </div>
      </div>
    </div>
  );
}

export default Inicio;
