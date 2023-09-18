import React, { useState } from 'react';
import { CarouselCardsDemos } from '@mantine/demos';
import { Embla, useAnimationOffsetEffect } from '@mantine/carousel';

export function Carousel() {
  const [embla, setEmbla] = useState<Embla | null>(null);

  useAnimationOffsetEffect(embla, 300);

  return (
    <div>
      <CarouselCardsDemos loop getEmblaApi={setEmbla} />
    </div>
  );
}
