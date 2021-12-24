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
import { InputWrapper } from '../InputWrapper/InputWrapper';
import { Input } from '../Input/Input';
import { TextInput } from './TextInput';

const defaultProps = {};

describe('@mantine/core/Input', () => {
  checkAccessibility([
    render(<TextInput label="test-input" />),
    render(<TextInput aria-label="test-input" />),
  ]);

  itSupportsClassName(TextInput, defaultProps);
  itSupportsSx(TextInput, defaultProps);
  itSupportsMargins(TextInput, defaultProps);
  itSupportsRef(TextInput, defaultProps, HTMLInputElement);
  itSupportsStyle(TextInput, defaultProps);

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

  it('has correct displayName', () => {
    expect(TextInput.displayName).toEqual('@mantine/core/TextInput');
  });
});
