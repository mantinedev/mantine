import React from 'react';
import { inputDefaultProps, inputStylesApiSelectors, tests } from '@mantine-tests/core';
import { __InputStylesNames } from '../Input';
import { JsonInput, JsonInputProps } from './JsonInput';

const defaultProps: JsonInputProps = {
  ...inputDefaultProps,
};

describe('@mantine/core/JsonInput', () => {
  tests.axe([
    <JsonInput aria-label="test-label" />,
    <JsonInput label="test-label" />,
    <JsonInput label="test-label" error />,
    <JsonInput label="test-label" error="test-error" id="test" />,
    <JsonInput label="test-label" description="test-description" />,
  ]);

  tests.itSupportsSystemProps<JsonInputProps, __InputStylesNames>({
    component: JsonInput,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    size: true,
    variant: true,
    classes: true,
    id: true,
    refType: HTMLTextAreaElement,
    displayName: '@mantine/core/JsonInput',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<JsonInputProps>({
    component: JsonInput,
    props: defaultProps,
    selector: 'textarea',
  });
});
