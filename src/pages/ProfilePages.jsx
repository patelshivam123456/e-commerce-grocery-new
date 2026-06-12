import React from 'react';
import { Gift, Heart, LogOut, ReceiptText, UserRound, WalletCards } from 'lucide-react';
import { formatRupees } from '../utils/commerce.js';
import { BackButton, EmptyState, OrderRow, ProductCard, ProfileAction } from '../components/common.jsx';

export function ProfilePage({ profile, walletBalance, onAddWalletFunds, orders, savedOrders, wishlistCount, openOrder, navigate, onLogout, isLoggedIn, onLogin }) {
  if (!isLoggedIn) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-8 pb-24 lg:px-6">
        <EmptyState icon={UserRound} title="Login to view your account" text="Orders, saved addresses and wishlist are available after login." action="Login" onAction={onLogin} />
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-5 pb-24 lg:px-6">
      <h1 className="mb-4 text-3xl font-black">My profile</h1>
      <section className="grid gap-5 lg:grid-cols-[320px_1fr]">
        <aside className="self-start rounded-md bg-white p-5 shadow-sm">
          <div className="grid h-16 w-16 place-items-center rounded-full bg-mint text-2xl font-black text-leaf">{profile.name[0]}</div>
          <h2 className="mt-3 text-xl font-black">{profile.name}</h2>
          <p className="text-sm text-black/55">{profile.phone}</p>
          <p className="text-sm text-black/55">{profile.email}</p>
          <div className="mt-5 rounded-md border border-leaf/30 bg-mint p-4">
            <p className="text-xs font-black uppercase text-leaf">Just Harvst wallet</p>
            <p className="mt-1 text-2xl font-black text-ink">{formatRupees(walletBalance)}</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {[100, 250].map((amount) => (
                <button key={amount} className="h-9 rounded-md bg-leaf text-xs font-black text-white hover:bg-[#096d19]" onClick={() => onAddWalletFunds(amount)}>
                  Add {formatRupees(amount)}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-5 grid gap-2">
            <ProfileAction icon={ReceiptText} label="My orders" onClick={() => openOrder(orders[0]?.id)} />
            <ProfileAction icon={Heart} label={`Wishlist (${wishlistCount})`} onClick={() => navigate('wishlist')} />
            <ProfileAction icon={Heart} label={`Saved orders (${savedOrders.length})`} onClick={() => navigate('saved-orders')} />
            <ProfileAction icon={WalletCards} label={`Just Harvst wallet ${formatRupees(walletBalance)}`} />
            <ProfileAction icon={LogOut} label="Logout" onClick={onLogout} />
          </div>
        </aside>
        <section className="rounded-md bg-white p-4 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-xl font-black">Recent orders</h2>
            <button className="text-sm font-black text-leaf" onClick={() => navigate('saved-orders')}>saved</button>
          </div>
          <div className="space-y-3">
            {orders.map((order) => <OrderRow key={order.id} order={order} onClick={() => openOrder(order.id)} />)}
          </div>
        </section>
      </section>
    </main>
  );
}

export function SavedOrdersPage({ orders, openOrder, reorder, onBack }) {
  return (
    <main className="mx-auto max-w-5xl px-4 py-5 pb-24 lg:px-6">
      <BackButton onClick={onBack} label="Saved orders" />
      {orders.length ? (
        <div className="space-y-3">
          {orders.map((order) => (
            <div key={order.id} className="rounded-md bg-white p-4 shadow-sm">
              <OrderRow order={order} onClick={() => openOrder(order.id)} />
              <button className="mt-3 h-10 rounded-md bg-leaf px-4 text-sm font-black text-white" onClick={() => reorder(order)}>Reorder saved cart</button>
            </div>
          ))}
        </div>
      ) : (
        <EmptyState icon={Gift} title="No saved orders" text="Save an order from order details to reorder faster later." action="Back to profile" onAction={onBack} />
      )}
    </main>
  );
}

export function WishlistPage({ products, cart, addToCart, decreaseCart, toggleWishlist, openProduct, shareProduct, onBack }) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-5 pb-24 lg:px-6">
      <BackButton onClick={onBack} label="Wishlist" />
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h1 className="text-3xl font-black">My wishlist</h1>
          <p className="text-sm text-black/55">{products.length} saved products</p>
        </div>
      </div>
      {products.length ? (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              cart={cart}
              wished
              onAdd={(cartKey) => addToCart({ cartKey })}
              onDecrease={(cartKey) => decreaseCart({ cartKey })}
              onWish={() => toggleWishlist(product.id)}
              onOpen={() => openProduct(product.id)}
              onShare={() => shareProduct(product.id)}
            />
          ))}
        </div>
      ) : (
        <EmptyState icon={Heart} title="No wishlist items" text="Tap the heart on a product to save it here." action="Browse products" onAction={onBack} />
      )}
    </main>
  );
}
