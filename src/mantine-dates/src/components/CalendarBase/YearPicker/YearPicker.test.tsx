import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { itSupportsClassName, checkAccessibility } from '@mantine/tests';
import { YearPicker, YearPickerProps } from './YearPicker';

const defaultProps: YearPickerProps = {
  value: 2021,
  onChange: () => {},
  nextDecadeLabel: 'test-next',
  previousDecadeLabel: 'test-previous',
};

const CONTROL_SELECTOR = '.mantine-YearPicker-yearPickerControl';
const ACTIVE_CONTROL_SELECTOR = '.mantine-YearPicker-yearPickerControlActive';

describe('@mantine/dates/YearPicker', () => {
  itSupportsClassName(YearPicker, defaultProps);
  checkAccessibility([<YearPicker {...defaultProps} />]);

  it('renders correct amount of controls', () => {
    const { container: notDisabled } = render(<YearPicker {...defaultProps} />);
    const { container: disabled } = render(
      <YearPicker {...defaultProps} minYear={2020} maxYear={2025} />
    );
    expect(notDisabled.querySelectorAll(CONTROL_SELECTOR)).toHaveLength(12);
    expect(disabled.querySelectorAll(CONTROL_SELECTOR)).toHaveLength(12);
  });

  it('sets CalendarHeader label based on current selected decade', () => {
    render(<YearPicker {...defaultProps} value={2031} />);
    expect(screen.getByText('2029 – 2040')).toBeInTheDocument();
  });

  it('changes decade when next/previous buttons are clicked', () => {
    render(<YearPicker {...defaultProps} value={2031} />);
    userEvent.click(screen.getByLabelText('test-next'));
    expect(screen.getByText('2039 – 2050')).toBeInTheDocument();
    userEvent.click(screen.getByLabelText('test-previous'));
    expect(screen.getByText('2029 – 2040')).toBeInTheDocument();
  });

  it('sets disabled prop on year controls that are out of range', () => {
    const { container } = render(<YearPicker {...defaultProps} minYear={2021} maxYear={2024} />);
    const controls = container.querySelectorAll(CONTROL_SELECTOR);
    expect(controls[0]).toBeDisabled();
    expect(controls[3]).not.toBeDisabled();
    expect(controls[11]).toBeDisabled();
  });

  it('adds active styles to selected year', () => {
    const { container } = render(<YearPicker {...defaultProps} value={2021} />);
    expect(container.querySelector(ACTIVE_CONTROL_SELECTOR).textContent).toBe('2021');
  });

  it('calls onChange when year control button is clicked', () => {
    const spy = jest.fn();
    render(<YearPicker {...defaultProps} onChange={spy} />);
    userEvent.click(screen.getByText('2019'));
    expect(spy).toHaveBeenCalledWith(2019);
  });

  it('has correct displayName', () => {
    expect(YearPicker.displayName).toEqual('@mantine/dates/YearPicker');
  });
});
