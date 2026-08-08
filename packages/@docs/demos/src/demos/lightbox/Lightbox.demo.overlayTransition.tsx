import { useState } from 'react';
import { Button, Group, Select } from '@mantine/core';
import { Lightbox, LightboxSlideData } from '@mantine/lightbox';
import { MantineDemo } from '@mantinex/demo';
import { images } from './_images';

const code = `
import { useState } from 'react';
import { Button, Group, Select } from '@mantine/core';
import { Lightbox, LightboxSlideData } from '@mantine/lightbox';

const slides: LightboxSlideData[] = [
  { src: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png' },
  { src: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png' },
  { src: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png' },
  { src: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png' },
  { src: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png' },
];

function Demo() {
  const [opened, setOpened] = useState(false);
  const [index, setIndex] = useState(0);
  const [transition, setTransition] = useState<string | null>('pop');

  return (
    <>
      <Lightbox
        opened={opened}
        onClose={() => setOpened(false)}
        slides={slides}
        currentIndex={index}
        onIndexChange={setIndex}
        transitionProps={{ transition: transition as any, duration: 400 }}
      />

      <Group align="flex-end">
        <Select
          label="Transition"
          data={['fade', 'pop', 'scale', 'slide-up', 'slide-down', 'rotate-left']}
          value={transition}
          onChange={setTransition}
          allowDeselect={false}
        />
        <Button onClick={() => setOpened(true)}>Open lightbox</Button>
      </Group>
    </>
  );
}
`;

const slides: LightboxSlideData[] = images.map((src) => ({ src }));

function Demo() {
  const [opened, setOpened] = useState(false);
  const [index, setIndex] = useState(0);
  const [transition, setTransition] = useState<string | null>('pop');

  return (
    <>
      <Lightbox
        opened={opened}
        onClose={() => setOpened(false)}
        slides={slides}
        currentIndex={index}
        onIndexChange={setIndex}
        transitionProps={{ transition: transition as any, duration: 400 }}
      />

      <Group align="flex-end">
        <Select
          label="Transition"
          data={['fade', 'pop', 'scale', 'slide-up', 'slide-down', 'rotate-left']}
          value={transition}
          onChange={setTransition}
          allowDeselect={false}
        />
        <Button onClick={() => setOpened(true)}>Open lightbox</Button>
      </Group>
    </>
  );
}

export const overlayTransition: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
