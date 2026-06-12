import React from 'react';
import { Search } from 'lucide-react';
import { categories, products } from '../data/catalog.js';
import { BackButton, ProductCard } from '../components/common.jsx';

export function CategoryPage({ activeCategory, setActiveCategory, query, sort, cart, wishlist, addToCart, decreaseCart, toggleWishlist, openProduct, shareProduct, onBack }) {
  const selectedCategory = categories.find((category) => category.id === activeCategory) || categories[0];
  const visibleProducts = products
    .filter((product) => {
      const byCategory = activeCategory === 'all' || product.category === activeCategory;
      const byQuery = `${product.name} ${product.tag} ${product.category}`.toLowerCase().includes(query.toLowerCase());
      return byCategory && byQuery;
    })
    .sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price;
      if (sort === 'price-high') return b.price - a.price;
      if (sort === 'fastest') return a.time - b.time;
      return b.rating - a.rating;
    });

  return (
    <main className="mx-auto max-w-7xl px-3 py-4 pb-4 sm:px-4 lg:px-6">
      <BackButton onClick={onBack} label="Back to home" />

      <section className="rounded-md bg-white p-3 shadow-sm sm:p-4">
        <div className="mb-3 flex items-end justify-between gap-3">
          <div>
            <h1 className="text-2xl font-black sm:text-3xl">Shop by category</h1>
            <p className="mt-1 text-sm font-semibold text-black/55">{visibleProducts.length} products in {selectedCategory.name}</p>
          </div>
        </div>

        <div className="no-scrollbar flex gap-2 overflow-x-auto pb-2 sm:grid sm:grid-cols-5 sm:overflow-visible lg:grid-cols-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`min-w-[86px] rounded-md border p-2 text-center transition sm:min-w-0 ${activeCategory === category.id ? 'border-leaf bg-mint shadow-sm' : 'border-black/10 hover:border-leaf/40 hover:bg-[#fbfbf6]'}`}
            >
              <img className="mx-auto h-12 w-12 rounded-md object-cover sm:h-16 sm:w-16" src={category.image} alt={category.name} />
              <span className="mt-2 block text-[11px] font-black leading-tight sm:text-xs">{category.name}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="mt-5">
        <h2 className="mb-3 text-xl font-black">{selectedCategory.name} products</h2>
        {visibleProducts.length ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {visibleProducts.map((product) => (
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
        ) : (
          <div className="grid min-h-[260px] place-items-center rounded-md bg-white p-8 text-center">
            <div>
              <Search className="mx-auto h-10 w-10 text-black/25" />
              <h3 className="mt-3 text-lg font-black">No products found</h3>
              <p className="text-sm text-black/55">Try another category or search term.</p>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
