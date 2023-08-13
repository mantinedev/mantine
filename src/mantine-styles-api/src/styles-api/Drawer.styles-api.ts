import type { DrawerStylesNames } from '@mantine/core';

export const Drawer: Record<DrawerStylesNames, string> = {
  root: 'Root element',
  inner: 'Element used to position drawer, has fixed position, takes entire screen',
  content: 'Drawer.Content root element',
  header: 'Contains title and close button',
  overlay: 'Overlay displayed under the Drawer.Content',
  title: 'Drawer title (h2 tag), displayed in header',
  body: 'Drawer body, displayed after header',
  close: 'Close button',
};
