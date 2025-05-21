// import { createContext, useContext, useState } from "react";

// // Criação do contexto
// const FavoritesContext = createContext();

// // Função para consumir o contexto com facilidade
// export const useFavorites = () => useContext(FavoritesContext);

// // Provedor do contexto
// export const FavoritesProvider = ({ children }) => {
//   const [favorites, setFavorites] = useState([]);

//   // Adiciona filme se não estiver na lista
//   const addFavorite = (movie) => {
//     setFavorites((prev) => {
//       if (!prev.find((item) => item.id === movie.id)) {
//         return [...prev, movie];
//       }
//       return prev;
//     });
//   };

//   // Remove o filme da lista
//   const removeFavorite = (movieId) => {
//     setFavorites((prev) => prev.filter((item) => item.id !== movieId));
//   };

//   // Verifica se um filme já está favoritado
//   const isFavorite = (movieId) => {
//     return favorites.some((item) => item.id === movieId);
//   };

//   return (
//     <FavoritesContext.Provider
//       value={{ favorites, addFavorite, removeFavorite, isFavorite }}
//     >
//       {children}
//     </FavoritesContext.Provider>
//   );
// };

// src/context/FavoritesContext.jsx
import { db } from "../services/firebase"
import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (movie) => {
    const alreadyFavorited = favorites.find((fav) => fav.id === movie.id);
    if (alreadyFavorited) {
      setFavorites(favorites.filter((fav) => fav.id !== movie.id));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  const isFavorite = (movieId) => {
    return favorites.some((fav) => fav.id === movieId);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
