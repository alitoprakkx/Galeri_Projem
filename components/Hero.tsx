'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { Search } from 'lucide-react';

const STORAGE_KEY = 'monkey_search_history';

export function Hero() {
  const [query, setQuery] = useState('');
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setHistory(JSON.parse(saved) as string[]);
  }, []);

  const href = useMemo(() => `/inventory?q=${encodeURIComponent(query.trim())}`, [query]);

  const onSearch = () => {
    const value = query.trim();
    if (!value) return;
    const next = [value, ...history.filter((item) => item !== value)].slice(0, 6);
    setHistory(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  return (
    <section className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 p-10 shadow-soft">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-electric/20" />
      <div className="relative z-10 max-w-2xl space-y-4">
        <h1 className="text-4xl font-bold md:text-5xl">Hayalindeki Sürüşü Keşfet</h1>
        <p className="text-zinc-300">Türkiye&apos;nin en seçkin çok markalı premium otomobil galerisi.</p>

        <div className="flex items-center gap-2 rounded-2xl bg-black/60 p-3">
          <Search className="text-zinc-400" size={18} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm outline-none"
            placeholder="Marka, model veya özellik ara"
          />
          <Link onClick={onSearch} href={href} className="rounded-xl bg-orange px-3 py-2 text-sm font-semibold text-black">
            Ara
          </Link>
        </div>

        {history.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {history.map((item) => (
              <Link
                key={item}
                href={`/inventory?q=${encodeURIComponent(item)}`}
                className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300"
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
