import { useState } from 'react';
import { Button, Text } from '@mantine/core';
import { Lightbox, LightboxSlideData } from '@mantine/lightbox';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Button } from '@mantine/core';
import { Lightbox, LightboxSlideData } from '@mantine/lightbox';

const slides: LightboxSlideData[] = [
  {
    type: 'video',
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    poster: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
    caption: 'Play this video, then navigate to the next slide – it pauses automatically',
    autoPlay: true,
  },
  { src: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png', caption: 'Image slide' },
  {
    type: 'video',
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    poster: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png',
    caption: 'Another video',
  },
  { src: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png', caption: 'Another image' },
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
    </>
  );
}
`;

const slides: LightboxSlideData[] = [
  {
    type: 'video',
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    poster: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
    caption: 'Play this video, then navigate to the next slide \u2013 it pauses automatically',
    autoPlay: true,
  },
  {
    src: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
    caption: 'Image slide',
  },
  {
    type: 'video',
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    poster: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png',
    caption: 'Another video',
  },
  {
    src: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
    caption: 'Another image',
  },
];

function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Lightbox opened={opened} onClose={() => setOpened(false)} slides={slides} withThumbnails />

      <Button onClick={() => setOpened(true)}>Open lightbox with videos</Button>
      <Text size="sm" c="dimmed" mt="xs">
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
