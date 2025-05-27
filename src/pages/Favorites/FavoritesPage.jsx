// src/pages/FavoritesPage.jsx
import { useEffect, useState } from "react";
import { db } from "../../services/firebase"
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "../../contexts/AuthContext";
import MovieCard from "../../components/MovieCard/MovieCard";
import styles from "./FavoritesPage.module.css"; 

const FavoritesPage = () => {
  const { user } = useAuth();
  const [favoriteMovies, setFavoriteMovies] = useState([]);

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

  if (!user) return <p>Você precisa estar logado para ver seus favoritos.</p>;

  return (
    <div className={styles.favoritesContainer}>
      <h1>Meus Favoritos</h1>
      <div className={styles.moviesGrid}>
        {favoriteMovies.length > 0 ? (
          favoriteMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p>Você ainda não adicionou nenhum filme aos favoritos.</p>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;