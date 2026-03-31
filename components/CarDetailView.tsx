'use client';

import { useEffect, useMemo, useState } from 'react';
import { ComparisonModal } from '@/components/ComparisonModal';
import { FinanceCalculator } from '@/components/FinanceCalculator';
import { ImageGallery } from '@/components/ImageGallery';
import { Car, cars } from '@/lib/cars';
import { formatPrice } from '@/utils/formatPrice';

const RECENT_KEY = 'monkey_recently_viewed';

export function CarDetailView({ car }: { car: Car }) {
  const [compareId, setCompareId] = useState('');
  const [openCompare, setOpenCompare] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem(RECENT_KEY);
    const current = raw ? (JSON.parse(raw) as string[]) : [];
    const next = [car.id, ...current.filter((id) => id !== car.id)].slice(0, 5);
    localStorage.setItem(RECENT_KEY, JSON.stringify(next));
  }, [car.id]);

  const compareCars = useMemo(() => {
    const other = cars.find((x) => x.id === compareId);
    return other ? [car, other] : [];
  }, [car, compareId]);

  return (
    <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[1.1fr_1fr]">
      <ImageGallery images={car.images} label={`${car.brand} ${car.model}`} />
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{car.brand} {car.model}</h1>
        <p className="text-2xl font-semibold text-orange">{formatPrice(car.price)}</p>
        <ul className="grid grid-cols-2 gap-2 rounded-2xl bg-zinc-900 p-4 text-sm">
          <li>Yıl: {car.year}</li><li>Kilometre: {car.km.toLocaleString('tr-TR')}</li>
          <li>Yakıt: {car.fuelType}</li><li>Vites: {car.transmission}</li>
          <li>Kasa: {car.bodyType}</li><li>Marka: {car.brand}</li>
        </ul>
        <select value={compareId} onChange={(e) => setCompareId(e.target.value)} className="w-full rounded-xl bg-zinc-800 p-2">
          <option value="">Kıyaslanacak araç seç</option>
          {cars.filter((x) => x.id !== car.id).map((x) => <option key={x.id} value={x.id}>{x.brand} {x.model}</option>)}
        </select>
        <button type="button" onClick={() => setOpenCompare(true)} disabled={!compareId} className="rounded-xl bg-electric px-4 py-2 font-semibold disabled:opacity-40">
          Kıyasla
        </button>
        <FinanceCalculator price={car.price} />
        <section className="rounded-2xl border border-zinc-800 p-3">
          <h3 className="mb-2 font-semibold">Benzer Araçlar</h3>
          <p className="text-sm text-zinc-400">
            {cars
              .filter((x) => x.bodyType === car.bodyType && x.id !== car.id)
              .slice(0, 3)
              .map((x) => `${x.brand} ${x.model}`)
              .join(', ') || 'Bu segmentte başka araç bulunamadı.'}
          </p>
        </section>
      </div>
      {openCompare && compareCars.length === 2 && <ComparisonModal cars={compareCars} onClose={() => setOpenCompare(false)} />}
    </div>
  );
}
