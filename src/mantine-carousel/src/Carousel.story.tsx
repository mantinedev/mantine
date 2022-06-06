import React from 'react';
import { Carousel } from './Carousel';

export default { title: 'Carousel' };

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 500 }}>
      <Carousel>
        <Carousel.Slide>Slide 1</Carousel.Slide>
        <Carousel.Slide>Slide 2</Carousel.Slide>
        <Carousel.Slide>Slide 3</Carousel.Slide>
      </Carousel>
    </div>
  );
}
