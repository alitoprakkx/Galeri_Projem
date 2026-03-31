'use client';

import Image from 'next/image';
import { useState } from 'react';

export function ImageGallery({ images, label }: { images: string[]; label: string }) {
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-3">
      <div className="relative h-72 overflow-hidden rounded-2xl">
        <Image fill src={images[active]} alt={label} className="object-cover" />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {images.map((img, index) => (
          <button key={img + index} onClick={() => setActive(index)} className="relative h-16 overflow-hidden rounded-xl">
            <Image fill src={img} alt="Önizleme" className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
