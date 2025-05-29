import React from 'react';
import styles from './Hero.module.css';

const Hero = ({ movie }) => {
  if (!movie) return null;
  
  const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      <div className={styles.overlay}>
        <h1>{movie.title}</h1>
        <p>Nota: {movie.vote_average}</p>
        <p>Data: {formatDate(movie.release_date)}</p>
        <p className={styles.overview}>{movie.overview}</p>
      </div>
    </section>
  );
};

export default Hero;
