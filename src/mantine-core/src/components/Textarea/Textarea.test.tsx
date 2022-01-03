import React from 'react';
import {
  checkAccessibility,
  itSupportsFocusEvents,
  itSupportsSystemProps,
  itSupportsInputProps,
} from '@mantine/tests';
import { Textarea, TextareaProps } from './Textarea';

const defaultProps: TextareaProps = {};

describe('@mantine/core/Textarea', () => {
  itSupportsFocusEvents(Textarea, defaultProps, 'textarea');
  itSupportsInputProps(Textarea, defaultProps, 'Textarea');
  checkAccessibility([<Textarea label="test-label" />, <Textarea aria-label="test-label" />]);
  itSupportsSystemProps({
    component: Textarea,
    props: defaultProps,
    displayName: '@mantine/core/Textarea',
    refType: HTMLTextAreaElement,
    excludeOthers: true,
  });
});
