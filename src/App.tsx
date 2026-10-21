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
      {/* Top Header */}
      <header className="border-b border-wire bg-obsidian/90 backdrop-blur-md px-8 py-5 flex justify-between items-center sticky top-0 z-40">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full border border-crimson flex items-center justify-center text-crimson font-sigil font-bold">
            ✦
          </div>
          <div>
            <div className="flex items-center space-x-1.5 font-sigil text-xl tracking-widest text-white uppercase font-bold">
              <span>CAGAYAN</span>
              <span className="text-crimson">UNDERGROUND</span>
            </div>
            <span className="text-[9px] font-mono tracking-widest text-silver-dark uppercase block">
              THRIFT × DIY × MUSIC × COMMUNITY
            </span>
          </div>
        </div>

        <nav className="hidden lg:flex space-x-8 text-xs font-mono tracking-widest uppercase text-silver-dark">
          <a href="#arrivals" className="hover:text-crimson transition">SHOP</a>
          <a href="#reworked" className="hover:text-crimson transition">REWORKED</a>
          <a href="#diy-lab" className="hover:text-crimson transition">DIY LAB</a>
          <a href="#events" className="hover:text-crimson transition">EVENTS</a>
          <a href="#lookbook" className="hover:text-crimson transition">COMMUNITY</a>
        </nav>

        <div className="bg-crimson text-white px-3.5 py-1.5 text-xs font-mono font-bold tracking-wider uppercase cyber-corner">
          BAG ({cartCount})
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-24 border-b border-wire grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <span className="text-[10px] font-mono text-crimson uppercase tracking-widest block mb-4">
            CAGAYAN DE ORO CITY • 8.4842° N, 124.6472° E
          </span>
          <h1 className="text-6xl sm:text-8xl font-black uppercase tracking-tighter text-white leading-[0.92]">
            STYLE<br />
            WITHOUT<br />
            <span className="text-crimson font-sigil">RULES.</span>
          </h1>
          <p className="text-sm font-mono text-silver-dark max-w-md mt-6 leading-relaxed">
            Secondhand fashion. Independent creators. Underground culture. Built in Cagayan de Oro.
          </p>
        </div>
      </section>

      {/* New Arrivals Grid */}
      <section id="arrivals" className="max-w-7xl mx-auto px-8 py-20">
        <h2 className="text-3xl font-bold uppercase tracking-tight text-white mb-8">NEW ARRIVALS</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.slice(0, 5).map(p => (
            <div key={p.id} className="bg-charcoal border border-wire p-3">
              <div className="aspect-[3/4] bg-obsidian overflow-hidden mb-3">
                <img src={p.images[0]} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xs font-bold text-white line-clamp-1">{p.title}</h3>
              <div className="mt-3 flex justify-between items-center text-xs font-mono">
                <span className="text-white font-bold">₱{p.price_php.toLocaleString()}</span>
                <button 
                  onClick={() => dbStore.addToCart(p)}
                  className="text-crimson font-bold text-[10px] uppercase hover:underline">
                  + ADD
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
