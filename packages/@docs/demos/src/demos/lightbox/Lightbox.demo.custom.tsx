import { useState } from 'react';
import { Button, Center, Text } from '@mantine/core';
import { Lightbox, LightboxSlideData } from '@mantine/lightbox';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Button, Center, Text } from '@mantine/core';
import { Lightbox, LightboxSlideData } from '@mantine/lightbox';

const slides: LightboxSlideData[] = [
  { src: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png' },
  {
    type: 'custom',
    render: ({ active }) => (
      <Center h="100%">
        <Text c="white" size="xl" fw={700}>
          {active ? 'This slide is active' : 'This slide is not active'}
        </Text>
      </Center>
    ),
    renderThumb: () => (
      <Center h="100%" bg="blue.6" style={{ borderRadius: 4 }}>
        <Text c="white" size="xs">Custom</Text>
      </Center>
    ),
    caption: 'Custom slide with render function',
  },
  {
    type: 'custom',
    render: () => (
      <iframe
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ width: '80vw', height: '45vw', maxHeight: '70vh', border: 'none', borderRadius: 8 }}
      />
    ),
    renderThumb: () => (
      <Center h="100%" bg="red.6" style={{ borderRadius: 4 }}>
        <Text c="white" size="xs">YT</Text>
      </Center>
    ),
    caption: 'Embedded YouTube video',
  },
  { src: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png' },
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
        withThumbnails
      />

      <Button onClick={() => setOpened(true)}>
        Open lightbox with custom slides
      </Button>
    </>
  );
}
`;

const slides: LightboxSlideData[] = [
  { src: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png' },
  {
    type: 'custom',
    render: ({ active }) => (
      <Center h="100%">
        <Text c="white" size="xl" fw={700}>
          {active ? 'This slide is active' : 'This slide is not active'}
        </Text>
      </Center>
    ),
    renderThumb: () => (
      <Center h="100%" bg="blue.6" style={{ borderRadius: 4 }}>
        <Text c="white" size="xs">
          Custom
        </Text>
      </Center>
    ),
    caption: 'Custom slide with render function',
  },
  {
    type: 'custom',
    render: () => (
      <iframe
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          width: '80vw',
          height: '45vw',
          maxHeight: '70vh',
          border: 'none',
          borderRadius: 8,
        }}
      />
    ),
    renderThumb: () => (
      <Center h="100%" bg="red.6" style={{ borderRadius: 4 }}>
        <Text c="white" size="xs">
          YT
        </Text>
      </Center>
    ),
    caption: 'Embedded YouTube video',
  },
  { src: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png' },
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
        withThumbnails
      />

      <Button onClick={() => setOpened(true)}>Open lightbox with custom slides</Button>
    </>
  );
}

export const custom: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
