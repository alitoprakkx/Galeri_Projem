'use client';

import { CarCard } from '@/components/CarCard';
import { FilterSidebar } from '@/components/FilterSidebar';
import { useFilters } from '@/hooks/useFilters';
import { cars } from '@/lib/cars';

export default function InventoryPage() {
  const brands = [...new Set(cars.map((x) => x.brand))];
  const filters = useFilters(cars);

  return (
    <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[280px_1fr]">
      <FilterSidebar brands={brands} {...filters} />
      <section>
        {filters.filteredCars.length === 0 ? (
          <div className="glass flex min-h-[50vh] flex-col items-center justify-center rounded-2xl text-center">
            <p className="text-5xl">🐒</p>
            <p className="text-zinc-300">Filtrelere uygun araç bulunamadı.</p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filters.filteredCars.map((car) => <CarCard key={car.id} car={car} />)}
          </div>
        )}
      </section>
    </div>
  );
}
