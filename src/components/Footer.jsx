import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top:0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 px-6">
      <div className="max-w-5xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
         
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col leading-tight mb-4">
              <span className="text-xl font-serif font-bold tracking-tight">
                Recipe<span className="text-amber-500">Master</span>
              </span>
              <span className="text-[8px] uppercase tracking-[0.2em] text-slate-500 font-medium">
                Culinary Excellence
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed font-light">
              Elevating home cooking through curated recipes, professional techniques, and global flavors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-amber-500 font-bold mb-6">Explore</h4>

              <button onClick={scrollToTop} className="hover:text-white transition-colors cursor-pointer space-y-5 text-xs text-slate-400 font-medium">Discover</button>
              <br />
              <NavLink to="/search"className="hover:text-white transition-colors cursor-pointer space-y-5 text-xs text-slate-400 font-medium">Popular Recipes</NavLink>
              <br />
              <button onClick={scrollToTop} className="hover:text-white transition-colors cursor-pointer space-y-5 text-xs text-slate-400 font-medium">Quick Meals</button>
           
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-amber-500 font-bold mb-6">Categories</h4>
      
              <NavLink to="/search" className="hover:text-white transition-colors cursor-pointer space-y-3 text-xs text-slate-400 font-medium">Vegan & Plant-Based</NavLink>
              <br />
              <NavLink  to="/search"className="hover:text-white transition-colors cursor-pointer space-y-3 text-xs text-slate-400 font-medium">Seafood Masterclass</NavLink>
              <br />
              <NavLink to="/search" className="hover:text-white transition-colors cursor-pointer space-y-3 text-xs text-slate-400 font-medium">Italian Classics</NavLink>
              <br />
              <NavLink to="/search" className="hover:text-white transition-colors cursor-pointer space-y-3 text-xs text-slate-400 font-medium">Spices & Herbs</NavLink>

          </div>

           
            
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-slate-500 hover:text-amber-500 transition-all"
            >
              Back to Top 
              <span className="group-hover:-translate-y-1 transition-transform">↑</span>
            </button>
         
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-600 font-medium">
            © 2026 RecipeMaster — All Rights Reserved
          </p>
          <div className="flex space-x-6 text-[10px] uppercase tracking-[0.1em] text-slate-600">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;