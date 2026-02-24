import React from 'react';
import RecipeCard from './RecipeCard';
import { useState } from 'react';

function Search() {

    const [searchText, setSearchText] = useState("")
  return (
    <>
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        

        <div className="mb-12">
          <h3 className="text-xs font-black uppercase tracking-[0.5em] text-amber-600 mb-4">
            Curated Discovery
          </h3>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
            What are we <span className="italic text-red-700">cooking</span> today?
          </h2>
          <p className="mt-4 text-gray-400 font-light italic">
            Search by ingredient, cuisine, or dietary preference
          </p>
        </div>

        <div className="relative max-w-2xl mx-auto group">
          
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-100 to-red-100 rounded-full blur opacity-25 group-focus-within:opacity-100 transition duration-1000"></div>
          
          <div className="relative flex items-center bg-white border border-slate-200 rounded-full px-6 py-4 shadow-sm group-focus-within:border-amber-400 group-focus-within:shadow-md transition-all">
        

            <input 
              type="text" 
              value={searchText}
              placeholder="e.g. pancakes..."
             className="w-full bg-transparent border-none outline-none focus:outline-none focus:ring-0 text-slate-700 placeholder:text-slate-300 placeholder:italic font-light text-lg"
             onChange={(e) => setSearchText(e.target.value)}
            />

          </div>
        </div>

      </div>
    </section>

    <RecipeCard searchText={searchText}/>
    </>
  );
}

export default Search;