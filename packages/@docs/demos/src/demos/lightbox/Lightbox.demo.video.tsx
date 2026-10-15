import { useState } from 'react';
import { Button, Text } from '@mantine/core';
import { Lightbox, LightboxSlideData } from '@mantine/lightbox';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Button, Text } from '@mantine/core';
import { Lightbox, LightboxSlideData } from '@mantine/lightbox';

const slides: LightboxSlideData[] = [
  {
    type: 'video',
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    label: 'Big Buck Bunny',
    poster: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
    caption: 'Play this video, then navigate to the next slide – it pauses automatically',
    autoPlay: true,
  },
  { src: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png', alt: 'Gallery image 1', caption: 'Image slide' },
  {
    type: 'video',
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    label: 'Big Buck Bunny',
    poster: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png',
    caption: 'Another video',
  },
  { src: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png', alt: 'Gallery image 3', caption: 'Another image' },
  {
    type: 'video',
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    label: 'Big Buck Bunny',
    caption: 'Video with a video thumbnail rendered with renderThumb',
    renderThumb: () => (
      <video
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        muted
        playsInline
        preload="metadata"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    ),
  },
];

function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Lightbox
        opened={opened}
        onClose={() => setOpened(false)}
        slides={slides}
        withThumbnails
      />

      <Button onClick={() => setOpened(true)}>
        Open lightbox with videos
      </Button>
      <Text size="sm" mt="xs">
        Opens on a video slide with autoPlay. Navigate away to see the video pause automatically.
      </Text>
    </>
  );
}
`;

const slides: LightboxSlideData[] = [
  {
    type: 'video',
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    label: 'Big Buck Bunny',
    poster: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
    caption: 'Play this video, then navigate to the next slide \u2013 it pauses automatically',
    autoPlay: true,
  },
  {
    src: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
    alt: 'Gallery image 1',
    caption: 'Image slide',
  },
  {
    type: 'video',
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    label: 'Big Buck Bunny',
    poster: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png',
    caption: 'Another video',
  },
  {
    src: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
    alt: 'Gallery image 3',
    caption: 'Another image',
  },
  {
    type: 'video',
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    label: 'Big Buck Bunny',
    caption: 'Video with a video thumbnail rendered with renderThumb',
    renderThumb: () => (
      <video
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        muted
        playsInline
        preload="metadata"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    ),
  },
];

function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Lightbox opened={opened} onClose={() => setOpened(false)} slides={slides} withThumbnails />

      <Button onClick={() => setOpened(true)}>Open lightbox with videos</Button>
      <Text size="sm" mt="xs">
        Opens on a video slide with autoPlay. Navigate away to see the video pause automatically.
      </Text>
    </>
  );
}

export const video: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
