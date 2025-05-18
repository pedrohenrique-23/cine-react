import { useEffect, useState } from "react";
import Navbar from "../../components/NavBar/NavBar";
import Hero from "../../components/Hero/Hero";
import MovieSection from "../../components/MovieSection/MovieSection";
import { getPopularMovies } from "../../services/tmdb";

const Dashboard = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const moviesData = await getPopularMovies();
        setPopularMovies(moviesData);
      } catch (error) {
        console.error("Erro ao buscar filmes populares", error);
      }
    };
    fetchPopularMovies();
  }, []);

  return (
    <>
      <Navbar />
      {/* Hero com o primeiro filme popular */}
      <Hero movie={popularMovies[0]} />
      <main>
        <MovieSection title="Filmes Populares" movies={popularMovies} />
      </main>
    </>
  );
};

export default Dashboard;
