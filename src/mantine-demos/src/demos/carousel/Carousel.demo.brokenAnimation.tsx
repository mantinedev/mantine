import React, { useState } from 'react';
import { Button, Modal, Group } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

const code = `
import { useState } from 'react';
import { Button, Modal, Group } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

function Demo() {
  const TRANSITION_DURATION = 200;
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open carousel with broken offset</Button>
      </Group>
      <Modal
        opened={opened}
        size="300px"
        padding={0}
        transitionDuration={TRANSITION_DURATION}
        withCloseButton={false}
        onClose={() => setOpened(false)}
      >
        <Carousel loop>
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

  return (
    <>
      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open carousel with broken offset</Button>
      </Group>
      <Modal
        opened={opened}
        size="300px"
        padding={0}
        transitionDuration={TRANSITION_DURATION}
        withCloseButton={false}
        onClose={() => setOpened(false)}
      >
        <Carousel loop>
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

export const brokenAnimation: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
