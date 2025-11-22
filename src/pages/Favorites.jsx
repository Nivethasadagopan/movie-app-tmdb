import { useFavorites } from "../hooks/useFavorites";
import MovieGrid from "../components/MovieGrid";

export default function Favorites() {
  const { favorites, isFavorite, removeFavorite } = useFavorites();

  const onToggleFavorite = (movie) => {
    removeFavorite(movie.id);
  };

  return (
    <div className="container">
      <h2>Your Favorites</h2>
      <MovieGrid movies={favorites} isFavorite={isFavorite} onToggleFavorite={onToggleFavorite} />
    </div>
  );
}
