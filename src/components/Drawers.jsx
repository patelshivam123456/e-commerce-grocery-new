import React from 'react';
import { ArrowLeft, Clock3, Copy, CreditCard, Linkedin, Mail, MessageCircle, Send, Share2, ShoppingCart, Smartphone, X } from 'lucide-react';
import { productUrl, formatRupees } from '../utils/commerce.js';
import { BillSummary, CartItem, EmptyState } from './common.jsx';

export function ShareDrawer({ product, status, onClose, onStatus }) {
  if (!product) return null;

  const url = productUrl(product);
  const text = `Buy ${product.name} (${product.unit}) for ${formatRupees(product.price)}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(`${text} ${url}`);
  const options = [
    { label: 'Copy Link', icon: Copy, color: 'bg-[#6d28d9]', action: async () => {
      await navigator.clipboard.writeText(url);
      onStatus('Link copied');
    } },
    { label: 'Whatsapp', icon: MessageCircle, color: 'bg-[#10b981]', href: `https://wa.me/?text=${encodedText}` },
    { label: 'Facebook', icon: Share2, color: 'bg-[#7c3aed]', href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}` },
    { label: 'Messenger', icon: Send, color: 'bg-[#6d28d9]', href: `fb-messenger://share?link=${encodedUrl}` },
    { label: 'Gmail', icon: Mail, color: 'bg-[#ef4444]', href: `mailto:?subject=${encodeURIComponent(product.name)}&body=${encodedText}` },
    { label: 'SMS', icon: Smartphone, color: 'bg-[#a855f7]', href: `sms:?body=${encodedText}` },
    { label: 'LinkedIn', icon: Linkedin, color: 'bg-[#2563eb]', href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}` },
  ];

  const runShare = async (option) => {
    try {
      if (option.action) {
        await option.action();
        return;
      }
      window.open(option.href, '_blank', 'noopener,noreferrer');
    } catch {
      onStatus('Unable to share right now');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/45" onClick={onClose}>
      <aside className="ml-auto flex h-full w-full max-w-lg flex-col bg-white shadow-soft" onClick={(event) => event.stopPropagation()}>
        <div className="flex items-center gap-4 border-b border-black/10 p-5">
          <button className="grid h-9 w-9 place-items-center rounded-md hover:bg-black/5" onClick={onClose} aria-label="Close share"><X className="h-5 w-5" /></button>
          <h2 className="text-lg font-black">Share</h2>
        </div>
        <div className="flex items-center gap-3 border-b border-black/10 bg-[#f7f7f2] p-4">
          <img className="h-14 w-14 rounded-md object-cover" src={product.image} alt={product.name} />
          <div className="min-w-0">
            <p className="truncate text-sm font-black">{product.name}</p>
            <p className="truncate text-xs text-black/55">{product.detail}</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-6 gap-y-7 p-8">
          {options.map((option) => {
            const Icon = option.icon;
            return (
              <button key={option.label} className="grid justify-items-center gap-2 text-center text-sm font-semibold text-black/70" onClick={() => runShare(option)}>
                <span className={`${option.color} grid h-12 w-12 place-items-center rounded-full text-white`}>
                  <Icon className="h-6 w-6" />
                </span>
                {option.label}
              </button>
            );
          })}
        </div>
        {status && <p className="mx-8 rounded-md bg-mint px-3 py-2 text-sm font-black text-leaf">{status}</p>}
      </aside>
    </div>
  );
}

export function CartDrawer({ open, onClose, items, subtotal, deliveryFee, handlingFee, discount, total, coupon, setCoupon, addToCart, decreaseCart, onShare, onShareProduct, onOpenProduct, onShopNow, onCheckout }) {
  if (!open) return null;
  const hasItems = items.length > 0;
  return (
    <div className="fixed inset-0 z-50 bg-black/35" onClick={onClose}>
      <aside className="ml-auto flex h-full w-full max-w-md flex-col bg-[#f7f7f2] shadow-soft" onClick={(event) => event.stopPropagation()}>
        <div className="flex items-center justify-between border-b border-black/10 bg-white p-4">
          <div className="flex items-center gap-3">
            <button className="grid h-9 w-9 place-items-center rounded-md hover:bg-black/5" onClick={onClose} aria-label="Close cart"><ArrowLeft className="h-5 w-5" /></button>
            <h2 className="text-lg font-black">My Cart</h2>
          </div>
          {/* <button className="flex h-9 items-center gap-2 rounded-md px-2 text-sm font-black text-leaf hover:bg-mint disabled:cursor-not-allowed disabled:text-black/30 disabled:hover:bg-transparent" disabled={!hasItems} onClick={onShare}>
            <Share2 className="h-4 w-4" /> Share
          </button> */}
        </div>
        <div className="flex-1 overflow-auto p-4">
          {hasItems ? (
            <div className="space-y-3">
              <div className="rounded-md bg-white p-3">
                <p className="flex items-center gap-2 text-sm font-black"><Clock3 className="h-4 w-4 text-leaf" /> Delivery in 9 minutes</p>
                <p className="mt-1 text-xs text-black/50">Shipment of {items.length} item groups</p>
              </div>
              {items.map((item) => (
                <CartItem
                  key={item.cartKey || item.id}
                  item={item}
                  addToCart={addToCart}
                  decreaseCart={decreaseCart}
                  onOpen={onOpenProduct}
                  onShare={onShareProduct}
                />
              ))}
              <BillSummary subtotal={subtotal} deliveryFee={deliveryFee} handlingFee={handlingFee} discount={discount} total={total} coupon={coupon} setCoupon={setCoupon} />
            </div>
          ) : (
            <EmptyState icon={ShoppingCart} title="Your cart is empty" text="Add snacks, staples and fresh picks to get started." action="Shop now" onAction={onShopNow} />
          )}
        </div>
        {hasItems && <div className="border-t border-black/10 bg-white p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm text-black/55">To pay</span>
            <span className="text-xl font-black">{formatRupees(total)}</span>
          </div>
          <button className="flex h-12 w-full items-center justify-center gap-2 rounded-md bg-leaf text-sm font-black text-white disabled:cursor-not-allowed disabled:bg-black/20" onClick={onCheckout}>
            <CreditCard className="h-5 w-5" /> Proceed to checkout
          </button>
        </div>}
      </aside>
    </div>
  );
}
