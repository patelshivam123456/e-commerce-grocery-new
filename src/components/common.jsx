import React, { useState } from "react";
import {
  ArrowLeft,
  Clock3,
  Heart,
  Minus,
  Plus,
  Share2,
  ShoppingBag,
  Tag,
} from "lucide-react";
import { couponOptions } from "../data/catalog.js";
import { cartKeyFor, formatRupees, getUnitOptions } from "../utils/commerce.js";

export function ProductCard({
  product,
  cart = {},
  quantity,
  wished,
  onAdd,
  onDecrease,
  onWish,
  onOpen,
  onShare,
}) {
  const unitOptions = getUnitOptions(product);
  const [selectedUnitIndex, setSelectedUnitIndex] = useState(0);
  const selectedUnit = unitOptions[selectedUnitIndex] || unitOptions[0];
  const selectedCartKey =
    selectedUnit.unit === product.unit
      ? String(product.id)
      : cartKeyFor(product.id, selectedUnit.unit);
  const selectedQuantity = cart[selectedCartKey] || quantity || 0;

  return (
    <article className="relative flex flex-col rounded-md border border-black/10 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft sm:min-h-[286px]">
      <div className="relative rounded-md bg-[#f7f7f2]">
        <button className="block w-full text-left" onClick={onOpen}>
          <img
            className="aspect-square h-32 w-full rounded-t-md object-cover sm:h-44"
            src={product.image}
            alt={product.name}
          />
        </button>
        {selectedUnit.discount > 0 ? (
          <span
            className="absolute left-0 top-0 rounded-tl-md bg-[#4f20ff] px-1.5 py-1 pb-1.5 text-center text-[10px] font-black uppercase leading-3 text-white shadow-sm"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% 100%, 78% 86%, 58% 100%, 38% 86%, 18% 100%, 0 86%)",
            }}
          >
            {selectedUnit.discount}%<br />
            OFF
          </span>
        ) : (
          <span className="absolute left-2 top-2 rounded bg-white px-2 py-1 text-[11px] font-black text-leaf shadow-sm">
            {product.time} min
          </span>
        )}
        <div className="absolute right-2 top-2 flex gap-1.5 sm:hidden">
          <button
            className="grid h-8 w-8 place-items-center rounded-full bg-white shadow-sm"
            onClick={onWish}
            aria-label={`Wishlist ${product.name}`}
          >
            <Heart
              className={`h-4 w-4 ${wished ? "fill-red-500 text-red-500" : "text-black/55"}`}
            />
          </button>
          {onShare && (
            <button
              className="grid h-8 w-8 place-items-center rounded-full bg-white shadow-sm"
              onClick={onShare}
              aria-label={`Share ${product.name}`}
            >
              <Share2 className="h-4 w-4 text-black/60" />
            </button>
          )}
        </div>
      </div>
      <button
        className="absolute right-5 top-2 hidden h-8 w-8 place-items-center rounded-full bg-white shadow-sm sm:grid"
        onClick={onWish}
        aria-label={`Wishlist ${product.name}`}
      >
        <Heart
          className={`h-4 w-4 ${wished ? "fill-red-500 text-red-500" : "text-black/55"}`}
        />
      </button>
      <div className="flex flex-1 flex-col px-3 py-2 sm:py-3">
        <p className="text-[11px] font-bold uppercase text-leaf">
          {product.tag}
        </p>
        <button className="text-left" onClick={onOpen}>
          <h3 className="my-1 line-clamp-2  text-sm font-black font-medium leading-5">
            {product.name}
          </h3>
        </button>
        <div className="mt-0 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-black/50">
          <span>★ {product.rating}</span>
          <span className="inline-flex items-center gap-1 font-bold text-leaf">
            <Clock3 className="h-3 w-3" /> {product.time} min
          </span>
        </div>
        <label className="mt-2 block">
          <span className="sr-only">Select unit</span>
          <select
            className="h-9 w-full rounded-md border border-black/10 bg-[#f7f7f2] px-2 text-xs font-black outline-none ring-leaf/20 focus:ring-2 sm:hidden"
            value={selectedUnitIndex}
            onChange={(event) =>
              setSelectedUnitIndex(Number(event.target.value))
            }
          >
            {unitOptions.map((option, index) => (
              <option key={option.unit} value={index}>
                {option.unit}
              </option>
            ))}
          </select>
          <select
            className="hidden h-9 w-full rounded-md border border-black/10 bg-[#f7f7f2] px-2 text-xs font-black outline-none ring-leaf/20 focus:ring-2 sm:block"
            value={selectedUnitIndex}
            onChange={(event) =>
              setSelectedUnitIndex(Number(event.target.value))
            }
          >
            {unitOptions.map((option, index) => (
              <option key={option.unit} value={index}>
                {option.unit}
              </option>
            ))}
          </select>
        </label>
        <div className="mt-auto flex items-end justify-between gap-2 pt-3">
          <div className="min-w-0">
            {/* {selectedUnit.discount > 0 && <p className="mb-1 hidden rounded bg-red-500 px-1.5 py-0.5 text-[10px] font-black leading-none text-white sm:inline-flex">{selectedUnit.discount}% OFF</p>} */}
            <p className="text-sm font-black">
              {formatRupees(selectedUnit.price)}
            </p>
            {selectedUnit.oldPrice > selectedUnit.price && (
              <p className="text-xs text-black/40 line-through">
                {formatRupees(selectedUnit.oldPrice)}
              </p>
            )}
          </div>
          <QuantityButton
            quantity={selectedQuantity}
            onAdd={() => onAdd(selectedCartKey)}
            onDecrease={() => onDecrease(selectedCartKey)}
          />
        </div>
      </div>
    </article>
  );
}

