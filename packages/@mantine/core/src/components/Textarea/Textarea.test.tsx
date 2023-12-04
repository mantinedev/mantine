import React from 'react';
import { tests, inputDefaultProps, inputStylesApiSelectors } from '@mantine-tests/core';
import { Textarea, TextareaProps } from './Textarea';
import { __InputStylesNames } from '../Input';

const defaultProps: TextareaProps = {
  ...inputDefaultProps,
};

describe('@mantine/core/Textarea', () => {
  tests.axe([
    <Textarea aria-label="test-label" />,
    <Textarea label="test-label" />,
    <Textarea label="test-label" error />,
    <Textarea label="test-label" error="test-error" id="test" />,
    <Textarea label="test-label" description="test-description" />,
  ]);

  tests.itSupportsSystemProps<TextareaProps, __InputStylesNames>({
    component: Textarea,
    props: defaultProps,
    styleProps: true,
    extend: true,
    size: true,
    variant: true,
    classes: true,
    id: true,
    refType: HTMLTextAreaElement,
    displayName: '@mantine/core/Textarea',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<TextareaProps>({
    component: Textarea,
    props: defaultProps,
    selector: 'textarea',
  });
});
