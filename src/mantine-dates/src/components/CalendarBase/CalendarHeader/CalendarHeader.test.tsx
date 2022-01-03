import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { itSupportsClassName, checkAccessibility } from '@mantine/tests';
import { CalendarHeader, CalendarHeaderProps } from './CalendarHeader';

const defaultProps: CalendarHeaderProps = {
  hasPrevious: true,
  hasNext: true,
  label: 'February 2021',
  nextLabel: 'Next month',
  previousLabel: 'Previous month',
};

const LEVEL_ICON_SELECTOR = '.mantine-CalendarHeader-calendarHeaderLevelIcon';

describe('@mantine/dates/CalendarHeader', () => {
  itSupportsClassName(CalendarHeader, defaultProps);
  checkAccessibility([<CalendarHeader {...defaultProps} />]);

  it('calls onNext/onPrevious functions when previous/next buttons are clicked', () => {
    const onNext = jest.fn();
    const onPrevious = jest.fn();
    render(<CalendarHeader {...defaultProps} onNext={onNext} onPrevious={onPrevious} />);

    userEvent.click(screen.getByLabelText('Previous month'));
    expect(onPrevious).toHaveBeenCalledTimes(1);
    expect(onNext).toHaveBeenCalledTimes(0);

    userEvent.click(screen.getByLabelText('Next month'));
    expect(onPrevious).toHaveBeenCalledTimes(1);
    expect(onNext).toHaveBeenCalledTimes(1);
  });

  it('calls onNextLevel function when level button is clicked', () => {
    const spy = jest.fn();
    render(<CalendarHeader {...defaultProps} onNextLevel={spy} />);
    userEvent.click(screen.getByText('February 2021'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('sets previous control disabled state based on hasPrevious prop', () => {
    const { rerender } = render(<CalendarHeader {...defaultProps} hasPrevious={false} />);
    expect(screen.getByLabelText('Previous month')).toBeDisabled();
    rerender(<CalendarHeader {...defaultProps} hasPrevious />);
    expect(screen.getByLabelText('Previous month')).not.toBeDisabled();
  });

  it('sets next control disabled state based on hasNext prop', () => {
    const { rerender } = render(<CalendarHeader {...defaultProps} hasNext={false} />);
    expect(screen.getByLabelText('Next month')).toBeDisabled();
    rerender(<CalendarHeader {...defaultProps} hasNext />);
    expect(screen.getByLabelText('Next month')).not.toBeDisabled();
  });

  it('sets level control tabIndex based on preventLevelFocus prop', () => {
    const { rerender } = render(<CalendarHeader {...defaultProps} preventLevelFocus />);
    expect(screen.getByText('February 2021')).toHaveAttribute('tabindex', '-1');
    rerender(<CalendarHeader {...defaultProps} preventLevelFocus={false} />);
    expect(screen.getByText('February 2021')).toHaveAttribute('tabindex', '0');
  });

  it('disables level control based on nextLevelDisabled prop', () => {
    const { rerender } = render(<CalendarHeader {...defaultProps} nextLevelDisabled />);
    expect(screen.getByText('February 2021')).toBeDisabled();
    rerender(<CalendarHeader {...defaultProps} nextLevelDisabled={false} />);
    expect(screen.getByText('February 2021')).not.toBeDisabled();
  });

  it('does not render level icon if level control is disabled', () => {
    const { container: disabled } = render(<CalendarHeader {...defaultProps} nextLevelDisabled />);
    const { container: enabled } = render(
      <CalendarHeader {...defaultProps} nextLevelDisabled={false} />
    );
    expect(disabled.querySelectorAll(LEVEL_ICON_SELECTOR)).toHaveLength(0);
    expect(enabled.querySelectorAll(LEVEL_ICON_SELECTOR)).toHaveLength(1);
  });

  it('renders given label at level control', () => {
    render(<CalendarHeader {...defaultProps} label="test-label" />);
    expect(screen.getByText('test-label')).toBeInTheDocument();
  });

  it('has correct displayName', () => {
    expect(CalendarHeader.displayName).toEqual('@mantine/dates/CalendarHeader');
  });
});
