import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import { checkAccessibility, itSupportsSystemProps } from '@mantine/tests';
import { Input, InputWrapper } from '@mantine/core';
import { TimeField } from './TimeField/TimeField';
import { TimeInput, TimeInputProps } from './TimeInput';

const defaultProps: TimeInputProps = {};

describe('@mantine/dates/TimeInput', () => {
  itSupportsSystemProps({
    component: TimeInput,
    props: defaultProps,
    displayName: '@mantine/dates/TimeInput',
    refType: HTMLInputElement,
    excludeOthers: true,
  });

  checkAccessibility([
    render(
      <TimeInput
        label="test-label"
        withSeconds
        hoursLabel="Hours"
        minutesLabel="Minutes"
        secondsLabel="Seconds"
      />
    ),
    render(
      <TimeInput label="test-label" withSeconds={false} hoursLabel="Hours" minutesLabel="Minutes" />
    ),
  ]);

  it('passes correct __staticSelector to Image and InputWrapper components', () => {
    const element = shallow(<TimeInput />);
    expect(element.find(Input).prop('__staticSelector')).toBe('TimeInput');
    expect(element.find(InputWrapper).prop('__staticSelector')).toBe('TimeInput');
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
});
