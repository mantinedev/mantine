import { Button, Group } from '@mantine/core';
import { Lightbox, LightboxSlideData } from '@mantine/lightbox';
import { MantineDemo } from '@mantinex/demo';
import { images } from './_images';

const code = `
import { Button, Group } from '@mantine/core';
import { Lightbox, LightboxSlideData } from '@mantine/lightbox';

const slides: LightboxSlideData[] = [
  { src: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png', alt: 'Gallery image 1', caption: 'Slide 1' },
  { src: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png', alt: 'Gallery image 2', caption: 'Slide 2' },
  { src: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png', alt: 'Gallery image 3', caption: 'Slide 3' },
  { src: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png', alt: 'Gallery image 4', caption: 'Slide 4' },
  { src: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png', alt: 'Gallery image 5', caption: 'Slide 5' },
];

function Demo() {
  return (
    <>
      <Lightbox.Provider withThumbnails />

      <Group>
        <Button onClick={() => Lightbox.open({ slides })}>
          Open lightbox
        </Button>

        <Button
          variant="default"
          onClick={() => Lightbox.open({ slides, startIndex: 2 })}
        >
          Open at slide 3
        </Button>
      </Group>
    </>
  );
}
`;

const slides: LightboxSlideData[] = images.map((src, i) => ({
  src,
  alt: `Gallery image ${i + 1}`,
  caption: `Slide ${i + 1}`,
}));

function Demo() {
  return (
    <>
      <Lightbox.Provider withThumbnails />

      <Group>
        <Button onClick={() => Lightbox.open({ slides })}>Open lightbox</Button>

        <Button variant="default" onClick={() => Lightbox.open({ slides, startIndex: 2 })}>
          Open at slide 3
        </Button>
      </Group>
    </>
  );
}

export const store: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
