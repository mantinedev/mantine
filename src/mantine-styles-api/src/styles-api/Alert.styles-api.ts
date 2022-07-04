import type { AlertStylesNames } from '@mantine/core';

export const Alert: Record<AlertStylesNames, string> = {
  root: 'Root element',
  wrapper: 'Wraps body and icon',
  body: 'Body element, wraps title and message',
  title: 'Title element, contains label and icon',
  label: 'Title label',
  message: 'Alert message, defined by children',
  icon: 'Icon wrapper',
  closeButton: 'Close button, defined by withCloseButton prop',
};
