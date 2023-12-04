import type { SliderFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const SliderStylesApi: StylesApiData<SliderFactory> = {
  selectors: {
    root: 'Root element',
    label: 'Thumb label',
    thumb: 'Thumb element',
    trackContainer: 'Wraps track element',
    track: 'Slider track',
    bar: 'Track filled part',
    markWrapper: 'Contains `mark` and `markLabel` elements',
    mark: 'Mark displayed on track',
    markLabel: 'Label of the associated mark, displayed below track',
  },

  vars: {
    root: {
      '--slider-size': 'Controls track `height`',
      '--slider-color': 'Controls filled track, thumb and marks `background`',
      '--slider-thumb-size': 'Controls thumb `width` and `height`',
      '--slider-radius': 'Controls `border-radius` of track and thumb',
    },
  },

  modifiers: [
    {
      modifier: 'data-disabled',
      selector: ['trackContainer', 'track', 'bar', 'thumb', 'mark'],
      condition: '`disabled` prop is set',
    },
    { modifier: 'data-inverted', selector: ['track', 'bar'], condition: '`inverted` prop is set' },
    { modifier: 'data-dragging', selector: 'thumb', condition: 'slider is being dragged' },
    {
      modifier: 'data-filled',
      selector: 'mark',
      condition: 'mark position is less or equal slider value',
    },
  ],
};
