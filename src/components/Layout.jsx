import React, { useState } from 'react';
import { ChevronDown, Grid2X2, Heart, Home, LocateFixed, Search, ShoppingCart, UserRound } from 'lucide-react';

export function Header({ itemCount, location, query, setQuery, navigate, onCart, onLogin, onLocation, isLoggedIn, profile, onLogout, wishlistCount }) {
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-black/10 bg-white/95 backdrop-blur sm:sticky">
      <div className="mx-auto grid max-w-7xl gap-2 px-3 py-2 sm:flex sm:items-center sm:gap-3 sm:px-4 sm:py-3 lg:px-6">
        <div className="flex items-center gap-2 sm:contents">
        <button className="flex shrink-0 items-center gap-1 rounded-md bg-limepop px-3 py-3 text-base font-black tracking-normal text-ink sm:text-xl" onClick={() => navigate('home')}>
          Just<span className="text-leaf">Harvst</span>
        </button>
        <button className="flex min-w-0 flex-1 items-center gap-2 rounded-md border border-black/10 px-3 py-2 text-left sm:max-w-[250px] sm:flex-none" onClick={onLocation}>
          <Home className="h-5 w-5 text-leaf" />
          <span className="min-w-0">
            <span className="block text-xs font-bold">Delivery in 9 minutes</span>
            <span className="block truncate text-xs text-black/60">{location}</span>
          </span>
          <ChevronDown className="h-4 w-4" />
        </button>
        
        </div>
        <label className="relative flex min-w-0 flex-1 items-center">
          <Search className="pointer-events-none absolute left-3 h-5 w-5 text-black/45" />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder='Search "milk", "bread", "chips"' className="h-11 w-full rounded-md border border-black/10 bg-[#f7f7f2] pl-10 pr-4 text-sm outline-none ring-leaf/20 transition focus:bg-white focus:ring-4 sm:h-12" />
        </label>
        {isLoggedIn ? (
          <div className="relative hidden md:block">
            <button className="flex h-11 items-center gap-2 rounded-md px-3 text-sm font-semibold hover:bg-black/5" onClick={() => setIsAccountOpen((open) => !open)}>
              <UserRound className="h-5 w-5" />
              Account
              <ChevronDown className={`h-4 w-4 transition ${isAccountOpen ? 'rotate-180' : ''}`} />
            </button>
            {isAccountOpen && (
              <div className="absolute right-0 top-12 w-72 rounded-md border border-black/10 bg-white p-4 shadow-soft">
                <h2 className="text-lg font-black">My Account</h2>
                <p className="mt-1 text-sm text-black/55">{profile.phone}</p>
                <div className="mt-4 grid gap-1 text-sm">
                  <AccountMenuItem label="My Orders" onClick={() => { setIsAccountOpen(false); navigate('profile'); }} />
                  <AccountMenuItem label="Wishlist" onClick={() => { setIsAccountOpen(false); navigate('wishlist'); }} />
                  <AccountMenuItem label="Saved Addresses" onClick={() => { setIsAccountOpen(false); onLocation(); }} />
                  <AccountMenuItem label="Account Privacy" onClick={() => { setIsAccountOpen(false); navigate('profile'); }} />
                  <AccountMenuItem label="Log Out" onClick={() => { setIsAccountOpen(false); onLogout(); }} />
                </div>
                <div className="mt-4 rounded-md bg-[#f7f7f2] p-3">
                  <p className="text-sm font-black">Simple way to get groceries at your doorstep</p>
                  <p className="mt-1 text-xs text-black/55">Login stays active until you choose Log Out.</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <button className="hidden h-11 items-center gap-2 rounded-md px-3 text-sm font-semibold hover:bg-black/5 md:flex" onClick={onLogin}>
            <UserRound className="h-5 w-5" />
            Login
          </button>
        )}
        <button className="relative hidden h-11 w-11 place-items-center rounded-md border border-black/10 text-black/65 hover:bg-black/5 md:grid" onClick={() => navigate('wishlist')} aria-label="Open wishlist">
          <Heart className={`h-5 w-5 ${wishlistCount ? 'fill-red-500 text-red-500' : ''}`} />
          {wishlistCount > 0 && <span className="absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-limepop px-1 text-xs font-black text-ink">{wishlistCount}</span>}
        </button>
        <button className="relative hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-leaf text-white shadow-sm hover:bg-[#096d19] sm:h-11 sm:w-auto sm:gap-2 sm:px-3" onClick={onCart}>
          <ShoppingCart className="h-5 w-5" />
          {/* <span className="hidden sm:inline">{itemCount ? `${itemCount} items` : ''}</span> */}
          {itemCount > 0 && <span className="absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-limepop px-1 text-xs font-black text-ink">{itemCount}</span>}
        </button>
      </div>
    </header>
  );
}

export function AccountMenuItem({ label, onClick }) {
  return (
    <button className="rounded-md px-2 py-2 text-left font-semibold text-black/70 hover:bg-[#f7f7f2] hover:text-ink" onClick={onClick}>
      {label}
    </button>
  );
}

export function Footer({ navigate }) {
  const links = ['Blog', 'Privacy', 'Terms', 'FAQs', 'Security', 'Contact', 'Partner', 'Franchise', 'Seller', 'Warehouse', 'Deliver', 'Recipes'];
  return (
    <footer className="border-t border-black/10 bg-white px-4 py-8 lg:px-6">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[1fr_2fr_1fr]">
        <div>
          <button className="text-2xl font-black" onClick={() => navigate('home')}>Just&nbsp;<span className="text-leaf">Harvst</span></button>
          <p className="mt-2 text-sm text-black/55">A frontend-only quick grocery commerce experience inspired by modern instant delivery apps.</p>
        </div>
        <div>
          <h3 className="font-black">Useful links</h3>
          <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-black/55 sm:grid-cols-4">
            {links.map((link) => <a key={link} href="#" className="hover:text-leaf">{link}</a>)}
          </div>
        </div>
        <div>
          <h3 className="font-black">Account</h3>
          <div className="mt-3 grid gap-2">
            <button className="rounded-md bg-ink px-3 py-2 text-xs font-bold text-white" onClick={() => navigate('profile')}>My Profile</button>
            <button className="rounded-md bg-ink px-3 py-2 text-xs font-bold text-white" onClick={() => navigate('saved-orders')}>Saved Orders</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function MobileNav({ navigate, onLocation, onLogin, onCart, itemCount, currentPage }) {
  const navItems = [
    { label: 'Home', icon: Home, action: () => navigate('home'), active: currentPage === 'home' },
    { label: 'Categories', icon: Grid2X2, action: () => navigate('categories'), active: currentPage === 'categories' },
    { label: 'Location', icon: LocateFixed, action: onLocation },
    { label: 'Profile', icon: UserRound, action: () => navigate('profile'), active: currentPage === 'profile' },
  ];

  return (
    <nav className="pointer-events-none fixed bottom-4 left-[15px] right-[15px] z-50 bg-transparent sm:hidden" aria-label="Mobile navigation">
      <div className="pointer-events-auto mx-auto flex h-12 max-w-md items-center justify-between gap-1 rounded-full border border-white/15 bg-ink/80 px-1.5 shadow-[0_12px_36px_rgba(0,0,0,0.24)] backdrop-blur-[2px]">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              className={`grid h-9 w-9 place-items-center rounded-full transition ${item.active ? 'bg-white/20 text-white shadow-inner' : 'text-white/80 hover:bg-white/10 hover:text-white'}`}
              onClick={item.action}
              aria-label={item.label}
            >
              <Icon className="h-[18px] w-[18px]" />
            </button>
          );
        })}
        <button className={`relative grid h-9 w-9 place-items-center rounded-full transition ${currentPage === 'cart' ? 'bg-white/20 text-white shadow-inner' : 'text-white/80 hover:bg-white/10 hover:text-white'}`} onClick={onCart} aria-label="Cart">
          <ShoppingCart className="h-[18px] w-[18px]" />
          {itemCount > 0 && <span className="absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-red-500 px-1 text-[9px] font-black leading-none text-white">{itemCount}</span>}
        </button>
      </div>
    </nav>
  );
}
