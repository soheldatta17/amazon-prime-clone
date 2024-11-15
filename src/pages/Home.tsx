import React from 'react';
import Hero from '../components/Hero';
import MovieRow from '../components/MovieRow';
import { trendingMovies, amazonOriginals } from '../data/movies';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="mt-8">
        <MovieRow title="Trending Now" movies={trendingMovies} />
        <MovieRow title="Amazon Originals" movies={amazonOriginals} />
      </div>
    </>
  );
}