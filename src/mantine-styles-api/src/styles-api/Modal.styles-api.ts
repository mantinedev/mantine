import type { ModalStylesNames } from '@mantine/core';

export const Modal: Record<ModalStylesNames, string> = {
  root: 'Root element, contains modal and overlay',
  inner: 'Modal wrapper, centers modal',
  modal: 'Modal root',
  header: 'Modal header, contains close button and title',
  overlay: 'Overlay',
  title: 'Modal title',
  body: 'Modal body, displayed after header',
  close: 'Close button',
};
