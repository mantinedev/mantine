import { useState } from 'react';
import { Embla, useAnimationOffsetEffect } from '@mantine/carousel';
import { CarouselCardsDemos } from '@docs/demos';

export function Carousel() {
  const [embla, setEmbla] = useState<Embla | null>(null);

  useAnimationOffsetEffect(embla, 300);

  return (
    <div>
      <CarouselCardsDemos loop getEmblaApi={setEmbla} />
    </div>
  );
}
