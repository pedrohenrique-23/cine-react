import { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import { getPopularMovies } from "../../services/tmdb";

const Dashboard = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const moviesData = await getPopularMovies();
        setMovies(moviesData);
      } catch (error) {
        console.error("Erro ao buscar filmes populares", error);
      }
    };

    fetchPopularMovies();
  }, []);

  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <h1>Bem-vindo ao CineReact</h1>
      </header>

      <section className={styles.content}>
        <div className={styles.section}>
          <h2>Filmes Populares</h2>
          <div className={styles.moviesGrid}>
            {movies.map((movie) => (
              <div key={movie.id} className={styles.movieCard}>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
              <p><strong>Nota:</strong> {movie.vote_average.toFixed(1)}</p>
              <p><strong>Lançamento:</strong> {new Date(movie.release_date).toLocaleDateString("pt-BR")}</p>
            </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
