import type {
  CheckboxCardFactory,
  CheckboxFactory,
  CheckboxGroupFactory,
  CheckboxIndicatorFactory,
} from '@mantine/core';
import type { StylesApiData } from '../types';
import { InputWrapperStylesApi } from './Input.styles-api';

export const CheckboxStylesApi: StylesApiData<CheckboxFactory> = {
  selectors: {
    root: 'Root element',
    input: 'Input element (`input[type="checkbox"]`)',
    icon: 'Checkbox icon, used to display checkmark and indeterminate state icon',
    inner: 'Wrapper for `icon` and `input`',
    body: 'Input body, contains all other elements',
    labelWrapper: 'Contains `label`, `description` and `error`',
    label: 'Label element',
    description: 'Description displayed below the label',
    error: 'Error message displayed below the label',
  },

  vars: {
    root: {
      '--checkbox-color': 'Controls checked checkbox `background-color`',
      '--checkbox-radius': 'Controls checkbox `border-radius`',
      '--checkbox-size': 'Controls checkbox `width` and `height`',
      '--checkbox-icon-color': 'Controls checkbox icon `color`',
    },
  },

  modifiers: [
    { modifier: 'data-checked', selector: 'root', condition: '`checked` prop is set' },
    { modifier: 'data-error', selector: 'input', condition: '`error` prop is set' },
    { modifier: 'data-indeterminate', selector: 'input', condition: '`indeterminate` prop is set' },
    { modifier: 'data-label-position', selector: 'inner', value: 'Value of `labelPosition` prop' },
  ],
};

export const CheckboxGroupStylesApi: StylesApiData<CheckboxGroupFactory> = {
  selectors: {
    ...InputWrapperStylesApi.selectors,
  },

  vars: {},
};

export const CheckboxIndicatorStylesApi: StylesApiData<CheckboxIndicatorFactory> = {
  selectors: {
    indicator: 'Root element',
    icon: 'Checkbox icon',
  },

  vars: {
    indicator: CheckboxStylesApi.vars.root,
  },

  modifiers: [
    { modifier: 'data-checked', selector: 'indicator', condition: '`checked` prop is set' },
    { modifier: 'data-disabled', selector: 'indicator', condition: '`disabled` prop is set' },
  ],
};

export const CheckboxCardStylesApi: StylesApiData<CheckboxCardFactory> = {
  selectors: {
    card: 'Root element',
  },

  vars: {
    card: {
      '--card-radius': 'Controls card `border-radius`',
    },
  },

  modifiers: [
    { modifier: 'data-checked', selector: 'card', condition: '`checked` prop is set' },
    { modifier: 'data-with-border', selector: 'card', condition: '`withBorder` prop is set' },
  ],
};
