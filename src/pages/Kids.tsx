import React from 'react';
import MovieRow from '../components/MovieRow';

const animatedMovies = [
  {
    id: 20,
    title: "Finding Nemo",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80",
    video: "https://assets.mixkit.co/videos/preview/mixkit-fish-swimming-in-a-coral-reef-7549-large.mp4",
    rating: "U",
    year: "2003",
    duration: "1h 40m"
  },
  {
    id: 21,
    title: "Toy Story",
    image: "https://images.unsplash.com/photo-1558507334-57300f59f0bd?auto=format&fit=crop&q=80",
    video: "https://assets.mixkit.co/videos/preview/mixkit-toy-car-on-a-wooden-surface-39456-large.mp4",
    rating: "U",
    year: "1995",
    duration: "1h 21m"
  }
];

const educationalShows = [
  {
    id: 22,
    title: "Planet Earth",
    image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&q=80",
    video: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-forest-on-a-sunny-day-42431-large.mp4",
    rating: "U",
    year: "2006",
    duration: "11 Episodes"
  },
  {
    id: 23,
    title: "Magic School Bus",
    image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&q=80",
    video: "https://assets.mixkit.co/videos/preview/mixkit-school-bus-on-the-road-4388-large.mp4",
    rating: "U",
    year: "1994",
    duration: "4 Seasons"
  }
];

export default function Kids() {
  return (
    <div className="pt-8">
      <div className="px-8 md:px-16 mb-8">
        <h1 className="text-4xl font-bold mb-4">Kids</h1>
        <p className="text-gray-400">Family-friendly entertainment for all ages</p>
      </div>
      <MovieRow title="Animated Movies" movies={animatedMovies} />
      <MovieRow title="Educational Shows" movies={educationalShows} />
    </div>
  );
}