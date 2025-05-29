import React from "react";
import styles from "./MovieCard.module.css";
import { useFavorites } from "../../contexts/FavoritesContext";

const MovieCard = ({ movie, onClick, onToggleFavorite }) => {
  const { toggleFavorite, isFavorite } = useFavorites();

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    const wasFavorite = isFavorite(movie.id);
    toggleFavorite(movie);

    if (wasFavorite && onToggleFavorite) {
      onToggleFavorite(movie);
    }
  };

  const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};


  return (
    <div className={styles.movieCard} onClick={onClick}>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <p>Nota: {movie.vote_average}</p>
      <p>Data: {formatDate(movie.release_date)}</p>

      <button
        className={styles.favoriteButton}
        onClick={handleFavoriteClick}
        title={isFavorite(movie.id) ? "Remover dos favoritos" : "Adicionar aos favoritos"}
      >
        {isFavorite(movie.id) ? "❤️" : "🤍"}
      </button>
    </div>
  );
};

export default MovieCard;
