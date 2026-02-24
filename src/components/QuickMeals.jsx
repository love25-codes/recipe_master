import React, { useState } from 'react';

const recipes = [
  {
    id: 1,
    name: "Creamy Garlic Shrimp",
    category: "Seafood",
    time: "12 mins",
    image: "https://tse2.mm.bing.net/th/id/OIP.O6uEF0SswrdlChhkXOhgywHaI9?rs=1&pid=ImgDetMain&o=7&rm=3",
    ingredients: ["500g Shrimp", "4 cloves Garlic", "200ml Heavy Cream", "Parsley", "Butter"],
    instructions: "Sauté garlic in butter. Add shrimp until pink. Pour cream and simmer for 3 minutes. Garnish with parsley.",
    ytLink: "https://youtu.be/Hp_4-W90UwQ?si=YP9-YbdnE9WW7mZr",
    source: "Gordon Ramsay's Quick Hits"
  },
  {
    id: 2,
    name: "Classic Pesto Pasta",
    category: "Vegetarian",
    time: "15 mins",
    image: "https://richanddelish.com/wp-content/uploads/2023/02/creamy-pesto-pasta-9-of-15.jpg",
    ingredients: ["200g Pasta", "50g Basil", "30g Pine nuts", "Parmesan", "Olive oil"],
    instructions: "Boil pasta. Blend basil, nuts, cheese, and oil. Toss together with a splash of pasta water.",
    ytLink: "https://youtu.be/ldAINdBOjQY?si=KLWIpNwHZ51SyPGh",
    source: "Italian Kitchen Stories"
  },
  {
    id: 3,
    name: "Spicy Basil Chicken",
    category: "Asian",
    time: "10 mins",
    image: "https://tse4.mm.bing.net/th/id/OIP.djA7zHTZnelxpU5UcGuvJQHaLH?pid=ImgDet&w=60&h=60&c=7&dpr=1.3&rs=1&o=7&rm=3https://tse2.mm.bing.net/th/id/OIP.Yl-juhHBvrNWkFAfhzyGAAHaLH?pid=ImgDet&w=474&h=711&rs=1&o=7&rm=3",
    ingredients: ["Minced Chicken", "Thai Basil", "Chili", "Soy Sauce", "Fried Egg"],
    instructions: "Fry chili and garlic. Add chicken until browned. Toss in basil and soy sauce. Serve with a fried egg.",
    ytLink: "https://youtu.be/W50UzWe7c8U?si=rEf9w8sQs2YgTIbt",
    source: "Street Food Secrets"
  },
  {
    id: 4,
    name: "Honey Garlic Glazed Salmon",
    category: "Gourmet Seafood",
    time: "11 mins",
    image: "https://th.bing.com/th/id/OIP.bC_KBYo7ogP67J58CixBxAHaI9?w=206&h=318&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    ingredients: ["2 Salmon fillets", "3 tbsp Honey", "2 tbsp Soy Sauce", "1 tbsp Lemon juice", "Fresh Ginger"],
    instructions: "Season salmon with salt/pepper. Pan-fry for 3 minutes per side. Whisk honey, soy, and lemon; pour into the pan and let it bubble until sticky.",
    ytLink: "https://youtu.be/P4xuyEq37nE?si=I2-KzRYuuJJ5WGW_",
    source: "Modern Chef Daily"
  },
  {
    id: 5,
    name: "Zesty Avocado & Black Bean Tostadas",
    category: "Healthy",
    time: "10 mins",
    image: "https://www.howsweeteats.com/wp-content/uploads/2019/06/black-bean-tostadas-4.jpg",
    ingredients: ["Crunchy Tortilla shells", "1 can Black Beans", "2 ripe Avocados", "Lime", "Feta cheese", "Cilantro"],
    instructions: "Mash avocados with lime and salt. Spread onto shells. Top with rinsed black beans, crumbled feta, and fresh cilantro. Add hot sauce if desired.",
    ytLink: "https://youtu.be/wRKNGo7oR2w?si=CqyY8Sj0HzRvnast",
    source: "The Fresh Table"
  },
   {
    id: 6,
    name: "Mediterranean Chickpea Salad",
    category: "Mediterranean",
    time: "15 mins",
    image: "https://www.saltandlavender.com/wp-content/uploads/2017/06/mediterranean-chickpea-salad-4-680x1020.jpg",
    ingredients: ["1 can Chickpeas", "Cucumber", "Cherry Tomatoes", "Red Onion", "Kalamata Olives", "Olive Oil", "Oregano"],
    instructions: "Rinse chickpeas. Dice the vegetables finely. Toss everything in a bowl with olive oil, a splash of red wine vinegar, and dried oregano.",
    ytLink: "https://youtu.be/PrJH8QFmtFE?si=JC35ScQVX-on8wmc",
    source: "Artisan Eats"
  }
];

function QuickMeals() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <section className="max-w-5xl mx-auto py-16 px-6">
      
      <div className="mb-10 text-center md:text-left">
        <h3 className="text-3xl font-serif font-bold text-slate-800 tracking-tight">
          Quick <span className="text-amber-600 underline decoration-red-200 underline-offset-8">15-Minute</span> Meals
        </h3>
        <p className="text-gray-500 mt-2 italic">Gourmet flavors, minimal time.</p>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <div 
            key={recipe.id}
            onClick={() => setSelectedRecipe(recipe)}
            className="group cursor-pointer bg-white overflow-hidden rounded-xl border border-gray-100 hover:shadow-2xl transition-all duration-500"
          >
            <div className="relative h-64 overflow-hidden">
              <img 
                src={recipe.image} 
                alt={recipe.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                {recipe.time}
              </div>
            </div>
            <div className="p-5">
              <p className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-1">{recipe.category}</p>
              <h4 className="text-xl font-serif font-bold text-slate-800">{recipe.name}</h4>
            </div>
          </div>
        ))}
      </div>

      {selectedRecipe && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
         
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedRecipe(null)}
          ></div>

          
          <div className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl flex flex-col md:flex-row">
        
            <div className="md:w-1/2 h-64 md:h-auto">
              <img src={selectedRecipe.image} className="w-full h-full object-cover" alt="" />
            </div>

            <div className="md:w-1/2 p-8 relative">
              <button 
                onClick={() => setSelectedRecipe(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-black"
              >
                ✕
              </button>
              
              <span className="text-xs font-black text-red-600 uppercase tracking-[0.2em]">{selectedRecipe.category}</span>
              <h2 className="text-3xl font-serif font-bold text-slate-900 my-2">{selectedRecipe.name}</h2>
              
              <div className="mt-6">
                <h5 className="font-bold text-sm uppercase text-slate-800 border-b pb-1 mb-2">Ingredients</h5>
                <ul className="text-sm text-gray-600 space-y-1 italic">
                  {selectedRecipe.ingredients.map((ing, i) => (
                    <li key={i}>• {ing}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h5 className="font-bold text-sm uppercase text-slate-800 border-b pb-1 mb-2">Method</h5>
                <p className="text-sm text-gray-600 leading-relaxed">{selectedRecipe.instructions}</p>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <a 
                  href={selectedRecipe.ytLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-red-600 text-white text-center py-2 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-red-700 transition"
                >
                  Watch on YouTube
                </a>
                <p className="text-[10px] text-gray-400 text-center">Source: {selectedRecipe.source}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default QuickMeals;