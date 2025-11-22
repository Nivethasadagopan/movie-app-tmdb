import { getPosterUrl } from "../services/tmdb";


export default function MovieCard({ movie, isFavorite, onToggleFavorite }) {
  const poster = getPosterUrl(movie.poster_path);
  const favorite = isFavorite(movie.id);

  return (
    <div className="card">
      <div className="poster">
        {poster ? <img src={poster} alt={movie.title} loading="lazy" /> : <div className="placeholder">No Image</div>}
        <button
          className={`favbtn ${favorite ? "active" : ""}`}
          onClick={() => onToggleFavorite(movie)}
          aria-pressed={favorite}
          aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
        >
          {favorite ? "★" : "☆"}
        </button>
      </div>
      <div className="info">
        <h3 title={movie.title}>{movie.title}</h3>
        <p className="meta">Release: {movie.release_date || "—"} • Rating: {movie.vote_average?.toFixed(1) ?? "—"}</p>
        <p className="overview">{movie.overview || "No overview available."}</p>
      </div>
    </div>
  );
}
