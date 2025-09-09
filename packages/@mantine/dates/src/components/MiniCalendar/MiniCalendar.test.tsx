import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { MiniCalendar, MiniCalendarProps, MiniCalendarStylesNames } from './MiniCalendar';

const defaultProps: MiniCalendarProps = {
  nextControlProps: { 'aria-label': 'next' },
  previousControlProps: { 'aria-label': 'previous' },
};

describe('@mantine/dates/MiniCalendar', () => {
  tests.axe([<MiniCalendar {...defaultProps} />]);
  tests.itSupportsSystemProps<MiniCalendarProps, MiniCalendarStylesNames>({
    component: MiniCalendar,
    props: defaultProps,
    polymorphic: true,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@mantine/dates/MiniCalendar',
    stylesApiSelectors: ['root', 'control', 'days', 'day', 'dayMonth', 'dayNumber'],
  });

  it('displays given date range', () => {
    const { container } = render(
      <MiniCalendar {...defaultProps} date="2025-01-01" numberOfDays={3} />
    );
    expect(container.querySelectorAll('.mantine-MiniCalendar-day')).toHaveLength(3);
    expect(screen.getByLabelText('2025-01-01')).toBeInTheDocument();
    expect(screen.getByLabelText('2025-01-02')).toBeInTheDocument();
    expect(screen.getByLabelText('2025-01-03')).toBeInTheDocument();
  });

  it('supports defaultDate', async () => {
    render(<MiniCalendar {...defaultProps} defaultDate="2025-01-01" numberOfDays={7} />);
    expect(screen.getByLabelText('2025-01-01')).toBeInTheDocument();

    await userEvent.click(screen.getByLabelText('next'));
    expect(screen.getByLabelText('2025-01-08')).toBeInTheDocument();
  });

  it('supports controlled date', async () => {
    const spy = jest.fn();
    render(
      <MiniCalendar {...defaultProps} date="2025-01-01" numberOfDays={7} onDateChange={spy} />
    );
    expect(screen.getByLabelText('2025-01-01')).toBeInTheDocument();

    await userEvent.click(screen.getByLabelText('next'));
    expect(spy).toHaveBeenCalledWith('2025-01-08');
    expect(screen.getByLabelText('2025-01-01')).toBeInTheDocument();
    expect(screen.queryByLabelText('2025-01-08')).not.toBeInTheDocument();
  });

  it('calls onChange when day is clicked', () => {
    const spy = jest.fn();
    render(<MiniCalendar {...defaultProps} onChange={spy} date="2025-01-01" />);
    screen.getByLabelText(new RegExp('2025-01-02')).click();
    expect(spy).toHaveBeenCalledWith('2025-01-02');
  });

  it('sets data-selected attribute on selected day', () => {
    render(<MiniCalendar {...defaultProps} value="2025-01-02" date="2025-01-01" />);
    expect(screen.getByLabelText('2025-01-02')).toHaveAttribute('data-selected');
    expect(screen.getByLabelText('2025-01-01')).not.toHaveAttribute('data-selected');
  });

  it('calls onNext and onPrevious callbacks', () => {
    const nextSpy = jest.fn();
    const previousSpy = jest.fn();
    render(
      <MiniCalendar {...defaultProps} onNext={nextSpy} onPrevious={previousSpy} date="2025-01-01" />
    );

    screen.getByLabelText('next').click();
    expect(nextSpy).toHaveBeenCalledTimes(1);

    screen.getByLabelText('previous').click();
    expect(previousSpy).toHaveBeenCalledTimes(1);
  });

  it('supports maxDate', () => {
    render(
      <MiniCalendar {...defaultProps} date="2025-01-01" maxDate="2025-01-03" numberOfDays={7} />
    );
    expect(screen.getByLabelText('2025-01-04')).toBeDisabled();
    expect(screen.getByLabelText('next')).toBeDisabled();
  });

  it('supports minDate', () => {
    render(
      <MiniCalendar {...defaultProps} date="2025-01-01" minDate="2025-01-03" numberOfDays={7} />
    );
    expect(screen.getByLabelText('2025-01-02')).toBeDisabled();
    expect(screen.getByLabelText('previous')).toBeDisabled();
  });

  it('supports numberOfDays', () => {
    const { container, rerender } = render(
      <MiniCalendar {...defaultProps} date="2025-01-01" numberOfDays={7} />
    );
    expect(container.querySelectorAll('.mantine-MiniCalendar-day')).toHaveLength(7);

    rerender(<MiniCalendar {...defaultProps} date="2025-01-01" numberOfDays={3} />);
    expect(container.querySelectorAll('.mantine-MiniCalendar-day')).toHaveLength(3);
  });

  it('supports monthLabelFormat', () => {
    const { rerender } = render(
      <MiniCalendar {...defaultProps} date="2025-01-01" monthLabelFormat="MMM" numberOfDays={1} />
    );
    expect(screen.getByText('Jan')).toBeInTheDocument();

    rerender(
      <MiniCalendar {...defaultProps} date="2025-01-01" monthLabelFormat="MMMM" numberOfDays={1} />
    );
    expect(screen.getByText('January')).toBeInTheDocument();
  });

  it('supports getDayProps', () => {
    const { container } = render(
      <MiniCalendar
        {...defaultProps}
        date="2025-01-01"
        numberOfDays={3}
        getDayProps={(date) => ({ 'data-day': date })}
      />
    );

    expect(container.querySelector('[data-day="2025-01-01"]')).toBeInTheDocument();
    expect(container.querySelector('[data-day="2025-01-02"]')).toBeInTheDocument();
    expect(container.querySelector('[data-day="2025-01-03"]')).toBeInTheDocument();
  });

  it('supports previousControlProps and nextControlProps', () => {
    const { container } = render(
      <MiniCalendar
        {...defaultProps}
        date="2025-01-01"
        previousControlProps={{ 'data-test-previous': true }}
        nextControlProps={{ 'data-test-next': true }}
      />
    );

    expect(container.querySelector('[data-test-previous]')).toBeInTheDocument();
    expect(container.querySelector('[data-test-next]')).toBeInTheDocument();
  });
});
