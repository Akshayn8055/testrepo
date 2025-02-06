import React, { useState } from 'react';
import { Car, Brain, Zap, Shield, Globe, ChevronRight, Github, Search } from 'lucide-react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState('');

  // Vulnerable function - intentionally unsafe for testing
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Directly inserting user input into innerHTML - XSS vulnerable
    setSearchResult(`<div>Showing results for: ${searchQuery}</div>`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Car className="w-8 h-8 text-blue-500" />
          <span className="text-xl font-bold">AutonoAI</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-blue-400">Technology</a>
          <a href="#" className="hover:text-blue-400">Vision</a>
          <a href="#" className="hover:text-blue-400">Investors</a>
          <a href="#" className="hover:text-blue-400">Contact</a>
        </div>
        <button className="bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-700 transition">
          Join Waitlist
        </button>
      </nav>

      <main>
        <section className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-6xl font-bold mb-8">
            The Future of <span className="text-blue-500">Autonomous Driving</span>
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Revolutionizing transportation with advanced AI technology that surpasses human capabilities. 
            Our self-driving system is 10x more reliable than traditional autonomous vehicles.
          </p>

          {/* Vulnerable Search Form */}
          <form onSubmit={handleSearch} className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search our vehicle models..."
                className="w-full px-6 py-3 rounded-full bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
              />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-blue-500">
                <Search className="w-5 h-5" />
              </button>
            </div>
            {/* Vulnerable output - intentionally using dangerouslySetInnerHTML */}
            <div 
              className="mt-4 text-left text-gray-300"
              dangerouslySetInnerHTML={{ __html: searchResult }}
            />
          </form>

          <div className="flex justify-center gap-6">
            <button className="bg-blue-600 px-8 py-3 rounded-full hover:bg-blue-700 transition flex items-center">
              Reserve Now <ChevronRight className="ml-2" />
            </button>
            <button className="border border-blue-600 px-8 py-3 rounded-full hover:bg-blue-600/10 transition">
              Watch Demo
            </button>
          </div>
        </section>

        <section className="container mx-auto px-6 py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-gray-800/50 p-8 rounded-2xl">
              <Brain className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-4">Advanced AI</h3>
              <p className="text-gray-400">
                Our proprietary neural networks process data 100x faster than competitors.
              </p>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-2xl">
              <Shield className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-4">Enhanced Safety</h3>
              <p className="text-gray-400">
                Zero accidents in over 1 million miles of autonomous testing.
              </p>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-2xl">
              <Globe className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-4">Global Impact</h3>
              <p className="text-gray-400">
                Reducing carbon emissions while revolutionizing transportation.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-20">
          <div className="relative rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=2070&q=80"
              alt="AI Car Interface"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center">
              <div className="max-w-xl px-12">
                <h2 className="text-4xl font-bold mb-6">Experience the Future Today</h2>
                <p className="text-lg text-gray-300 mb-8">
                  Join our early access program and be among the first to experience 
                  the next generation of autonomous vehicles.
                </p>
                <button className="bg-blue-600 px-8 py-3 rounded-full hover:bg-blue-700 transition">
                  Apply for Early Access
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Car className="w-6 h-6 text-blue-500" />
              <span className="text-lg font-bold">AutonoAI</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
          <p className="text-center text-gray-500 mt-8">
            © 2025 AutonoAI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;