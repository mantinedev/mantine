import React from 'react';
import { mount, shallow } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsRef,
  itSupportsStyle,
  itSupportsStylesApi,
  checkAccessibility,
  itSupportsMargins,
  defaultInputProps,
} from '@mantine/tests';
import { InputWrapper } from '../InputWrapper/InputWrapper';
import { Input } from '../Input/Input';
import { ColorInput } from './ColorInput';
import { Input as InputStylesApi } from '../Input/styles.api';
import { InputWrapper as InputWrapperStylesApi } from '../InputWrapper/styles.api';

describe('@mantine/core/ColorInput', () => {
  beforeAll(() => {
    // JSDom does not implement this and an error was being
    // thrown from jest-axe because of it.
    window.getComputedStyle = jest.fn();
  });

  itSupportsClassName(ColorInput, {});
  itSupportsMargins(ColorInput, {});
  itSupportsStyle(ColorInput, {});
  itSupportsRef(ColorInput, {}, HTMLInputElement);

  itSupportsStylesApi(
    ColorInput,
    defaultInputProps,
    Object.keys({ ...InputStylesApi, ...InputWrapperStylesApi }),
    'ColorInput'
  );

  checkAccessibility([
    mount(<ColorInput label="Color input" />),
    mount(<ColorInput aria-label="Color input" />),
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
