import type { ModalStylesNames } from '@mantine/core';

export const Modal: Record<ModalStylesNames, string> = {
  root: 'Root element',
  inner: 'Element used to center modal, has fixed position, takes entire screen',
  content: 'Modal.Content root element',
  header: 'Contains title and close button',
  overlay: 'Overlay displayed under the Modal.Content',
  title: 'Modal title (h2 tag), displayed in header',
  body: 'Modal body, displayed after header',
  close: 'Close button',
};
