import React from 'react';
import { inputDefaultProps, inputStylesApiSelectors, tests } from '@mantine-tests/core';
import { Select, SelectProps, SelectStylesNames } from './Select';

const defaultProps: SelectProps = {
  ...inputDefaultProps,
  data: ['test-1', 'test-2'],
};

describe('@mantine/core/Select', () => {
  tests.axe([
    <Select aria-label="test-label" data={['test-1', 'test-2']} />,
    <Select label="test-label" data={['test-1', 'test-2']} />,
    <Select label="test-label" error data={['test-1', 'test-2']} />,
    <Select label="test-label" error="test-error" id="test" data={['test-1', 'test-2']} />,
    <Select label="test-label" description="test-description" data={['test-1', 'test-2']} />,
  ]);

  tests.itSupportsSystemProps<SelectProps, SelectStylesNames>({
    component: Select,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    size: true,
    variant: true,
    classes: true,
    id: true,
    refType: HTMLInputElement,
    displayName: '@mantine/core/Select',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<SelectProps>({
    component: Select,
    props: defaultProps,
    selector: 'input',
  });
});
