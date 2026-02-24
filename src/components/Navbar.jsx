import React from 'react';
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react';

function Navbar() {

    return (
        <nav className="border-4 border-gray-100 shadow-3m py-3 bg-white sticky">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

                {/* Logo Section */}
                <div className="flex flex-row items-center">
                    <div className='font-bold w-16 text-5xl items-center justify-center'>👨🏻‍🍳</div>
                    <div className='flex flex-col'>

                        <span className="text-2xl font-serif font-bold tracking-tight text-slate-800">
                            Recipe<span className="text-amber-600">Master</span>
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">
                            Culinary Excellence
                        </span>
                    </div>

                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center space-x-8">
                    <NavLink to="/" 
                    
                      className={({isActive}) =>
                         `text-m font-medium hover:text-amber-600 hover:cursor-pointer transition-colors duration-200 ${isActive ? "text-orange-600" : "text-slate-600"}`
                      }>
                        ✩ Discover
                    </NavLink>
                    <NavLink
                        to="/search"
                        className={({ isActive }) =>
                            `text-m font-medium hover:text-amber-600 transition-colors hover:cursor-pointer duration-200 ${isActive ? "text-orange-500 font-bold" : "text-slate-600"
                            }`
                        }
                    >
                        🔍︎ Search
                    </NavLink>

                    
                    <NavLink to="/favourites" className="group flex items-center gap-2 px-2 py-3 rounded-full bg-red-50 text-slate-700 text-sm font-medium hover:bg-amber-50 hover:text-amber-700 hover:cursor-pointer transition-all duration-300">
                        <span>Favourites</span>
                        <span className="text-amber-600 group-hover:scale-110 transition-transform">♥</span>
                    </NavLink>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;