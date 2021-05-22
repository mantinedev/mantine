import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  checkAccessibility,
  itSupportsClassName,
  itSupportsStyle,
  itSupportsRef,
} from '@mantine/tests';
import { Input } from '../Input/Input';
import { TextInput } from '../TextInput/TextInput';
import { ActionIcon } from '../ActionIcon/ActionIcon';
import { PasswordInput } from './PasswordInput';

// retrieves Input component from nested TextInput component
const getInput = (element: any) => element.find(TextInput).dive().find(Input);

// retrieves ActionIcon node from nested TextInput and Input components
const getActionIcon = (element: any) => getInput(element).dive().find(ActionIcon);

describe('@mantine/core/PasswordInput', () => {
  checkAccessibility([
    mount(<PasswordInput label="test" showPasswordLabel="Hide" hidePasswordLabel="Show" />),
  ]);

  itSupportsClassName(PasswordInput, {});
  itSupportsStyle(PasswordInput, {});
  itSupportsRef(PasswordInput, {}, HTMLInputElement, 'elementRef');

  it('has correct displayName', () => {
    expect(PasswordInput.displayName).toEqual('@mantine/core/PasswordInput');
  });

  it('sets input type based on password visibility state', () => {
    const element = shallow(
      <PasswordInput hidePasswordLabel="test-hide" showPasswordLabel="test-show" />
    );
    expect(getInput(element).prop('type')).toBe('password');
    getActionIcon(element).simulate('click');
    expect(getInput(element).prop('type')).toBe('text');
  });

  it('sets correct title and aria-label attributes on hide/show button based on state', () => {
    const element = shallow(
      <PasswordInput hidePasswordLabel="test-hide" showPasswordLabel="test-show" />
    );

    expect(getActionIcon(element).prop('title')).toBe('test-show');
    expect(getActionIcon(element).prop('aria-label')).toBe('test-show');

    getActionIcon(element).simulate('click');

    expect(getActionIcon(element).prop('title')).toBe('test-hide');
    expect(getActionIcon(element).prop('aria-label')).toBe('test-hide');
  });
});
