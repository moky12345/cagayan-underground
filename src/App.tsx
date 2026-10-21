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
    <div className="min-h-screen bg-obsidian text-bone font-sans">
      {/* Navigation */}
      <header className="border-b border-wire bg-obsidian/95 backdrop-blur-md px-8 py-5 flex justify-between items-center sticky top-0 z-40">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-full border border-crimson flex items-center justify-center text-crimson font-sigil font-bold">
            ✦
          </div>
          <div>
            <div className="flex items-baseline space-x-1 font-gothic text-2xl uppercase tracking-wider">
              <span className="text-white">CAGAYAN</span>
              <span className="text-crimson-bright font-bold">UNDERGROUND</span>
            </div>
            <span className="text-[9px] font-mono tracking-widest text-silver uppercase block -mt-0.5">
              FASHION • MUSIC • COMMUNITY
            </span>
          </div>
        </div>

        <nav className="hidden lg:flex space-x-8 text-xs font-mono tracking-widest uppercase text-silver">
          <a href="#shop" className="hover:text-crimson transition">Shop</a>
          <a href="#merchants" className="hover:text-crimson transition">Merchants</a>
          <a href="#events" className="hover:text-crimson transition">Events</a>
          <a href="#diy" className="hover:text-crimson transition">DIY Lab</a>
        </nav>

        <div className="bg-crimson hover:bg-crimson-bright text-white px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition shadow-crimson-glow">
          Bag ({cartCount})
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 py-24 border-b border-wire text-center relative">
        <span className="text-[10px] font-mono tracking-widest text-silver-bright uppercase block mb-3">
          CAGAYAN DE ORO CITY • PHILIPPINES
        </span>
        <h1 className="text-6xl sm:text-8xl font-gothic uppercase tracking-wider chrome-text leading-none">
          CAGAYAN
        </h1>
        <h2 className="text-5xl sm:text-7xl font-gothic uppercase tracking-widest text-white leading-none -mt-2">
          UNDERGROUND
        </h2>
        <p className="text-xs font-mono text-silver uppercase tracking-widest my-4">
          FASHION • MUSIC • COMMUNITY
        </p>
        <p className="text-xs font-serif italic text-bone max-w-sm mx-auto mb-8">
          Shop. Discover. Belong. The underground lives here.
        </p>
        <button 
          onClick={() => { const el = document.getElementById('shop'); if(el) el.scrollIntoView({behavior:'smooth'}); }}
          className="bg-crimson hover:bg-crimson-bright text-white px-8 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-widest shadow-crimson-glow transition">
          Explore the Marketplace &gt;
        </button>
      </section>

      {/* Shop Row */}
      <section id="shop" className="max-w-7xl mx-auto px-8 py-20">
        <h3 className="text-3xl font-serif font-bold text-white uppercase mb-8">SHOP THE UNDERGROUND</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {products.slice(0, 4).map(p => (
            <div key={p.id} className="cyber-frame p-3 bg-charcoal">
              <div className="aspect-[3/4] bg-obsidian overflow-hidden mb-3">
                <img src={p.images[0]} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <h4 className="text-xs font-bold text-white truncate">{p.title}</h4>
              <div className="flex justify-between items-center text-xs font-mono mt-2">
                <span className="text-white font-bold">₱{p.price_php.toLocaleString()}</span>
                <button 
                  onClick={() => dbStore.addToCart(p)}
                  className="text-crimson font-bold text-[10px] uppercase hover:underline">
                  + Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
