import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CarDetailView } from '@/components/CarDetailView';
import { cars } from '@/lib/cars';

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const car = cars.find((item) => item.id === params.id);
  if (!car) {
    return {
      title: 'Araç bulunamadı | Monkey Motors',
      description: 'Monkey Motors envanterinde aradığınız araç bulunamadı.'
    };
  }

  return {
    title: `${car.brand} ${car.model} (${car.year}) | Monkey Motors`,
    description: `${car.brand} ${car.model} ${car.year} model araç detayları, fiyatı ve özellikleri Monkey Motors'ta.`
  };
}

export default function CarDetailPage({ params }: { params: { id: string } }) {
  const car = cars.find((item) => item.id === params.id);
  if (!car) notFound();

  return <CarDetailView car={car} />;
}
