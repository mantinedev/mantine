import React from 'react';
import { shallow } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsRef,
  itSupportsStyle,
  itSupportsMargins,
} from '@mantine/tests';
import { DateRangePicker } from './DateRangePicker';
import { DatePickerBase } from '../DatePickerBase/DatePickerBase';
import { RangeCalendar } from '../RangeCalendar/RangeCalendar';

describe('@mantine/dates/DateRangePicker', () => {
  itSupportsClassName(DateRangePicker, {});
  itSupportsStyle(DateRangePicker, {});
  itSupportsMargins(DateRangePicker, {});
  itSupportsRef(DateRangePicker, {}, HTMLButtonElement, 'elementRef');

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
