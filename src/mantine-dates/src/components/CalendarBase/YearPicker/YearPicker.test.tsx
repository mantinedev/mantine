import React from 'react';
import { shallow, mount } from 'enzyme';
import { itSupportsClassName, checkAccessibility } from '@mantine/tests';
import { CalendarHeader } from '../CalendarHeader/CalendarHeader';
import { YearPicker } from './YearPicker';

const defaultProps = { value: 2021, onChange: () => {} };

const CONTROL_SELECTOR = '.mantine-YearPicker-yearPickerControl';
const LEVEL_SELECTOR = '.mantine-YearPicker-calendarHeaderLevel';
const HEADER_CONTROL_SELECTOR = '.mantine-YearPicker-calendarHeaderControl';

describe('@mantine/dates/YearPicker', () => {
  itSupportsClassName(YearPicker, defaultProps);
  checkAccessibility([
    mount(
      <YearPicker {...defaultProps} nextDecadeLabel="Next" previousDecadeLabel="Previous label" />
    ),
  ]);

  it('renders correct amount of controls', () => {
    const notDisabled = shallow(<YearPicker {...defaultProps} />);
    const disabled = shallow(<YearPicker {...defaultProps} minYear={2020} maxYear={2025} />);
    expect(notDisabled.find(CONTROL_SELECTOR)).toHaveLength(12);
    expect(disabled.find(CONTROL_SELECTOR)).toHaveLength(12);
  });

  it('sets CalendarHeader label based on current selected decade', () => {
    const element = shallow(<YearPicker {...defaultProps} value={2031} />);
    expect(element.render().find(LEVEL_SELECTOR).text()).toBe('2029 – 2040');
  });

  it('changes decade when next/previous buttons are clicked', () => {
    const element = shallow(<YearPicker {...defaultProps} value={2031} />);
    const header = element.find(CalendarHeader).dive();
    const nextControl = header.find(HEADER_CONTROL_SELECTOR).at(1);
    const previousControl = header.find(HEADER_CONTROL_SELECTOR).at(0);

    nextControl.simulate('click');
    expect(element.render().find(LEVEL_SELECTOR).text()).toBe('2039 – 2050');

    previousControl.simulate('click');
    expect(element.render().find(LEVEL_SELECTOR).text()).toBe('2029 – 2040');
  });

  it('has correct displayName', () => {
    expect(YearPicker.displayName).toEqual('@mantine/dates/YearPicker');
  });
});
