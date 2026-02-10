import 'dayjs/locale/ru';

import dayjs from 'dayjs';
import { DatesProvider } from '@mantine/dates';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { ScheduleEventData } from '../../types';
import { getWeekNumber, toDateString } from '../../utils';
import {
  MobileMonthView,
  MobileMonthViewProps,
  MobileMonthViewStylesNames,
} from './MobileMonthView';

const testEvents: ScheduleEventData[] = [
  {
    id: '1',
    title: 'Event 1',
    start: '2025-11-05 10:00:00',
    end: '2025-11-05 11:00:00',
    color: 'red',
    payload: {},
  },
  {
    id: '2',
    title: 'Event 2',
    start: '2025-11-05 14:00:00',
    end: '2025-11-05 15:00:00',
    color: 'blue',
    payload: {},
  },
  {
    id: '3',
    title: 'Event 3',
    start: '2025-11-10 09:00:00',
    end: '2025-11-10 10:00:00',
    color: 'green',
    payload: {},
  },
  {
    id: '4',
    title: 'All Day Event',
    start: '2025-11-15',
    end: '2025-11-15',
    color: 'orange',
    payload: {},
  },
];

const defaultProps: MobileMonthViewProps = {
  date: '2025-11-01',
  events: testEvents,
  withWeekNumbers: true,
  selectedDate: '2025-11-05',
};

