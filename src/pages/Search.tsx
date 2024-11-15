import React, { useState, useEffect } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import MovieCard from '../components/MovieCard';
import { trendingMovies, amazonOriginals } from '../data/movies';

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const allMovies = [...trendingMovies, ...amazonOriginals];

  useEffect(() => {
    if (query.trim()) {
      const filtered = allMovies.filter(movie =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div className="px-8 md:px-16 py-8">
      <div className="max-w-2xl mx-auto mb-8">
        <div className="relative">
          <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by title..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-[#1a242f] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A8E1]"
          />
        </div>
      </div>

      {query && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {results.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      )}

      {query && results.length === 0 && (
        <div className="text-center text-gray-400 mt-8">
          No results found for "{query}"
        </div>
      )}
    </div>
  );
}