export function ProductRail({ title, products, onAdd, onOpen, onSeeAll }) {
  return (
    <section className="mt-6">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-xl font-black">{title}</h2>
        <button className="text-sm font-black text-leaf" onClick={onSeeAll}>
          See All
        </button>
      </div>
      <div className="no-scrollbar flex gap-3 overflow-x-auto pb-2">
        {products.map((item) => (
          <article
            key={`${title}-${item.name}-${item.unit}`}
            className="flex min-h-[270px] w-[182px] shrink-0 flex-col rounded-md border border-black/10 bg-white p-0 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft"
          >
            <div className="relative overflow-hidden rounded-md bg-[#f7f7f2]">
              {item.oldPrice && (
                <span className="absolute left-2 top-2 rounded bg-leaf px-2 py-1 text-[10px] font-black text-white">
                  {Math.round(
                    ((item.oldPrice - item.price) / item.oldPrice) * 100,
                  )}
                  % OFF
                </span>
              )}
              <button
                className="block w-full text-left"
                onClick={() => onOpen(item.id)}
              >
                <img
                  className="h-[146px] w-full rounded-md object-cover"
                  src={item.image}
                  alt={item.name}
                />
              </button>
            </div>
            <div className="p-3 flex flex-1 flex-col">
              <p className="text-[11px] font-bold text-black/45">
                <Clock3 className="mr-1 inline h-3 w-3 text-leaf" /> 8 min
              </p>
              <button className="text-left" onClick={() => onOpen(item.id)}>
                <h3 className="mt-1 line-clamp-2 min-h-[42px] text-sm font-medium leading-5">
                  {item.name}
                </h3>
              </button>
              <p className="mt-1 text-xs text-black/50">{item.unit}</p>
              <div className="mt-auto flex items-end justify-between gap-2 pt-0">
                <div>
                  <p className="text-sm font-black">
                    {formatRupees(item.price)}
                  </p>
                  {item.oldPrice && (
                    <p className="text-xs text-black/40 line-through">
                      {formatRupees(item.oldPrice)}
                    </p>
                  )}
                </div>
                <button
                  className="h-8 rounded-md border border-leaf px-3 text-xs font-black text-leaf hover:bg-mint"
                  onClick={() => onAdd(item.id)}
                >
                  ADD
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function BlinkitBenefit({ icon: Icon, title, text }) {
  return (
    <div className="flex gap-3">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-[#f7f7f2]">
        <Icon className="h-5 w-5 text-leaf" />
      </span>
      <div>
        <h3 className="text-sm font-black font-medium">{title}</h3>
        <p className="mt-1 text-xs leading-5 text-black/55">{text}</p>
      </div>
    </div>
  );
}

export function DetailRow({ label, value }) {
  return (
    <div className="grid gap-1 p-2 sm:p-3 sm:grid-cols-[180px_1fr]">
      <p className="text-xs font-bold text-black/45">{label}</p>
      <p className="text-sm font-black font-medium text-ink">{value}</p>
    </div>
  );
}

export function BillSummary({
  subtotal,
  deliveryFee,
  handlingFee,
  discount,
  total,
  coupon,
  setCoupon,
}) {
  return (
    <div className="rounded-md bg-white p-3">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-black">
        <Tag className="h-4 w-4 text-leaf" /> Offers and bill
      </h3>
      <div className="mb-3 grid gap-2">
        {couponOptions.map((option) => (
          <button
            key={option.code}
            className={`flex items-center justify-between rounded-md border p-3 text-left ${coupon === option.code ? "border-leaf bg-mint" : "border-black/10"}`}
            onClick={() => setCoupon(coupon === option.code ? "" : option.code)}
          >
            <span>
              <span className="block text-sm font-black">{option.code}</span>
              <span className="block text-xs text-black/50">
                {option.label}
              </span>
            </span>
            <span className="text-xs font-black text-leaf">
              {subtotal >= option.min
                ? "Apply"
                : `${formatRupees(option.min - subtotal)} more`}
            </span>
          </button>
        ))}
      </div>
      <BillLine label="Item total" value={formatRupees(subtotal)} />
      <BillLine
        label="Delivery fee"
        value={deliveryFee ? formatRupees(deliveryFee) : "FREE"}
      />
      <BillLine label="Handling charge" value={formatRupees(handlingFee)} />
      {discount > 0 && (
        <BillLine
          label="Coupon discount"
          value={`-${formatRupees(discount)}`}
          highlight
        />
      )}
      <div className="mt-2 flex items-center justify-between rounded-md bg-mint px-3 py-2 text-sm font-black">
        <span>To pay</span>
        <span>{formatRupees(total)}</span>
      </div>
    </div>
  );
}

export function CartItem({ item, addToCart, decreaseCart, onOpen, onShare }) {
  const key = item.cartKey || item.id;
  return (
    <div className="flex gap-3 rounded-md bg-white p-3">
      <button
        className="shrink-0"
        onClick={() => onOpen?.(item.productId || item.id)}
        aria-label={`Open ${item.name}`}
      >
        <img
          className="h-16 w-16 rounded-md object-cover"
          src={item.image}
          alt={item.name}
        />
      </button>
      <div className="min-w-0 flex-1">
        <button
          className="block max-w-full text-left"
          onClick={() => onOpen?.(item.productId || item.id)}
        >
          <h3 className="truncate text-sm font-black hover:text-leaf">
            {item.name}
          </h3>
        </button>
        <p className="text-xs text-black/50">{item.unit}</p>
        <p className="mt-2 text-sm font-black">
          {formatRupees(item.price * item.quantity)}
        </p>
      </div>
      <div className="flex shrink-0 flex-col items-end justify-between gap-2">
        {onShare && (
          <button
            className="grid h-8 w-8 place-items-center rounded-md text-leaf hover:bg-mint"
            onClick={() => onShare(item.productId || item.id)}
            aria-label={`Share ${item.name}`}
          >
            <Share2 className="h-4 w-4" />
          </button>
        )}
        <QuantityButton
          quantity={item.quantity}
          onAdd={() => addToCart({ cartKey: key })}
          onDecrease={() => decreaseCart({ cartKey: key })}
          small
        />
      </div>
    </div>
  );
}

export function QuantityButton({
  quantity,
  onAdd,
  onDecrease,
  small = false,
  wide = false,
}) {
  if (!quantity) {
    return (
      <button
        className={`${wide ? "w-full" : ""} ${small ? "h-8 px-3" : "h-9 px-4"} rounded-md border border-leaf text-sm font-black text-leaf hover:bg-mint`}
        onClick={onAdd}
      >
        ADD
      </button>
    );
  }
  return (
    <div
      className={`${wide ? "w-full justify-between" : ""} ${small ? "h-8" : "h-9"} flex items-center overflow-hidden rounded-md border border-leaf bg-leaf text-white`}
    >
      <button
        className={`${small ? "h-8 w-8" : "h-9 w-6"} grid place-items-center hover:bg-white/10`}
        onClick={onDecrease}
        aria-label="Decrease quantity"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span
        className={`${wide ? "flex-1" : small ? "w-7" : "w-6"} text-center text-sm font-black`}
      >
        {quantity}
      </span>
      <button
        className={`${small ? "h-8 w-8" : "h-9 w-6"} grid place-items-center hover:bg-white/10`}
        onClick={onAdd}
        aria-label="Increase quantity"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}

export function CheckoutBlock({
  icon: Icon,
  title,
  action,
  onAction,
  children,
}) {
  return (
    <div className="rounded-md bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h2 className="flex items-center gap-2 font-black">
          <Icon className="h-5 w-5 text-leaf" /> {title}
        </h2>
        {action && (
          <button className="text-sm font-black text-leaf" onClick={onAction}>
            {action}
          </button>
        )}
      </div>
      {children}
    </div>
  );
}

export function BackButton({ onClick, label }) {
  return (
    <button
      className="mb-4 flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-black shadow-sm"
      onClick={onClick}
    >
      <ArrowLeft className="h-4 w-4" /> {label}
    </button>
  );
}

export function BillLine({ label, value, highlight = false }) {
  return (
    <div className="flex items-center justify-between rounded-md bg-white px-3 py-2 text-sm">
      <span className={highlight ? "font-bold text-leaf" : "text-black/65"}>
        {label}
      </span>
      <span className="font-black">{value}</span>
    </div>
  );
}

export function InfoPill({ label, value }) {
  return (
    <div className="rounded-md bg-white">
      <p className="text-xs text-center text-black/45">{label}</p>
      <p className="font-black font-medium">{value}</p>
    </div>
  );
}

export function Feature({ icon: Icon, title, text }) {
  return (
    <div className="flex gap-3">
      <Icon className="mt-1 h-6 w-6 shrink-0 text-limepop" />
      <div>
        <h3 className="font-black font-medium">{title}</h3>
        <p className="mt-1 text-sm text-white/70">{text}</p>
      </div>
    </div>
  );
}

export function OrderItem({ item }) {
  return (
    <div className="flex items-center gap-3 rounded-md bg-[#f7f7f2] p-3">
      <img
        className="h-14 w-14 rounded-md object-cover"
        src={item.image}
        alt={item.name}
      />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-black">{item.name}</p>
        <p className="text-xs text-black/50">
          {item.quantity} x {item.unit}
        </p>
      </div>
      <p className="text-sm font-black">
        {formatRupees(item.price * item.quantity)}
      </p>
    </div>
  );
}

export function OrderRow({ order, onClick }) {
  return (
    <button
      className="flex w-full items-center gap-3 rounded-md border border-black/10 p-3 text-left hover:bg-[#fbfbf6]"
      onClick={onClick}
    >
      <div className="grid h-11 w-11 place-items-center rounded-md bg-mint text-leaf">
        <ShoppingBag className="h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-black">Order {order.id}</p>
        <p className="text-xs text-black/50">
          {order.items.length} items • {order.placedAt}
        </p>
      </div>
      <div className="text-right">
        <p className="text-sm font-black">{formatRupees(order.total)}</p>
        <p className="text-xs text-leaf">{order.status}</p>
      </div>
    </button>
  );
}

export function ProfileAction({ icon: Icon, label, onClick = () => {} }) {
  return (
    <button
      className="flex items-center gap-3 rounded-md border border-black/10 p-3 text-left text-sm font-black hover:bg-[#fbfbf6]"
      onClick={onClick}
    >
      <Icon className="h-5 w-5 text-leaf" /> {label}
    </button>
  );
}

export function EmptyState({ icon: Icon, title, text, action, onAction }) {
  return (
    <div className="grid min-h-[260px] place-items-center rounded-md bg-white p-8 text-center">
      <div>
        <Icon className="mx-auto h-12 w-12 text-black/25" />
        <h3 className="mt-3 text-lg font-black">{title}</h3>
        <p className="mt-1 text-sm text-black/50">{text}</p>
        {action && (
          <button
            className="mt-4 rounded-md bg-leaf px-4 py-2 text-sm font-bold text-white"
            onClick={onAction}
          >
            {action}
          </button>
        )}
      </div>
    </div>
  );
}

export function RecipeStat({ value, label, highlight = false }) {
  return (
    <div className="border-r border-black/10 last:border-r-0">
      <p
        className={`text-center text-lg font-black ${highlight ? "text-leaf" : "text-ink"}`}
      >
        {value}
      </p>
      <p className="text-center text-sm font-semibold text-black/65">{label}</p>
    </div>
  );
}
