import React from 'react';
import { shallow } from 'enzyme';
import { checkAccessibility, itSupportsSystemProps } from '@mantine/tests';
import { Input, InputWrapper } from '@mantine/core';
import { TimeField } from '../TimeInputBase/TimeField/TimeField';
import { TimeRangeInput } from './TimeRangeInput';

const defaultProps = {};

describe('@mantine/dates/TimeRangeInput', () => {
  itSupportsSystemProps({
    component: TimeRangeInput,
    props: defaultProps,
    displayName: '@mantine/dates/TimeRangeInput',
    refType: HTMLInputElement,
    excludeOthers: true,
  });

  checkAccessibility([
    <TimeRangeInput
      label="test-label"
      withSeconds
      hoursLabel="Hours"
      minutesLabel="Minutes"
      secondsLabel="Seconds"
    />,
    <TimeRangeInput
      label="test-label"
      withSeconds={false}
      hoursLabel="Hours"
      minutesLabel="Minutes"
    />,
  ]);

  it('passes correct __staticSelector to Calendar and DatePickerBase components', () => {
    const element = shallow(<TimeRangeInput />);
    expect(element.find(Input).prop('__staticSelector')).toBe('TimeRangeInput');
    expect(element.find(InputWrapper).prop('__staticSelector')).toBe('TimeRangeInput');
  });

  it('passes required, id, label, error and description props to InputWrapper component', () => {
    const element = shallow(
      <TimeRangeInput
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
    const element = shallow(<TimeRangeInput required error="test-error" icon="$" radius="sm" />);

    expect(element.find(Input).prop('required')).toBe(true);
    expect(element.find(Input).prop('invalid')).toBe(true);
    expect(element.find(Input).prop('icon')).toBe('$');
    expect(element.find(Input).prop('radius')).toBe('sm');
  });

  it('sets given id to first TimeField', () => {
    const element = shallow(<TimeRangeInput id="test-id" />);
    expect(element.find(TimeField).at(0).prop('id')).toBe('test-id');
  });

  it('renders hidden input with given name', () => {
    const value = [new Date(), new Date()];
    const element = shallow(<TimeRangeInput value={[value[0], value[1]]} name="test-name" />);
    expect(element.find('input[type="hidden"]').length).toBe(2);
    expect(element.find('input[type="hidden"]').at(0).prop('value')).toBe(value[0].toISOString());
    expect(element.find('input[type="hidden"]').at(1).prop('value')).toBe(value[1].toISOString());
  });

  it('renders correct amount of TimeField components based on withSeconds prop', () => {
    const withSeconds = shallow(<TimeRangeInput withSeconds />);
    const withoutSeconds = shallow(<TimeRangeInput withSeconds={false} />);

    expect(withSeconds.find(TimeField)).toHaveLength(6);
    expect(withoutSeconds.find(TimeField)).toHaveLength(4);
  });
});
