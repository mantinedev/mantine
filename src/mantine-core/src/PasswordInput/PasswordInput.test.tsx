import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  checkAccessibility,
  itSupportsClassName,
  itSupportsStyle,
  itSupportsRef,
} from '@mantine/tests';
import { Input } from '../Input/Input';
import { ActionIcon } from '../ActionIcon/ActionIcon';
import { InputWrapper } from '../InputWrapper/InputWrapper';
import { PasswordInput } from './PasswordInput';

describe('@mantine/core/PasswordInput', () => {
  checkAccessibility([
    mount(<PasswordInput label="test" showPasswordLabel="Hide" hidePasswordLabel="Show" />),
  ]);

  itSupportsClassName(PasswordInput, {});
  itSupportsStyle(PasswordInput, {});
  itSupportsRef(PasswordInput, {}, HTMLInputElement);

  it('has correct displayName', () => {
    expect(PasswordInput.displayName).toEqual('@mantine/core/PasswordInput');
  });

  it('sets input type based on password visibility state', () => {
    const element = shallow(
      <PasswordInput hidePasswordLabel="test-hide" showPasswordLabel="test-show" />
    );
    expect(element.find(Input).prop('type')).toBe('password');
    element.find(ActionIcon).simulate('click');
    expect(element.find(Input).prop('type')).toBe('text');
  });

  it('sets correct title and aria-label attributes on hide/show button based on state', () => {
    const element = shallow(
      <PasswordInput hidePasswordLabel="test-hide" showPasswordLabel="test-show" />
    );
    expect(element.find(ActionIcon).prop('title')).toBe('test-show');
    expect(element.find(ActionIcon).prop('aria-label')).toBe('test-show');
    element.find(ActionIcon).simulate('click');
    expect(element.find(ActionIcon).prop('title')).toBe('test-hide');
    expect(element.find(ActionIcon).prop('aria-label')).toBe('test-hide');
  });

  it('passes required, inputStyle, inputClassName, id, invalid, icon and radius props to Input component', () => {
    const element = shallow(
      <PasswordInput
        required
        id="test-id"
        error="test-error"
        icon="$"
        radius="sm"
        inputStyle={{ border: '1px solid red' }}
        inputClassName="test-input-class"
      />
    );

    expect(element.find(Input).prop('id')).toBe('test-id');
    expect(element.find(Input).prop('required')).toBe(true);
    expect(element.find(Input).prop('invalid')).toBe(true);
    expect(element.find(Input).prop('icon')).toBe('$');
    expect(element.find(Input).prop('radius')).toBe('sm');
    expect(element.find(Input).prop('style')).toEqual({ border: '1px solid red' });
    expect(element.render().find('input').hasClass('test-input-class')).toBe(true);
  });

  it('passes required, id, label, error and description props to InputWrapper component', () => {
    const element = shallow(
      <PasswordInput
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

  it('passes wrapperProps to InputWrapper', () => {
    const element = shallow(<PasswordInput wrapperProps={{ 'aria-label': 'test' }} />);
    expect(element.render().attr('aria-label')).toBe('test');
  });
});
