import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import MovieSection from "../../components/MovieSection/MovieSection";
import MovieModal from "../../components/MovieModal/MovieModal";
import { getPopularMovies } from "../../services/tmdb";
import { useAuth } from "../../contexts/AuthContext";

const Dashboard = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  const { user } = useAuth();
  console.log(user)

  return (
    <>
      <Navbar />
      <Hero movie={popularMovies[0]} />
      <main>
        <MovieSection
          title="Filmes Populares"
          movies={popularMovies}
          onMovieClick={handleMovieClick}
        />
      </main>

      {isModalOpen && selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Dashboard;
