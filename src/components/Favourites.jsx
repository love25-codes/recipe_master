import React from 'react';
import { useState, useEffect } from 'react';

function Favourites() {

    const [dummyFavourites, setDummyFavourites] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('key')) || [];
        setDummyFavourites(stored);
    }, []);
    

    const removeFav =(id)=>{
        const updated = dummyFavourites.filter(item => item.idMeal !== id);
        setDummyFavourites(updated);
        localStorage.setItem('key', JSON.stringify(updated));

    }

    return (
        <div className="min-h-screen bg-white py-16 px-6">
            <div className="max-w-6xl mx-auto">

              
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-slate-100 pb-8">
                    <div>
                        <h3 className="text-xs font-black uppercase tracking-[0.4em] text-red-600 mb-2">
                            Your Personal Collection
                        </h3>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">
                            Saved <span className="italic text-amber-600">Favourites</span>
                        </h2>
                    </div>
                    <p className="text-slate-400 text-sm font-light italic mt-4 md:mt-0">
                        {dummyFavourites.length} recipes curated by you
                    </p>
                </div>

                {dummyFavourites.length == 0 ? (<div className="text-center py-20">
                    <p className="text-slate-400 italic">Your collection is empty. Start exploring to add your first favourite!</p>
                </div>) : (

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {dummyFavourites.map((recipe) => (
                            <div
                                key={recipe.idMeal}
                                className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
                            >
                               
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={recipe.strMealThumb}
                                        alt={recipe.strMeal}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    
                                    <button  onClick={()=> removeFav(recipe.idMeal)}className="absolute top-4 right-4 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 transform group-hover:scale-110">
                                        <span className="text-lg">🗑️</span>
                                    </button>

                                    
                                    <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1 rounded-full">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-white drop-shadow-md">
                                            {recipe.strCategory}
                                        </span>
                                    </div>
                                </div>

                              
                                <div className="p-5 flex flex-col flex-grow">
                                    <h4 className="text-xl font-serif font-bold text-slate-800 leading-tight mb-4 group-hover:text-amber-600 transition-colors">
                                        {recipe.strMeal}
                                    </h4>

                                </div>

                            </div>
                        ))}
                    </div>
                )}



            </div>
        </div>
    );
}

export default Favourites;