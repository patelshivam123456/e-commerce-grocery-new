import React, { useEffect, useState } from 'react';
import { ChevronDown, Clock3, MessageSquareText, Heart, Share2, ShoppingBag, Star, Tag, X } from 'lucide-react';
import { categories, collectionMap, cowMilkRecipes } from '../data/catalog.js';
import { cartKeyFor, formatRupees, getProductImages, getProductRatingBars, getProductReviewCount, getProductReviews, getUnitOptions } from '../utils/commerce.js';
import { BackButton, BlinkitBenefit, DetailRow, InfoPill, ProductRail, QuantityButton } from '../components/common.jsx';

export function ProductDetailPage({ product, related, cart, wished, onBack, onWish, addToCart, decreaseCart, openProduct, openRecipe, openCollection, openReviews, onShare, onGoToCart }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedUnitIndex, setSelectedUnitIndex] = useState(0);
  const [detailsExpanded, setDetailsExpanded] = useState(false);
  const [productInfoOpen, setProductInfoOpen] = useState(() => (typeof window !== 'undefined' ? window.matchMedia('(min-width: 640px)').matches : true));
  const [isReviewPopupOpen, setIsReviewPopupOpen] = useState(false);
  const [draftRating, setDraftRating] = useState(5);
  const [draftReview, setDraftReview] = useState('');
  const categoryName = categories.find((category) => category.id === product.category)?.name || 'Grocery';
  const productImages = getProductImages(product);
  const selectedImage = productImages[selectedImageIndex] || product.image;
  const unitOptions = getUnitOptions(product);
  const selectedUnit = unitOptions[selectedUnitIndex] || unitOptions[0];
  const selectedCartKey = selectedUnit.unit === product.unit ? String(product.id) : cartKeyFor(product.id, selectedUnit.unit);
  const selectedQuantity = cart[selectedCartKey] || 0;
  const cartActionLabel = selectedQuantity > 0 ? 'Go to cart' : 'Add to cart';
  const reviewCount = getProductReviewCount(product);
  const reviews = getProductReviews(product);
  const ratingBars = getProductRatingBars(product);
  const handleCartAction = () => {
    if (selectedQuantity > 0) {
      onGoToCart?.();
      return;
    }

    addToCart({ cartKey: selectedCartKey });
  };

  useEffect(() => {
    setSelectedImageIndex(0);
    setSelectedUnitIndex(0);
    setDetailsExpanded(false);
    setProductInfoOpen(typeof window !== 'undefined' ? window.matchMedia('(min-width: 640px)').matches : true);
    setIsReviewPopupOpen(false);
    setDraftRating(5);
    setDraftReview('');
  }, [product.id]);

  return (
    <main className="mx-auto max-w-7xl px-4 py-5 pb-4 sm:pb-2 lg:px-6">
      {/* <BackButton onClick={onBack} label={`Home / ${categoryName} / ${product.name}`} /> */}
      <section className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_420px] xl:grid-cols-[minmax(0,1fr)_460px]">
        <div className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          <div className="grid gap-3 overflow-hidden rounded-md border border-black/10 bg-white p-0 shadow-sm md:gap-4 md:p-4 md:grid-cols-[82px_1fr]">
            <div className="order-2 flex gap-2 overflow-auto px-2 pb-2 md:order-1 md:block md:space-y-3 md:px-0 md:pb-0">
              {productImages.map((image, index) => (
                <button key={image} className={`h-20 w-20 shrink-0 overflow-hidden rounded-md border bg-[#f7f7f2] p-1 ${index === selectedImageIndex ? 'border-leaf' : 'border-black/10'}`} onClick={() => setSelectedImageIndex(index)}>
                  <img className="h-full w-full rounded object-cover" src={image} alt={`${product.name} view ${index + 1}`} />
                </button>
              ))}
            </div>
            <div className="relative order-1 grid aspect-square min-h-0 place-items-center bg-[#f8f8f3] p-0 md:order-2 md:min-h-[420px] md:rounded-md md:p-6">
              <img className="h-[300px] sm:h-full sm:w-full w-[300px] object-cover sm:max-h-[520px] sm:max-w-[520px] rounded-md" src={selectedImage} alt={product.name} />
              <div className="absolute right-5 top-5 flex gap-2 md:hidden">
                <button className="grid h-9 w-9 place-items-center rounded-full bg-white shadow-sm" onClick={onWish} aria-label={`Wishlist ${product.name}`}>
                  <Heart className={`h-5 w-5 ${wished ? 'fill-red-500 text-red-500' : 'text-black/55'}`} />
                </button>
                <button className="grid h-9 w-9 place-items-center rounded-full bg-white shadow-sm" onClick={onShare} aria-label={`Share ${product.name}`}>
                  <Share2 className="h-5 w-5 text-black/60" />
                </button>
              </div>
            </div>
          </div>

          {productInfoOpen && (
            <section className="hidden rounded-md border border-black/10 bg-white p-5 shadow-sm sm:block">
              <h2 className="text-lg font-black">Product Details</h2>
              <div className="mt-4 divide-y divide-black/10 rounded-md border border-black/10">
                <DetailRow label="Processing Type" value={product.category === 'instant' ? 'Ready to cook' : 'Homogenized'} />
                <DetailRow label="Key Features" value={product.detail} />
                <DetailRow label="Unit" value={selectedUnit.unit} />
                <DetailRow label="Shelf Life" value={product.category === 'dairy' ? 'Consume within 2 days of opening' : 'Best before date printed on pack'} />
                <DetailRow label="Country of Origin" value="India" />
                {detailsExpanded && (
                  <>
                    <DetailRow label="Seller" value="Just Harvst retail partner" />
                    <DetailRow label="Manufacturer" value={`${product.name.split(' ')[0]} Foods Pvt Ltd`} />
                    <DetailRow label="Customer Care" value="support@Just Harvst.example" />
                  </>
                )}
              </div>
              <button className="mt-4 text-sm font-black text-leaf" onClick={() => setDetailsExpanded((expanded) => !expanded)}>
                {detailsExpanded ? 'View less details' : 'View more details'}
              </button>
            </section>
          )}
        </div>

        <aside className="space-y-5">
          <section className="rounded-md border border-black/10 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                {/* <p className="text-xs text-black/45">Home / {categoryName} / {product.name}</p> */}
                <h1 className="text-2xl font-black leading-tight text-ink">{product.name}</h1>
              </div>
              <div className="hidden shrink-0 gap-2 md:flex">
                <button className="grid h-10 w-10 place-items-center rounded-full border border-black/10 hover:bg-black/5" onClick={onWish} aria-label={`Wishlist ${product.name}`}>
                  <Heart className={`h-5 w-5 ${wished ? 'fill-red-500 text-red-500' : 'text-black/55'}`} />
                </button>
                <button className="grid h-10 w-10 place-items-center rounded-full border border-black/10 hover:bg-black/5" onClick={onShare} aria-label={`Share ${product.name}`}>
                  <Share2 className="h-5 w-5 text-black/60" />
                </button>
              </div>
            </div>
            <div className="mt-3 border-t border-black/10 pt-3">
              <p className="text-sm font-black text-ink">Select Unit</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {unitOptions.map((option, index) => (
                  <button
                    key={option.unit}
                    className={`relative min-w-[110px] rounded-md border px-3 py-3 text-left transition ${selectedUnitIndex === index ? 'border-leaf bg-mint shadow-sm' : 'border-black/20 bg-white hover:border-leaf/50'}`}
                    onClick={() => setSelectedUnitIndex(index)}
                  >
                    {option.discount > 0 && (
                      <span className="absolute -top-2 left-8 rounded bg-[#6d5dfc] px-2 py-0.5 text-[10px] font-black text-white">
                        {option.discount}% OFF
                      </span>
                    )}
                    <span className="block text-sm font-bold">{option.unit}</span>
                    <span className="mt-1 block text-sm font-black">
                      {formatRupees(option.price)}{' '}
                      {option.oldPrice > option.price && <span className="font-semibold text-black/45 line-through">{formatRupees(option.oldPrice)}</span>}
                    </span>
                  </button>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-black/55">{selectedUnit.unit}</p>
                  <p className="mt-1 text-2xl font-black">
                    {formatRupees(selectedUnit.price)}{' '}
                    {selectedUnit.oldPrice > selectedUnit.price && <span className="text-base font-semibold text-black/45 line-through">{formatRupees(selectedUnit.oldPrice)}</span>}
                    {selectedUnit.discount > 0 && <span className="ml-2 rounded bg-[#6d5dfc] px-2 py-1 text-[10px] font-black text-white">{selectedUnit.discount}% OFF</span>}
                  </p>
                  <p className="mt-1 text-xs text-black/50">(Inclusive of all taxes)</p>
                  <p className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-mint px-2.5 py-1.5 text-xs font-black text-leaf">
                    <Clock3 className="h-4 w-4" /> Delivery in {product.time} minutes
                  </p>
                </div>
                <div className="hidden items-center gap-3 sm:flex">
                  {/* {selectedQuantity > 0 && (
                    <QuantityButton quantity={selectedQuantity} onAdd={() => addToCart({ cartKey: selectedCartKey })} onDecrease={() => decreaseCart({ cartKey: selectedCartKey })} />
                  )} */}
                  <button className="h-12 min-w-[160px] rounded-md bg-leaf px-6 text-sm font-black text-white hover:bg-[#096d19]" onClick={handleCartAction}>
                    {cartActionLabel}
                  </button>
                </div>
              </div>
            </div>
          </section>

          <button className="flex h-10 w-full items-center justify-start gap-1 rounded-md bg-white px-3 text-sm font-black text-[#008b00] shadow-sm sm:hidden" onClick={() => setProductInfoOpen((open) => !open)}>
            {productInfoOpen ? 'Hide product details' : 'View product details'}
            <ChevronDown className={`h-4 w-4 transition ${productInfoOpen ? 'rotate-180' : ''}`} />
          </button>

          <button className="hidden h-10 w-full items-center justify-center gap-1 rounded-md border border-black/10 bg-white px-3 text-sm font-black text-leaf shadow-sm hover:bg-mint sm:flex" onClick={() => setProductInfoOpen((open) => !open)}>
            {productInfoOpen ? 'Hide product details sections' : 'Show product details sections'}
            <ChevronDown className={`h-4 w-4 transition ${productInfoOpen ? 'rotate-180' : ''}`} />
          </button>

          {productInfoOpen && <section className="sm:hidden block rounded-md border border-black/10 bg-white p-3 shadow-sm ">
            <h2 className="text-lg font-black px-2">Product Details</h2>
            <div className="mt-1 ">
              <DetailRow label="Processing Type" value={product.category === 'instant' ? 'Ready to cook' : 'Homogenized'} />
              <DetailRow label="Key Features" value={product.detail} />
              <DetailRow label="Unit" value={selectedUnit.unit} />
              <DetailRow label="Shelf Life" value={product.category === 'dairy' ? 'Consume within 2 days of opening' : 'Best before date printed on pack'} />
              <DetailRow label="Country of Origin" value="India" />
              <DetailRow label="Seller" value="Just Harvst retail partner" />
                  <DetailRow label="Manufacturer" value={`${product.name.split(' ')[0]} Foods Pvt Ltd`} />
                  <DetailRow label="Customer Care" value="support@Just Harvst.example" />
              {/* {detailsExpanded && (
                <>
                  
                </>
              )} */}
            </div>
            {/* <button className="mt-4 text-sm font-black text-leaf" onClick={() => setDetailsExpanded((expanded) => !expanded)}>
              {detailsExpanded ? 'View less details' : 'View more details'}
            </button> */}
          </section>}

          {productInfoOpen && <section className="rounded-md border border-black/10 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-black">Why shop from Just Harvst?</h2>
            <div className="mt-4 space-y-5">
              <BlinkitBenefit icon={Clock3} title="Round The Clock Delivery" text="Get items delivered to your doorstep from dark stores near you, whenever you need them." />
              <BlinkitBenefit icon={Tag} title="Best Prices & Offers" text="Best price destination with offers directly from the manufacturers." />
              <BlinkitBenefit icon={ShoppingBag} title="Wide Assortment" text="Choose from 30,000+ products across food, personal care, household and other categories." />
            </div>
          </section>}

          {productInfoOpen && <section className="rounded-md border border-black/10 bg-white py-3 px-4 shadow-sm">
            <h2 className="text-lg font-black">Product Highlights</h2>
            <div className="mt-3 flex justify-between gap-3 text-sm">
              <InfoPill label="Type" value={product.tag} />
              <InfoPill label="Pack" value={product.unit} />
              <InfoPill label="Delivery" value={`${product.time} min`} />
            </div>
          </section>}

          {productInfoOpen && <section className="rounded-md border border-black/10 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-black">Ratings & reviews</h2>
                <p className="mt-1 text-xs font-semibold text-black/50">{reviewCount} verified customer ratings</p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <button className="hidden h-10 items-center gap-2 rounded-md border border-leaf px-3 text-xs font-black text-leaf hover:bg-mint sm:flex" onClick={() => setIsReviewPopupOpen(true)}>
                  <MessageSquareText className="h-4 w-4" /> Rate
                </button>
                <div className="rounded-md bg-leaf px-3 py-2 text-right text-white">
                  <p className="flex items-center justify-end gap-1 text-xl font-black">
                    {product.rating} <Star className="h-4 w-4 fill-white" />
                  </p>
                  <p className="text-[11px] font-bold text-white/80">Average</p>
                </div>
              </div>
            </div>
            <button className="mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-md border border-leaf text-sm font-black text-leaf hover:bg-mint sm:hidden" onClick={() => setIsReviewPopupOpen(true)}>
              <MessageSquareText className="h-4 w-4" /> Rate and review
            </button>

            <div className="mt-4 grid gap-4 md:grid-cols-[170px_1fr]">
              <div className="space-y-2">
                {ratingBars.map((bar) => (
                  <div key={bar.score} className="grid grid-cols-[26px_1fr] items-center gap-2 text-xs font-black text-black/55">
                    <span className="flex items-center gap-1">{bar.score}<Star className="h-3 w-3 fill-leaf text-leaf" /></span>
                    <span className="h-2 overflow-hidden rounded-full bg-black/10">
                      <span className="block h-full rounded-full bg-leaf" style={{ width: `${bar.width}%` }} />
                    </span>
                  </div>
                ))}
              </div>
              <div className="grid gap-3">
                {reviews.slice(0, 3).map((review) => (
                  <article key={`${review.name}-${review.date}`} className="rounded-md border border-black/10 bg-[#f7f7f2] p-3">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-black">{review.name}</p>
                        <p className="text-xs font-semibold text-black/45">{review.date}</p>
                      </div>
                      <span className="inline-flex items-center gap-1 rounded bg-leaf px-2 py-1 text-xs font-black text-white">
                        {review.rating} <Star className="h-3 w-3 fill-white" />
                      </span>
                    </div>
                    <p className="mt-2 text-sm font-medium leading-6 text-black/65">{review.text}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <button className="h-10 rounded-md bg-leaf px-4 text-sm font-black text-white hover:bg-[#096d19]" onClick={() => setIsReviewPopupOpen(true)}>
                Write a review
              </button>
              <button className="h-10 rounded-md border border-black/15 px-4 text-sm font-black text-ink hover:border-leaf hover:text-leaf" onClick={() => openReviews(product.id)}>
                See all reviews
              </button>
            </div>
          </section>}
        </aside>
      </section>

      <ProductRail title="Similar products" products={collectionMap['similar-products'].products} onAdd={addToCart} onOpen={openProduct} onSeeAll={() => openCollection('similar-products')} />
      <ProductRail title="Top 10 products" products={collectionMap['top-category'].products} onAdd={addToCart} onOpen={openProduct} onSeeAll={() => openCollection('top-category')} />
      <ProductRail title="People also bought" products={collectionMap['people-also-bought'].products} onAdd={addToCart} onOpen={openProduct} onSeeAll={() => openCollection('people-also-bought')} />

      {related.length > 0 && (
        <section className="mt-6">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-xl font-black">Just Harvst dairy</h2>
            <button className="text-sm font-black text-leaf" onClick={() => openCollection('similar-products')}>See All</button>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {related.map((item) => (
              <button key={item.id} className="rounded-md border border-black/10 bg-white p-3 text-left shadow-sm hover:border-leaf" onClick={() => openProduct(item.id)}>
                <img className="aspect-square w-full rounded-md object-cover" src={item.image} alt={item.name} />
                <p className="mt-2 line-clamp-2 min-h-[40px] font-medium text-sm font-black">{item.name}</p>
                <p className="text-xs text-black/50">{item.unit}</p>
                <p className="mt-2 text-sm font-black">{formatRupees(item.price)}</p>
              </button>
            ))}
          </div>
        </section>
      )}

      <section className="mt-6 rounded-md border border-black/10 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-xl font-black">Cow Milk recipes</h2>
          <button className="text-sm font-black text-leaf" onClick={() => openCollection('recipes')}>See All</button>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {cowMilkRecipes.map((recipe) => (
            <button key={recipe.id} className="group overflow-hidden rounded-md border border-black/10 bg-[#f7f7f2] text-left text-sm font-black hover:border-leaf" onClick={() => openRecipe(recipe.id)}>
              <img className="aspect-[4/3] w-full object-cover transition group-hover:scale-105" src={recipe.image} alt={recipe.name} />
              <span className="block min-h-[48px] font-medium p-3 leading-tight">{recipe.name}</span>
            </button>
          ))}
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-[60px] z-40 border-t border-black/10 bg-white p-3 shadow-[0_-12px_30px_rgba(0,0,0,0.08)] sm:hidden">
        <div className="mx-auto flex max-w-md items-center gap-3">
          {/* {selectedQuantity > 0 && (
            <QuantityButton quantity={selectedQuantity} onAdd={() => addToCart({ cartKey: selectedCartKey })} onDecrease={() => decreaseCart({ cartKey: selectedCartKey })} />
          )} */}
          <button className="h-12 flex-1 rounded-md bg-leaf px-4 text-sm font-black text-white hover:bg-[#096d19]" onClick={handleCartAction}>
            {cartActionLabel}
          </button>
        </div>
      </div>

      {isReviewPopupOpen && (
        <div className="fixed inset-0 z-[70] grid place-items-end bg-black/40 p-0 sm:place-items-center sm:p-4" role="dialog" aria-modal="true" aria-label={`Rate ${product.name}`}>
          <section className="w-full rounded-t-md bg-white p-4 shadow-soft sm:max-w-md sm:rounded-md">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-lg font-black">Rate and review</h2>
                <p className="mt-1 text-sm font-semibold text-black/55">{product.name}</p>
              </div>
              <button className="grid h-9 w-9 place-items-center rounded-full hover:bg-black/5" onClick={() => setIsReviewPopupOpen(false)} aria-label="Close review popup">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-4 flex gap-2">
              {[1, 2, 3, 4, 5].map((score) => (
                <button key={score} className="grid h-10 w-10 place-items-center rounded-md border border-black/10 hover:border-leaf" onClick={() => setDraftRating(score)} aria-label={`${score} star rating`}>
                  <Star className={`h-5 w-5 ${score <= draftRating ? 'fill-amber-400 text-amber-400' : 'text-black/25'}`} />
                </button>
              ))}
            </div>
            <label className="mt-4 block">
              <span className="text-xs font-black text-black/55">Your review</span>
              <textarea className="mt-2 min-h-28 w-full rounded-md border border-black/10 bg-[#f7f7f2] p-3 text-sm font-semibold outline-none ring-leaf/20 focus:bg-white focus:ring-4" value={draftReview} onChange={(event) => setDraftReview(event.target.value)} placeholder="Share freshness, packaging, taste or delivery feedback" />
            </label>
            <button className="mt-4 h-11 w-full rounded-md bg-leaf text-sm font-black text-white hover:bg-[#096d19]" onClick={() => setIsReviewPopupOpen(false)}>
              Submit review
            </button>
          </section>
        </div>
      )}
    </main>
  );
}
