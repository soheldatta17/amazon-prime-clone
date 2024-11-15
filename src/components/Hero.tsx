import React from 'react';
import { Play, Info } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[80vh] w-full">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
      </div>
      <div className="relative h-full flex items-center px-8 md:px-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">The Lord of the Rings</h1>
          <p className="text-lg text-gray-200 mb-8">
            An epic journey through Middle-earth as Frodo and the Fellowship embark on a quest to destroy the One Ring and defeat the dark lord Sauron.
          </p>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition">
              <Play className="h-5 w-5" />
              Play
            </button>
            <button className="flex items-center gap-2 bg-gray-500/50 text-white px-6 py-2 rounded hover:bg-gray-500/70 transition">
              <Info className="h-5 w-5" />
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}