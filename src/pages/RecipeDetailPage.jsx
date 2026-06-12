import React from 'react';
import { recipeDetails } from '../data/catalog.js';
import { BackButton, RecipeStat } from '../components/common.jsx';

export function RecipeDetailPage({ recipe, onBack, openRecipe }) {
  const nutrition = [
    { label: 'kCal', value: recipe.calories },
    { label: 'Protein', value: '6 g' },
    { label: 'Fat', value: '8 g' },
    { label: 'Carbs', value: '46 g' },
  ];
  const otherRecipes = recipeDetails.filter((item) => item.id !== recipe.id).slice(0, 4);

  return (
    <main className="mx-auto max-w-7xl px-4 py-5 pb-24 lg:px-6">
      <BackButton onClick={onBack} label="Back to product" />
      <section className="grid items-center gap-8 rounded-md bg-white p-5 shadow-sm lg:grid-cols-[1fr_360px] lg:p-8">
        <div>
          <p className="text-sm font-bold text-black/45">Home / Recipes / {recipe.name}</p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-ink">{recipe.name}</h1>
          <p className="mt-4 max-w-3xl text-base font-semibold text-black/75">
            {recipe.name} is a delicious Indian dessert made with milk, sugar and fragrant pantry staples. It is a comforting recipe for family meals and quick festive treats.
          </p>
          <p className="mt-4 max-w-3xl text-base font-semibold text-black/80">Ingredients: {recipe.ingredients.join(', ')}</p>
          <div className="mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            <RecipeStat value={recipe.cookTime} label="Cook Time" />
            <RecipeStat value={recipe.servings} label="Servings" />
            <RecipeStat value="Recipe" label="Type" />
            <RecipeStat value={`${recipe.calories} kCal`} label="Energy" highlight />
          </div>
        </div>
        <img className="aspect-square w-full rounded-md object-cover" src={recipe.image} alt={recipe.name} />
      </section>

      <section className="mt-5 grid gap-5 rounded-md border border-black/10 bg-white p-5 shadow-sm lg:grid-cols-[1fr_360px]">
        <div>
          <h2 className="text-xl font-black">Recipe</h2>
          <ol className="mt-4 space-y-4">
            {recipe.steps.map((step, index) => (
              <li key={step} className="flex gap-3 text-sm font-semibold leading-6 text-black/65">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-black/10 text-xs font-black text-black/55">{index + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
        <aside>
          <h2 className="text-xl font-black">Nutrition</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
            {nutrition.map((item) => (
              <div key={item.label} className="rounded-md bg-[#f7f7f2] p-4 text-center">
                <p className="text-lg font-black">{item.value}</p>
                <p className="text-xs font-bold text-black/55">{item.label}</p>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-black">More recipes</h2>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {otherRecipes.map((item) => (
            <button key={item.id} className="overflow-hidden rounded-md border border-black/10 bg-white text-left shadow-sm hover:border-leaf" onClick={() => openRecipe(item.id)}>
              <img className="aspect-[4/3] w-full object-cover" src={item.image} alt={item.name} />
              <span className="block p-3 text-sm font-black">{item.name}</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
