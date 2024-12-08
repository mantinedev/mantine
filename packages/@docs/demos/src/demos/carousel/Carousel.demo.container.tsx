import { useEffect, useState } from 'react';
import { Carousel, Embla } from '@mantine/carousel';
import { useDebouncedCallback, useElementSize } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';
import { Slides } from './_slides';

const code = `
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    // Wrapper div is added for demonstration purposes only,
    // It is not required in real projects
    <div
      style={{
        resize: 'horizontal',
        overflow: 'hidden',
        maxWidth: '100%',
        minWidth: 250,
        padding: 10,
      }}
    >
      <Carousel
        withIndicators
        height={200}
        type="container"
        slideSize={{ base: '100%', '300px': '50%', '500px': '33.333333%' }}
        slideGap={{ base: 0, '300px': 'md', '500px': 'lg' }}
        loop
        align="start"
      >
        <Carousel.Slide>1</Carousel.Slide>
        <Carousel.Slide>2</Carousel.Slide>
        <Carousel.Slide>3</Carousel.Slide>
        {/* ...other slides */}
      </Carousel>
    </div>
  );
}
`;

function Demo() {
  const [embla, setEmbla] = useState<Embla | null>(null);
  const resizeObserver = useElementSize();
  const debounced = useDebouncedCallback(() => embla?.reInit(), 10);

  useEffect(() => {
    if (embla) {
      debounced();
    }
  }, [debounced, embla, resizeObserver.width]);

  return (
    // Wrapper div is added for demonstration purposes only,
    // It is not required in real projects
    <div
      ref={resizeObserver.ref}
      style={{
        resize: 'horizontal',
        overflow: 'hidden',
        maxWidth: '100%',
        minWidth: 250,
        padding: 10,
      }}
    >
      <Carousel
        getEmblaApi={setEmbla}
        withIndicators
        height={200}
        type="container"
        slideSize={{ base: '100%', '300px': '50%', '500px': '33.333333%' }}
        slideGap={{ base: 0, '300px': 'md', '500px': 'lg' }}
        loop
        align="start"
      >
        <Slides count={6} />
      </Carousel>
    </div>
  );
}

export const container: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
