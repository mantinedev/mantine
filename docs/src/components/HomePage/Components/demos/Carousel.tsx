import React, { useEffect, useState } from 'react';
import { CarouselCardsDemos } from '@mantine/demos';
import { Embla } from '@mantine/carousel';

export function Carousel() {
  const [embla, setEmbla] = useState<Embla>(null);

  // required to fix incorrect carousel slides position after animation
  useEffect(() => {
    if (embla) {
      window.setTimeout(() => {
        embla.reInit();
      }, 200);
    }
  }, [embla]);

  return (
    <div>
      <CarouselCardsDemos loop getEmblaApi={setEmbla} />
    </div>
  );
}
