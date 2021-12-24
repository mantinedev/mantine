import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import {
  checkAccessibility,
  itSupportsClassName,
  itSupportsStyle,
  itSupportsRef,
  itSupportsStylesApi,
  itSupportsMargins,
  defaultInputProps,
  getInputStylesApiKeys,
  itSupportsSx,
} from '@mantine/tests';
import { Input } from '../Input/Input';
import { ActionIcon } from '../ActionIcon';
import { PasswordInput } from './PasswordInput';
import { Input as InputStylesApi } from '../Input/styles.api';
import { InputWrapper as InputWrapperStylesApi } from '../InputWrapper/styles.api';

// retrieves Input component from nested TextInput component
const getInput = (element: any) => element.find(Input);

// retrieves ActionIcon node from nested TextInput and Input components
const getActionIcon = (element: any) => getInput(element).dive().find(ActionIcon);

const defaultProps = {};

describe('@mantine/core/PasswordInput', () => {
  checkAccessibility([render(<PasswordInput label="test" />)]);
  itSupportsClassName(PasswordInput, defaultProps);
  itSupportsStyle(PasswordInput, defaultProps);
  itSupportsMargins(PasswordInput, defaultProps);
  itSupportsSx(PasswordInput, defaultProps);
  itSupportsRef(PasswordInput, defaultProps, HTMLInputElement);

  itSupportsStylesApi(
    PasswordInput,
    defaultInputProps,
    getInputStylesApiKeys(Object.keys({ ...InputStylesApi, ...InputWrapperStylesApi })),
    'PasswordInput'
  );

  it('sets input type based on password visibility state', () => {
    const element = shallow(<PasswordInput />);
    expect(getInput(element).find('input').prop('type')).toBe('password');
    getActionIcon(element).simulate('mousedown', { preventDefault: jest.fn() });
    expect(getInput(element).find('input').prop('type')).toBe('text');
  });

  it('sets toggle button tabIndex based on toggleTabIndex prop', () => {
    const focusable = shallow(<PasswordInput toggleTabIndex={0} />);
    const notFocusable = shallow(<PasswordInput toggleTabIndex={-1} />);

    expect(getActionIcon(focusable).prop('tabIndex')).toBe(0);
    expect(getActionIcon(notFocusable).prop('tabIndex')).toBe(-1);
  });

  it('has correct displayName', () => {
    expect(PasswordInput.displayName).toEqual('@mantine/core/PasswordInput');
  });
});
