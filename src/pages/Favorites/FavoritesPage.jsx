// src/pages/FavoritesPage.jsx
import { useFavorites } from "../../contexts/FavoritesContext";
import { useAuth } from "../../contexts/AuthContext";
import MovieCard from "../../components/MovieCard/MovieCard";
import styles from "./FavoritesPage.module.css";
import MovieModal from "../../components/MovieModal/MovieModal";
import { useState } from "react";

const FavoritesPage = () => {
  const { user } = useAuth();
  const { favorites } = useFavorites(); // <-- usando favoritos do contexto
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  if (!user) return <p>Você precisa estar logado para ver seus favoritos.</p>;

  return (
    <div className={styles.favoritesContainer}>
      <h1>Meus Favoritos</h1>
      <div className={styles.moviesGrid}>
        {favorites.length > 0 ? (
          favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onClick={() => handleMovieClick(movie)}
            />
          ))
        ) : (
          <p>Você ainda não adicionou nenhum filme aos favoritos.</p>
        )}
      </div>
      {isModalOpen && selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default FavoritesPage;
