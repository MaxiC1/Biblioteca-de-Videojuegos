import axios from "axios";

const API_KEY = "d92fa7d9b5bd4c81814b998e5b396b48";
const BASE_URL = "https://api.rawg.io/api";

export const buscarVideojuegosPorNombre = async (nombre) => {
  try {
    const respuesta = await axios.get(`${BASE_URL}/games`, {
      params: {
        key: API_KEY,
        search: nombre,
        page_size: 5,
      },
    });
    return respuesta.data.results;
  } catch (error) {
    console.error("Error al buscar videojuegos:", error);
    return [];
  }
};
