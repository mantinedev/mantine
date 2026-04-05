import { useState } from 'react';
import { Button, Group, Stack } from '@mantine/core';
import { Lightbox } from './Lightbox';
import { lightbox } from './lightbox.store';
import type { LightboxSlideData } from './lightbox.types';

export default { title: 'Lightbox' };

const slides: LightboxSlideData[] = [
  {
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200',
    alt: 'Mountain landscape',
    caption: 'Beautiful mountain landscape',
    thumbSrc: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=200',
  },
  {
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200',
    alt: 'Forest path',
    caption: 'A path through the forest',
    thumbSrc: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=200',
  },
  {
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200',
    alt: 'Beach sunset',
    caption: 'Golden beach sunset',
    thumbSrc: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200',
  },
  {
    src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200',
    alt: 'Foggy forest',
    thumbSrc: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=200',
  },
  {
    src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200',
    alt: 'Sunlit forest',
    caption: 'Sunlight filtering through trees',
    thumbSrc: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200',
  },
];

export function Usage() {
  const [opened, setOpened] = useState(false);

  return (
    <div style={{ padding: 40 }}>
      <Button onClick={() => setOpened(true)}>Open Lightbox</Button>
      <Lightbox opened={opened} onClose={() => setOpened(false)} slides={slides} />
    </div>
  );
}

export function WithZoom() {
  const [opened, setOpened] = useState(false);

  return (
    <div style={{ padding: 40 }}>
      <Button onClick={() => setOpened(true)}>Open with Zoom</Button>
      <Lightbox opened={opened} onClose={() => setOpened(false)} slides={slides} withZoom />
    </div>
  );
}

export function WithThumbnails() {
  const [opened, setOpened] = useState(false);

  return (
    <div style={{ padding: 40 }}>
      <Button onClick={() => setOpened(true)}>Open with Thumbnails</Button>
      <Lightbox opened={opened} onClose={() => setOpened(false)} slides={slides} withThumbnails />
    </div>
  );
}

export function WithAllFeatures() {
  const [opened, setOpened] = useState(false);

  return (
    <div style={{ padding: 40 }}>
      <Button onClick={() => setOpened(true)}>Open with All Features</Button>
      <Lightbox
        opened={opened}
        onClose={() => setOpened(false)}
        slides={slides}
        withZoom
        withThumbnails
        withFullscreen
        withDownload
      />
    </div>
  );
}

export function WithLoop() {
  const [opened, setOpened] = useState(false);

  return (
    <div style={{ padding: 40 }}>
      <Button onClick={() => setOpened(true)}>Open with Loop</Button>
      <Lightbox opened={opened} onClose={() => setOpened(false)} slides={slides} loop />
    </div>
  );
}

export function Controlled() {
  const [opened, setOpened] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div style={{ padding: 40 }}>
      <Stack>
        <Group>
          {slides.map((_, i) => (
            <Button
              key={i}
              variant={i === index ? 'filled' : 'outline'}
              onClick={() => {
                setIndex(i);
                setOpened(true);
              }}
            >
              Slide {i + 1}
            </Button>
          ))}
        </Group>
        <div>Current index: {index}</div>
      </Stack>
      <Lightbox
        opened={opened}
        onClose={() => setOpened(false)}
        slides={slides}
        currentIndex={index}
        onIndexChange={setIndex}
      />
    </div>
  );
}

export function StoreApi() {
  return (
    <div style={{ padding: 40 }}>
      <Lightbox.Provider withZoom withThumbnails />
      <Group>
        <Button onClick={() => lightbox.open({ slides })}>Open via Store</Button>
        <Button onClick={() => lightbox.open({ slides, startIndex: 2 })}>Open at Slide 3</Button>
      </Group>
    </div>
  );
}

export function VideoSlides() {
  const [opened, setOpened] = useState(false);
  const mixedSlides: LightboxSlideData[] = [
    slides[0],
    {
      type: 'video',
      src: 'https://www.w3schools.com/html/mov_bbb.mp4',
      poster: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=200',
      caption: 'Sample video',
    },
    slides[1],
  ];

  return (
    <div style={{ padding: 40 }}>
      <Button onClick={() => setOpened(true)}>Open with Video</Button>
      <Lightbox
        opened={opened}
        onClose={() => setOpened(false)}
        slides={mixedSlides}
        withThumbnails
      />
    </div>
  );
}

export function CustomSlides() {
  const [opened, setOpened] = useState(false);
  const customSlides: LightboxSlideData[] = [
    slides[0],
    {
      type: 'custom',
      render: ({ active }) => (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: 24,
          }}
        >
          Custom slide content {active ? '(active)' : '(inactive)'}
        </div>
      ),
      caption: 'A custom rendered slide',
    },
    slides[2],
  ];

  return (
    <div style={{ padding: 40 }}>
      <Button onClick={() => setOpened(true)}>Open with Custom Slide</Button>
      <Lightbox
        opened={opened}
        onClose={() => setOpened(false)}
        slides={customSlides}
        withThumbnails
      />
    </div>
  );
}

export function NoNavigation() {
  const [opened, setOpened] = useState(false);

  return (
    <div style={{ padding: 40 }}>
      <Button onClick={() => setOpened(true)}>Open without Navigation</Button>
      <Lightbox
        opened={opened}
        onClose={() => setOpened(false)}
        slides={slides}
        withNavigation={false}
      />
    </div>
  );
}

export function SingleSlide() {
  const [opened, setOpened] = useState(false);

  return (
    <div style={{ padding: 40 }}>
      <Button onClick={() => setOpened(true)}>Open Single Slide</Button>
      <Lightbox opened={opened} onClose={() => setOpened(false)} slides={[slides[0]]} />
    </div>
  );
}
