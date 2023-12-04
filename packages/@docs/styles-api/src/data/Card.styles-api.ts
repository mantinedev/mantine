import type { CardFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const CardStylesApi: StylesApiData<CardFactory> = {
  selectors: {
    root: 'Root element',
    section: '`Card.Section` root element',
  },

  vars: {
    root: {
      '--card-padding':
        'Controls `padding` of the card, also used to control `Card.Section` spacing',
    },
  },

  modifiers: [
    {
      modifier: 'data-first-section',
      selector: 'section',
      condition: '`Card.Section` is the child of the `Card`',
    },
    {
      modifier: 'data-last-section',
      selector: 'section',
      condition: '`Card.Section` is the last child of the `Card`',
    },
    {
      modifier: 'data-with-border',
      selector: 'root',
      condition: '`withBorder` prop is set on `Card` component',
    },
    {
      modifier: 'data-with-border',
      selector: 'section',
      condition: '`withBorder` prop is set on `Card.Section` component',
    },
    {
      modifier: 'data-inherit-padding',
      selector: 'section',
      condition: '`inheritPadding` prop is set on `Card.Section` component',
    },
  ],
};
