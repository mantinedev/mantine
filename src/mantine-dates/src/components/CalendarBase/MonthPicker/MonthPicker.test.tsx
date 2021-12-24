import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import { itSupportsClassName, checkAccessibility } from '@mantine/tests';
import { CalendarHeader } from '../CalendarHeader/CalendarHeader';
import { MonthPicker } from './MonthPicker';

const CONTROL_SELECTOR = '.mantine-MonthPicker-monthPickerControl';
const ACTIVE_CONTROL_SELECTOR = '.mantine-MonthPicker-monthPickerControlActive';
const LEVEL_SELECTOR = '.mantine-MonthPicker-calendarHeaderLevel';
const HEADER_CONTROL_SELECTOR = '.mantine-MonthPicker-calendarHeaderControl';

const defaultProps = {
  value: { year: 2021, month: 11 },
  onChange: () => {},
  locale: 'en',
  year: 2021,
  onYearChange: () => {},
  onNextLevel: () => {},
};

describe('@mantine/core/MonthPicker', () => {
  itSupportsClassName(MonthPicker, defaultProps);
  checkAccessibility([
    render(<MonthPicker {...defaultProps} nextYearLabel="Next" previousYearLabel="Previous" />),
  ]);

  it('renders correct amount of controls', () => {
    const notDisabled = shallow(<MonthPicker {...defaultProps} />);
    const disabled = shallow(
      <MonthPicker
        {...defaultProps}
        minDate={new Date(2021, 1, 1)}
        maxDate={new Date(2021, 5, 1)}
      />
    );
    expect(notDisabled.find(CONTROL_SELECTOR)).toHaveLength(12);
    expect(disabled.find(CONTROL_SELECTOR)).toHaveLength(12);
  });

  it('sets CalendarHeader label based on current selected year', () => {
    const element = shallow(<MonthPicker {...defaultProps} year={2031} />);
    expect(element.render().find(LEVEL_SELECTOR).text()).toBe('2031');
  });

  it('calls onYearChange when next/previous buttons are clicked', () => {
    const spy = jest.fn();
    const element = shallow(<MonthPicker {...defaultProps} year={2031} onYearChange={spy} />);
    const header = element.find(CalendarHeader).dive();
    const nextControl = header.find(HEADER_CONTROL_SELECTOR).at(1);
    const previousControl = header.find(HEADER_CONTROL_SELECTOR).at(0);

    nextControl.simulate('click');
    expect(spy).toHaveBeenLastCalledWith(2032);

    previousControl.simulate('click');
    expect(spy).toHaveBeenLastCalledWith(2030);
  });

  it('sets disabled prop on month controls that are out of range', () => {
    const element = shallow(
      <MonthPicker
        {...defaultProps}
        minDate={new Date(2021, 1, 1)}
        maxDate={new Date(2021, 5, 1)}
      />
    );
    expect(element.find(CONTROL_SELECTOR).at(0).prop('disabled')).toBe(true);
    expect(element.find(CONTROL_SELECTOR).at(3).prop('disabled')).toBe(false);
    expect(element.find(CONTROL_SELECTOR).at(11).prop('disabled')).toBe(true);
  });

  it('adds active styles to selected month', () => {
    const element = shallow(<MonthPicker {...defaultProps} value={{ year: 2021, month: 11 }} />);
    expect(element.find(ACTIVE_CONTROL_SELECTOR).text()).toBe('Dec');
  });

  it('calls onChange when month control button is clicked', () => {
    const spy = jest.fn();
    const element = shallow(<MonthPicker {...defaultProps} onChange={spy} />);
    element.find(CONTROL_SELECTOR).at(3).simulate('click');
    expect(spy).toHaveBeenCalledWith(3);
  });

  it('passes __staticSelector, classNames and styles to CalendarHeader', () => {
    const element = shallow(
      <MonthPicker
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

  it('sets hasNext/hasPrevious CalendarHeader props based on minDate/maxDate props', () => {
    const withMaxYear = shallow(<MonthPicker {...defaultProps} maxDate={new Date(2021, 11, 1)} />);
    const withMinYear = shallow(<MonthPicker {...defaultProps} minDate={new Date(2021, 11, 1)} />);

    expect(withMaxYear.find(CalendarHeader).prop('hasNext')).toBe(false);
    expect(withMaxYear.find(CalendarHeader).prop('hasPrevious')).toBe(true);

    expect(withMinYear.find(CalendarHeader).prop('hasNext')).toBe(true);
    expect(withMinYear.find(CalendarHeader).prop('hasPrevious')).toBe(false);
  });

  it('passes nextLabel/previousLabel props to CalendarHeader component', () => {
    const element = shallow(
      <MonthPicker {...defaultProps} nextYearLabel="next-test" previousYearLabel="previous-test" />
    );

    expect(element.find(CalendarHeader).prop('nextLabel')).toBe('next-test');
    expect(element.find(CalendarHeader).prop('previousLabel')).toBe('previous-test');
  });

  it('calls onNextLevel when level label is clicked', () => {
    const spy = jest.fn();
    const element = shallow(<MonthPicker {...defaultProps} onNextLevel={spy} />);
    element.find(CalendarHeader).dive().find(LEVEL_SELECTOR).simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  it('has correct displayName', () => {
    expect(MonthPicker.displayName).toEqual('@mantine/dates/MonthPicker');
  });
});
