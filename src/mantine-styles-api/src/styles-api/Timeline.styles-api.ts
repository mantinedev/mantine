import type { TimelineStylesNames } from '@mantine/core';

export const Timeline: Record<TimelineStylesNames, string> = {
  root: 'Root element',
  item: 'Item root element',
  itemBody: 'Item body, wraps title and content',
  itemTitle: 'Item title, controlled by title prop',
  itemContent: 'Item content, controlled by children prop',
  itemBullet: 'Item bullet',
};
