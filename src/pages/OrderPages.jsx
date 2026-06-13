import React from 'react';
import { Bike, CheckCircle2, MapPin } from 'lucide-react';
import { formatRupees } from '../utils/commerce.js';
import { BackButton, BillLine, CheckoutBlock, OrderItem } from '../components/common.jsx';

export function PlaceOrderPage({ order, onTrack, onDetail, onHome }) {
  return (
    <main className="mx-auto max-w-3xl px-2 py-8 pb-4 text-center lg:px-6">
      <div className="rounded-md bg-white p-8 shadow-sm">
        <CheckCircle2 className="mx-auto h-16 w-16 text-leaf" />
        <h1 className="mt-4 text-3xl font-black">Order placed</h1>
        <p className="mt-2 text-sm text-black/55">Your order {order.id} is confirmed and should arrive in {order.minutes} minutes.</p>
        <div className="mx-auto mt-6 max-w-md rounded-md bg-[#f7f7f2] p-4 text-left">
          <p className="text-sm font-black">Delivering to</p>
          <p className="mt-1 text-sm text-black/60">{order.address}</p>
          <p className="mt-3 text-sm font-black">Total paid: {formatRupees(order.total)}</p>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button className="h-11 rounded-md bg-leaf px-5 text-sm font-black text-white" onClick={onTrack}>Track order</button>
          <button className="h-11 rounded-md border border-black/10 px-5 text-sm font-black" onClick={onDetail}>Order details</button>
          <button className="h-11 rounded-md border border-black/10 px-5 text-sm font-black" onClick={onHome}>Continue shopping</button>
        </div>
      </div>
    </main>
  );
}

export function TrackOrderPage({ order, onBack, onHome }) {
  const steps = ['Order placed', 'Packed', 'Out for delivery', 'Delivered'];
  const activeIndex = Math.min(2, steps.indexOf(order.status) === -1 ? 0 : steps.indexOf(order.status));
  return (
    <main className="mx-auto max-w-5xl px-4 py-5 pb-24 lg:px-6">
      <BackButton onClick={onBack} label="Track order" />
      <section className="grid gap-5 lg:grid-cols-[1fr_360px]">
        <div className="min-h-[360px] overflow-hidden rounded-md bg-[#dff4df] p-5 shadow-sm">
          <div className="relative h-full rounded-md bg-white p-4">
            <div className="absolute inset-8 rounded-md border-2 border-dashed border-leaf/40"></div>
            <MapPin className="absolute left-10 top-10 h-8 w-8 text-leaf" />
            <Bike className="absolute bottom-16 right-14 h-10 w-10 text-ink" />
            <div className="relative z-10 rounded-md bg-white/90 p-4 shadow-sm">
              <h1 className="text-2xl font-black">Arriving in {order.minutes} minutes</h1>
              <p className="mt-1 text-sm text-black/55">Delivery partner is on the way to {order.location}.</p>
            </div>
          </div>
        </div>
        <aside className="rounded-md bg-white p-4 shadow-sm">
          <h2 className="font-black">Order status</h2>
          <div className="mt-4 space-y-4">
            {steps.map((step, index) => (
              <div key={step} className="flex gap-3">
                <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-black ${index <= activeIndex ? 'bg-leaf text-white' : 'bg-black/10 text-black/45'}`}>{index + 1}</span>
                <div>
                  <p className="text-sm font-black">{step}</p>
                  <p className="text-xs text-black/50">{index <= activeIndex ? 'Completed' : 'Pending'}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-5 h-11 w-full rounded-md bg-ink text-sm font-black text-white" onClick={onHome}>Shop more</button>
        </aside>
      </section>
    </main>
  );
}

export function OrderDetailPage({ order, saved, onBack, onTrack, onReorder, onSave }) {
  return (
    <main className="mx-auto max-w-5xl px-4 py-5 pb-4 lg:px-6">
      <BackButton onClick={onBack} label="Order detail" />
      <div className="grid gap-5 lg:grid-cols-[1fr_340px]">
        <section className="space-y-3">
          <div className="rounded-md bg-white p-4 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h1 className="text-2xl font-black">Order {order.id}</h1>
                <p className="text-sm text-black/55">Placed on {order.placedAt}</p>
              </div>
              <span className="rounded bg-mint px-3 py-1 text-xs font-black text-leaf">{order.status}</span>
            </div>
          </div>
          <div className="rounded-md bg-white p-4 shadow-sm">
            <h2 className="mb-3 font-black">Items</h2>
            <div className="space-y-3">{order.items.map((item) => <OrderItem key={item.cartKey || item.id} item={item} />)}</div>
          </div>
          <CheckoutBlock icon={MapPin} title="Delivery address"><p className="text-sm text-black/65">{order.address}</p></CheckoutBlock>
        </section>
        <aside className="self-start rounded-md bg-white p-4 shadow-sm">
          <BillLine label="Order total" value={formatRupees(order.total)} />
          <BillLine label="Payment" value={order.payment} />
          <div className="mt-4 grid gap-2">
            <button className="h-11 rounded-md bg-leaf text-sm font-black text-white" onClick={onTrack}>Track order</button>
            <button className="h-11 rounded-md border border-black/10 text-sm font-black" onClick={onReorder}>Reorder items</button>
            <button className="h-11 rounded-md border border-black/10 text-sm font-black" onClick={onSave}>{saved ? 'Remove saved order' : 'Save order'}</button>
          </div>
        </aside>
      </div>
    </main>
  );
}
