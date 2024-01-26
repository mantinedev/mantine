import React from 'react';
import { inputDefaultProps, inputStylesApiSelectors, tests } from '@mantine-tests/core';
import { MultiSelect, MultiSelectProps, MultiSelectStylesNames } from './MultiSelect';

const defaultProps: MultiSelectProps = {
  ...inputDefaultProps,
  data: ['test-1', 'test-2'],
};

describe('@mantine/core/MultiSelect', () => {
  tests.axe([
    <MultiSelect aria-label="test-label" data={['test-1', 'test-2']} />,
    <MultiSelect label="test-label" data={['test-1', 'test-2']} />,
    <MultiSelect label="test-label" error data={['test-1', 'test-2']} />,
    <MultiSelect label="test-label" error="test-error" id="test" data={['test-1', 'test-2']} />,
    <MultiSelect label="test-label" description="test-description" data={['test-1', 'test-2']} />,
  ]);

  tests.itSupportsSystemProps<MultiSelectProps, MultiSelectStylesNames>({
    component: MultiSelect,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    size: true,
    variant: true,
    classes: true,
    id: true,
    refType: HTMLInputElement,
    displayName: '@mantine/core/MultiSelect',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<MultiSelectProps>({
    component: MultiSelect,
    props: defaultProps,
    selector: 'input',
  });
});
