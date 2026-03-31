'use client';

import { motion } from 'framer-motion';
import { Car } from '@/lib/cars';
import { CarCard } from './CarCard';

export function FeaturedCarousel({ cars }: { cars: Car[] }) {
  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="grid gap-4 md:grid-cols-3">
      {cars.map((car) => <CarCard key={car.id} car={car} />)}
    </motion.div>
  );
}
