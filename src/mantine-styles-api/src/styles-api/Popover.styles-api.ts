import type { PopoverStylesNames } from '@mantine/core';

export const Popover: Record<PopoverStylesNames, string> = {
  root: 'Root element',
  wrapper: 'Popover wrapper, contains body and arrow',
  popover: 'Popover element itself',
  arrow: 'Arrow element',
  body: 'Popover body, contains header and inner',
  inner: 'Children wrapper',
  header: 'Header element, contains title',
  title: 'Title element',
  close: 'Close button',
  target: 'Target control',
};
