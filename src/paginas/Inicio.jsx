import { useState, useEffect } from "react";
import FormularioVideojuego from "../componentes/FormularioVideojuego";

function Inicio() {
  const [videojuegos, setVideojuegos] = useState([]);

  // Cargar videojuegos desde LocalStorage al iniciar
  useEffect(() => {
    const datosGuardados = JSON.parse(localStorage.getItem("videojuegos")) || [];
    setVideojuegos(datosGuardados);
  }, []);

  // Guardar videojuegos en LocalStorage cuando cambie la lista
  useEffect(() => {
    localStorage.setItem("videojuegos", JSON.stringify(videojuegos));
  }, [videojuegos]);

  const agregarVideojuego = (videojuegoNuevo) => {
    setVideojuegos([...videojuegos, videojuegoNuevo]);
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        🎮 Biblioteca de Videojuegos
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <FormularioVideojuego agregarVideojuego={agregarVideojuego} />
        </div>

        <div className="md:w-1/2">
          {/* Aquí luego pondremos la lista de videojuegos */}
        </div>
      </div>
    </div>
  );
}

export default Inicio;
