import { useState } from 'react';
import { Image, SimpleGrid, UnstyledButton } from '@mantine/core';
import { Lightbox, LightboxSlideData } from '@mantine/lightbox';
import { MantineDemo } from '@mantinex/demo';
import { images } from './_images';

const code = `
import { useState } from 'react';
import { Image, SimpleGrid, UnstyledButton } from '@mantine/core';
import { Lightbox, LightboxSlideData } from '@mantine/lightbox';

const images = [
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
];

const slides: LightboxSlideData[] = images.map((src, index) => ({
  src,
  alt: \`Gallery image \${index + 1}\`,
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
        withZoom
        withThumbnails
        withFullscreen
        withDownload
      />

      <SimpleGrid cols={3}>
        {images.map((src, i) => (
          <UnstyledButton
            key={src}
            onClick={() => {
              setIndex(i);
              setOpened(true);
            }}
          >
            <Image src={src} alt={\`Gallery image \${i + 1}\`} radius="md" />
          </UnstyledButton>
        ))}
      </SimpleGrid>
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
        withZoom
        withThumbnails
        withFullscreen
        withDownload
      />

      <SimpleGrid cols={3}>
        {images.map((src, i) => (
          <UnstyledButton
            key={src}
            onClick={() => {
              setIndex(i);
              setOpened(true);
            }}
          >
            <Image src={src} alt={`Gallery image ${i + 1}`} radius="md" />
          </UnstyledButton>
        ))}
      </SimpleGrid>
    </>
  );
}

export const allFeatures: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
