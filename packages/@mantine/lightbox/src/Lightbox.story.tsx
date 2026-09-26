import { useState } from 'react';
import { Button, Group, Select, Stack } from '@mantine/core';
import { Lightbox } from './Lightbox';
import { lightbox } from './lightbox.store';
import type { LightboxSlideData, ToolbarItem } from './lightbox.types';

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

export function WithSlideTransition() {
  const [opened, setOpened] = useState(false);

  return (
    <div style={{ padding: 40 }}>
      <Button onClick={() => setOpened(true)}>Open with Slide Transition</Button>
      <Lightbox
        opened={opened}
        onClose={() => setOpened(false)}
        slides={slides}
        withSlideTransition
      />
    </div>
  );
}

export function CustomToolbarItems() {
  const [opened, setOpened] = useState(false);

  const customLeft: ToolbarItem = {
    key: 'info',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="currentColor"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
      </svg>
    ),
    label: 'Info',
    onClick: () => console.log('Info clicked'),
    position: 'left',
  };

  const customRight: ToolbarItem = {
    key: 'share',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="currentColor"
      >
        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z" />
      </svg>
    ),
    label: 'Share',
    onClick: () => console.log('Share clicked'),
    position: 'right',
  };

  return (
    <div style={{ padding: 40 }}>
      <Button onClick={() => setOpened(true)}>Open with Custom Toolbar Items</Button>
      <Lightbox
        opened={opened}
        onClose={() => setOpened(false)}
        slides={slides}
        toolbarItems={[customLeft, customRight]}
      />
    </div>
  );
}

export function CustomThumbRendering() {
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
          Custom slide {active ? '(active)' : ''}
        </div>
      ),
      renderThumb: () => (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            fontSize: 10,
          }}
        >
          Custom
        </div>
      ),
      caption: 'Custom slide with custom thumbnail',
    },
    slides[2],
  ];

  return (
    <div style={{ padding: 40 }}>
      <Button onClick={() => setOpened(true)}>Open with Custom Thumb</Button>
      <Lightbox
        opened={opened}
        onClose={() => setOpened(false)}
        slides={customSlides}
        withThumbnails
      />
    </div>
  );
}

export function OverlayTransition() {
  const [opened, setOpened] = useState(false);
  const [transition, setTransition] = useState<string | null>('pop');

  return (
    <div style={{ padding: 40 }}>
      <Group align="flex-end">
        <Select
          label="Transition"
          data={['fade', 'pop', 'scale', 'slide-up', 'slide-down', 'rotate-left']}
          value={transition}
          onChange={setTransition}
          allowDeselect={false}
        />
        <Button onClick={() => setOpened(true)}>Open with transition</Button>
      </Group>
      <Lightbox
        opened={opened}
        onClose={() => setOpened(false)}
        slides={slides}
        transitionProps={{ transition: transition as any, duration: 400 }}
      />
    </div>
  );
}

export function CloseOnClickOutside() {
  const [opened, setOpened] = useState(false);

  return (
    <div style={{ padding: 40 }}>
      <Button onClick={() => setOpened(true)}>Open with close on click outside</Button>
      <Lightbox
        opened={opened}
        onClose={() => setOpened(false)}
        slides={slides}
        closeOnClickOutside
        withThumbnails
      />
    </div>
  );
}

export function DisabledTransition() {
  const [opened, setOpened] = useState(false);

  return (
    <div style={{ padding: 40 }}>
      <Button onClick={() => setOpened(true)}>Open without animation</Button>
      <Lightbox
        opened={opened}
        onClose={() => setOpened(false)}
        slides={slides}
        transitionProps={{ duration: 0 }}
      />
    </div>
  );
}
