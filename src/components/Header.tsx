'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'backdrop-blur-xl bg-gradient-to-r from-indigo-600/95 via-purple-600/95 to-pink-600/95 shadow-lg' 
        : 'backdrop-blur-md bg-gradient-to-r from-indigo-600/90 via-purple-600/90 to-pink-600/90'
    } border-b border-white/20`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🤖</span>
              </div>
              <h1 className="text-2xl font-bold text-white font-space-grotesk">
                AI Tools Guide
              </h1>
            </div>
            <span className="hidden sm:block text-sm text-white/80 bg-white/20 px-3 py-1.5 rounded-full font-medium backdrop-blur-sm">
              ✨ 2025 Edition
            </span>
          </div>
          
          <nav className="flex items-center space-x-2">
            <a
              href="#editors"
              className="hidden md:inline-flex bg-white/15 text-white px-4 py-2.5 rounded-xl font-medium hover:bg-white/25 hover:scale-105 transition-all duration-200 text-sm backdrop-blur-sm focus-ring"
            >
              <span className="mr-2">💻</span>
              Code Editors
            </a>
            <a
              href="#chatbots"
              className="hidden md:inline-flex bg-white/15 text-white px-4 py-2.5 rounded-xl font-medium hover:bg-white/25 hover:scale-105 transition-all duration-200 text-sm backdrop-blur-sm focus-ring"
            >
              <span className="mr-2">🤖</span>
              AI Chatbots
            </a>
            <a
              href="#voice-ai"
              className="hidden md:inline-flex bg-white/15 text-white px-4 py-2.5 rounded-xl font-medium hover:bg-white/25 hover:scale-105 transition-all duration-200 text-sm backdrop-blur-sm focus-ring"
            >
              <span className="mr-2">🎤</span>
              Voice AI
            </a>
            <a
              href="#comparison"
              className="hidden lg:inline-flex bg-white/15 text-white px-4 py-2.5 rounded-xl font-medium hover:bg-white/25 hover:scale-105 transition-all duration-200 text-sm backdrop-blur-sm focus-ring"
            >
              <span className="mr-2">⚖️</span>
              Compare
            </a>
            <a
              href="#editors"
              className="md:hidden bg-white text-indigo-600 px-4 py-2.5 rounded-xl font-semibold hover:bg-white/90 hover:scale-105 transition-all duration-200 text-sm shadow-lg"
            >
              Explore Tools →
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}