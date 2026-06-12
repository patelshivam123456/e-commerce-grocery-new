import React from 'react';
import { Clock3, MapPin, PackageCheck, ShoppingCart, WalletCards } from 'lucide-react';
import { formatRupees } from '../utils/commerce.js';
import { BackButton, BillSummary, CartItem, CheckoutBlock, EmptyState } from '../components/common.jsx';

export function CheckoutPage({ items, location, subtotal, deliveryFee, handlingFee, discount, total, coupon, setCoupon, payment, walletBalance, paymentError, setPaymentError, setPaymentMethod, setUpiId, setCardField, addToCart, decreaseCart, onBack, onPlaceOrder, onLocation }) {
  const selectPayment = (method) => {
    setPaymentError('');
    setPaymentMethod(method);
  };
  const cardNumber = payment.card.number.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim().slice(0, 19);

  return (
    <main className="mx-auto max-w-5xl px-4 py-5 pb-24 lg:px-6">
      <BackButton onClick={onBack} label="Checkout" />
      {items.length ? (
        <div className="grid gap-5 lg:grid-cols-[1fr_360px]">
          <section className="space-y-3">
            <CheckoutBlock icon={MapPin} title="Delivery address" action="Change" onAction={onLocation}>
              <p className="text-sm font-bold">{location}</p>
              <p className="text-xs text-black/50">Flat 204, Green Avenue, near city center</p>
            </CheckoutBlock>
            <CheckoutBlock icon={Clock3} title="Delivery slot">
              <p className="text-sm font-bold">Arrives in 9 minutes</p>
              <p className="text-xs text-black/50">Priority delivery partner assigned after payment</p>
            </CheckoutBlock>
            <CheckoutBlock icon={WalletCards} title="Payment method">
              <div className="grid gap-2 sm:grid-cols-4">
                {['UPI', 'Card', 'Cash', 'Wallet'].map((mode) => (
                  <button
                    key={mode}
                    className={`rounded-md border px-3 py-2 text-sm font-black transition ${payment.method === mode ? 'border-ink bg-mint text-leaf ring-1 ring-ink' : 'border-leaf bg-mint text-leaf hover:bg-white'}`}
                    onClick={() => selectPayment(mode)}
                  >
                    {mode}
                  </button>
                ))}
              </div>
              {payment.method === 'UPI' && (
                <div className="mt-4 rounded-md border border-black/10 bg-[#f7f7f2] p-3">
                  <label className="text-xs font-black text-black/55">UPI ID</label>
                  <input
                    className="mt-2 h-11 w-full rounded-md border border-black/10 bg-white px-3 text-sm font-semibold outline-none ring-leaf/20 focus:ring-4"
                    value={payment.upiId}
                    onChange={(event) => { setPaymentError(''); setUpiId(event.target.value); }}
                    placeholder="name@upi"
                  />
                  <p className="mt-2 text-xs text-black/50">A payment request will be created for this UPI ID.</p>
                </div>
              )}
              {payment.method === 'Card' && (
                <div className="mt-4 grid gap-3 rounded-md border border-black/10 bg-[#f7f7f2] p-3 sm:grid-cols-2">
                  <label className="sm:col-span-2">
                    <span className="text-xs font-black text-black/55">Card number</span>
                    <input className="mt-2 h-11 w-full rounded-md border border-black/10 bg-white px-3 text-sm font-semibold outline-none ring-leaf/20 focus:ring-4" value={cardNumber} onChange={(event) => { setPaymentError(''); setCardField('number', event.target.value.replace(/\D/g, '').slice(0, 16)); }} placeholder="1234 5678 9012 3456" />
                  </label>
                  <label className="sm:col-span-2">
                    <span className="text-xs font-black text-black/55">Name on card</span>
                    <input className="mt-2 h-11 w-full rounded-md border border-black/10 bg-white px-3 text-sm font-semibold outline-none ring-leaf/20 focus:ring-4" value={payment.card.name} onChange={(event) => { setPaymentError(''); setCardField('name', event.target.value); }} placeholder="Card holder name" />
                  </label>
                  <label>
                    <span className="text-xs font-black text-black/55">Expiry</span>
                    <input className="mt-2 h-11 w-full rounded-md border border-black/10 bg-white px-3 text-sm font-semibold outline-none ring-leaf/20 focus:ring-4" value={payment.card.expiry} onChange={(event) => { setPaymentError(''); setCardField('expiry', event.target.value.replace(/[^\d/]/g, '').slice(0, 5)); }} placeholder="MM/YY" />
                  </label>
                  <label>
                    <span className="text-xs font-black text-black/55">CVV</span>
                    <input className="mt-2 h-11 w-full rounded-md border border-black/10 bg-white px-3 text-sm font-semibold outline-none ring-leaf/20 focus:ring-4" value={payment.card.cvv} onChange={(event) => { setPaymentError(''); setCardField('cvv', event.target.value.replace(/\D/g, '').slice(0, 4)); }} placeholder="123" />
                  </label>
                </div>
              )}
              {payment.method === 'Cash' && (
                <div className="mt-4 rounded-md border border-black/10 bg-[#f7f7f2] p-3">
                  <p className="text-sm font-black">Cash on delivery selected</p>
                  <p className="mt-1 text-xs text-black/50">Keep exact change ready. Digital payment can also be collected by the delivery partner.</p>
                </div>
              )}
              {payment.method === 'Wallet' && (
                <div className={`mt-4 rounded-md border p-3 ${walletBalance >= total ? 'border-leaf bg-mint' : 'border-red-200 bg-red-50'}`}>
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-black">Just Harvst wallet</p>
                      <p className="mt-1 text-xs text-black/55">Available balance</p>
                    </div>
                    <p className={`text-xl font-black ${walletBalance >= total ? 'text-leaf' : 'text-red-600'}`}>{formatRupees(walletBalance)}</p>
                  </div>
                  <p className="mt-3 text-xs font-semibold text-black/60">
                    {walletBalance >= total ? `${formatRupees(total)} will be deducted from your wallet.` : `Add ${formatRupees(total - walletBalance)} more to use wallet for this order.`}
                  </p>
                </div>
              )}
              {paymentError && <p className="mt-3 rounded-md bg-red-50 px-3 py-2 text-sm font-black text-red-600">{paymentError}</p>}
            </CheckoutBlock>
            <div className="rounded-md bg-white p-4 shadow-sm">
              <h2 className="mb-3 font-black">Items in cart</h2>
              <div className="space-y-3">
                {items.map((item) => <CartItem key={item.cartKey || item.id} item={item} addToCart={addToCart} decreaseCart={decreaseCart} />)}
              </div>
            </div>
          </section>
          <aside className="self-start rounded-md bg-white p-4 shadow-sm">
            <BillSummary subtotal={subtotal} deliveryFee={deliveryFee} handlingFee={handlingFee} discount={discount} total={total} coupon={coupon} setCoupon={setCoupon} />
            <button className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-md bg-leaf text-sm font-black text-white" onClick={onPlaceOrder}>
              <PackageCheck className="h-5 w-5" /> Place order
            </button>
          </aside>
        </div>
      ) : (
        <EmptyState icon={ShoppingCart} title="Your cart is empty" text="Add products before checkout." action="Go shopping" onAction={onBack} />
      )}
    </main>
  );
}
