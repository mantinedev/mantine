import type { BurgerFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const BurgerStylesApi: StylesApiData<BurgerFactory> = {
  selectors: {
    root: 'Root element (button)',
    burger: 'Inner element that contains burger lines',
  },

  vars: {
    root: {
      '--burger-color': 'Controls background-color of lines',
      '--burger-size': 'Controls width and height of the button',
      '--burger-transition-duration': 'Controls transition-duration of lines',
      '--burger-transition-timing-function': 'Controls transition-timing-function of lines',
    },
  },

  modifiers: [{ modifier: 'data-opened', selector: 'burger', condition: 'opened prop is set' }],
};
