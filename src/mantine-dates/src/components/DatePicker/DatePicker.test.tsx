import React from 'react';
import { shallow } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsRef,
  itSupportsStyle,
  itSupportsMargins,
} from '@mantine/tests';
import { DatePicker } from './DatePicker';
import { DatePickerBase } from '../DatePickerBase/DatePickerBase';
import { Calendar } from '../Calendar/Calendar';

describe('@mantine/dates/DatePicker', () => {
  itSupportsClassName(DatePicker, {});
  itSupportsStyle(DatePicker, {});
  itSupportsMargins(DatePicker, {});
  itSupportsRef(DatePicker, {}, HTMLButtonElement, 'elementRef');

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
