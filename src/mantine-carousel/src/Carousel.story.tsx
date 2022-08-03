import React, { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from './Carousel';

export default { title: 'Carousel' };

const slides = (
  <>
    <Carousel.Slide>Slide 1</Carousel.Slide>
    <Carousel.Slide>Slide 2</Carousel.Slide>
    <Carousel.Slide>Slide 3</Carousel.Slide>
    <Carousel.Slide>Slide 4</Carousel.Slide>
  </>
);

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 500 }}>
      <Carousel slideSize="70%" slideGap="md" height={200}>
        {slides}
      </Carousel>
    </div>
  );
}

export function InitialSlide() {
  return (
    <div style={{ padding: 40, maxWidth: 500 }}>
      <Carousel slideSize="70%" slideGap="md" height={200} loop initialSlide={2}>
        {slides}
      </Carousel>
    </div>
  );
}

export function SlidesToScroll() {
  return (
    <div style={{ padding: 40, maxWidth: 500 }}>
      <Carousel slideSize="50%" slideGap="md" height={200} slidesToScroll={2}>
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
