import React, { useState } from 'react';
import { ArrowLeft, LocateFixed, MapPin, Plus, Search, UserRound, X } from 'lucide-react';
import { reverseGeocode } from '../utils/commerce.js';

export function LoginModal({ open, onClose, onLogin }) {
  const [phone, setPhone] = useState('');
  if (!open) return null;
  return (
    <ModalShell onClose={onClose}>
      <UserRound className="mx-auto h-10 w-10 text-leaf" />
      <h2 className="mt-3 text-center text-xl font-black">Login or signup</h2>
      <p className="mt-1 text-center text-sm text-black/55">Enter a mobile number to continue.</p>
      <input className="mt-5 h-12 w-full rounded-md border border-black/10 px-4 text-center text-lg font-bold outline-none ring-leaf/20 focus:ring-4" value={phone} onChange={(event) => setPhone(event.target.value.replace(/\D/g, '').slice(0, 10))} placeholder="10 digit mobile number" />
      <button className="mt-3 h-12 w-full rounded-md bg-leaf text-sm font-black text-white disabled:bg-black/20" disabled={phone.length !== 10} onClick={() => onLogin(phone)}>Continue</button>
    </ModalShell>
  );
}

export function LocationModal({ open, onClose, addresses, setLocation, addAddress }) {
  const [detectStatus, setDetectStatus] = useState('');
  const [isAddressFormOpen, setIsAddressFormOpen] = useState(false);
  const [addressForm, setAddressForm] = useState({ type: 'Home', flat: '', area: '', city: '' });

  const detectLocation = (afterDetect) => {
    if (!navigator.geolocation) {
      setDetectStatus('Location detection is not supported in this browser.');
      return;
    }

    setDetectStatus('Detecting your current location...');
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const detected = await reverseGeocode(latitude, longitude);
        setLocation(detected);
        setDetectStatus(`Location detected: ${detected}`);
        if (afterDetect === 'form') {
          const parts = detected.split(',').map((part) => part.trim());
          setAddressForm((current) => ({ ...current, area: parts[0] || detected, city: parts.slice(1).join(', ') || 'India' }));
          setIsAddressFormOpen(true);
        } else {
          onClose();
        }
      },
      (error) => {
        const message = error.code === error.PERMISSION_DENIED
          ? 'Location permission was denied.'
          : 'Could not detect location right now.';
        setDetectStatus(message);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 },
    );
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/35" onClick={onClose}>
      <aside className="ml-auto flex h-full w-full max-w-md flex-col bg-[#f7f7f2] shadow-soft" onClick={(event) => event.stopPropagation()}>
        <div className="flex items-center justify-between border-b border-black/10 bg-white p-4">
          <div className="flex items-center gap-3">
            <button className="grid h-9 w-9 place-items-center rounded-md hover:bg-black/5" onClick={onClose} aria-label="Close location"><ArrowLeft className="h-5 w-5" /></button>
            <h2 className="text-lg font-black">Select delivery address</h2>
          </div>
          <button className="grid h-9 w-9 place-items-center rounded-md hover:bg-black/5" onClick={onClose} aria-label="Close modal"><X className="h-5 w-5" /></button>
        </div>
        <div className="flex-1 overflow-auto p-4">
          <button className="mb-3 flex h-14 w-full items-center gap-3 rounded-md bg-leaf px-4 text-left text-sm font-black text-white shadow-sm hover:bg-[#096d19]" onClick={detectLocation}>
            <LocateFixed className="h-5 w-5" /> Detect current location
          </button>
          {detectStatus && <p className="mb-3 rounded-md bg-white px-3 py-2 text-xs font-bold text-black/60">{detectStatus}</p>}
          <button className="mb-4 flex h-14 w-full items-center gap-3 rounded-md bg-white px-4 text-left text-sm font-black text-leaf shadow-sm hover:bg-mint" onClick={() => setIsAddressFormOpen(true)}>
            <Plus className="h-5 w-5" /> Add a new address
          </button>
          <label className="relative mb-5 block">
            <Search className="pointer-events-none absolute left-3 top-3.5 h-5 w-5 text-black/40" />
            <input className="h-12 w-full rounded-md border border-black/10 bg-white pl-10 pr-3 text-sm outline-none ring-leaf/20 focus:ring-4" placeholder="search delivery location" />
          </label>
          <p className="mb-3 text-sm font-bold text-black/55">Your saved addresses</p>
          <div className="space-y-3">
            {addresses.map((item) => (
              <button key={`${item.id}-${item.address}`} className="flex w-full gap-3 rounded-md bg-white p-4 text-left shadow-sm hover:ring-2 hover:ring-leaf/25" onClick={() => { setLocation(item.short); onClose(); }}>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-[#f7f7f2] text-leaf">
                  <MapPin className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-black">{item.type}</span>
                  <span className="mt-1 line-clamp-2 block text-sm text-black/55">{item.address}</span>
                  <span className="mt-3 inline-flex h-7 items-center rounded-full border border-leaf px-3 text-xs font-black text-leaf">Use address</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </aside>
      {isAddressFormOpen && (
        <ModalShell onClose={() => setIsAddressFormOpen(false)}>
          <MapPin className="mx-auto h-10 w-10 text-leaf" />
          <h2 className="mt-3 text-center text-xl font-black">Add delivery address</h2>
          <button className="mt-4 flex h-11 w-full items-center justify-center gap-2 rounded-md bg-mint text-sm font-black text-leaf" onClick={() => detectLocation('form')}>
            <LocateFixed className="h-5 w-5" /> Detect location for address
          </button>
          <div className="mt-4 grid gap-3">
            <select className="h-11 rounded-md border border-black/10 px-3 text-sm font-bold outline-none ring-leaf/20 focus:ring-4" value={addressForm.type} onChange={(event) => setAddressForm((current) => ({ ...current, type: event.target.value }))}>
              <option>Home</option>
              <option>Work</option>
              <option>Other</option>
            </select>
            <input className="h-11 rounded-md border border-black/10 px-3 text-sm outline-none ring-leaf/20 focus:ring-4" value={addressForm.flat} onChange={(event) => setAddressForm((current) => ({ ...current, flat: event.target.value }))} placeholder="Flat / house / building" />
            <input className="h-11 rounded-md border border-black/10 px-3 text-sm outline-none ring-leaf/20 focus:ring-4" value={addressForm.area} onChange={(event) => setAddressForm((current) => ({ ...current, area: event.target.value }))} placeholder="Area / street" />
            <input className="h-11 rounded-md border border-black/10 px-3 text-sm outline-none ring-leaf/20 focus:ring-4" value={addressForm.city} onChange={(event) => setAddressForm((current) => ({ ...current, city: event.target.value }))} placeholder="City / state" />
          </div>
          <button
            className="mt-4 h-12 w-full rounded-md bg-leaf text-sm font-black text-white disabled:bg-black/20"
            disabled={!addressForm.area || !addressForm.city}
            onClick={() => {
              const address = [addressForm.flat, addressForm.area, addressForm.city].filter(Boolean).join(', ');
              addAddress({ type: addressForm.type, address, short: [addressForm.area, addressForm.city].filter(Boolean).join(', ') });
              setAddressForm({ type: 'Home', flat: '', area: '', city: '' });
              setIsAddressFormOpen(false);
              onClose();
            }}
          >
            Save address
          </button>
        </ModalShell>
      )}
    </div>
  );
}

export function ModalShell({ children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/35 p-4" onClick={onClose}>
      <div className="w-full max-w-sm rounded-md bg-white p-5 shadow-soft" onClick={(event) => event.stopPropagation()}>
        <button className="ml-auto grid h-8 w-8 place-items-center rounded-md hover:bg-black/5" onClick={onClose} aria-label="Close modal"><X className="h-5 w-5" /></button>
        {children}
      </div>
    </div>
  );
}
