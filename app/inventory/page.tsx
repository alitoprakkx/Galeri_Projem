'use client';

import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { CarCard } from '@/components/CarCard';
import { FilterSidebar } from '@/components/FilterSidebar';
import { useFilters } from '@/hooks/useFilters';
import { cars } from '@/lib/cars';

export default function InventoryPage() {
  const searchParams = useSearchParams();
  const keyword = (searchParams.get('q') || '').toLocaleLowerCase('tr-TR');
  const brands = [...new Set(cars.map((x) => x.brand))];
  const filters = useFilters(cars);

  const finalCars = useMemo(() => {
    if (!keyword) return filters.filteredCars;

    return filters.filteredCars.filter((car) =>
      [car.brand, car.model, car.fuelType, car.transmission, car.bodyType].join(' ').toLocaleLowerCase('tr-TR').includes(keyword)
    );
  }, [filters.filteredCars, keyword]);

  return (
    <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[280px_1fr]">
      <FilterSidebar brands={brands} {...filters} />
      <section>
        {finalCars.length === 0 ? (
          <div className="glass flex min-h-[50vh] flex-col items-center justify-center rounded-2xl text-center">
            <p className="text-5xl">🐒</p>
            <p className="text-zinc-300">Filtrelere veya aramaya uygun araç bulunamadı.</p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {finalCars.map((car) => <CarCard key={car.id} car={car} />)}
          </div>
        )}
      </section>
    </div>
  );
}
