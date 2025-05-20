import { createContext, useContext, useState } from "react";

// Criação do contexto
const FavoritesContext = createContext();

// Função para consumir o contexto com facilidade
export const useFavorites = () => useContext(FavoritesContext);

// Provedor do contexto
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Adiciona filme se não estiver na lista
  const addFavorite = (movie) => {
    setFavorites((prev) => {
      if (!prev.find((item) => item.id === movie.id)) {
        return [...prev, movie];
      }
      return prev;
    });
  };

  // Remove o filme da lista
  const removeFavorite = (movieId) => {
    setFavorites((prev) => prev.filter((item) => item.id !== movieId));
  };

  // Verifica se um filme já está favoritado
  const isFavorite = (movieId) => {
    return favorites.some((item) => item.id === movieId);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
