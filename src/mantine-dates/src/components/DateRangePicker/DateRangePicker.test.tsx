import React from 'react';
import { shallow } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsRef,
  itSupportsStyle,
  itSupportsStylesApi,
} from '@mantine/tests';
import { DateRangePicker } from './DateRangePicker';
import { DatePickerBase } from '../DatePickerBase/DatePickerBase';
import { RangeCalendar } from '../RangeCalendar/RangeCalendar';
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
  value: [new Date(), new Date()],
  withSelect: true,
};

describe('@mantine/dates/DateRangePicker', () => {
  itSupportsClassName(DateRangePicker, {});
  itSupportsStyle(DateRangePicker, {});
  itSupportsRef(DateRangePicker, {}, HTMLButtonElement, 'elementRef');

  itSupportsStylesApi(
    DateRangePicker,
    defaultProps,
    Object.keys(DatePickerStylesApi).filter(
      (key) =>
        key !== 'invalid' &&
        key !== 'placeholder' &&
        key !== 'inRange' &&
        key !== 'firstInRange' &&
        key !== 'lastInRange'
    ),
    'date-range-picker',
    'without placeholder'
  );

  itSupportsStylesApi(
    DateRangePicker,
    { ...defaultProps, value: null },
    Object.keys(DatePickerStylesApi).filter(
      (key) =>
        key !== 'invalid' &&
        key !== 'selected' &&
        key !== 'inRange' &&
        key !== 'firstInRange' &&
        key !== 'lastInRange'
    ),
    'date-range-picker',
    'with placeholder'
  );

  it('passes correct __staticSelector to Calendar and DatePickerBase components', () => {
    const element = shallow(<DateRangePicker initiallyOpened />);
    expect(element.find(DatePickerBase).prop('__staticSelector')).toBe('date-range-picker');
    expect(element.find(RangeCalendar).prop('__staticSelector')).toBe('date-range-picker');
  });

  it('sets label on DatePickerBase based on inputFormat prop', () => {
    const element = shallow(
      <DateRangePicker value={[new Date(2021, 6, 13), new Date(2021, 7, 13)]} inputFormat="MM/YY" />
    );
    expect(element.find(DatePickerBase).prop('inputLabel')).toBe('07/21 – 08/21');
  });

  it('has correct displayName', () => {
    expect(DateRangePicker.displayName).toEqual('@mantine/dates/DateRangePicker');
  });
});
