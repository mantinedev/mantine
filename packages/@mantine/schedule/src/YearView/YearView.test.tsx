import 'dayjs/locale/ru';

import dayjs from 'dayjs';
import { DatesProvider, getWeekNumber } from '@mantine/dates-utils';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { YearView, YearViewProps, YearViewStylesNames } from './YearView';

const defaultProps: YearViewProps = {
  year: '2025-11-01',
};

describe('@mantine/schedule/YearView', () => {
  tests.itSupportsSystemProps<YearViewProps, YearViewStylesNames>({
    component: YearView,
    props: { ...defaultProps, withWeekNumbers: true },
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@mantine/schedule/YearView',
    stylesApiSelectors: [
      'yearView',
      'yearViewDay',
      'yearViewMonth',
      'yearViewMonthCaption',
      'yearViewQuarter',
      'yearViewWeek',
      'yearViewWeekNumber',
      'yearViewWeekday',
      'yearViewWeekdays',
      'yearViewWeekdaysCorner',
    ],
  });

  it('renders months of the given year', () => {
    const { container } = render(<YearView {...defaultProps} />);
    expect(container.querySelectorAll('.mantine-YearView-yearViewMonth')).toHaveLength(12);

    const days = container.querySelectorAll('.mantine-YearView-yearViewDay');
    expect(days[0].textContent).toBe('30'); // Dec 30, 2024
    expect(days[days.length - 1].textContent).toBe('11'); // Jan 11, 2026 (extra week for consistentWeeks)
  });

  it('supports firstDayOfWeek prop', () => {
    const { container } = render(<YearView {...defaultProps} firstDayOfWeek={0} />);
    const january = container.querySelector('.mantine-YearView-yearViewMonth')!;
    const days = january.querySelectorAll('.mantine-YearView-yearViewDay');
    expect(days[0].textContent).toBe('29'); // Dec 29, 2024 (Sunday)
    expect(days[days.length - 1].textContent).toBe('8'); // Feb 8, 2025 (Saturday)
  });

  it('supports changing weekendDays', () => {
    const { container } = render(<YearView {...defaultProps} weekendDays={[1, 2]} />);
    const days = container.querySelectorAll('.mantine-YearView-yearViewDay');
    expect(days[0]).toHaveAttribute('data-weekend'); // Dec 30, 2024 (Monday)
    expect(days[1]).toHaveAttribute('data-weekend'); // Dec 31, 2024 (Tuesday)
    expect(days[2]).not.toHaveAttribute('data-weekend'); // Jan 1, 2025 (Wednesday)
    expect(days[days.length - 1]).not.toHaveAttribute('data-weekend'); // Feb 9, 2025 (Sunday)
  });

  it('displays week numbers when withWeekNumbers is set', () => {
    const { container } = render(<YearView {...defaultProps} withWeekNumbers />);

    // With consistent weeks there are duplicates: the same week can be counted twice.
    // There are ~ 70 weeks with duplicates.
    expect(
      container.querySelectorAll('.mantine-YearView-yearViewWeekNumber').length
    ).toBeGreaterThan(52);
  });

  it('supports monthLabelFormat prop', () => {
    const { container } = render(<YearView {...defaultProps} monthLabelFormat="MMM YYYY" />);
    const januaryCaption = container.querySelector('.mantine-YearView-yearViewMonthCaption')!;
    expect(januaryCaption.textContent).toBe('Jan 2025');
  });

  it('supports changing weekdayFormat with dayjs format string', () => {
    const { container } = render(<YearView {...defaultProps} weekdayFormat="dd" />);
    const weekdays = container.querySelectorAll('.mantine-YearView-yearViewWeekday');
    expect(weekdays[0].textContent).toBe('Mo');
    expect(weekdays[6].textContent).toBe('Su');
  });

  it('supports changing weekdayFormat with function', () => {
    const { container } = render(
      <YearView
        {...defaultProps}
        weekdayFormat={(date) => dayjs(date).locale('ru').format('dd').slice(0, 1).toUpperCase()}
      />
    );
    const weekdays = container.querySelectorAll('.mantine-YearView-yearViewWeekday');
    expect(weekdays[0].textContent).toBe('П');
    expect(weekdays[6].textContent).toBe('В');
  });

  it('changes locale via prop', () => {
    const { container } = render(<YearView {...defaultProps} locale="ru" />);
    const januaryCaption = container.querySelector('.mantine-YearView-yearViewMonthCaption')!;
    expect(januaryCaption.textContent).toBe('январь');

    const weekdays = container.querySelectorAll('.mantine-YearView-yearViewWeekday');
    expect(weekdays[0].textContent).toBe('п');
    expect(weekdays[6].textContent).toBe('в');
  });

  it('changes locale via DatesProvider', () => {
    const { container } = render(
      <DatesProvider settings={{ locale: 'ru' }}>
        <YearView {...defaultProps} />
      </DatesProvider>
    );

    const januaryCaption = container.querySelector('.mantine-YearView-yearViewMonthCaption')!;
    expect(januaryCaption.textContent).toBe('январь');

    const weekdays = container.querySelectorAll('.mantine-YearView-yearViewWeekday');
    expect(weekdays[0].textContent).toBe('п');
    expect(weekdays[6].textContent).toBe('в');
  });

  it('supports hiding weekdays with withWeekDays={false}', () => {
    const { container } = render(<YearView {...defaultProps} withWeekDays={false} />);
    expect(container.querySelectorAll('.mantine-YearView-yearViewWeekday')).toHaveLength(0);
  });

  it('supports onDayClick prop', async () => {
    const spy = jest.fn();
    render(<YearView {...defaultProps} onDayClick={spy} />);
    await userEvent.click(screen.getByRole('button', { name: 'January 1, 2025' }));
    expect(spy).toHaveBeenCalledWith(new Date('2025-01-01 00:00:00'), expect.any(Object));
  });

  it('supports onMonthClick prop', async () => {
    const spy = jest.fn();
    render(<YearView {...defaultProps} onMonthClick={spy} />);
    await userEvent.click(screen.getByRole('button', { name: 'January' }));
    expect(spy).toHaveBeenCalledWith(new Date('2025-01-01 00:00:00'), expect.any(Object));
  });

  it('supports onWeekNumberClick prop', async () => {
    const spy = jest.fn();
    render(<YearView {...defaultProps} withWeekNumbers onWeekNumberClick={spy} />);
    await userEvent.click(screen.getByRole('button', { name: 'Week 3' }));
    expect(spy).toHaveBeenCalledWith(new Date('2025-01-13 00:00:00'), expect.any(Object));
  });

  it('supports getDayProps prop', () => {
    render(
      <YearView
        {...defaultProps}
        getDayProps={(date) =>
          dayjs(date).date() === 1 ? { 'data-first-day-of-month': 'true' } : {}
        }
      />
    );

    expect(screen.getByRole('button', { name: 'January 1, 2025' })).toHaveAttribute(
      'data-first-day-of-month'
    );

    expect(screen.getByRole('button', { name: 'January 2, 2025' })).not.toHaveAttribute(
      'data-first-day-of-month'
    );
  });

  it('adds className and style props to days with getDayProps', () => {
    render(
      <YearView
        {...defaultProps}
        getDayProps={(date) =>
          dayjs(date).date() === 1 ? { className: 'test-class', style: { color: '#E00999' } } : {}
        }
      />
    );

    expect(screen.getByRole('button', { name: 'January 1, 2025' })).toHaveClass('test-class');
    expect(screen.getByRole('button', { name: 'January 1, 2025' })).toHaveStyle({
      color: '#E00999',
    });

    expect(screen.getByRole('button', { name: 'January 2, 2025' })).not.toHaveClass('test-class');
    expect(screen.getByRole('button', { name: 'January 2, 2025' })).not.toHaveStyle({
      color: '#E00999',
    });
  });

  it('supports getWeekNumberProps prop', () => {
    render(
      <YearView
        {...defaultProps}
        withWeekNumbers
        getWeekNumberProps={(date) =>
          getWeekNumber([dayjs(date).format('YYYY-MM-DD')]) === 3
            ? { 'data-first-week': 'true' }
            : {}
        }
      />
    );

    expect(screen.getByRole('button', { name: 'Week 3' })).toHaveAttribute('data-first-week');
    expect(screen.getByRole('button', { name: 'Week 4' })).not.toHaveAttribute('data-first-week');
  });

  it('adds className and style props to week numbers with getWeekNumberProps', () => {
    render(
      <YearView
        {...defaultProps}
        withWeekNumbers
        getWeekNumberProps={(date) =>
          getWeekNumber([dayjs(date).format('YYYY-MM-DD')]) === 3
            ? { className: 'test-class', style: { color: '#E00999' } }
            : {}
        }
      />
    );

    expect(screen.getByRole('button', { name: 'Week 3' })).toHaveClass('test-class');
    expect(screen.getByRole('button', { name: 'Week 3' })).toHaveStyle({ color: '#E00999' });

    expect(screen.getByRole('button', { name: 'Week 4' })).not.toHaveClass('test-class');
    expect(screen.getByRole('button', { name: 'Week 4' })).not.toHaveStyle({ color: '#E00999' });
  });

  it('sets data-today attribute on today date when highlightToday is true', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-01-15'));
    const { container, rerender } = render(<YearView {...defaultProps} highlightToday />);
    const today = container.querySelector('.mantine-YearView-yearViewDay[data-today]')!;
    expect(today).toBeInTheDocument();
    expect(today.textContent).toStrictEqual('15');

    rerender(<YearView {...defaultProps} highlightToday={false} />);
    expect(
      container.querySelector('.mantine-YearView-yearViewDay[data-today]')
    ).not.toBeInTheDocument();
    jest.useRealTimers();
  });
});
