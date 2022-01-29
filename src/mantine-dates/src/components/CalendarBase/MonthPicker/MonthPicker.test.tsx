import React from 'react';
import { render, screen } from '@testing-library/react';
import { itSupportsClassName, checkAccessibility } from '@mantine/tests';
import userEvent from '@testing-library/user-event';
import { MonthPicker, MonthPickerProps } from './MonthPicker';

const CONTROL_SELECTOR = '.mantine-MonthPicker-monthPickerControl';
const ACTIVE_CONTROL_SELECTOR = '.mantine-MonthPicker-monthPickerControlActive';
const LEVEL_SELECTOR = '.mantine-MonthPicker-calendarHeaderLevel';
const HEADER_CONTROL_SELECTOR = '.mantine-MonthPicker-calendarHeaderControl';

const defaultProps: MonthPickerProps = {
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
    <MonthPicker {...defaultProps} nextYearLabel="Next" previousYearLabel="Previous" />,
  ]);

  it('renders correct amount of controls', () => {
    const { container: notDisabled } = render(<MonthPicker {...defaultProps} />);
    const { container: disabled } = render(
      <MonthPicker
        {...defaultProps}
        minDate={new Date(2021, 1, 1)}
        maxDate={new Date(2021, 5, 1)}
      />
    );
    expect(notDisabled.querySelectorAll(CONTROL_SELECTOR)).toHaveLength(12);
    expect(disabled.querySelectorAll(CONTROL_SELECTOR)).toHaveLength(12);
  });

  it('sets CalendarHeader label based on current selected year', () => {
    render(<MonthPicker {...defaultProps} year={2031} />);
    expect(screen.getByText('2031')).toBeInTheDocument();
  });

  it('calls onYearChange when next/previous buttons are clicked', () => {
    const spy = jest.fn();
    const { container } = render(<MonthPicker {...defaultProps} year={2031} onYearChange={spy} />);
    const controls = container.querySelectorAll(HEADER_CONTROL_SELECTOR);
    userEvent.click(controls[1]);
    expect(spy).toHaveBeenLastCalledWith(2032);
    userEvent.click(controls[0]);
    expect(spy).toHaveBeenLastCalledWith(2030);
  });

  it('sets disabled prop on month controls that are out of range', () => {
    const { container } = render(
      <MonthPicker
        {...defaultProps}
        minDate={new Date(2021, 1, 1)}
        maxDate={new Date(2021, 5, 1)}
      />
    );
    const controls = container.querySelectorAll(CONTROL_SELECTOR);
    expect(controls[0]).toBeDisabled();
    expect(controls[3]).not.toBeDisabled();
    expect(controls[11]).toBeDisabled();
  });

  it('adds active styles to selected month', () => {
    const { container } = render(
      <MonthPicker {...defaultProps} value={{ year: 2021, month: 11 }} />
    );
    expect(container.querySelector(ACTIVE_CONTROL_SELECTOR).textContent).toBe('Dec');
  });

  it('calls onChange when month control button is clicked', () => {
    const spy = jest.fn();
    const { container } = render(<MonthPicker {...defaultProps} onChange={spy} />);
    userEvent.click(container.querySelectorAll(CONTROL_SELECTOR)[3]);
    expect(spy).toHaveBeenCalledWith(3);
  });

  it('sets hasNext/hasPrevious CalendarHeader props based on minDate/maxDate props', () => {
    const { container: withMaxYear } = render(
      <MonthPicker {...defaultProps} maxDate={new Date(2021, 11, 1)} />
    );
    const { container: withMinYear } = render(
      <MonthPicker {...defaultProps} minDate={new Date(2021, 11, 1)} />
    );

    expect(withMaxYear.querySelectorAll(HEADER_CONTROL_SELECTOR)[0]).not.toBeDisabled();
    expect(withMaxYear.querySelectorAll(HEADER_CONTROL_SELECTOR)[1]).toBeDisabled();
    expect(withMinYear.querySelectorAll(HEADER_CONTROL_SELECTOR)[0]).toBeDisabled();
    expect(withMinYear.querySelectorAll(HEADER_CONTROL_SELECTOR)[1]).not.toBeDisabled();
  });

  it('passes nextLabel/previousLabel props to CalendarHeader component', () => {
    render(
      <MonthPicker {...defaultProps} nextYearLabel="next-test" previousYearLabel="previous-test" />
    );
    expect(screen.getByLabelText('next-test')).toBeInTheDocument();
    expect(screen.getByLabelText('previous-test')).toBeInTheDocument();
  });

  it('calls onNextLevel when level label is clicked', () => {
    const spy = jest.fn();
    const { container } = render(<MonthPicker {...defaultProps} onNextLevel={spy} />);
    userEvent.click(container.querySelector(LEVEL_SELECTOR));
    expect(spy).toHaveBeenCalled();
  });

  it('has correct displayName', () => {
    expect(MonthPicker.displayName).toEqual('@mantine/dates/MonthPicker');
  });
});
