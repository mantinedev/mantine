import type { TiltFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const TiltStylesApi: StylesApiData<TiltFactory> = {
  selectors: {
    root: 'Root element, the perspective container',
    content: 'Element that receives the tilt rotation, wraps children and glare',
    glare:
      'Container of the light glare, rendered only when `withGlare` prop is set. The moving gradient is its `::before` pseudo-element, style it with `.glare::before`',
    layer: 'Tilt.Layer root element',
  },

  vars: {
    root: {
      '--tilt-perspective': 'Controls perspective distance of the 3D container',
      '--tilt-radius': 'Controls `border-radius` of the content and glare',
    },
  },

  modifiers: [
    {
      modifier: 'data-track-window',
      selector: 'root',
      condition: 'trackWindow prop is set',
    },
    {
      modifier: 'data-glare',
      selector: 'root',
      condition: 'withGlare prop is set',
    },
  ],
};
