import React from 'react';
import {
  itSupportsSystemProps,
  itSupportsInputProps,
  itSupportsFocusEvents,
  checkAccessibility,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@mantine/tests';
import { JsonInput, JsonInputProps } from './JsonInput';

const defaultProps: JsonInputProps = {
  label: 'test-label',
};

describe('@mantine/core/JsonInput', () => {
  checkAccessibility([<JsonInput {...defaultProps} />]);
  itSupportsFocusEvents(JsonInput, defaultProps, 'textarea');
  itSupportsInputProps(JsonInput, defaultProps, 'JsonInput');
  itSupportsProviderVariant(JsonInput, defaultProps, 'JsonInput', ['root', 'input', 'label']);
  itSupportsProviderSize(JsonInput, defaultProps, 'JsonInput', ['root', 'input', 'label']);
  itSupportsSystemProps({
    component: JsonInput,
    props: defaultProps,
    displayName: '@mantine/core/JsonInput',
    refType: HTMLTextAreaElement,
    excludeOthers: true,
  });
});
