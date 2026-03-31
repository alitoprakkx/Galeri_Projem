'use client';

import { Car } from '@/lib/cars';

export function ComparisonModal({ cars, onClose }: { cars: Car[]; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-black/70 p-4">
      <div className="w-full max-w-3xl rounded-2xl border border-zinc-700 bg-zinc-900 p-5">
        <h3 className="mb-4 text-xl font-semibold">Araç Kıyaslama</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {cars.map((car) => (
            <div key={car.id} className="rounded-xl bg-zinc-800 p-3">
              <p className="font-semibold">{car.brand} {car.model}</p>
              <p>{car.year} • {car.km.toLocaleString('tr-TR')} km</p>
              <p>{car.transmission} • {car.fuelType}</p>
            </div>
          ))}
        </div>
        <button onClick={onClose} className="mt-4 rounded-xl bg-orange px-4 py-2 font-semibold text-black">Kapat</button>
      </div>
    </div>
  );
}
