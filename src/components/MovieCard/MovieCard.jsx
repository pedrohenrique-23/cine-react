// src/components/MovieCard/MovieCard.jsx
import React from 'react';
import styles from './MovieCard.module.css';

const MovieCard = ({ movie }) => {
  return (
    <div className={styles.movieCard}>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <p>Nota: {movie.vote_average}</p>
      <p>Data: {movie.release_date}</p>
    </div>
  );
};

export default MovieCard;
