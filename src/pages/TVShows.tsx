import React from 'react';
import MovieRow from '../components/MovieRow';

const tvShows = [
  {
    id: 11,
    title: "The Office",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80",
    video: "https://assets.mixkit.co/videos/preview/mixkit-people-working-in-an-office-environment-27847-large.mp4",
    rating: "13+",
    year: "2005",
    duration: "9 Seasons"
  },
  {
    id: 12,
    title: "Breaking Bad",
    image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&q=80",
    video: "https://assets.mixkit.co/videos/preview/mixkit-time-lapse-of-a-city-at-sunset-4119-large.mp4",
    rating: "18+",
    year: "2008",
    duration: "5 Seasons"
  },
  {
    id: 13,
    title: "The Crown",
    image: "https://images.unsplash.com/photo-1473856089921-6e4c4a5f8b5b?auto=format&fit=crop&q=80",
    video: "https://assets.mixkit.co/videos/preview/mixkit-palace-on-a-hill-on-a-cloudy-day-4516-large.mp4",
    rating: "16+",
    year: "2016",
    duration: "5 Seasons"
  }
];

const comedySeries = [
  {
    id: 14,
    title: "Parks and Recreation",
    image: "https://images.unsplash.com/photo-1494587351196-bbf5f29cff42?auto=format&fit=crop&q=80",
    video: "https://assets.mixkit.co/videos/preview/mixkit-people-having-fun-in-a-park-4607-large.mp4",
    rating: "13+",
    year: "2009",
    duration: "7 Seasons"
  },
  {
    id: 15,
    title: "Brooklyn Nine-Nine",
    image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80",
    video: "https://assets.mixkit.co/videos/preview/mixkit-city-traffic-on-a-rainy-night-4231-large.mp4",
    rating: "13+",
    year: "2013",
    duration: "8 Seasons"
  }
];

export default function TVShows() {
  return (
    <div className="pt-8">
      <div className="px-8 md:px-16 mb-8">
        <h1 className="text-4xl font-bold mb-4">TV Shows</h1>
        <p className="text-gray-400">Discover new series and classic favorites</p>
      </div>
      <MovieRow title="Popular TV Shows" movies={tvShows} />
      <MovieRow title="Comedy Series" movies={comedySeries} />
    </div>
  );
}