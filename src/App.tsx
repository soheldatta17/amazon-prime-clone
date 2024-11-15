import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TVShows from './pages/TVShows';
import Movies from './pages/Movies';
import Kids from './pages/Kids';
import Search from './pages/Search';
import Account from './pages/Account';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0F171E]">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tv-shows" element={<TVShows />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/search" element={<Search />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;