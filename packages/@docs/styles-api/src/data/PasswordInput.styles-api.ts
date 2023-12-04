import type { PasswordInputFactory } from '@mantine/core';
import type { StylesApiData } from '../types';
import { InputStylesApi, InputWrapperStylesApi } from './Input.styles-api';

export const PasswordInputStylesApi: StylesApiData<PasswordInputFactory> = {
  selectors: {
    ...InputStylesApi.selectors,
    ...InputWrapperStylesApi.selectors,
    innerInput: 'Actual input element',
    visibilityToggle: 'Visibility toggle button',
  },

  vars: {
    root: {
      '--psi-button-size': 'Controls visibility toggle button `width` and `height`',
      '--psi-icon-size': 'Controls visibility toggle icon `width` and `height`',
    },
  },
};
