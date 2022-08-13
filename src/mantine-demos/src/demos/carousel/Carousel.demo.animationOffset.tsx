import React, { useState } from 'react';
import { Button, Modal, Group } from '@mantine/core';
import { Carousel, useAnimationOffsetEffect } from '@mantine/carousel';

const code = `
import { useState } from 'react';
import { Button, Modal, Group } from '@mantine/core';
import { Carousel, useAnimationOffsetEffect } from '@mantine/carousel';

function Demo() {
  const TRANSITION_DURATION = 200;
  const [opened, setOpened] = useState(false);
  const [embla, setEmbla] = useState(null);

  useAnimationOffsetEffect(embla, TRANSITION_DURATION);

  return (
    <>
      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open modal with carousel</Button>
      </Group>
      <Modal
        opened={opened}
        size="300px"
        padding={0}
        transitionDuration={TRANSITION_DURATION}
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
`;

function Demo() {
  const TRANSITION_DURATION = 200;
  const [opened, setOpened] = useState(false);
  const [embla, setEmbla] = useState(null);

  useAnimationOffsetEffect(embla, TRANSITION_DURATION);

  return (
    <>
      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open modal with carousel</Button>
      </Group>
      <Modal
        opened={opened}
        size="300px"
        padding={0}
        transitionDuration={TRANSITION_DURATION}
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

export const animationOffset: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
