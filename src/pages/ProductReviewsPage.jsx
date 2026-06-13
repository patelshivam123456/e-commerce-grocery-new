import React from 'react';
import { Star } from 'lucide-react';
import { BackButton } from '../components/common.jsx';
import { getProductRatingBars, getProductReviewCount, getProductReviews } from '../utils/commerce.js';

export function ProductReviewsPage({ product, onBack }) {
  const reviews = getProductReviews(product);
  const reviewCount = getProductReviewCount(product);
  const ratingBars = getProductRatingBars(product);

  return (
    <main className="mx-auto max-w-4xl px-4 py-5 pb-24 lg:px-6">
      <BackButton onClick={onBack} label="Back to product" />
      <section className="rounded-md border border-black/10 bg-white p-4 shadow-sm sm:p-5">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-black/50">{product.name}</p>
            <h1 className="mt-1 text-2xl font-black text-ink sm:text-3xl">All ratings & reviews</h1>
            <p className="mt-1 text-sm font-semibold text-black/55">{reviewCount} verified customer ratings</p>
          </div>
          <div className="rounded-md bg-leaf px-4 py-3 text-right text-white">
            <p className="flex items-center justify-end gap-1 text-2xl font-black">
              {product.rating} <Star className="h-5 w-5 fill-white" />
            </p>
            <p className="text-xs font-bold text-white/80">Average rating</p>
          </div>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-[190px_1fr]">
          <div className="space-y-2 rounded-md bg-[#f7f7f2] p-3">
            {ratingBars.map((bar) => (
              <div key={bar.score} className="grid grid-cols-[28px_1fr] items-center gap-2 text-xs font-black text-black/55">
                <span className="flex items-center gap-1">{bar.score}<Star className="h-3 w-3 fill-leaf text-leaf" /></span>
                <span className="h-2 overflow-hidden rounded-full bg-black/10">
                  <span className="block h-full rounded-full bg-leaf" style={{ width: `${bar.width}%` }} />
                </span>
              </div>
            ))}
          </div>

          <div className="grid gap-3">
            {reviews.map((review) => (
              <article key={`${review.name}-${review.date}`} className="rounded-md border border-black/10 bg-white p-4 shadow-sm">
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
      </section>
    </main>
  );
}
