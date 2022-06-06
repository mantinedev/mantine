import React from 'react';
import { Carousel } from './Carousel';

export default { title: 'Carousel' };

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 500 }}>
      <Carousel slideSize="70%" slideGap="md" height={200}>
        <Carousel.Slide>Slide 1</Carousel.Slide>
        <Carousel.Slide>Slide 2</Carousel.Slide>
        <Carousel.Slide>Slide 3</Carousel.Slide>
        <Carousel.Slide>Slide 4</Carousel.Slide>
      </Carousel>
    </div>
  );
}

export function Vertical() {
  return (
    <div style={{ padding: 40, maxWidth: 500 }}>
      <Carousel slideSize={120} height={200} slideGap="md" orientation="vertical">
        <Carousel.Slide>Slide 1</Carousel.Slide>
        <Carousel.Slide>Slide 2</Carousel.Slide>
        <Carousel.Slide>Slide 3</Carousel.Slide>
        <Carousel.Slide>Slide 4</Carousel.Slide>
      </Carousel>
    </div>
  );
}
