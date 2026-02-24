import React from 'react';
import { NavLink } from 'react-router-dom';

function Banner() {
  const images = [
    "https://img.freepik.com/premium-photo/food-background-with-spices-herbs-utensil-top-view-black-background_937503-424.jpg?w=740",
    "https://img.freepik.com/premium-photo/background-vegetarian-food-top-view-free-space-your-text_187166-56108.jpg?w=2000",
    "https://img.freepik.com/premium-photo/abstract-food-background-with-ingredients-such-as-fruits-vegetables-spices_124463-5141.jpg"
  ];

  return (
    <div className="relative w-full h-[calc(100vh-80px)] overflow-hidden flex items-center justify-center bg-black">
      
      
      <div className="absolute inset-0 z-0">
        {images.map((src, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 animate-slideshow"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0.5)), url(${src})`,
              animationDelay: `${index * 5}s`,
              opacity: 0
            }}
          />
        ))}
      </div>

     
      <div className="relative z-10 text-center max-w-4xl px-6">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-2 drop-shadow-lg tracking-tight">
          Discover Your Next ...
        </h1>
        <h2 className="font-serif text-5xl md:text-7xl font-bold text-red-600 drop-shadow-md tracking-tight">
          Culinary Adventure
        </h2>
        
        <p className="mt-10 text-lg md:text-2xl text-gray-300 font-light leading-relaxed max-w-7xl">
          Explore thousands of mouth-watering recipes from every corner of the world. 
          From quick weeknight dinners to gourmet masterpieces.
        </p>

        <div className="mt-12">
          <NavLink to="/search" className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-bold text-white transition-all duration-300 bg-red-700 rounded-full group hover:bg-red-600 shadow-[0_0_20px_rgba(185,28,28,0.4)]">
            <span className="absolute inset-0 w-full h-full -mt-1 transition-all duration-300 ease-out -translate-x-full bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="relative text-xs uppercase tracking-[0.3em] font-black hover:cursor-pointer">
              Start Exploring
            </span>
            <svg className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Banner;