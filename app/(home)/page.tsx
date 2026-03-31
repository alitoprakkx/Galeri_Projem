import { BrandSlider } from '@/components/BrandSlider';
import { FeaturedCarousel } from '@/components/FeaturedCarousel';
import { Hero } from '@/components/Hero';
import { cars } from '@/lib/cars';

export default function HomePage() {
  const featured = cars.filter((car) => car.isFeatured);

  return (
    <div className="mx-auto max-w-7xl space-y-10">
      <Hero />
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Öne Çıkan Araçlar</h2>
        <FeaturedCarousel cars={featured} />
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Markalar</h2>
        <BrandSlider />
      </section>
    </div>
  );
}
