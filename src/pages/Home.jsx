import { useCallback, useEffect, useState } from "react";
import { fetchPopular, searchMovies } from "../services/tmdb";
import { useFavorites } from "../hooks/useFavorites";
import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";
import Pagination from "../components/Pagination";

export default function Home() {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const data = query ? await searchMovies(query, page) : await fetchPopular(page);
      setMovies(data.results || []);
      setTotalPages(Math.min(data.total_pages || 1, 500)); // TMDB caps at 500
    } catch (e) {
      setError(e.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [query, page]);

  useEffect(() => { load(); }, [load]);

  const onSearch = useCallback((q) => {
    setQuery(q);
    setPage(1); // reset to first page when searching
  }, []);

  const onToggleFavorite = (movie) => {
    if (isFavorite(movie.id)) removeFavorite(movie.id);
    else addFavorite(movie);
  };

  return (
    <div className="container">
      <SearchBar defaultValue={query} onSearch={onSearch} />
      {error && <div className="alert">{error}</div>}
      {loading ? <div className="loader">Loading...</div> : (
        <>
          <MovieGrid movies={movies} isFavorite={isFavorite} onToggleFavorite={onToggleFavorite} />
          <Pagination page={page} totalPages={totalPages} onChange={setPage} />
        </>
      )}
    </div>
  );
}
