'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { Car } from '@/lib/cars';
import { formatPrice } from '@/utils/formatPrice';
import { whatsappLink } from '@/utils/whatsappLink';

export function CarCard({ car }: { car: Car }) {
  const carUrl = `/cars/${car.id}`;

  return (
    <article className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition hover:-translate-y-1 hover:border-orange/60">
      <div className="relative h-44">
        <Image src={car.images[0]} alt={`${car.brand} ${car.model}`} fill className="object-cover" loading="lazy" />
        <button className="absolute right-3 top-3 rounded-full bg-black/50 p-2">
          <Heart size={16} />
        </button>
      </div>
      <div className="space-y-3 p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-semibold">{car.brand} {car.model}</h3>
          {car.badge && <span className="rounded-full bg-electric/20 px-2 py-1 text-xs">{car.badge}</span>}
        </div>
        <p className="text-lg font-bold text-orange">{formatPrice(car.price)}</p>
        <p className="text-xs text-zinc-400">{car.year} • {car.km.toLocaleString('tr-TR')} km • {car.transmission}</p>
        {car.priceDrop && <p className="text-xs text-green-400">Fiyat düştü</p>}
        <div className="grid grid-cols-2 gap-2 text-sm">
          <Link className="rounded-xl bg-zinc-800 px-3 py-2 text-center" href={carUrl}>Detay</Link>
          <a className="rounded-xl bg-orange px-3 py-2 text-center font-semibold text-black" href={whatsappLink(carUrl)} target="_blank">WhatsApp</a>
        </div>
      </div>
    </article>
  );
}
