import React from 'react';
import MovieCard from './MovieCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Movie {
  id: number;
  title: string;
  image: string;
  video?: string;
  rating?: string;
  year?: string;
  duration?: string;
}

interface MovieRowProps {
  title: string;
  movies: Movie[];
}

export default function MovieRow({ title, movies }: MovieRowProps) {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-8 group/row">
      <h2 className="text-2xl font-semibold text-white mb-4 px-8 md:px-16">{title}</h2>
      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-40 bg-black/50 p-2 rounded-full 
            opacity-0 group-hover/row:opacity-100 transition-opacity duration-300 hover:bg-black/70"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>

        <div 
          ref={scrollRef}
          className="flex overflow-x-scroll scrollbar-hide px-8 md:px-16 gap-4"
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-40 bg-black/50 p-2 rounded-full 
            opacity-0 group-hover/row:opacity-100 transition-opacity duration-300 hover:bg-black/70"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
      </div>
    </div>
  );
}