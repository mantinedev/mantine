import { useRef, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Box, Button } from '@mantine/core';
import { Carousel } from './Carousel';

export default { title: 'Carousel' };

const slides = (
  <>
    <Carousel.Slide bg="pink.1">
      <Box bg="pink.5">Slide 1</Box>
    </Carousel.Slide>
    <Carousel.Slide bg="pink.1">
      <Box bg="pink.5">Slide 2</Box>
    </Carousel.Slide>
    <Carousel.Slide bg="pink.1">
      <Box bg="pink.5">Slide 3</Box>
    </Carousel.Slide>
    <Carousel.Slide bg="pink.1">
      <Box bg="pink.5">Slide 4</Box>
    </Carousel.Slide>
  </>
);

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Carousel
        slideGap="md"
        slideSize={{ base: '100%', '400px': '50%', '600px': '33.333333%' }}
        height={200}
        withIndicators
        emblaOptions={{ align: 'start' }}
        type="container"
      >
        {slides}
      </Carousel>
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40, maxWidth: 500 }}>
      <Carousel slideSize="70%" slideGap="md" height={200} unstyled>
        {slides}
      </Carousel>
    </div>
  );
}

export function InitialSlide() {
  return (
    <div style={{ padding: 40, maxWidth: 500 }}>
      <Carousel
        slideSize="70%"
        slideGap="md"
        height={200}
        emblaOptions={{ loop: true }}
        initialSlide={2}
      >
        {slides}
      </Carousel>
    </div>
  );
}

export function SlidesToScroll() {
  return (
    <div style={{ padding: 40, maxWidth: 500 }}>
      <Carousel slideSize="50%" slideGap="md" height={200} emblaOptions={{ slidesToScroll: 2 }}>
        {slides}
      </Carousel>
    </div>
  );
}

export function Vertical() {
  return (
    <div style={{ padding: 40, maxWidth: 500 }}>
      <Carousel slideSize={120} height={200} slideGap="md" orientation="vertical">
        {slides}
      </Carousel>
    </div>
  );
}

export function AutoPlay() {
  const autoplay = useRef(Autoplay({ delay: 500, stopOnInteraction: false }));

  return (
    <div style={{ padding: 40, maxWidth: 500 }}>
      <Carousel
        height={200}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        withIndicators
      >
        {slides}
      </Carousel>
    </div>
  );
}

export function DynamicSlides() {
  const [count, setCount] = useState(1);

  const _slides = Array(count)
    .fill(0)
    .map((_, index) => (
      <Carousel.Slide key={index} style={{ height: 200, background: 'pink', width: '100%' }}>
        {index}
      </Carousel.Slide>
    ));

  return (
    <div style={{ padding: 40, maxWidth: 500 }}>
      <Carousel height={200} withIndicators>
        {_slides}
      </Carousel>
      <Button onClick={() => setCount((c) => c + 1)}>Increment</Button>
      <Button onClick={() => setCount((c) => c - 1)}>Decrement</Button>
    </div>
  );
}

export function PercentageHeight() {
  return (
    <div style={{ height: 400, display: 'flex' }}>
      <Carousel withIndicators height="100%" style={{ flex: 1 }}>
        <Carousel.Slide style={{ background: 'blue' }}>1</Carousel.Slide>
        <Carousel.Slide style={{ background: 'red' }}>2</Carousel.Slide>
        <Carousel.Slide style={{ background: 'orange' }}>3</Carousel.Slide>
      </Carousel>
    </div>
  );
}
