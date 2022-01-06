import React from 'react';
import { shallow } from 'enzyme';
import { itSupportsSystemProps, itSupportsInputProps, itSupportsFocusEvents } from '@mantine/tests';
import { Input, InputWrapper, Modal } from '@mantine/core';
import { DatePickerBase, DatePickerBaseProps } from './DatePickerBase';

const defaultProps: DatePickerBaseProps = {
  label: 'test-label',
  placeholder: 'test-placeholder',
  dropdownOpened: true,
  setDropdownOpened: () => {},
  onClear: () => {},
  transitionDuration: 0,
};

describe('@mantine/dates/DatePickerBase', () => {
  itSupportsInputProps(DatePickerBase, defaultProps, 'DatePickerBase');
  itSupportsFocusEvents(DatePickerBase, defaultProps, 'input');
  itSupportsSystemProps({
    component: DatePickerBase,
    props: defaultProps,
    displayName: '@mantine/dates/DatePickerBase',
    excludeOthers: true,
    refType: HTMLInputElement,
  });

  it('passes __staticSelector prop to InputWrapper and Input components', () => {
    const element = shallow(<DatePickerBase {...defaultProps} __staticSelector="test-selector" />);
    expect(element.find(Input).prop('__staticSelector')).toBe('test-selector');
    expect(element.find(InputWrapper).prop('__staticSelector')).toBe('test-selector');
  });

  it('passes required, id, label, error and description props to InputWrapper component', () => {
    const element = shallow(
      <DatePickerBase
        {...defaultProps}
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
      <DatePickerBase
        {...defaultProps}
        required
        id="test-id"
        error="test-error"
        icon="$"
        radius="sm"
      />
    );

    expect(element.find(Input).prop('id')).toBe('test-id');
    expect(element.find(Input).prop('required')).toBe(true);
    expect(element.find(Input).prop('invalid')).toBe(true);
    expect(element.find(Input).prop('icon')).toBe('$');
    expect(element.find(Input).prop('radius')).toBe('sm');
  });

  it('renters modal instead of popover when dropdownType is set to modal', () => {
    const modal = shallow(<DatePickerBase {...defaultProps} dropdownType="modal" />);
    const popover = shallow(<DatePickerBase {...defaultProps} dropdownType="popover" />);
    expect(modal.find(Modal)).toHaveLength(1);
    expect(popover.find(Modal)).toHaveLength(0);
  });
});
