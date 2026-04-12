import { useState } from 'react';
import { Button, Group } from '@mantine/core';
import { Lightbox, LightboxSlideData } from '@mantine/lightbox';
import { MantineDemo } from '@mantinex/demo';
import { images } from './_images';

const code = `
import { useState } from 'react';
import { Button, Group } from '@mantine/core';
import { Lightbox, LightboxSlideData } from '@mantine/lightbox';

const slides: LightboxSlideData[] = [
  { src: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png' },
  { src: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png' },
  { src: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png' },
];

function Demo() {
  const [opened, setOpened] = useState(false);
  const [swipeEnabled, setSwipeEnabled] = useState(true);

  return (
    <>
      <Lightbox
        opened={opened}
        onClose={() => setOpened(false)}
        slides={slides}
        closeOnSwipeDown={swipeEnabled}
      />

      <Group>
        <Button onClick={() => setOpened(true)}>
          Open lightbox
        </Button>

        <Button
          variant="default"
          onClick={() => setSwipeEnabled((v) => !v)}
        >
          Swipe close: {swipeEnabled ? 'enabled' : 'disabled'}
        </Button>
      </Group>
    </>
  );
}
`;

const slides: LightboxSlideData[] = images.slice(0, 3).map((src) => ({ src }));

function Demo() {
  const [opened, setOpened] = useState(false);
  const [swipeEnabled, setSwipeEnabled] = useState(true);

  return (
    <>
      <Lightbox
        opened={opened}
        onClose={() => setOpened(false)}
        slides={slides}
        closeOnSwipeDown={swipeEnabled}
      />

      <Group>
        <Button onClick={() => setOpened(true)}>Open lightbox</Button>

        <Button variant="default" onClick={() => setSwipeEnabled((v) => !v)}>
          Swipe close: {swipeEnabled ? 'enabled' : 'disabled'}
        </Button>
      </Group>
    </>
  );
}

export const swipeClose: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
