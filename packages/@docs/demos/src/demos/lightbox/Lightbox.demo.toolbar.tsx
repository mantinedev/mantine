import { useState } from 'react';
import { Button } from '@mantine/core';
import {
  createCloseToolbarItem,
  createDownloadToolbarItem,
  createFullscreenToolbarItem,
  createThumbnailsToolbarItem,
  Lightbox,
  LightboxSlideData,
  ToolbarItem,
  ToolbarItemsPayload,
} from '@mantine/lightbox';
import { MantineDemo } from '@mantinex/demo';
import { images } from './_images';

const code = `
import { useState } from 'react';
import { Button } from '@mantine/core';
import {
  createCloseToolbarItem,
  createDownloadToolbarItem,
  createFullscreenToolbarItem,
  createThumbnailsToolbarItem,
  Lightbox,
  LightboxSlideData,
  ToolbarItem,
  ToolbarItemsPayload,
} from '@mantine/lightbox';

const images = [
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
];

const slides: LightboxSlideData[] = images.map((src) => ({ src }));

function InfoIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
    </svg>
  );
}

// toolbarItems as a function receives the current lightbox state and handlers
const toolbarItems = (payload: ToolbarItemsPayload): ToolbarItem[] => [
  // Built-in factories for common actions
  createThumbnailsToolbarItem(payload.toggleThumbnails, payload.thumbnailsVisible, payload.labels),
  createFullscreenToolbarItem(payload.toggleFullscreen, payload.isFullscreen, payload.labels),
  createDownloadToolbarItem(images[payload.currentIndex], payload.labels),
  // Fully custom toolbar item
  {
    key: 'info',
    icon: <InfoIcon />,
    label: 'Image info',
    position: 'right',
    onClick: () => {
      // eslint-disable-next-line no-alert
      alert(\`Viewing image \${payload.currentIndex + 1} of \${payload.slides.length}\`);
    },
  },
  createCloseToolbarItem(payload.close, payload.labels),
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
        toolbarItems={toolbarItems}
      />

      <Button onClick={() => setOpened(true)}>
        Open lightbox with custom toolbar
      </Button>
    </>
  );
}
`;

const demoImages = images.slice(0, 3);
const slides: LightboxSlideData[] = demoImages.map((src) => ({ src }));

function InfoIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
    </svg>
  );
}

const toolbarItems = (payload: ToolbarItemsPayload): ToolbarItem[] => [
  createThumbnailsToolbarItem(payload.toggleThumbnails, payload.thumbnailsVisible, payload.labels),
  createFullscreenToolbarItem(payload.toggleFullscreen, payload.isFullscreen, payload.labels),
  createDownloadToolbarItem(demoImages[payload.currentIndex], payload.labels),
  {
    key: 'info',
    icon: <InfoIcon />,
    label: 'Image info',
    position: 'right',
    onClick: () => {
      // eslint-disable-next-line no-alert
      alert(`Viewing image ${payload.currentIndex + 1} of ${payload.slides.length}`);
    },
  },
  createCloseToolbarItem(payload.close, payload.labels),
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
        toolbarItems={toolbarItems}
      />

      <Button onClick={() => setOpened(true)}>Open lightbox with custom toolbar</Button>
    </>
  );
}

export const toolbar: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
