import { useEffect, useState } from "react";

const STORAGE_KEY = "favoriteMovies";

export function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const isFavorite = (id) => favorites.some((m) => m.id === id);

  const addFavorite = (movie) => {
    setFavorites((prev) => (isFavorite(movie.id) ? prev : [...prev, movie]));
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((m) => m.id !== id));
  };

  return { favorites, isFavorite, addFavorite, removeFavorite };
}
