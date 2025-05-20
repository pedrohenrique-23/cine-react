// src/components/MovieCard/MovieCard.jsx
import React from "react";
import styles from "./MovieCard.module.css";
import { useFavorites } from "../../contexts/FavoritesContext";

const MovieCard = ({ movie, onClick }) => {
  const { toggleFavorite, isFavorite } = useFavorites();

  const handleFavoriteClick = (e) => {
    toggleFavorite(movie);
    e.stopPropagation();
  };

  return (
    <div className={styles.movieCard} onClick={onClick}>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <p>Nota: {movie.vote_average}</p>
      <p>Data: {movie.release_date}</p>

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
