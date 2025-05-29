import { useEffect, useState } from "react";
import { db } from "../../services/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "../../contexts/AuthContext";
import { useFavorites } from "../../contexts/FavoritesContext";
import MovieCard from "../../components/MovieCard/MovieCard";
import MovieModal from "../../components/MovieModal/MovieModal";
import { useNavigate } from "react-router-dom";
import styles from "./FavoritesPage.module.css";

const FavoritesPage = () => {
  const { user } = useAuth();
  const { isFavorite } = useFavorites();
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFavorites = async () => {
      if (user) {
        try {
          const userDocRef = doc(db, "favorites", user.uid);
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            const data = userDocSnap.data();
            setFavoriteMovies(data.movies || []);
          } else {
            console.log("Nenhum favorito encontrado.");
          }
        } catch (error) {
          console.error("Erro ao buscar favoritos:", error);
        }
      }
    };

    fetchFavorites();
  }, [user]);

  const handleBackClick = () => {
    navigate("/dashboard");
  };

  const handleCardClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  const handleToggleFavorite = (movie) => {
    const updatedFavorites = favoriteMovies.filter((fav) => fav.id !== movie.id);
    setFavoriteMovies(updatedFavorites);
  };

  if (!user) return <p>Você precisa estar logado para ver seus favoritos.</p>;

  return (
    <div className={styles.favoritesContainer}>
      <div className={styles.header}>
        <h1>🎬 Meus Favoritos</h1>
        <button onClick={handleBackClick} className={styles.backButton}>
          Voltar ao Dashboard
        </button>
      </div>

      <div className={styles.moviesGrid}>
        {favoriteMovies.length > 0 ? (
          favoriteMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onClick={() => handleCardClick(movie)}
              onToggleFavorite={() => handleToggleFavorite(movie)}
            />
          ))
        ) : (
          <p className={styles.emptyMessage}>
            Você ainda não adicionou nenhum filme aos favoritos.
          </p>
        )}
      </div>

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default FavoritesPage;
