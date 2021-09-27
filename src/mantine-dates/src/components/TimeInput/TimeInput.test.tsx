import React from 'react';
import { mount, shallow } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsStyle,
  itSupportsRef,
  itSupportsStylesApi,
  checkAccessibility,
  itSupportsMargins,
} from '@mantine/tests';
import { Input, InputWrapper } from '@mantine/core';
import { TimeField } from './TimeField/TimeField';
import { TimeInput } from './TimeInput';
import { TimeInput as TimeInputStylesApi } from './styles.api';

describe('@mantine/dates/TimeInput', () => {
  itSupportsClassName(TimeInput, {});
  itSupportsStyle(TimeInput, {});
  itSupportsMargins(TimeInput, {});
  itSupportsRef(TimeInput, {}, HTMLInputElement, 'elementRef');

  checkAccessibility([
    mount(
      <TimeInput
        label="test-label"
        withSeconds
        hoursLabel="Hours"
        minutesLabel="Minutes"
        secondsLabel="Seconds"
      />
    ),
    mount(
      <TimeInput label="test-label" withSeconds={false} hoursLabel="Hours" minutesLabel="Minutes" />
    ),
  ]);

  itSupportsStylesApi(
    TimeInput,
    {
      icon: '$',
      rightSection: '$',
      label: 'test-label',
      error: 'test-error',
      description: 'test-description',
      required: true,
      disabled: true,
    },
    Object.keys(TimeInputStylesApi).filter((key) => key !== 'invalid'),
    'time-input'
  );

  it('passes correct __staticSelector to Calendar and DatePickerBase components', () => {
    const element = shallow(<TimeInput />);
    expect(element.find(Input).prop('__staticSelector')).toBe('time-input');
    expect(element.find(InputWrapper).prop('__staticSelector')).toBe('time-input');
  });

  it('passes required, id, label, error and description props to InputWrapper component', () => {
    const element = shallow(
      <TimeInput
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

  it('passes required, type, invalid, icon and radius props to Input component', () => {
    const element = shallow(<TimeInput required error="test-error" icon="$" radius="sm" />);

    expect(element.find(Input).prop('required')).toBe(true);
    expect(element.find(Input).prop('invalid')).toBe(true);
    expect(element.find(Input).prop('icon')).toBe('$');
    expect(element.find(Input).prop('radius')).toBe('sm');
  });

  it('sets given id to first TimeField', () => {
    const element = shallow(<TimeInput id="test-id" />);
    expect(element.find(TimeField).at(0).prop('id')).toBe('test-id');
  });

  it('renders hidden input with given name', () => {
    const value = new Date();
    const element = shallow(<TimeInput value={value} name="test-name" />);
    expect(element.find('input[type="hidden"]').prop('value')).toBe(value.toISOString());
  });

  it('renders correct amount of TimeField components based on withSeconds prop', () => {
    const withSeconds = shallow(<TimeInput withSeconds />);
    const withoutSeconds = shallow(<TimeInput withSeconds={false} />);

    expect(withSeconds.find(TimeField)).toHaveLength(3);
    expect(withoutSeconds.find(TimeField)).toHaveLength(2);
  });

  it('has correct displayName', () => {
    expect(TimeInput.displayName).toEqual('@mantine/dates/TimeInput');
  });
});
