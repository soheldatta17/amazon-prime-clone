import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Bell, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 w-full bg-[#1a242f] text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-[#00A8E1]">
              prime video
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <Link to="/" className="text-white hover:text-[#00A8E1] px-3 py-2">
                  Home
                </Link>
                <Link to="/tv-shows" className="text-white hover:text-[#00A8E1] px-3 py-2">
                  TV Shows
                </Link>
                <Link to="/movies" className="text-white hover:text-[#00A8E1] px-3 py-2">
                  Movies
                </Link>
                <Link to="/kids" className="text-white hover:text-[#00A8E1] px-3 py-2">
                  Kids
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => navigate('/search')} className="hover:text-[#00A8E1]">
              <Search className="h-5 w-5" />
            </button>
            <button className="hover:text-[#00A8E1]">
              <Bell className="h-5 w-5" />
            </button>
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 hover:text-[#00A8E1]"
              >
                <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                  <span className="text-sm">U</span>
                </div>
                <ChevronDown className="h-4 w-4" />
              </button>

              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-[#1a242f] ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <Link
                      to="/account"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                      onClick={() => setShowUserMenu(false)}
                    >
                      Account & Settings
                    </Link>
                    <Link
                      to="/account/watchlist"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                      onClick={() => setShowUserMenu(false)}
                    >
                      Watchlist
                    </Link>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                      onClick={() => setShowUserMenu(false)}
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}