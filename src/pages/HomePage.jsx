import React, { useEffect, useState } from 'react';
import { Bike, CreditCard, Search, SlidersHorizontal, Sparkles } from 'lucide-react';
import { categories, heroSlides, products } from '../data/catalog.js';
import { Feature, ProductCard } from '../components/common.jsx';

export function HomePage({ activeCategory, visibleProducts, sort, setSort, location, cart, wishlist, addToCart, decreaseCart, toggleWishlist, openProduct, shareProduct, clearFilters, onSeeAllCategories }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = heroSlides[activeSlide];
  const homeProducts = visibleProducts.slice(0, 40);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className="mx-auto max-w-7xl px-3 pb-4 sm:px-4 lg:px-6">
      <section className="py-3 sm:py-5">
        <div className={`${slide.bg} relative h-[150px] overflow-hidden rounded-md border border-black/5 shadow-soft sm:h-[230px] md:h-[260px]`}>
          <div className="absolute inset-0 opacity-100 sm:inset-y-0 sm:left-auto sm:right-0 sm:w-[52%] md:w-[50%]">
            <img className="h-full w-full object-cover" src={slide.image} alt={slide.title} />
            <div className="absolute inset-0 hidden bg-gradient-to-r from-transparent via-white/10 to-white/30 sm:block" />
          </div>
          <div className="absolute inset-0 hidden bg-gradient-to-r from-black/28 via-black/8 to-transparent sm:block" />
          <div className="relative z-10 hidden h-full max-w-[70%] flex-col justify-center px-4 py-4 sm:flex sm:max-w-3xl sm:px-6 md:px-9">
            <h1 className="text-[22px] font-black uppercase leading-[1.05] tracking-normal text-white drop-shadow-sm sm:text-3xl">{slide.title}</h1>
            <p className="mt-2 max-w-[25ch] text-[11px] font-semibold leading-4 text-white/95 sm:max-w-[32ch] sm:text-base md:text-xl">{slide.copy}</p>
            <div className="mt-4 flex items-center gap-3 sm:mt-5">
              <a href="#products" className="inline-flex h-9 items-center rounded-md bg-white px-3 text-xs font-black text-ink shadow-sm hover:bg-white/90 sm:h-10 sm:px-4 sm:text-sm">Shop Now</a>
              <span className="hidden rounded-full bg-white/15 px-3 py-1 text-xs font-black text-white ring-1 ring-white/25 sm:inline-flex">{slide.badge}</span>
            </div>
          </div>
          <div className="absolute bottom-3 left-4 z-20 flex gap-1.5 sm:bottom-4 sm:left-6 sm:gap-2 md:left-9">
            {heroSlides.map((item, index) => (
              <button
                key={item.title}
                className={`h-1.5 rounded-full transition-all sm:h-2 ${activeSlide === index ? 'w-7 bg-white sm:w-8' : 'w-1.5 bg-white/45 hover:bg-white/75 sm:w-2'}`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Show banner ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-md bg-white p-2 shadow-sm sm:p-3">
        <div className="flex items-center justify-between gap-3 px-1 pb-2 sm:pb-3">
          <h2 className="text-base font-black sm:text-xl">Shop by category</h2>
          <button className="text-xs font-black text-leaf sm:text-sm" onClick={onSeeAllCategories}>See All</button>
        </div>
        <div className="grid grid-cols-4 gap-2 sm:grid-cols-5 sm:gap-2 lg:grid-cols-10">
          {categories.map((category) => (
            <button key={category.id} onClick={() => onSeeAllCategories(category.id)} className={`group min-h-[86px] rounded-md p-1.5 text-center transition sm:min-h-0 sm:p-1.5 ${activeCategory === category.id ? 'border-leaf bg-mint shadow-sm' : 'border-black/10 hover:border-leaf/40 bg-white shadow-sm hover:bg-[#fbfbf6]'}`}>
              <img className="mx-auto h-11 w-11 rounded-md object-cover transition group-hover:scale-105 sm:h-16 sm:w-16" src={category.image} alt={category.name} />
              <span className="mt-1.5 block text-[10px] font-black leading-tight sm:mt-2 sm:text-xs sm:font-bold">{category.name}</span>
            </button>
          ))}
        </div>
      </section>

      <section id="products" className="mt-5 grid gap-5 lg:grid-cols-[220px_1fr]">
        <aside className="hidden self-start rounded-md bg-white p-4 shadow-sm lg:block">
          <h2 className="flex items-center gap-2 text-base font-black"><SlidersHorizontal className="h-5 w-5" /> Filters</h2>
          <div className="mt-4 space-y-2">
            {categories.map((category) => (
              <button key={category.id} onClick={() => onSeeAllCategories(category.id)} className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-semibold ${activeCategory === category.id ? 'bg-mint text-leaf' : 'hover:bg-black/5'}`}>
                {category.name}
                <span className="text-xs text-black/40">{category.id === 'all' ? products.length : products.filter((item) => item.category === category.id).length}</span>
              </button>
            ))}
          </div>
        </aside>

        <div>
          <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-2xl font-black">Buy essentials online</h2>
              <p className="text-sm text-black/55">Showing {homeProducts.length} of {visibleProducts.length} products near {location}</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button className="h-10 rounded-md border border-leaf px-3 text-sm font-black text-leaf hover:bg-mint" onClick={() => onSeeAllCategories(activeCategory)}>
                See All
              </button>
              <select value={sort} onChange={(event) => setSort(event.target.value)} className="h-10 rounded-md border border-black/10 bg-white px-3 text-sm font-semibold outline-none">
                <option value="popular">Sort by popularity</option>
                <option value="fastest">Fastest delivery</option>
                <option value="price-low">Price: low to high</option>
                <option value="price-high">Price: high to low</option>
              </select>
            </div>
          </div>

          {homeProducts.length ? (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
              {homeProducts.map((product) => (
                <ProductCard key={product.id} product={product} cart={cart} wished={wishlist.includes(product.id)} onAdd={(cartKey) => addToCart({ cartKey })} onDecrease={(cartKey) => decreaseCart({ cartKey })} onWish={() => toggleWishlist(product.id)} onOpen={() => openProduct(product.id)} onShare={() => shareProduct(product.id)} />
              ))}
            </div>
          ) : (
            <div className="grid min-h-[260px] place-items-center rounded-md bg-white p-8 text-center">
              <div>
                <Search className="mx-auto h-10 w-10 text-black/25" />
                <h3 className="mt-3 text-lg font-black">No matching items</h3>
                <p className="text-sm text-black/55">Try a different search or category.</p>
                <button className="mt-4 rounded-md bg-leaf px-4 py-2 text-sm font-bold text-white" onClick={clearFilters}>Clear filters</button>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="mt-8 grid gap-3 rounded-md bg-ink p-5 text-white md:grid-cols-3">
        <Feature icon={Bike} title="Fast delivery" text="Slots update instantly with a 9-15 minute delivery promise." />
        <Feature icon={Sparkles} title="Fresh picks" text="Curated produce, dairy, bakery and household staples." />
        <Feature icon={CreditCard} title="Easy checkout" text="Apply coupons, review fees and place a mock order." />
      </section>
    </main>
  );
}
