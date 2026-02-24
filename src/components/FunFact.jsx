import React from 'react';
import { useState, useEffect } from 'react';

function FoodFact() {

    const [factData, setFactData] = useState([]);
    const [image, setImage] = useState("-");
    const [dishName, setDishName] = useState("-")
    const [instruction, setInstruction] = useState("Instructions soon...")

useEffect(() => {
  recipeData();
}, []);

useEffect(()=>{
if(factData.length > 0)
{
    setDetails();
}
}, [factData])

const recipeData = async () => {
  let allMeals = [];

  for (let i = 97; i <= 98; i++) {
    const char = String.fromCharCode(i);

    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${char}`
    );

    const data = await response.json();

    if (data.meals) {
      allMeals.push(...data.meals);
    }
  }

  setFactData(allMeals); 
 
};

const setDetails = ()=>{

  const randomNum = Math.floor(Math.random() * factData.length);
  console.log(randomNum);

  setDishName(factData[randomNum].strMeal);
  setImage(factData[randomNum].strMealThumb);
  setInstruction(factData[randomNum].strInstructions);
}

    return (
        <section className="max-w-5xl mx-auto py-24 px-6 ">
            <div className="relative group">

              
                <div className="absolute -inset-4 bg-amber-50/50 rounded-[40px] -rotate-1 scale-95 group-hover:rotate-0 transition-transform duration-700"></div>

                <div className="relative flex flex-col md:flex-row items-center gap-12 bg-gray-200 p-8 md:p-12 rounded-[32px] shadow-sm border border-slate-100">

              
                    <div className="w-full md:w-5/12 relative">
                        <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-500">
                            <img
                                src={image}
                                alt="Food Fact"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        

                        <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-6 rounded-xl hidden md:block">
                            <p className="text-[10px] uppercase tracking-[0.3em] text-amber-400 mb-1">Dish of the Day</p>
                            <p className="font-serif italic text-lg">{dishName}</p>
                        </div>
                    </div>

                    <div className="w-full md:w-7/12 space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="font-mono text-sm text-amber-600 font-bold tracking-tighter">
                                — INSIGHTS
                            </span>
                            <div className="h-[1px] w-12 bg-amber-200"></div>
                        </div>

                        <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 leading-tight">
                            A Taste of <br />
                            <span className="text-red-700">Food History</span>
                        </h3>

                        <p className="text-xl  text-slate-600 font-light leading-relaxed italic border-l-4 border-red-100 pl-6">
                            "{instruction}"
                        </p>

                        <div className="pt-6">
                            <button className="text-xs font-black uppercase tracking-[0.1em] text-slate-400 hover:text-amber-600 gap-1">
                                Mood is Directly Proportional to the taste of food!
                                <span>→</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default FoodFact;