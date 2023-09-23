import React from 'react';
import { tests, inputDefaultProps, inputStylesApiSelectors } from '@mantine/tests';
import { PasswordInput, PasswordInputProps } from './PasswordInput';
import { __InputStylesNames } from '../Input';

const defaultProps: PasswordInputProps = {
  ...inputDefaultProps,
};

describe('@mantine/core/PasswordInput', () => {
  tests.axe([
    <PasswordInput
      aria-label="test-label"
      visibilityToggleButtonProps={{ 'aria-label': 'test' }}
    />,
    <PasswordInput label="test-label" visibilityToggleButtonProps={{ 'aria-label': 'test' }} />,
    <PasswordInput
      label="test-label"
      visibilityToggleButtonProps={{ 'aria-label': 'test' }}
      error
    />,
    <PasswordInput
      label="test-label"
      visibilityToggleButtonProps={{ 'aria-label': 'test' }}
      error="test-error"
      id="test"
    />,
    <PasswordInput
      label="test-label"
      visibilityToggleButtonProps={{ 'aria-label': 'test' }}
      description="test-description"
    />,
  ]);

  tests.itSupportsSystemProps<PasswordInputProps, __InputStylesNames>({
    component: PasswordInput,
    props: defaultProps,
    styleProps: true,
    extend: true,
    size: true,
    variant: true,
    classes: true,
    id: true,
    refType: HTMLInputElement,
    displayName: '@mantine/core/PasswordInput',
    stylesApiSelectors: [...inputStylesApiSelectors],
    providerStylesApi: false,
  });

  tests.itSupportsInputProps<PasswordInputProps>({
    component: PasswordInput,
    props: defaultProps,
    selector: 'input',
  });
});
