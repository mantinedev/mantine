import { useState } from 'react';
import { Image, SimpleGrid, Text } from '@mantine/core';
import { Lightbox, LightboxSlideData } from '@mantine/lightbox';
import { MantineDemo } from '@mantinex/demo';
import { images } from './_images';

const code = `
import { useState } from 'react';
import { Image, SimpleGrid } from '@mantine/core';
import { Lightbox, LightboxSlideData } from '@mantine/lightbox';

const images = [
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
];

const slides: LightboxSlideData[] = images.map((src) => ({ src }));

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
        withZoom
      />

      <SimpleGrid cols={3}>
        {images.map((src, i) => (
          <Image
            key={src}
            src={src}
            radius="md"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setIndex(i);
              setOpened(true);
            }}
          />
        ))}
      </SimpleGrid>
    </>
  );
}
`;

const slides: LightboxSlideData[] = images.map((src) => ({ src }));

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
        withZoom
      />

      <SimpleGrid cols={3}>
        {images.map((src, i) => (
          <Image
            key={src}
            src={src}
            radius="md"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setIndex(i);
              setOpened(true);
            }}
          />
        ))}
      </SimpleGrid>

      <Text size="sm" c="dimmed" mt="xs">
        Click image to zoom, scroll to adjust, drag to pan when zoomed. Press Z to toggle zoom via
        keyboard.
      </Text>
    </>
  );
}

export const zoom: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
