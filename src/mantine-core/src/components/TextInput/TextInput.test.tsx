import React from 'react';
import {
  checkAccessibility,
  itSupportsSystemProps,
  itSupportsFocusEvents,
  itSupportsInputProps,
} from '@mantine/tests';
import { TextInput, TextInputProps } from './TextInput';

const defaultProps: TextInputProps = {};

describe('@mantine/core/Input', () => {
  checkAccessibility([<TextInput label="test-input" />, <TextInput aria-label="test-input" />]);
  itSupportsInputProps(TextInput, defaultProps, 'TextInput');
  itSupportsFocusEvents(TextInput, defaultProps, 'input');
  itSupportsSystemProps({
    component: TextInput,
    props: defaultProps,
    displayName: '@mantine/core/TextInput',
    refType: HTMLInputElement,
    excludeOthers: true,
  });
});
