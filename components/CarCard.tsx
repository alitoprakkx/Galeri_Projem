'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Car } from '@/lib/cars';
import { formatPrice } from '@/utils/formatPrice';
import { whatsappLink } from '@/utils/whatsappLink';

const FAVORITES_KEY = 'monkey_favorites';

export function CarCard({ car }: { car: Car }) {
  const carUrl = `/cars/${car.id}`;
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem(FAVORITES_KEY);
    if (!raw) return;
    const ids = JSON.parse(raw) as string[];
    setIsFavorite(ids.includes(car.id));
  }, [car.id]);

  const toggleFavorite = () => {
    const raw = localStorage.getItem(FAVORITES_KEY);
    const current = raw ? (JSON.parse(raw) as string[]) : [];
    const next = current.includes(car.id) ? current.filter((id) => id !== car.id) : [...current, car.id];
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(next));
    setIsFavorite(next.includes(car.id));
  };

  const cardTitle = useMemo(() => `${car.brand} ${car.model}`, [car.brand, car.model]);

  return (
    <article className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition hover:-translate-y-1 hover:border-orange/60">
      <div className="relative h-44">
        <Image src={car.images[0]} alt={cardTitle} fill className="object-cover" loading="lazy" />
        <button
          type="button"
          aria-label="Favorilere ekle"
          onClick={toggleFavorite}
          className={`absolute right-3 top-3 rounded-full p-2 ${isFavorite ? 'bg-orange text-black' : 'bg-black/50'}`}
        >
          <Heart size={16} fill={isFavorite ? 'currentColor' : 'none'} />
        </button>
      </div>
      <div className="space-y-3 p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-semibold">{cardTitle}</h3>
          {car.badge && <span className="rounded-full bg-electric/20 px-2 py-1 text-xs">{car.badge}</span>}
        </div>
        <p className="text-lg font-bold text-orange">{formatPrice(car.price)}</p>
        <p className="text-xs text-zinc-400">{car.year} • {car.km.toLocaleString('tr-TR')} km • {car.transmission}</p>
        {car.priceDrop && <p className="text-xs text-green-400">Fiyat düştü</p>}
        <div className="grid grid-cols-2 gap-2 text-sm">
          <Link className="rounded-xl bg-zinc-800 px-3 py-2 text-center" href={carUrl}>Detay</Link>
          <a className="rounded-xl bg-orange px-3 py-2 text-center font-semibold text-black" href={whatsappLink(carUrl)} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
