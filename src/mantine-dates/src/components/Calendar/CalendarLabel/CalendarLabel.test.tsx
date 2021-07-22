import React from 'react';
import { shallow } from 'enzyme';
import { Text, NativeSelect } from '@mantine/core';
import { CalendarLabel } from './CalendarLabel';

const defaultProps = {
  locale: 'en',
  withSelect: false,
  yearsRange: { from: 2020, to: 2022 },
  value: new Date(2021, 6, 13),
  onChange: () => {},
  labelFormat: 'MMMM YYYY',
  __staticSelector: 'calendar',
  size: 'md' as const,
};

describe('@mantine/dates/CalendarLabel', () => {
  it('renders label with given format', () => {
    const element = shallow(
      <CalendarLabel {...defaultProps} labelFormat="MM/YY" value={new Date(2021, 6, 13)} />
    ).find(Text);

    expect(element.render().text()).toBe('07/21');
  });

  it('sets select inputs value based on month and year from value prop', () => {
    const date = new Date();
    const element = shallow(<CalendarLabel {...defaultProps} value={date} withSelect />);
    expect(element.find(NativeSelect).at(0).prop('value')).toBe(date.getMonth());
    expect(element.find(NativeSelect).at(1).prop('value')).toBe(date.getFullYear());
  });

  it('provides months data to month select element', () => {
    const element = shallow(<CalendarLabel {...defaultProps} withSelect />)
      .find(NativeSelect)
      .at(0);

    expect(element.prop('data')).toEqual([
      { label: 'January', value: '0' },
      { label: 'February', value: '1' },
      { label: 'March', value: '2' },
      { label: 'April', value: '3' },
      { label: 'May', value: '4' },
      { label: 'June', value: '5' },
      { label: 'July', value: '6' },
      { label: 'August', value: '7' },
      { label: 'September', value: '8' },
      { label: 'October', value: '9' },
      { label: 'November', value: '10' },
      { label: 'December', value: '11' },
    ]);
  });

  it('provides years data to year select element based on years range prop', () => {
    const element = shallow(
      <CalendarLabel {...defaultProps} withSelect yearsRange={{ from: 2021, to: 2023 }} />
    )
      .find(NativeSelect)
      .at(1);

    expect(element.prop('data')).toEqual([
      { label: '2021', value: '2021' },
      { label: '2022', value: '2022' },
      { label: '2023', value: '2023' },
    ]);
  });

  it('has correct displayName', () => {
    expect(CalendarLabel.displayName).toEqual('@mantine/dates/CalendarLabel');
  });
});
