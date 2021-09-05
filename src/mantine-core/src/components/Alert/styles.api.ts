import { AlertStylesName } from './Alert';

export const Alert: Record<AlertStylesName, string> = {
  root: 'Root element',
  wrapper: 'Wraps body and icon',
  body: 'Body element, wraps title and message',
  title: 'Title element',
  message: 'Alert message, defined by children',
  icon: 'Icon wrapper',
  closeButton: 'Close button, defined by withCloseButton prop',
};
