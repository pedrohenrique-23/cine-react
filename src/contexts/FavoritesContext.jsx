import { createContext, useContext, useEffect, useState } from "react";
import { db, auth } from "../services/firebase";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  onSnapshot
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [user, setUser] = useState(null);

  // Monitorar autenticação do usuário
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  // Carregar favoritos do Firestore quando usuário logar
  useEffect(() => {
    if (user) {
      const userDocRef = doc(db, "favorites", user.uid);
      const unsubscribe = onSnapshot(userDocRef, (docSnap) => {
        if (docSnap.exists()) {
          setFavorites(docSnap.data().movies || []);
        } else {
          setFavorites([]);
        }
      });

      return () => unsubscribe();
    } else {
      setFavorites([]); // limpa ao deslogar
    }
  }, [user]);

  const toggleFavorite = async (movie) => {
    if (!user) {
      alert("Você precisa estar logado para favoritar filmes.");
      return;
    }

    const movieExists = favorites.some((fav) => fav.id === movie.id);
    const userDocRef = doc(db, "favorites", user.uid);

    try {
      if (movieExists) {
        await updateDoc(userDocRef, {
          movies: arrayRemove(movie),
        });
      } else {
        const docSnap = await getDoc(userDocRef);
        if (!docSnap.exists()) {
          await setDoc(userDocRef, { movies: [movie] });
        } else {
          await updateDoc(userDocRef, {
            movies: arrayUnion(movie),
          });
        }
      }
    } catch (error) {
      console.error("Erro ao atualizar favoritos:", error);
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
