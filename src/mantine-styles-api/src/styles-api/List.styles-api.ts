import type { ListStylesNames } from '@mantine/core';

export const List: Record<ListStylesNames, string> = {
  root: 'Root element (ul or ol)',
  item: 'List element (li)',
  withIcon: 'List element with custom icon modifier',
  itemWrapper: 'Wraps icon and item item content, used to align custom icon with content',
  itemIcon: 'Icon wrapper element',
};
