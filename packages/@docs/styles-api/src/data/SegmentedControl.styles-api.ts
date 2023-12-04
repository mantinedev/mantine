import type { SegmentedControlFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const SegmentedControlStylesApi: StylesApiData<SegmentedControlFactory> = {
  selectors: {
    root: 'Root element',
    control: 'Wrapper element for input and label',
    input: 'Input element (`input[type="radio"]`), hidden by default',
    label: 'Label element associated with input',
    indicator: 'Floating indicator that moves between items',
  },

  vars: {
    root: {
      '--sc-color': 'Control `background-color` of `indicator`',
      '--sc-font-size': 'Controls `font-size` of labels',
      '--sc-padding': 'Controls `padding` of control',
      '--sc-radius': 'Controls `border-radius` of `indicator` and `root` elements',
      '--sc-shadow': 'Controls `box-shadow` of indicator',
      '--sc-transition-duration':
        'Controls `transition-duration` of various elements that have animations',
      '--sc-transition-timing-function':
        'Controls `transition-timing-function` of various elements that have animations',
    },
  },

  modifiers: [
    { modifier: 'data-full-width', selector: 'root', condition: '`fullWidth` prop is set' },
    { modifier: 'data-orientation', selector: 'control', value: 'Value of `orientation` prop' },
    {
      modifier: 'data-active',
      selector: ['label', 'control'],
      condition: 'Associated input is checked',
    },
    { modifier: 'data-disabled', selector: 'label', condition: 'Associated input is disabled' },
  ],
};
