import type { CarouselFactory } from '@mantine/carousel';
import type { StylesApiData } from '../types';

export const CarouselStylesApi: StylesApiData<CarouselFactory> = {
  selectors: {
    root: 'Root element',
    slide: '`Carousel.Slide` root element',
    container: 'Slides container',
    viewport: 'Main element, contains slides container and all controls',
    controls: 'Next/previous controls container',
    control: 'Next/previous control',
    indicators: 'Indicators container',
    indicator: 'Indicator button',
  },

  vars: {
    root: {
      '--carousel-control-size': 'Controls `width` and `height` of the next/previous buttons',
      '--carousel-controls-offset': 'Controls offsets of the next/previous buttons',
      '--carousel-height': 'Controls height of the carousel',
    },
  },

  modifiers: [
    { modifier: 'data-orientation', selector: 'root', value: 'Value of `orientation` prop' },
    {
      modifier: 'data-include-gap-in-size',
      selector: 'root',
      condition: '`includeGapInSize` prop is set',
    },
    {
      modifier: 'data-inactive',
      selector: 'control',
      condition: 'No previous/next slides are available',
    },
    { modifier: 'data-active', selector: 'indicator', condition: 'Associated slide is active' },
  ],
};
