import React, { useRef, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import type { EmblaCarouselType } from 'embla-carousel-react';
import { Button, Modal } from '@mantine/core';
import { Carousel } from './Carousel';
import { useAnimationOffsetEffect } from './use-animation-offset-effect';

export default { title: 'Carousel' };

const slides = (
  <>
    <Carousel.Slide bg="red">Slide 1</Carousel.Slide>
    <Carousel.Slide bg="red">Slide 2</Carousel.Slide>
    <Carousel.Slide bg="red">Slide 3</Carousel.Slide>
    <Carousel.Slide bg="red">Slide 4</Carousel.Slide>
  </>
);

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 500 }}>
      <Carousel slideSize={70} slideGap="md" height={200} withIndicators>
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

export function AnimationOffsetEffect() {
  const TRANSITION_DURATION = 200;
  const [opened, setOpened] = useState(false);
  const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);

  useAnimationOffsetEffect(embla, TRANSITION_DURATION);

  return (
    <>
      <Button onClick={() => setOpened(true)}>Open Modal</Button>
      <Modal
        opened={opened}
        size="300px"
        padding={0}
        transitionProps={{ duration: TRANSITION_DURATION }}
        withCloseButton={false}
        onClose={() => setOpened(false)}
      >
        <Carousel loop getEmblaApi={setEmbla}>
          <Carousel.Slide>
            <img
              src="https://cataas.com/cat"
              alt=""
              style={{ width: 300, height: 200, objectFit: 'cover' }}
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              src="https://cataas.com/cat/cute"
              alt=""
              style={{ width: 300, height: 200, objectFit: 'cover' }}
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              src="https://cataas.com/cat/angry"
              alt=""
              style={{ width: 300, height: 200, objectFit: 'cover' }}
            />
          </Carousel.Slide>
        </Carousel>
      </Modal>
    </>
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
