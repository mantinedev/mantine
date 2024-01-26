import React from 'react';
import { inputDefaultProps, inputStylesApiSelectors, tests } from '@mantine-tests/core';
import { __InputStylesNames } from '../Input';
import { TextInput, TextInputProps } from './TextInput';

const defaultProps: TextInputProps = {
  ...inputDefaultProps,
};

describe('@mantine/core/TextInput', () => {
  tests.axe([
    <TextInput aria-label="test-label" />,
    <TextInput label="test-label" />,
    <TextInput label="test-label" error />,
    <TextInput label="test-label" error="test-error" id="test" />,
    <TextInput label="test-label" description="test-description" />,
  ]);

  tests.itSupportsSystemProps<TextInputProps, __InputStylesNames>({
    component: TextInput,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    size: true,
    variant: true,
    classes: true,
    id: true,
    refType: HTMLInputElement,
    displayName: '@mantine/core/TextInput',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<TextInputProps>({
    component: TextInput,
    props: defaultProps,
    selector: 'input',
  });
});
