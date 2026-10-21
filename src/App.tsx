import React, { useState, useEffect } from 'react';
import { dbStore } from './lib/db-store';
import { EventItem } from './types/database';

export default function App() {
  const [events, setEvents] = useState<EventItem[]>(dbStore.getEvents());

  useEffect(() => {
    return dbStore.subscribe(() => {
      setEvents(dbStore.getEvents());
    });
  }, []);

  return (
    <div className="min-h-screen bg-stone-950 text-paper p-8 font-sans">
      <header className="border-b-4 border-oxblood pb-4 mb-8">
        <h1 className="font-poster text-6xl text-paper">CDO UNDERGROUND</h1>
        <p className="font-typewriter text-stone-400">THE SCENE IS ALIVE. Gigs, DIY Community & Secondhand Fits</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map(ev => (
          <div key={ev.id} className="border-2 border-paper bg-stone-900 p-4 shadow-brutal">
            <h3 className="font-poster text-3xl text-paper">{ev.title}</h3>
            <p className="font-typewriter text-xs text-oxblood font-bold mt-1">{ev.venue_name}</p>
            <p className="text-xs text-stone-400 mt-2 line-clamp-3">{ev.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
