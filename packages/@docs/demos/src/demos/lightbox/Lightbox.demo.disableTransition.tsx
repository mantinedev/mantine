import { useState } from 'react';
import { Button } from '@mantine/core';
import { Lightbox, LightboxSlideData } from '@mantine/lightbox';
import { MantineDemo } from '@mantinex/demo';
import { images } from './_images';

const code = `
import { useState } from 'react';
import { Button } from '@mantine/core';
import { Lightbox, LightboxSlideData } from '@mantine/lightbox';

const slides: LightboxSlideData[] = [
  { src: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png', alt: 'Gallery image 1' },
  { src: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png', alt: 'Gallery image 2' },
  { src: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png', alt: 'Gallery image 3' },
  { src: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png', alt: 'Gallery image 4' },
  { src: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png', alt: 'Gallery image 5' },
];

function Demo() {
  const [opened, setOpened] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <Lightbox
        opened={opened}
        onClose={() => setOpened(false)}
        slides={slides}
        currentIndex={index}
        onIndexChange={setIndex}
        transitionProps={{ duration: 0 }}
      />

      <Button onClick={() => setOpened(true)}>Open lightbox without animation</Button>
    </>
  );
}
`;

const slides: LightboxSlideData[] = images.map((src, index) => ({
  src,
  alt: `Gallery image ${index + 1}`,
}));

function Demo() {
  const [opened, setOpened] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <Lightbox
        opened={opened}
        onClose={() => setOpened(false)}
        slides={slides}
        currentIndex={index}
        onIndexChange={setIndex}
        transitionProps={{ duration: 0 }}
      />

      <Button onClick={() => setOpened(true)}>Open lightbox without animation</Button>
    </>
  );
}

export const disableTransition: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
