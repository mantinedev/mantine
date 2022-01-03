import React from 'react';
import { shallow } from 'enzyme';
import { itSupportsClassName, checkAccessibility } from '@mantine/tests';
import { CalendarHeader } from '../CalendarHeader/CalendarHeader';
import { YearPicker } from './YearPicker';

const defaultProps = { value: 2021, onChange: () => {} };

const CONTROL_SELECTOR = '.mantine-YearPicker-yearPickerControl';
const ACTIVE_CONTROL_SELECTOR = '.mantine-YearPicker-yearPickerControlActive';
const LEVEL_SELECTOR = '.mantine-YearPicker-calendarHeaderLevel';
const HEADER_CONTROL_SELECTOR = '.mantine-YearPicker-calendarHeaderControl';

describe('@mantine/dates/YearPicker', () => {
  itSupportsClassName(YearPicker, defaultProps);
  checkAccessibility([
    <YearPicker {...defaultProps} nextDecadeLabel="Next" previousDecadeLabel="Previous label" />,
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

  it('sets disabled prop on year controls that are out of range', () => {
    const element = shallow(<YearPicker {...defaultProps} minYear={2021} maxYear={2024} />);
    expect(element.find(CONTROL_SELECTOR).at(0).prop('disabled')).toBe(true);
    expect(element.find(CONTROL_SELECTOR).at(3).prop('disabled')).toBe(false);
    expect(element.find(CONTROL_SELECTOR).at(11).prop('disabled')).toBe(true);
  });

  it('adds active styles to selected year', () => {
    const element = shallow(<YearPicker {...defaultProps} value={2021} />);
    expect(element.find(ACTIVE_CONTROL_SELECTOR).text()).toBe('2021');
  });

  it('calls onChange when year control button is clicked', () => {
    const spy = jest.fn();
    const element = shallow(<YearPicker {...defaultProps} onChange={spy} />);
    element.find(CONTROL_SELECTOR).at(0).simulate('click');
    expect(spy).toHaveBeenCalledWith(2019);
  });

  it('passes __staticSelector, classNames and styles to CalendarHeader', () => {
    const element = shallow(
      <YearPicker
        {...defaultProps}
        __staticSelector="Test"
        classNames={{ calendarHeader: 'test-header' }}
        styles={{ calendarHeaderControl: { background: 'red' } }}
      />
    );

    const props = element.find(CalendarHeader).props();
    expect(props.__staticSelector).toBe('Test');
    expect(props.styles).toEqual({ calendarHeaderControl: { background: 'red' } });
    expect(props.classNames).toEqual({ calendarHeader: 'test-header' });
  });

  it('sets hasNext/hasPrevious CalendarHeader props based on maxYear/minYear props', () => {
    const withMaxYear = shallow(<YearPicker {...defaultProps} maxYear={2025} />);
    const withMinYear = shallow(<YearPicker {...defaultProps} minYear={2020} />);

    expect(withMaxYear.find(CalendarHeader).prop('hasNext')).toBe(false);
    expect(withMaxYear.find(CalendarHeader).prop('hasPrevious')).toBe(true);

    expect(withMinYear.find(CalendarHeader).prop('hasNext')).toBe(true);
    expect(withMinYear.find(CalendarHeader).prop('hasPrevious')).toBe(false);
  });

  it('passes nextLabel/previousLabel props to CalendarHeader component', () => {
    const element = shallow(
      <YearPicker
        {...defaultProps}
        nextDecadeLabel="next-test"
        previousDecadeLabel="previous-test"
      />
    );

    expect(element.find(CalendarHeader).prop('nextLabel')).toBe('next-test');
    expect(element.find(CalendarHeader).prop('previousLabel')).toBe('previous-test');
  });

  it('has correct displayName', () => {
    expect(YearPicker.displayName).toEqual('@mantine/dates/YearPicker');
  });
});
