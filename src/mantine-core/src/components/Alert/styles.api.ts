import type { AlertStylesNames } from './Alert';

export const Alert: Record<AlertStylesNames, string> = {
  root: 'Root element',
  wrapper: 'Wraps body and icon',
  body: 'Body element, wraps title and message',
  title: 'Title element',
  message: 'Alert message, defined by children',
  icon: 'Icon wrapper',
  closeButton: 'Close button, defined by withCloseButton prop',
};