describe('@mantine/schedule/MobileMonthView', () => {
  tests.itSupportsSystemProps<MobileMonthViewProps, MobileMonthViewStylesNames>({
    component: MobileMonthView,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/schedule/MobileMonthView',
    stylesApiSelectors: [
      'mobileMonthView',
      'mobileMonthViewHeader',
      'mobileMonthViewHeaderBackButton',
      'mobileMonthViewHeaderLabel',
      'mobileMonthViewCalendar',
      'mobileMonthViewWeekdays',
      'mobileMonthViewWeekday',
      'mobileMonthViewWeekdaysCorner',
      'mobileMonthViewWeek',
      'mobileMonthViewWeekNumber',
      'mobileMonthViewDay',
      'mobileMonthViewDayIndicators',
      'mobileMonthViewDayIndicator',
      'mobileMonthViewEventsList',
      'mobileMonthViewEventsHeader',
      'mobileMonthViewEvent',
      'mobileMonthViewEventTime',
      'mobileMonthViewEventColor',
    ],
  });

  it('renders days of the given month', () => {
    const { container } = render(<MobileMonthView {...defaultProps} />);
    const days = container.querySelectorAll('.mantine-MobileMonthView-mobileMonthViewDay');
    expect(days.length).toBeGreaterThan(28);
    expect(screen.getByRole('button', { name: 'November 1, 2025' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'November 30, 2025' })).toBeInTheDocument();
  });

  it('supports firstDayOfWeek prop', () => {
    const { container } = render(<MobileMonthView {...defaultProps} firstDayOfWeek={0} />);
    const weekdays = container.querySelectorAll('.mantine-MobileMonthView-mobileMonthViewWeekday');
    expect(weekdays[0].textContent?.toLowerCase()).toContain('s');
  });

  it('supports changing weekendDays', () => {
    const { container } = render(<MobileMonthView {...defaultProps} weekendDays={[1, 2]} />);
    const days = container.querySelectorAll('.mantine-MobileMonthView-mobileMonthViewDay');
    const mondayDays = Array.from(days).filter((day) => day.hasAttribute('data-weekend'));
    expect(mondayDays.length).toBeGreaterThan(0);
  });

  it('displays week numbers when withWeekNumbers is set', () => {
    const { container } = render(<MobileMonthView {...defaultProps} withWeekNumbers />);
    const weekNumbers = container.querySelectorAll(
      '.mantine-MobileMonthView-mobileMonthViewWeekNumber'
    );
    expect(weekNumbers.length).toBeGreaterThan(0);
  });

  it('hides week numbers when withWeekNumbers is false', () => {
    const { container } = render(<MobileMonthView {...defaultProps} withWeekNumbers={false} />);
    const weekNumbers = container.querySelectorAll(
      '.mantine-MobileMonthView-mobileMonthViewWeekNumber'
    );
    expect(weekNumbers).toHaveLength(0);
  });

  it('supports changing weekdayFormat with dayjs format string', () => {
    const { container } = render(<MobileMonthView {...defaultProps} weekdayFormat="dd" />);
    const weekdays = container.querySelectorAll('.mantine-MobileMonthView-mobileMonthViewWeekday');
    expect(weekdays[0].textContent).toBe('Mo');
    expect(weekdays[6].textContent).toBe('Su');
  });

  it('changes locale via prop', () => {
    const { container } = render(<MobileMonthView {...defaultProps} locale="ru" />);
    const weekdays = container.querySelectorAll('.mantine-MobileMonthView-mobileMonthViewWeekday');
    expect(weekdays[0].textContent?.toLowerCase()).toContain('п');
    expect(weekdays[6].textContent?.toLowerCase()).toContain('в');
  });

  it('changes locale via DatesProvider', () => {
    const { container } = render(
      <DatesProvider settings={{ locale: 'ru' }}>
        <MobileMonthView {...defaultProps} />
      </DatesProvider>
    );
    const weekdays = container.querySelectorAll('.mantine-MobileMonthView-mobileMonthViewWeekday');
    expect(weekdays[0].textContent?.toLowerCase()).toContain('п');
    expect(weekdays[6].textContent?.toLowerCase()).toContain('в');
  });

  it('supports hiding weekdays with withWeekDays={false}', () => {
    const { container } = render(<MobileMonthView {...defaultProps} withWeekDays={false} />);
    expect(
      container.querySelectorAll('.mantine-MobileMonthView-mobileMonthViewWeekday')
    ).toHaveLength(0);
  });

  it('supports onDayClick prop', async () => {
    const spy = jest.fn();
    render(<MobileMonthView {...defaultProps} onDayClick={spy} />);
    await userEvent.click(screen.getByRole('button', { name: 'November 1, 2025' }));
    expect(spy).toHaveBeenCalledWith('2025-11-01', expect.any(Object));
  });

  it('supports onWeekNumberClick prop', async () => {
    const spy = jest.fn();
    render(<MobileMonthView {...defaultProps} withWeekNumbers onWeekNumberClick={spy} />);
    await userEvent.click(screen.getByRole('button', { name: 'Week 45' }));
    expect(spy).toHaveBeenCalledWith('2025-11-03', expect.any(Object));
  });

  it('supports getDayProps prop', () => {
    render(
      <MobileMonthView
        {...defaultProps}
        getDayProps={(date) =>
          dayjs(date).date() === 1 ? { 'data-first-day-of-month': 'true' } : {}
        }
      />
    );

    expect(screen.getByRole('button', { name: 'November 1, 2025' })).toHaveAttribute(
      'data-first-day-of-month'
    );

    expect(screen.getByRole('button', { name: 'November 2, 2025' })).not.toHaveAttribute(
      'data-first-day-of-month'
    );
  });

  it('adds className and style props to days with getDayProps', () => {
    render(
      <MobileMonthView
        {...defaultProps}
        getDayProps={(date) =>
          dayjs(date).date() === 1 ? { className: 'test-class', style: { color: '#E00999' } } : {}
        }
      />
    );

    expect(screen.getByRole('button', { name: 'November 1, 2025' })).toHaveClass('test-class');
    expect(screen.getByRole('button', { name: 'November 1, 2025' })).toHaveStyle({
      color: '#E00999',
    });
  });

  it('supports getWeekNumberProps prop', () => {
    render(
      <MobileMonthView
        {...defaultProps}
        withWeekNumbers
        getWeekNumberProps={(date) =>
          getWeekNumber([dayjs(date).format('YYYY-MM-DD')]) === 45
            ? { 'data-first-week': 'true' }
            : {}
        }
      />
    );

    expect(screen.getByRole('button', { name: 'Week 45' })).toHaveAttribute('data-first-week');
    expect(screen.getByRole('button', { name: 'Week 46' })).not.toHaveAttribute('data-first-week');
  });

  it('sets data-today attribute on today date when highlightToday is true', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-11-15'));
    const { container, rerender } = render(<MobileMonthView {...defaultProps} highlightToday />);
    const today = container.querySelector(
      '.mantine-MobileMonthView-mobileMonthViewDay[data-today]'
    )!;
    expect(today).toBeInTheDocument();
    expect(today.textContent).toStrictEqual('15');

    rerender(<MobileMonthView {...defaultProps} highlightToday={false} />);
    expect(
      container.querySelector('.mantine-MobileMonthView-mobileMonthViewDay[data-today]')
    ).not.toBeInTheDocument();
    jest.useRealTimers();
  });

  it('renders event indicators for events on specific days', () => {
    const { container } = render(<MobileMonthView {...defaultProps} />);
    const indicators = container.querySelectorAll(
      '.mantine-MobileMonthView-mobileMonthViewDayIndicator'
    );
    expect(indicators.length).toBeGreaterThan(0);
  });

  it('shows maximum 3 indicators per day when multiple events exist', () => {
    const manyEvents: ScheduleEventData[] = [
      {
        id: '1',
        title: 'Event 1',
        start: '2025-11-05 08:00:00',
        end: '2025-11-05 09:00:00',
        color: 'red',
        payload: {},
      },
      {
        id: '2',
        title: 'Event 2',
        start: '2025-11-05 10:00:00',
        end: '2025-11-05 11:00:00',
        color: 'blue',
        payload: {},
      },
      {
        id: '3',
        title: 'Event 3',
        start: '2025-11-05 12:00:00',
        end: '2025-11-05 13:00:00',
        color: 'green',
        payload: {},
      },
      {
        id: '4',
        title: 'Event 4',
        start: '2025-11-05 14:00:00',
        end: '2025-11-05 15:00:00',
        color: 'yellow',
        payload: {},
      },
      {
        id: '5',
        title: 'Event 5',
        start: '2025-11-05 16:00:00',
        end: '2025-11-05 17:00:00',
        color: 'pink',
        payload: {},
      },
    ];
    render(<MobileMonthView {...defaultProps} events={manyEvents} />);
    const nov5Button = screen.getByRole('button', { name: 'November 5, 2025' });
    const indicators = nov5Button.querySelectorAll(
      '.mantine-MobileMonthView-mobileMonthViewDayIndicator'
    );
    expect(indicators).toHaveLength(3);
  });

  it('selects a day when clicked and shows events for that day', async () => {
    const { container } = render(<MobileMonthView {...defaultProps} defaultSelectedDate={null} />);

    await userEvent.click(screen.getByRole('button', { name: 'November 5, 2025' }));

    const selectedDay = container.querySelector(
      '.mantine-MobileMonthView-mobileMonthViewDay[data-selected]'
    );
    expect(selectedDay).toBeInTheDocument();
    expect(selectedDay?.textContent).toContain('5');

    const eventsList = container.querySelectorAll('.mantine-MobileMonthView-mobileMonthViewEvent');
    expect(eventsList.length).toBe(2);
  });

  it('shows "No events" message when no events for selected date', async () => {
    render(<MobileMonthView {...defaultProps} selectedDate="2025-11-01" />);

    expect(screen.getByText('No events')).toBeInTheDocument();
  });

  it('supports custom noEventsText', async () => {
    render(
      <MobileMonthView
        {...defaultProps}
        selectedDate="2025-11-01"
        noEventsText="Nothing scheduled"
      />
    );

    expect(screen.getByText('Nothing scheduled')).toBeInTheDocument();
  });

  it('supports controlled selectedDate', () => {
    const { container, rerender } = render(
      <MobileMonthView {...defaultProps} selectedDate="2025-11-05" />
    );

    let selectedDay = container.querySelector(
      '.mantine-MobileMonthView-mobileMonthViewDay[data-selected]'
    );
    expect(selectedDay?.textContent).toContain('5');

    rerender(<MobileMonthView {...defaultProps} selectedDate="2025-11-10" />);
    selectedDay = container.querySelector(
      '.mantine-MobileMonthView-mobileMonthViewDay[data-selected]'
    );
    expect(selectedDay?.textContent).toContain('10');
  });

  it('calls onSelectedDateChange when date is selected', async () => {
    const spy = jest.fn();
    render(
      <MobileMonthView {...defaultProps} defaultSelectedDate={null} onSelectedDateChange={spy} />
    );

    await userEvent.click(screen.getByRole('button', { name: 'November 5, 2025' }));

    expect(spy).toHaveBeenCalledWith(toDateString(dayjs('2025-11-05')));
  });

  it('shows event times in the events list', () => {
    render(<MobileMonthView {...defaultProps} selectedDate="2025-11-05" />);

    expect(screen.getByText('10:00 – 11:00')).toBeInTheDocument();
    expect(screen.getByText('14:00 – 15:00')).toBeInTheDocument();
  });

  it('shows "All day" for all-day events', () => {
    render(<MobileMonthView {...defaultProps} selectedDate="2025-11-15" />);

    expect(screen.getByText('All day')).toBeInTheDocument();
  });

  it('hides outside days when withOutsideDays is false', () => {
    const { container } = render(<MobileMonthView {...defaultProps} withOutsideDays={false} />);
    const hiddenDays = container.querySelectorAll(
      '.mantine-MobileMonthView-mobileMonthViewDay[data-hidden]'
    );
    expect(hiddenDays.length).toBeGreaterThan(0);
  });

  it('shows outside days when withOutsideDays is true', () => {
    const { container } = render(<MobileMonthView {...defaultProps} withOutsideDays />);
    const outsideDays = container.querySelectorAll(
      '.mantine-MobileMonthView-mobileMonthViewDay[data-outside]'
    );
    expect(outsideDays.length).toBeGreaterThan(0);

    const hiddenDays = container.querySelectorAll(
      '.mantine-MobileMonthView-mobileMonthViewDay[data-hidden]'
    );
    expect(hiddenDays).toHaveLength(0);
  });

  it('supports static mode', () => {
    const { container } = render(<MobileMonthView {...defaultProps} mode="static" />);
    const staticDays = container.querySelectorAll(
      '.mantine-MobileMonthView-mobileMonthViewDay[data-static]'
    );
    expect(staticDays.length).toBeGreaterThan(0);
  });

  it('does not call onDayClick in static mode', async () => {
    const spy = jest.fn();
    render(<MobileMonthView {...defaultProps} onDayClick={spy} mode="static" />);
    await userEvent.click(screen.getByRole('button', { name: 'November 1, 2025' }));
    expect(spy).not.toHaveBeenCalled();
  });

  describe('keyboard navigation', () => {
    it('only first day should be in tab order', () => {
      render(<MobileMonthView {...defaultProps} />);

      expect(screen.getByRole('button', { name: 'November 1, 2025' })).toHaveAttribute(
        'tabIndex',
        '0'
      );
      expect(screen.getByRole('button', { name: 'November 2, 2025' })).toHaveAttribute(
        'tabIndex',
        '-1'
      );
    });

    it('supports arrow keys to navigate between days', async () => {
      render(<MobileMonthView {...defaultProps} />);

      screen.getByRole('button', { name: 'November 1, 2025' }).focus();
      await userEvent.keyboard('{ArrowRight}');
      expect(screen.getByRole('button', { name: 'November 2, 2025' })).toHaveFocus();

      await userEvent.keyboard('{ArrowDown}');
      expect(screen.getByRole('button', { name: 'November 9, 2025' })).toHaveFocus();

      await userEvent.keyboard('{ArrowLeft}');
      expect(screen.getByRole('button', { name: 'November 8, 2025' })).toHaveFocus();

      await userEvent.keyboard('{ArrowUp}');
      expect(screen.getByRole('button', { name: 'November 1, 2025' })).toHaveFocus();
    });

    it('does not move focus past boundaries', async () => {
      render(<MobileMonthView {...defaultProps} />);

      const firstDay = screen.getByRole('button', { name: 'November 1, 2025' });
      firstDay.focus();
      await userEvent.keyboard('{ArrowUp}');
      expect(firstDay).toHaveFocus();

      await userEvent.keyboard('{ArrowLeft}');
      expect(firstDay).toHaveFocus();
    });

    it('does not navigate in static mode', () => {
      render(<MobileMonthView {...defaultProps} mode="static" />);

      expect(screen.getByRole('button', { name: 'November 1, 2025' })).toHaveAttribute(
        'tabIndex',
        '-1'
      );
      expect(screen.getByRole('button', { name: 'November 2, 2025' })).toHaveAttribute(
        'tabIndex',
        '-1'
      );
    });
  });
});
