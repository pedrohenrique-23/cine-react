import React from "react";
import styles from "./MovieModal.module.css";

const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
          className={styles.modalImg}
        />
        <div className={styles.details}>
          <h2 className={styles.movieTitle}>{movie.title}</h2>
          <p><strong>Nota:</strong> {movie.vote_average}</p>
          <p><strong>Data de lançamento:</strong> {movie.release_date}</p>
          <p className={styles.overview}><strong>Sinopse:</strong> {movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;