import type { InputFactory, InputWrapperFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const InputStylesApi: StylesApiData<InputFactory> = {
  selectors: {
    wrapper: 'Root element of the Input',
    input: 'Input element',
    section: 'Left and right sections',
  },

  vars: {
    wrapper: {
      '--input-fz': '`font-size` of the input element',
      '--input-height':
        '`height` or `min-height` of the input element (depends on `multiline` prop)',
      '--input-left-section-width': '`width` of the left section',
      '--input-right-section-width': '`width` of the right section',
      '--input-margin-bottom':
        '`margin-bottom` of the input element, usually controlled by `Input.Wrapper`',
      '--input-margin-top':
        '`margin-top` of the input element, usually controlled by `Input.Wrapper`',
      '--input-padding-y': '`padding-top` and `padding-bottom` of the input element',
      '--input-radius': '`border-radius` of the input element',
      '--input-left-section-pointer-events': 'Controls `pointer-events` of the left section',
      '--input-right-section-pointer-events': 'Controls `pointer-events` of the right section',
    },
  },

  modifiers: [
    { modifier: 'data-error', selector: ['wrapper', 'input'], condition: '`error` prop is set' },
    { modifier: 'data-disabled', selector: 'input', condition: '`disabled` prop is set' },
    {
      modifier: 'data-with-right-section',
      selector: 'wrapper',
      condition: '`rightSection` prop is set',
    },
    {
      modifier: 'data-with-left-section',
      selector: 'wrapper',
      condition: '`leftSection` prop is set',
    },
    { modifier: 'data-multiline', selector: 'wrapper', condition: '`multiline` prop is set' },
    { modifier: 'data-pointer', selector: 'wrapper', condition: '`pointer` prop is set' },
    { modifier: 'data-position', selector: 'section', value: 'Section position: left or right' },
  ],
};

export const InputWrapperStylesApi: StylesApiData<InputWrapperFactory> = {
  selectors: {
    root: 'Root element',
    label: 'Label element',
    required: 'Required asterisk element, rendered inside label',
    description: 'Description element',
    error: 'Error element',
  },

  vars: {
    label: {
      '--input-label-size': 'Controls label `font-size`',
      '--input-asterisk-color': 'Controls label asterisk text `color`',
    },

    error: {
      '--input-error-size': 'Controls error `font-size`',
    },

    description: {
      '--input-description-size': 'Controls description `font-size`',
    },
  },
};
