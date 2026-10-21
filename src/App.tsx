import React, { useState, useEffect } from 'react';
import { dbStore } from './lib/db-store';
import { ThriftProduct, EventItem } from './types/database';

export default function App() {
  const [products, setProducts] = useState<ThriftProduct[]>(dbStore.getProducts());
  const [events, setEvents] = useState<EventItem[]>(dbStore.getEvents());
  const [cartCount, setCartCount] = useState<number>(dbStore.getCartCount());

  useEffect(() => {
    return dbStore.subscribe(() => {
      setProducts(dbStore.getProducts());
      setEvents(dbStore.getEvents());
      setCartCount(dbStore.getCartCount());
    });
  }, []);

  return (
    <div className="min-h-screen bg-soft-white text-black font-sans">
      {/* Header */}
      <header className="border-b border-border-light bg-white px-8 py-5 flex justify-between items-center sticky top-0 z-40">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold tracking-tighter text-black uppercase font-sans">
            CDO<span className="text-crimson">.</span>ARCHIVE
          </span>
          <span className="text-[9px] tracking-editorial text-gray border-l border-border-light pl-2">
            ALTERNATIVE EDITORIAL
          </span>
        </div>

        <nav className="hidden md:flex space-x-8 text-xs font-medium tracking-editorial uppercase">
          <a href="#shop" className="hover:text-crimson transition">SHOP</a>
          <a href="#diy" className="hover:text-crimson transition">DIY LAB</a>
          <a href="#events" className="hover:text-crimson transition">EVENTS</a>
          <a href="#community" className="hover:text-crimson transition">COMMUNITY</a>
        </nav>

        <div className="text-xs font-semibold tracking-editorial">
          <span className="bg-black text-white px-3 py-1.5 uppercase">BAG ({cartCount})</span>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 py-20 border-b border-border-light">
        <span className="text-crimson text-xs tracking-editorial uppercase font-semibold">ISSUE 04 • 2026</span>
        <h1 className="text-6xl sm:text-8xl font-bold tracking-tighter uppercase leading-[0.95] mt-3 mb-6">
          STYLE<br />
          WITHOUT<br />
          <span className="text-crimson font-serif italic lowercase font-normal">rules.</span>
        </h1>
        <p className="text-sm text-gray max-w-lg leading-relaxed mb-8">
          Secondhand fashion. Independent creators. Underground culture. Built in Cagayan de Oro.
        </p>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold tracking-tight uppercase mb-8">NEW ARRIVALS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(p => (
            <div key={p.id} className="border border-border-light bg-white p-4">
              <div className="aspect-[3/4] bg-soft-white overflow-hidden mb-4">
                <img src={p.images[0]} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <span className="text-[10px] tracking-editorial uppercase text-crimson font-medium">{p.condition}</span>
              <h3 className="font-semibold text-sm line-clamp-1 mt-0.5">{p.title}</h3>
              <div className="mt-3 flex justify-between items-center text-xs">
                <strong className="text-sm">₱{p.price_php.toLocaleString()}</strong>
                <button 
                  onClick={() => dbStore.addToCart(p)}
                  className="text-[11px] font-semibold tracking-editorial uppercase hover:text-crimson">
                  + ADD TO BAG
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
