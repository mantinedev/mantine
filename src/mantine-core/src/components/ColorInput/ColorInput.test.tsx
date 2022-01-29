import React from 'react';
import {
  checkAccessibility,
  itSupportsSystemProps,
  itSupportsWrapperProps,
  itSupportsInputProps,
} from '@mantine/tests';
import { ColorInput, ColorInputProps } from './ColorInput';

const defaultProps: ColorInputProps = {
  label: 'test-label',
};

describe('@mantine/core/ColorInput', () => {
  checkAccessibility([<ColorInput label="Color input" />, <ColorInput aria-label="Color input" />]);
  itSupportsWrapperProps(ColorInput, defaultProps);
  itSupportsInputProps(ColorInput, defaultProps, 'ColorInput');
  itSupportsSystemProps({
    component: ColorInput,
    props: defaultProps,
    displayName: '@mantine/core/ColorInput',
    refType: HTMLInputElement,
    excludeOthers: true,
  });
});
