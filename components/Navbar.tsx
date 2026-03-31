'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Navbar() {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${compact ? 'py-2' : 'py-4'}`}>
      <nav className="glass mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3 md:px-6">
        <Link href="/" className="text-xl font-bold">
          🐒 Monkey <span className="text-orange">Motors</span>
        </Link>
        <div className="flex gap-4 text-sm text-zinc-300">
          <Link href="/inventory">Envanter</Link>
          <Link href="/sell">Araç Sat / Takas</Link>
          <Link href="/admin">Admin Mock</Link>
        </div>
      </nav>
    </header>
  );
}
