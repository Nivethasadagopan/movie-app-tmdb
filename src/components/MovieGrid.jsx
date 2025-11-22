import MovieCard from "./MovieCard";


export default function MovieGrid({ movies, isFavorite, onToggleFavorite }) {
  if (!movies?.length) {
    return <p className="empty">No movies found.</p>;
  }
  return (
    <div className="grid">
      {movies.map((m) => (
        <MovieCard
          key={m.id}
          movie={m}
          isFavorite={isFavorite}
          onToggleFavorite={(movie) => onToggleFavorite(movie)}
        />
      ))}
    </div>
  );
}
