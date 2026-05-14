import type { MarqueeFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const MarqueeStylesApi: StylesApiData<MarqueeFactory> = {
  selectors: {
    root: 'Root element',
    content: 'Animated scrolling container',
    group: 'Repeated children wrapper',
  },

  vars: {
    root: {
      '--marquee-duration': 'Controls animation duration',
      '--marquee-gap': 'Controls gap between items',
      '--marquee-repeat': 'Number of times content is repeated',
      '--marquee-fade-color': 'Controls the fade edge gradient color',
      '--marquee-fade-size': 'Controls the size of the fade gradient',
    },
  },

  modifiers: [
    {
      modifier: 'data-orientation',
      selector: 'root',
      value: 'horizontal | vertical',
      condition: 'Value depends on `orientation` prop',
    },
    { modifier: 'data-reverse', selector: 'root', condition: '`reverse` prop is set' },
    { modifier: 'data-pause-on-hover', selector: 'root', condition: '`pauseOnHover` prop is set' },
    {
      modifier: 'data-fade-edges',
      selector: 'root',
      condition: '`fadeEdges` prop is `true` (default)',
    },
  ],
};
