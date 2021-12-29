import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  checkAccessibility,
  itIsPolymorphic,
  itSupportsSystemProps,
  itSupportsWrapperProps,
  itSupportsInputIcon,
  itSupportsInputRightSection,
} from '@mantine/tests';
import { Input, InputProps } from './Input';

const defaultProps: InputProps<'input'> = {};

describe('@mantine/core/Input', () => {
  itIsPolymorphic(Input, defaultProps, '.mantine-Input-input');
  itSupportsWrapperProps(Input, defaultProps);
  itSupportsInputIcon(Input, defaultProps);
  itSupportsInputRightSection(Input, defaultProps);
  checkAccessibility([
    render(<Input aria-label="test-input" />),
    render(<Input placeholder="test-input" />),
    render(<Input placeholder="test-input" invalid />),
  ]);

  itSupportsSystemProps({
    component: Input,
    props: defaultProps,
    displayName: '@mantine/core/Input',
    refType: HTMLInputElement,
    excludeOthers: true,
  });

  it('handles disabled state', () => {
    render(<Input disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });
});
