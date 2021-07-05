import React from 'react';
import { shallow } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsRef,
  itSupportsStyle,
  itSupportsStylesApi,
} from '@mantine/tests';
import { DatePicker } from './DatePicker';
import { DatePickerBase } from '../DatePickerBase/DatePickerBase';
import { Calendar } from '../Calendar/Calendar';
import { DatePicker as DatePickerStylesApi } from '../DatePickerBase/styles.api';

const defaultProps = {
  icon: '$',
  rightSection: '$',
  label: 'test-label',
  error: 'test-error',
  description: 'test-description',
  required: true,
  initiallyOpened: true,
  placeholder: 'test-placeholder',
  value: new Date(),
  withSelect: true,
};

describe('@mantine/dates/DatePicker', () => {
  itSupportsClassName(DatePicker, {});
  itSupportsStyle(DatePicker, {});
  itSupportsRef(DatePicker, {}, HTMLButtonElement, 'elementRef');

  itSupportsStylesApi(
    DatePicker,
    defaultProps,
    Object.keys(DatePickerStylesApi).filter(
      (key) =>
        key !== 'invalid' &&
        key !== 'placeholder' &&
        key !== 'inRange' &&
        key !== 'firstInRange' &&
        key !== 'lastInRange'
    ),
    'date-picker',
    'without placeholder'
  );

  itSupportsStylesApi(
    DatePicker,
    { ...defaultProps, value: null },
    Object.keys(DatePickerStylesApi).filter(
      (key) =>
        key !== 'invalid' &&
        key !== 'selected' &&
        key !== 'inRange' &&
        key !== 'firstInRange' &&
        key !== 'lastInRange'
    ),
    'date-picker',
    'with placeholder'
  );

  it('passes correct __staticSelector to Calendar and DatePickerBase components', () => {
    const element = shallow(<DatePicker initiallyOpened />);
    expect(element.find(DatePickerBase).prop('__staticSelector')).toBe('date-picker');
    expect(element.find(Calendar).prop('__staticSelector')).toBe('date-picker');
  });

  it('sets label on DatePickerBase based on inputFormat prop', () => {
    const element = shallow(<DatePicker value={new Date(2021, 6, 13)} inputFormat="MM/YY" />);
    expect(element.find(DatePickerBase).prop('inputLabel')).toBe('07/21');
  });

  it('has correct displayName', () => {
    expect(DatePicker.displayName).toEqual('@mantine/dates/DatePicker');
  });
});
