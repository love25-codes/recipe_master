import React, { useState, useEffect } from 'react'

function RecipeCard({searchText}) {

    const [recipes, setRecipes] = useState([]);

  useEffect(() => {

    const search = searchText || "chicken"; // default value

    const findRecipe = async () => {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );

      const data = await res.json();

      if (data.meals) {
      setRecipes(data.meals);
    } else {
      setRecipes([]);
    }
    };

    findRecipe();

  }, [searchText]);

  const [activeRecipe, setActiveRecipe] = useState(null);
  const [modalType, setModalType] = useState(null); 

  const openModal = (recipe, type) => {
    setActiveRecipe(recipe);
    setModalType(type);
  };

  const closeModal = () => {
    setActiveRecipe(null);
    setModalType(null);
  };


const addToFav = (recipe) => {

  const existing = JSON.parse(localStorage.getItem('key')) || [];
  const alreadyExists = existing.some(item => item.idMeal === recipe.idMeal);

  if (!alreadyExists) {
    existing.push(recipe);
    localStorage.setItem('key', JSON.stringify(existing));
  }

};




  return (
    <>
   
       {recipes.length == 0 ? (<div className="flex flex-col items-center py-2 ">
 
    <div className="text-6xl mb-6 opacity-20 grayscale">
      🍽️
    </div>

    <h3 className="text-xl font-serif font-bold text-slate-800 mb-2">
      Our kitchen is quiet...
    </h3>
    <p className="text-slate-400 font-light italic text-sm max-w-xs text-center leading-relaxed">
      We couldn't find any recipes matching your search. Try a different ingredient or explore our popular categories.
    </p>

  </div>) : (<div className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
        {recipes.map((recipe) => (
          <div key={recipe.idMeal} className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100">
            
           
            <div className="relative h-56 overflow-hidden">
              <img 
                src={recipe.strMealThumb} 
                alt={recipe.strMeal} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              
              <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 transition-all shadow-sm" onClick={(e) => addToFav(recipe)}>
                <span className="text-lg">♥</span>
              </button>

              <div className="absolute bottom-3 left-3 bg-slate-900/70 backdrop-blur-sm px-2 py-0.5 rounded-md">
                <span className="text-[9px] font-black uppercase tracking-widest text-white">
                  {recipe.strCategory || "Gourmet"}
                </span>
              </div>
            </div>

            <div className="p-4">
              <h4 className="text-lg font-serif font-bold text-slate-800 mb-3 line-clamp-1">
                {recipe.strMeal}
              </h4>

              <div className="flex items-center gap-2">
                <button 
                  onClick={() => openModal(recipe, 'ingredients')}
                  className="flex-1 py-2 px-3 rounded-lg border border-slate-200 text-[9px] font-black uppercase tracking-widest text-slate-600 hover:bg-slate-900 hover:text-white transition-all"
                >
                  Ingredients
                </button>
                
                <button 
                  onClick={() => openModal(recipe, 'method')}
                  className="flex-1 py-2 px-3 rounded-lg bg-amber-50 text-amber-700 text-[9px] font-black uppercase tracking-widest hover:bg-amber-600 hover:text-white transition-all"
                >
                  Method
                </button>
              </div>
            </div>
            <div className="h-1 w-0 bg-red-600 group-hover:w-full transition-all duration-500"></div>
          </div>
        ))}
      </div>

      {/* --- POP-UP MODAL --- */}
      {activeRecipe && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-fade-in">
        
          <div 
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-md transition-opacity flex items-center justify-center"
            onClick={closeModal}
          >

       
          <div className="relative bg-white w-full max-w-lg max-h-[80vh] overflow-hidden rounded-3xl shadow-2xl flex flex-col">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-200"
            >
              ✕
            </button>

            <div className="p-8 border-b border-slate-50">
              <span className="text-[10px] font-black text-amber-600 uppercase tracking-[0.3em]">
                {modalType === 'ingredients' ? 'Essential Items' : 'Preparation'}
              </span>
              <h2 className="text-2xl font-serif font-bold text-slate-900 mt-1">{activeRecipe.strMeal}</h2>
            </div>


            <div className="p-8 overflow-y-auto">
              {modalType === 'ingredients' ? (
                <div className="space-y-3">
                   
                   {Array.from({ length: 20 }).map((_, i) => {
                     const ing = activeRecipe[`strIngredient${i + 1}`];
                     const meas = activeRecipe[`strMeasure${i + 1}`];
                     return ing ? (
                       <div key={i} className="flex items-center justify-between text-sm border-b border-slate-50 pb-2">
                         <span className="text-slate-700 font-medium">{ing}</span>
                         <span className="text-slate-400 italic">{meas}</span>
                       </div>
                     ) : null;
                   })}
                </div>
              ) : (
                <p className="text-slate-600 leading-relaxed whitespace-pre-line text-sm italic">
                  {activeRecipe.strInstructions}
                </p>
              )}
            </div>
          </div>

          </div>
        </div>
      )}
    </div>)}
  
  

    </>
  )
}

export default RecipeCard