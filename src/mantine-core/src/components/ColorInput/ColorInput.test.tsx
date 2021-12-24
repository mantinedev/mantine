import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import {
  itSupportsClassName,
  itSupportsRef,
  itSupportsStyle,
  checkAccessibility,
  itSupportsMargins,
  itSupportsSx,
} from '@mantine/tests';
import { InputWrapper } from '../InputWrapper';
import { Input } from '../Input';
import { ColorInput } from './ColorInput';

const defaultProps = {};

describe('@mantine/core/ColorInput', () => {
  itSupportsClassName(ColorInput, defaultProps);
  itSupportsMargins(ColorInput, defaultProps);
  itSupportsStyle(ColorInput, defaultProps);
  itSupportsSx(ColorInput, defaultProps);
  itSupportsRef(ColorInput, defaultProps, HTMLInputElement);

  checkAccessibility([
    render(<ColorInput label="Color input" />),
    render(<ColorInput aria-label="Color input" />),
  ]);

  it('passes required, id, label, error and description props to InputWrapper component', () => {
    const element = shallow(
      <ColorInput
        id="test-id"
        required
        label="test-label"
        error="test-error"
        description="test-description"
      />
    );

    expect(element.find(InputWrapper).prop('id')).toBe('test-id');
    expect(element.find(InputWrapper).prop('required')).toBe(true);
    expect(element.find(InputWrapper).prop('label')).toBe('test-label');
    expect(element.find(InputWrapper).prop('error')).toBe('test-error');
    expect(element.find(InputWrapper).prop('description')).toBe('test-description');
  });

  it('passes required, id, type, invalid, icon and radius props to Input component', () => {
    const element = shallow(
      <ColorInput required id="test-id" type="number" error="test-error" icon="$" radius="sm" />
    );

    expect(element.find(Input).prop('id')).toBe('test-id');
    expect(element.find(Input).prop('required')).toBe(true);
    expect(element.find(Input).prop('type')).toBe('number');
    expect(element.find(Input).prop('invalid')).toBe(true);
    expect(element.find(Input).prop('icon')).toBe('$');
    expect(element.find(Input).prop('radius')).toBe('sm');
  });

  it('has correct displayName', () => {
    expect(ColorInput.displayName).toEqual('@mantine/core/ColorInput');
  });
});
