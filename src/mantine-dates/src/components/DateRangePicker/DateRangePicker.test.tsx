import React from 'react';
import { shallow } from 'enzyme';
import { itSupportsSystemProps } from '@mantine/tests';
import { DateRangePicker, DateRangePickerProps } from './DateRangePicker';
import { DatePickerBase } from '../DatePickerBase/DatePickerBase';
import { RangeCalendar } from '../RangeCalendar/RangeCalendar';

const defaultProps: DateRangePickerProps = {};

describe('@mantine/dates/DateRangePicker', () => {
  itSupportsSystemProps({
    component: DateRangePicker,
    props: defaultProps,
    displayName: '@mantine/dates/DateRangePicker',
    excludeOthers: true,
    refType: HTMLInputElement,
  });

  it('passes correct __staticSelector to Calendar and DatePickerBase components', () => {
    const element = shallow(<DateRangePicker initiallyOpened />);
    expect(element.find(DatePickerBase).prop('__staticSelector')).toBe('DateRangePicker');
    expect(element.find(RangeCalendar).prop('__staticSelector')).toBe('DateRangePicker');
  });

  it('sets label on DatePickerBase based on inputFormat prop', () => {
    const element = shallow(
      <DateRangePicker value={[new Date(2021, 6, 13), new Date(2021, 7, 13)]} inputFormat="MM/YY" />
    );
    expect(element.find(DatePickerBase).prop('inputLabel')).toBe('07/21 – 08/21');
  });
});
