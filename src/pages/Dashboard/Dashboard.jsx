// import { useEffect, useState } from "react";
// import Navbar from "../../components/NavBar/NavBar";
// import Hero from "../../components/Hero/Hero";
// import MovieSection from "../../components/MovieSection/MovieSection";
// import { getPopularMovies } from "../../services/tmdb";
// import MovieModal from "../../components/MovieModal/MovieModal";

// const Dashboard = () => {
//   const [popularMovies, setPopularMovies] = useState([]);
//   const [selectedMovie, setSelectedMovie] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     const fetchPopularMovies = async () => {
//       try {
//         const moviesData = await getPopularMovies();
//         setPopularMovies(moviesData);
//       } catch (error) {
//         console.error("Erro ao buscar filmes populares", error);
//       }
//     };
//     fetchPopularMovies();
//   }, []);

//   const handleMovieClick = (movie) => {
//     setSelectedMovie(movie);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedMovie(null);
//   };

//   return (
//     <>
//       <Navbar />
//       {/* Hero com o primeiro filme popular */}
//       <Hero movie={popularMovies[0]} />
//       <main>
//         {isModalOpen && selectedMovie && (
//           <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
//         )}

//         <MovieSection
//           title="Filmes Populares"
//           movies={popularMovies}
//           onMovieClick={handleMovieClick}
//         />
//       </main>
//     </>
//   );
// };

// export default Dashboard;

// src/pages/Dashboard/Dashboard.jsx
import { useEffect, useState } from "react";
import Navbar from "../../components/NavBar/NavBar";
import Hero from "../../components/Hero/Hero";
import MovieSection from "../../components/MovieSection/MovieSection";
import MovieModal from "../../components/MovieModal/MovieModal";
import { getPopularMovies } from "../../services/tmdb";

const Dashboard = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const moviesData = await getPopularMovies();
        setPopularMovies(moviesData);
      } catch (error) {
        console.error("Erro ao buscar filmes populares", error);
      }
    };
    fetchPopularMovies();
  }, []);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  return (
    <>
      <Navbar />
      <Hero movie={popularMovies[0]} />
      <main>
        <MovieSection
          title="Filmes Populares"
          movies={popularMovies}
          onMovieClick={handleMovieClick}
        />
      </main>

      {isModalOpen && selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Dashboard;
