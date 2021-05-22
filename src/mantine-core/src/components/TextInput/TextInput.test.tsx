import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsRef,
  itSupportsStyle,
  checkAccessibility,
} from '@mantine/tests';
import { InputWrapper } from '../InputWrapper/InputWrapper';
import { Input } from '../Input/Input';
import { TextInput } from './TextInput';

describe('@mantine/core/Input', () => {
  beforeAll(() => {
    // JSDom does not implement this and an error was being
    // thrown from jest-axe because of it.
    window.getComputedStyle = jest.fn();
  });

  checkAccessibility([
    mount(<TextInput label="test-input" />),
    mount(<TextInput aria-label="test-input" />),
  ]);

  itSupportsClassName(TextInput, {});
  itSupportsRef(TextInput, {}, HTMLInputElement, 'elementRef');
  itSupportsStyle(TextInput, {});

  it('has correct displayName', () => {
    expect(TextInput.displayName).toEqual('@mantine/core/TextInput');
  });

  it('passes wrapperProps to InputWrapper', () => {
    const element = shallow(<TextInput wrapperProps={{ 'aria-label': 'test' }} />);
    expect(element.render().attr('aria-label')).toBe('test');
  });

  it('passes required, id, label, error and description props to InputWrapper component', () => {
    const element = shallow(
      <TextInput
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
      <TextInput required id="test-id" type="number" error="test-error" icon="$" radius="sm" />
    );

    expect(element.find(Input).prop('id')).toBe('test-id');
    expect(element.find(Input).prop('required')).toBe(true);
    expect(element.find(Input).prop('type')).toBe('number');
    expect(element.find(Input).prop('invalid')).toBe(true);
    expect(element.find(Input).prop('icon')).toBe('$');
    expect(element.find(Input).prop('radius')).toBe('sm');
  });
});
