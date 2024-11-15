import React from 'react';
import MovieRow from '../components/MovieRow';

const actionMovies = [
  {
    id: 16,
    title: "The Dark Knight",
    image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&q=80",
    video: "https://assets.mixkit.co/videos/preview/mixkit-urban-city-at-night-4558-large.mp4",
    rating: "12+",
    year: "2008",
    duration: "2h 32m"
  },
  {
    id: 17,
    title: "Mad Max: Fury Road",
    image: "https://images.unsplash.com/photo-1508435234994-67cfd7690508?auto=format&fit=crop&q=80",
    video: "https://assets.mixkit.co/videos/preview/mixkit-car-driving-on-a-road-in-the-desert-4017-large.mp4",
    rating: "15+",
    year: "2015",
    duration: "2h 0m"
  }
];

const scifiMovies = [
  {
    id: 18,
    title: "Blade Runner 2049",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80",
    video: "https://assets.mixkit.co/videos/preview/mixkit-futuristic-city-with-light-effects-4264-large.mp4",
    rating: "15+",
    year: "2017",
    duration: "2h 44m"
  },
  {
    id: 19,
    title: "Arrival",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
    video: "https://assets.mixkit.co/videos/preview/mixkit-clouds-and-blue-sky-2408-large.mp4",
    rating: "12+",
    year: "2016",
    duration: "1h 56m"
  }
];

export default function Movies() {
  return (
    <div className="pt-8">
      <div className="px-8 md:px-16 mb-8">
        <h1 className="text-4xl font-bold mb-4">Movies</h1>
        <p className="text-gray-400">Watch the latest blockbusters and classic films</p>
      </div>
      <MovieRow title="Action & Adventure" movies={actionMovies} />
      <MovieRow title="Science Fiction" movies={scifiMovies} />
    </div>
  );
}