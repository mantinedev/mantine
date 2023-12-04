import type { SwitchFactory, SwitchGroupFactory } from '@mantine/core';
import type { StylesApiData } from '../types';
import { InputWrapperStylesApi } from './Input.styles-api';

export const SwitchStylesApi: StylesApiData<SwitchFactory> = {
  selectors: {
    root: 'Root element',
    track: 'Switch track, contains `thumb` and `trackLabel`',
    trackLabel: 'Label displayed inside `track`',
    thumb: 'Thumb displayed inside `track`',
    input: 'Input element (`input[type="checkbox"]`), hidden by default',
    body: 'Input body, contains all other elements',
    labelWrapper: 'Contains `label`, `description` and `error`',
    label: 'Label element',
    description: 'Description displayed below the label',
    error: 'Error message displayed below the label',
  },

  vars: {
    root: {
      '--switch-radius': 'Controls `border-radius` of `track` and `thumb`',
      '--switch-height': 'Controls height of `track`',
      '--switch-width': 'Controls min-width of `track`',
      '--switch-thumb-size': 'Controls width and height of `thumb`',
      '--switch-label-font-size': 'Controls `font-size` of `trackLabel`',
      '--switch-track-label-padding': 'Controls `trackLabel` offset',
      '--switch-color': 'Controls track `background-color` when input is checked',
    },
  },

  modifiers: [
    { modifier: 'data-error', selector: 'track', condition: '`error` prop is set' },
    {
      modifier: 'data-label-position',
      selector: ['track', 'root'],
      value: 'value of `labelPosition` prop',
    },
    { modifier: 'data-disabled', selector: 'label', condition: '`disabled` prop is set' },
  ],
};

export const SwitchGroupStylesApi: StylesApiData<SwitchGroupFactory> = {
  selectors: {
    ...InputWrapperStylesApi.selectors,
  },

  vars: {},
};
