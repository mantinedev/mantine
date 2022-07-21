import React from 'react';
import {
  checkAccessibility,
  itSupportsSystemProps,
  itSupportsFocusEvents,
  itSupportsInputProps,
  itIsPolymorphic,
} from '@mantine/tests';
import { InputBase, InputBaseProps } from './InputBase';

const defaultProps: InputBaseProps = {};

describe('@mantine/core/Input', () => {
  checkAccessibility([<InputBase label="test-input" />, <InputBase aria-label="test-input" />]);
  itSupportsInputProps(InputBase, defaultProps, 'InputBase');
  itSupportsFocusEvents(InputBase, defaultProps, 'input');
  itIsPolymorphic(InputBase, defaultProps, '.mantine-InputBase-input');
  itSupportsSystemProps({
    component: InputBase,
    props: defaultProps,
    displayName: '@mantine/core/InputBase',
    refType: HTMLInputElement,
    othersSelector: 'input',
    providerName: 'InputBase',
  });
});
