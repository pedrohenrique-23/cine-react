import axios from "axios";

const API_KEY = "db50575e8e46cbb51c75e20799efc96a";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
        language: "pt-BR",
        page: 1,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error("Erro ao buscar filmes populares:", error);
    return [];
  }
};
