import type { RadioFactory, RadioGroupFactory } from '@mantine/core';
import type { StylesApiData } from '../types';
import { InputWrapperStylesApi } from './Input.styles-api';

export const RadioStylesApi: StylesApiData<RadioFactory> = {
  selectors: {
    root: 'Root element',
    radio: 'Input element (`input[type="radio"]`)',
    icon: 'Radio icon, used to display checked icon',
    inner: 'Wrapper for `icon` and `input`',
    body: 'Input body, contains all other elements',
    labelWrapper: 'Contains `label`, `description` and `error`',
    label: 'Label element',
    description: 'Description displayed below the label',
    error: 'Error message displayed below the label',
  },

  vars: {
    root: {
      '--radio-color': 'Controls checked radio `background-color`',
      '--radio-radius': 'Controls radio `border-radius`',
      '--radio-size': 'Controls radio `width` and `height`',
    },
  },

  modifiers: [
    { modifier: 'data-error', selector: 'radio', condition: '`error` prop is set' },
    { modifier: 'data-label-position', selector: 'inner', value: 'Value of `labelPosition` prop' },
  ],
};

export const RadioGroupStylesApi: StylesApiData<RadioGroupFactory> = {
  selectors: {
    ...InputWrapperStylesApi.selectors,
  },

  vars: {},
};
