// // src/components/MovieSection/MovieSection.jsx
// import React from 'react';
// import MovieCard from '../MovieCard/MovieCard';
// import styles from './MovieSection.module.css';

// const MovieSection = ({ title, movies, onMovieClick }) => {
//   return (
//     <section className={styles.movieSection}>
//       <h2>{title}</h2>
//       <div className={styles.moviesGrid}>
//         {movies.map(movie => (
//           <MovieCard key={movie.id} movie={movie} onClick={() => onMovieClick(movie)} />
//         ))}
//       </div>
//     </section>
//   );
// };


// export default MovieSection;

// src/components/MovieSection/MovieSection.jsx
import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./MovieSection.module.css";

const MovieSection = ({ title, movies, onMovieClick }) => {
  return (
    <section className={styles.movieSection}>
      <h2>{title}</h2>
      <div className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onClick={() => onMovieClick(movie)}
          />
        ))}
      </div>
    </section>
  );
};

export default MovieSection;
