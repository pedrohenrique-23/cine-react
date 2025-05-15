// src/components/Hero/Hero.jsx
import React from 'react';
import styles from './Hero.module.css';

const Hero = ({ movie }) => {
  if (!movie) return null;

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
        <p>Data de lançamento: {movie.release_date}</p>
        <p className={styles.overview}>{movie.overview}</p>
      </div>
    </section>
  );
};

export default Hero;
