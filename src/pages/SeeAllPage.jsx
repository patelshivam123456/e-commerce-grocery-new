import React from 'react';
import { BackButton, ProductCard } from '../components/common.jsx';

export function SeeAllPage({ collection, cart, wishlist, addToCart, decreaseCart, toggleWishlist, openProduct, openRecipe, shareProduct, onBack }) {
  return (
    <main className="mx-auto max-w-7xl px-4 py-5 pb-24 lg:px-6">
      <BackButton onClick={onBack} label="Back to product" />
      <div className="mb-4">
        <h1 className="text-3xl font-black">{collection.title}</h1>
        <p className="mt-1 text-sm font-semibold text-black/55">
          {collection.products?.length || collection.recipes?.length || 0} items available
        </p>
      </div>
      {collection.recipes ? (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          {collection.recipes.map((recipe) => (
            <button key={recipe.id} className="overflow-hidden rounded-md border border-black/10 bg-white text-left shadow-sm hover:border-leaf" onClick={() => openRecipe(recipe.id)}>
              <img className="aspect-[4/3] w-full object-cover" src={recipe.image} alt={recipe.name} />
              <span className="block p-3 text-sm font-black">{recipe.name}</span>
            </button>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {collection.products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              cart={cart}
              wished={wishlist.includes(product.id)}
              onAdd={(cartKey) => addToCart({ cartKey })}
              onDecrease={(cartKey) => decreaseCart({ cartKey })}
              onWish={() => toggleWishlist(product.id)}
              onOpen={() => openProduct(product.id)}
              onShare={() => shareProduct(product.id)}
            />
          ))}
        </div>
      )}
    </main>
  );
}
