import React from 'react';
import { render } from '@testing-library/react';
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
  itSupportsWrapperProps(ColorInput, defaultProps);
  itSupportsInputProps(ColorInput, defaultProps, 'ColorInput');
  itSupportsSystemProps({
    component: ColorInput,
    props: defaultProps,
    displayName: '@mantine/core/ColorInput',
    refType: HTMLInputElement,
    excludeOthers: true,
  });

  checkAccessibility([
    render(<ColorInput label="Color input" />),
    render(<ColorInput aria-label="Color input" />),
  ]);
});
