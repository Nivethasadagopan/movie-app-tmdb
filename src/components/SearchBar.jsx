import { useEffect, useState } from "react";

export default function SearchBar({ defaultValue = "", onSearch }) {
  const [query, setQuery] = useState(defaultValue);

  useEffect(() => {
    const t = setTimeout(() => onSearch(query.trim()), 400); // debounce
    return () => clearTimeout(t);
  }, [query, onSearch]);

  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search movies"
      />
    </div>
  );
}
