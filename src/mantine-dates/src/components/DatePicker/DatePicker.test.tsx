import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import { checkAccessibility, itSupportsSystemProps } from '@mantine/tests';
import { DatePicker, DatePickerProps } from './DatePicker';
import { DatePickerBase } from '../DatePickerBase/DatePickerBase';
import { Calendar } from '../Calendar/Calendar';

const defaultProps: DatePickerProps = {};

describe('@mantine/dates/DatePicker', () => {
  checkAccessibility([render(<DatePicker label="date picker" />)]);

  itSupportsSystemProps({
    component: DatePicker,
    props: defaultProps,
    displayName: '@mantine/dates/DatePicker',
    refType: HTMLInputElement,
    excludeOthers: true,
  });

  it('passes correct __staticSelector to Calendar and DatePickerBase components', () => {
    const element = shallow(<DatePicker initiallyOpened />);
    expect(element.find(DatePickerBase).prop('__staticSelector')).toBe('DatePicker');
    expect(element.find(Calendar).prop('__staticSelector')).toBe('DatePicker');
  });

  it('sets label on DatePickerBase based on inputFormat prop', () => {
    const element = shallow(<DatePicker value={new Date(2021, 6, 13)} inputFormat="MM/YY" />);
    expect(element.find(DatePickerBase).prop('inputLabel')).toBe('07/21');
  });
});
