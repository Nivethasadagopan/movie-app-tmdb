const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchPopular(page = 1) {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`);
  if (!res.ok) throw new Error("Failed to fetch popular movies");
  return res.json(); // { results, page, total_pages }
}

export async function searchMovies(query, page = 1) {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`
  );
  if (!res.ok) throw new Error("Failed to search movies");
  return res.json();
}

export function getPosterUrl(path, size = "w342") {
  return path ? `https://image.tmdb.org/t/p/${size}${path}` : null;
}
