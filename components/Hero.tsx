'use client';

import { Search } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 p-10 shadow-soft">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-electric/20" />
      <div className="relative z-10 max-w-2xl space-y-4">
        <h1 className="text-4xl font-bold md:text-5xl">Hayalindeki Sürüşü Keşfet</h1>
        <p className="text-zinc-300">Türkiye&apos;nin en seçkin çok markalı premium otomobil galerisi.</p>
        <div className="flex items-center gap-2 rounded-2xl bg-black/60 p-3">
          <Search className="text-zinc-400" size={18} />
          <input className="w-full bg-transparent text-sm outline-none" placeholder="Marka, model veya özellik ara" />
        </div>
      </div>
    </section>
  );
}
