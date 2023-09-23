import React from 'react';
import { tests, inputDefaultProps, inputStylesApiSelectors } from '@mantine/tests';
import { InputBase, InputBaseProps } from './InputBase';
import { __InputStylesNames } from '../Input';

const defaultProps: InputBaseProps = {
  ...inputDefaultProps,
};

describe('@mantine/core/InputBase', () => {
  tests.axe([
    <InputBase aria-label="test-label" />,
    <InputBase label="test-label" />,
    <InputBase label="test-label" error />,
    <InputBase label="test-label" error="test-error" id="test" />,
    <InputBase label="test-label" description="test-description" />,
  ]);

  tests.itSupportsSystemProps<InputBaseProps, __InputStylesNames>({
    component: InputBase,
    props: defaultProps,
    polymorphic: true,
    styleProps: true,
    extend: true,
    size: true,
    variant: true,
    classes: true,
    id: true,
    refType: HTMLInputElement,
    displayName: '@mantine/core/InputBase',
    stylesApiSelectors: [...inputStylesApiSelectors],
    polymorphicSelector: '.mantine-InputBase-input',
  });

  tests.itSupportsInputProps<InputBaseProps>({
    component: InputBase,
    props: defaultProps,
    selector: 'input',
  });
});
