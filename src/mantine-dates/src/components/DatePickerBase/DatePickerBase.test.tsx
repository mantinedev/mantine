import React from 'react';
import { shallow } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsRef,
  itSupportsStyle,
  itSupportsMargins,
} from '@mantine/tests';
import { Input, InputWrapper, Modal } from '@mantine/core';
import { DatePickerBase } from './DatePickerBase';

const defaultProps = {
  icon: '$',
  rightSection: '$',
  label: 'test-label',
  error: 'test-error',
  description: 'test-description',
  required: true,
  placeholder: 'test-placeholder',
  dropdownOpened: true,
  setDropdownOpened: () => {},
  onClear: () => {},
};

describe('@mantine/dates/DatePickerBase', () => {
  itSupportsClassName(DatePickerBase, defaultProps);
  itSupportsStyle(DatePickerBase, defaultProps);
  itSupportsMargins(DatePickerBase, defaultProps);
  itSupportsRef(DatePickerBase, defaultProps, HTMLButtonElement, 'elementRef');

  it('passes __staticSelector prop to InputWrapper and Input components', () => {
    const element = shallow(<DatePickerBase {...defaultProps} __staticSelector="test-selector" />);
    expect(element.find(Input).prop('__staticSelector')).toBe('test-selector');
    expect(element.find(InputWrapper).prop('__staticSelector')).toBe('test-selector');
  });

  it('renders given placeholder if inputLabel is not set', () => {
    const element = shallow(<DatePickerBase {...defaultProps} placeholder="test-placeholder" />);
    expect(element.render().find('.mantine-date-picker-placeholder').text()).toBe(
      'test-placeholder'
    );
  });

  it('does not render placeholder if inputLabel is set', () => {
    const element = shallow(<DatePickerBase {...defaultProps} inputLabel="test-label" />);
    expect(element.render().find('.mantine-date-picker-placeholder')).toHaveLength(0);
    expect(element.find(Input).prop('children')).toBe('test-label');
  });

  it('does not render dropdown if dropdownOpened is set to false', () => {
    const element = shallow(<DatePickerBase {...defaultProps} dropdownOpened={false} />);
    expect(element.render().find('.mantine-date-picker-dropdownWrapper')).toHaveLength(0);
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

  it('has correct displayName', () => {
    expect(DatePickerBase.displayName).toEqual('@mantine/dates/DatePickerBase');
  });
});
