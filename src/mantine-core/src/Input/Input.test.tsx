import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  checkAccessibility,
  itIsPolymorphic,
  itSupportsSystemProps,
  itSupportsWrapperProps,
  itSupportsInputIcon,
  itSupportsInputRightSection,
  itSupportsProviderVariant,
  itSupportsProviderSize,
  itDisablesInputInsideDisabledFieldset,
} from '@mantine/tests';
import { InputWrapper } from './InputWrapper/InputWrapper';
import { InputDescription } from './InputDescription/InputDescription';
import { InputLabel } from './InputLabel/InputLabel';
import { InputError } from './InputError/InputError';
import { InputPlaceholder } from './InputPlaceholder/InputPlaceholder';
import { Input, InputProps } from './Input';

const defaultProps: InputProps = {};

describe('@mantine/core/Input', () => {
  itIsPolymorphic(Input, defaultProps, '.mantine-Input-input');
  itSupportsWrapperProps(Input, defaultProps);
  itSupportsInputIcon(Input, defaultProps);
  itSupportsInputRightSection(Input, defaultProps);
  itSupportsProviderVariant(Input, defaultProps, 'Input', 'input');
  itSupportsProviderSize(Input, defaultProps, 'Input', 'input');
  checkAccessibility([
    <Input aria-label="test-input" />,
    <Input placeholder="test-input" />,
    <Input placeholder="test-input" error />,
  ]);

  itSupportsSystemProps({
    component: Input,
    props: defaultProps,
    displayName: '@mantine/core/Input',
    refType: HTMLInputElement,
    excludeOthers: true,
  });

  itDisablesInputInsideDisabledFieldset(Input, defaultProps);

  it('handles disabled state', () => {
    render(<Input disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('exposes associated components as static properties', () => {
    expect(Input.Wrapper).toBe(InputWrapper);
    expect(Input.Label).toBe(InputLabel);
    expect(Input.Description).toBe(InputDescription);
    expect(Input.Error).toBe(InputError);
    expect(Input.Placeholder).toBe(InputPlaceholder);
  });
});
