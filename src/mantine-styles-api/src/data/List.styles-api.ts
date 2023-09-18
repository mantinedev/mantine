import type { ListFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const ListStylesApi: StylesApiData<ListFactory> = {
  selectors: {
    root: 'Root element',
    item: 'ListItem root element',
    itemIcon: 'ListItem icon',
    itemLabel: 'ListItem content',
    itemWrapper: 'ListItem wrapper element, container, icon and content',
  },

  vars: {
    root: {
      '--list-fz': 'Controls `font-size`',
      '--list-lh': 'Controls `line-height`',
      '--list-spacing': 'Controls spacing between items',
    },
  },

  modifiers: [
    { modifier: 'data-with-padding', selector: 'root', condition: '`withPadding` prop is set' },
    {
      modifier: 'data-centered',
      selector: 'item',
      condition: '`center` prop is set on List component',
    },
    {
      modifier: 'data-with-icon',
      selector: 'item',
      condition: '`icon` prop is set on ListItem component',
    },
  ],
};
