import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import React from 'react';
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
    start: '2025-11-15 00:00:00',
    end: '2025-11-16 00:00:00',
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
      'mobileMonthViewEventColor',
      'mobileMonthViewEventBody',
      'mobileMonthViewEventTitle',
      'mobileMonthViewEventTime',
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

  it('supports custom noEvents label', async () => {
    render(
      <MobileMonthView
        {...defaultProps}
        selectedDate="2025-11-01"
        labels={{ noEvents: 'Nothing scheduled' }}
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

  it('supports allDay label override for all-day events', () => {
    render(
      <MobileMonthView
        {...defaultProps}
        selectedDate="2025-11-15"
        labels={{ allDay: 'Ganztägig' }}
      />
    );

    expect(screen.getByText('Ganztägig')).toBeInTheDocument();
    expect(screen.queryByText('All day')).not.toBeInTheDocument();
  });

  it('shows "All day" for events ending at 23:59:59 the same day', () => {
    const allDayEvents: ScheduleEventData[] = [
      {
        id: 'allday',
        title: 'All Day',
        start: '2025-11-06 00:00:00',
        end: '2025-11-06 23:59:59',
        color: 'red',
        payload: {},
      },
    ];
    render(<MobileMonthView {...defaultProps} events={allDayEvents} selectedDate="2025-11-06" />);

    expect(screen.getByText('All day')).toBeInTheDocument();
    expect(screen.queryByText('00:00 – 23:59')).not.toBeInTheDocument();
  });

  it('shows "All day" on every day of a multi-day event that starts and ends with a time', () => {
    const multidayEvents: ScheduleEventData[] = [
      {
        id: 'holiday',
        title: 'Holiday',
        start: '2025-11-25 15:00:00',
        end: '2025-11-29 23:00:00',
        color: 'blue',
        payload: {},
      },
    ];
    const { rerender } = render(
      <MobileMonthView {...defaultProps} events={multidayEvents} selectedDate="2025-11-25" />
    );

    expect(screen.getByText('All day')).toBeInTheDocument();
    expect(screen.queryByText('15:00 – 23:00')).not.toBeInTheDocument();

    rerender(
      <MobileMonthView {...defaultProps} events={multidayEvents} selectedDate="2025-11-27" />
    );
    expect(screen.getByText('All day')).toBeInTheDocument();

    rerender(
      <MobileMonthView {...defaultProps} events={multidayEvents} selectedDate="2025-11-29" />
    );
    expect(screen.getByText('All day')).toBeInTheDocument();
    expect(screen.queryByText('15:00 – 23:00')).not.toBeInTheDocument();
  });

  it('does not show a multi-day event that ends at midnight on its exclusive end date', () => {
    const multidayEvents: ScheduleEventData[] = [
      {
        id: 'event',
        title: 'Event',
        start: '2025-11-17 10:00:00',
        end: '2025-11-20',
        color: 'yellow',
        payload: {},
      },
    ];
    const { rerender } = render(
      <MobileMonthView {...defaultProps} events={multidayEvents} selectedDate="2025-11-19" />
    );

    expect(screen.getByText('All day')).toBeInTheDocument();

    rerender(
      <MobileMonthView {...defaultProps} events={multidayEvents} selectedDate="2025-11-20" />
    );
    expect(screen.getByText('No events')).toBeInTheDocument();
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

  it('calls onEventClick when event is clicked', async () => {
    const spy = jest.fn();
    render(<MobileMonthView {...defaultProps} onEventClick={spy} />);
    await userEvent.click(screen.getByText('Event 1'));
    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({ id: '1', title: 'Event 1' }),
      expect.any(Object)
    );
  });

  it('does not call onEventClick in static mode', async () => {
    const spy = jest.fn();
    render(<MobileMonthView {...defaultProps} onEventClick={spy} mode="static" />);
    await userEvent.click(screen.getByText('Event 1'));
    expect(spy).not.toHaveBeenCalled();
  });

  it('renders event title by default', () => {
    render(<MobileMonthView {...defaultProps} />);
    expect(screen.getByText('Event 1')).toBeInTheDocument();
    expect(screen.getByText('Event 2')).toBeInTheDocument();
  });

  it('supports renderEvent to customize event rendering', () => {
    render(
      <MobileMonthView
        {...defaultProps}
        renderEvent={(event, props) => (
          <button type="button" {...props} data-testid="custom-event">
            Custom: {event.title}
          </button>
        )}
      />
    );

    expect(screen.getAllByTestId('custom-event')).toHaveLength(2);
    expect(screen.getByText('Custom: Event 1')).toBeInTheDocument();
  });

  it('passes onClick to renderEvent props', async () => {
    const spy = jest.fn();
    render(
      <MobileMonthView
        {...defaultProps}
        onEventClick={spy}
        renderEvent={(_event, props) => (
          <button type="button" {...props} data-testid="custom-event" />
        )}
      />
    );

    await userEvent.click(screen.getAllByTestId('custom-event')[0]);
    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({ id: '1', title: 'Event 1' }),
      expect.any(Object)
    );
  });

  it('supports renderHeader to customize header', () => {
    render(
      <MobileMonthView
        {...defaultProps}
        renderHeader={({ defaultHeader }) => (
          <div data-testid="custom-header">
            {defaultHeader}
            <button type="button">+</button>
          </div>
        )}
      />
    );

    expect(screen.getByTestId('custom-header')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument();
  });

  it('renders default header when renderHeader is not provided', () => {
    const { container } = render(<MobileMonthView {...defaultProps} />);
    expect(
      container.querySelector('.mantine-MobileMonthView-mobileMonthViewHeader')
    ).toBeInTheDocument();
  });

  it('passes mode and date to renderHeader function', () => {
    const spy = jest.fn(
      ({ defaultHeader }: { defaultHeader: React.ReactNode }) =>
        (<div data-testid="wrapper">{defaultHeader}</div>) as React.ReactElement
    );
    const { container } = render(<MobileMonthView {...defaultProps} renderHeader={spy} />);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({
        mode: 'default',
        date: '2025-11-01',
        defaultHeader: expect.anything(),
      })
    );
    expect(
      container.querySelector('.mantine-MobileMonthView-mobileMonthViewHeader')
    ).toBeInTheDocument();
  });

  describe('withWeekendDays', () => {
    const getDays = (container: HTMLElement) =>
      container.querySelectorAll('.mantine-MobileMonthView-mobileMonthViewDay');
    const getWeekdays = (container: HTMLElement) =>
      container.querySelectorAll('.mantine-MobileMonthView-mobileMonthViewWeekday');
    const getRoot = (container: HTMLElement) =>
      container.querySelector('.mantine-MobileMonthView-mobileMonthView') as HTMLElement;

    it('renders all 7 columns by default', () => {
      const { container } = render(<MobileMonthView {...defaultProps} />);
      expect(getWeekdays(container)).toHaveLength(7);
      expect(getDays(container)).toHaveLength(42);
      expect(getRoot(container)).not.toHaveAttribute('data-without-weekend-days');
      expect(getRoot(container).style.getPropertyValue('--mobile-month-view-columns')).toBe('');
    });

    it('hides weekend days when withWeekendDays is false', () => {
      const { container } = render(
        <MobileMonthView {...defaultProps} withWeekendDays={false} weekdayFormat="dddd" />
      );
      const weekdays = getWeekdays(container);

      expect(weekdays).toHaveLength(5);
      expect(weekdays[0].textContent).toBe('Monday');
      expect(weekdays[4].textContent).toBe('Friday');
      getDays(container).forEach((day) => expect(day).not.toHaveAttribute('data-weekend'));
      expect(screen.queryByRole('button', { name: 'November 1, 2025' })).not.toBeInTheDocument();
      expect(screen.queryByRole('button', { name: 'November 2, 2025' })).not.toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'November 3, 2025' })).toBeInTheDocument();
    });

    it('sets data attribute and columns variable on the root when weekend days are hidden', () => {
      const { container } = render(<MobileMonthView {...defaultProps} withWeekendDays={false} />);
      expect(getRoot(container)).toHaveAttribute('data-without-weekend-days');
      expect(getRoot(container).style.getPropertyValue('--mobile-month-view-columns')).toBe('5');
    });

    it('drops weeks without visible days and keeps 6 weeks with consistentWeeks', () => {
      // Nov 1 and 2, 2025 are Saturday and Sunday – the first week has no visible days
      const { container } = render(<MobileMonthView {...defaultProps} withWeekendDays={false} />);
      const weeks = container.querySelectorAll('.mantine-MobileMonthView-mobileMonthViewWeek');

      expect(weeks).toHaveLength(6);
      expect(weeks[0].querySelector('button[aria-label="November 3, 2025"]')).toBeInTheDocument();
      expect(getDays(container)).toHaveLength(30);
    });

    it('drops weeks without visible days without padding when consistentWeeks is false', () => {
      const { container } = render(
        <MobileMonthView {...defaultProps} withWeekendDays={false} consistentWeeks={false} />
      );
      const weeks = container.querySelectorAll('.mantine-MobileMonthView-mobileMonthViewWeek');

      expect(weeks).toHaveLength(4);
      expect(getDays(container)).toHaveLength(20);
      expect(
        container.querySelectorAll('.mantine-MobileMonthView-mobileMonthViewDay[data-hidden]')
      ).toHaveLength(0);
    });

    it('respects custom weekendDays and firstDayOfWeek', () => {
      const { container } = render(
        <MobileMonthView
          {...defaultProps}
          withWeekendDays={false}
          weekendDays={[1, 2]}
          firstDayOfWeek={0}
          weekdayFormat="dddd"
        />
      );
      const weekdays = getWeekdays(container);

      expect(weekdays).toHaveLength(5);
      expect(weekdays[0].textContent).toBe('Sunday');
      expect(weekdays[1].textContent).toBe('Wednesday');
      expect(weekdays[4].textContent).toBe('Saturday');
      expect(screen.queryByRole('button', { name: 'November 3, 2025' })).not.toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'November 2, 2025' })).toBeInTheDocument();
    });

    it('hides weekend days when withWeekendDays is false and withOutsideDays is set', () => {
      const { container } = render(
        <MobileMonthView {...defaultProps} withWeekendDays={false} withOutsideDays />
      );

      expect(getDays(container)).toHaveLength(30);
      expect(
        container.querySelectorAll('.mantine-MobileMonthView-mobileMonthViewDay[data-outside]')
      ).toHaveLength(10);
      expect(screen.getByRole('button', { name: 'October 31, 2025' })).toBeInTheDocument();
    });

    it('shows event indicators only on visible days', () => {
      const events: ScheduleEventData[] = [
        {
          id: 'weekday',
          title: 'Weekday event',
          start: '2025-11-05 10:00:00',
          end: '2025-11-05 11:00:00',
          color: 'red',
          payload: {},
        },
        {
          id: 'weekend',
          title: 'Weekend event',
          start: '2025-11-08 10:00:00',
          end: '2025-11-08 11:00:00',
          color: 'blue',
          payload: {},
        },
      ];

      render(<MobileMonthView {...defaultProps} withWeekendDays={false} events={events} />);

      const nov5 = screen.getByRole('button', { name: 'November 5, 2025' });
      expect(
        nov5.querySelectorAll('.mantine-MobileMonthView-mobileMonthViewDayIndicator')
      ).toHaveLength(1);
      expect(screen.queryByRole('button', { name: 'November 8, 2025' })).not.toBeInTheDocument();
    });

    it('puts the first visible day of the month in tab order', () => {
      // Nov 1, 2025 is a Saturday, so the first focusable day is Nov 3 (Monday)
      render(<MobileMonthView {...defaultProps} withWeekendDays={false} />);

      expect(screen.getByRole('button', { name: 'November 3, 2025' })).toHaveAttribute(
        'tabIndex',
        '0'
      );
      expect(screen.getByRole('button', { name: 'November 4, 2025' })).toHaveAttribute(
        'tabIndex',
        '-1'
      );
    });

    it('skips hidden weekend days with keyboard navigation', async () => {
      render(<MobileMonthView {...defaultProps} withWeekendDays={false} />);

      // Nov 7 is Friday, the last visible column in a Monday-start week
      screen.getByRole('button', { name: 'November 7, 2025' }).focus();
      await userEvent.keyboard('{ArrowRight}');
      expect(screen.getByRole('button', { name: 'November 10, 2025' })).toHaveFocus();

      await userEvent.keyboard('{ArrowLeft}');
      expect(screen.getByRole('button', { name: 'November 7, 2025' })).toHaveFocus();

      await userEvent.keyboard('{ArrowDown}');
      expect(screen.getByRole('button', { name: 'November 14, 2025' })).toHaveFocus();
    });

    it('keeps keyboard navigation working after toggling withWeekendDays at runtime', async () => {
      const { rerender } = render(<MobileMonthView {...defaultProps} />);
      rerender(
        <>
          <MobileMonthView {...defaultProps} withWeekendDays={false} />
        </>
      );

      screen.getByRole('button', { name: 'November 7, 2025' }).focus();
      await userEvent.keyboard('{ArrowRight}');
      expect(screen.getByRole('button', { name: 'November 10, 2025' })).toHaveFocus();
    });

    it('updates the tab order day when date changes', () => {
      const { rerender } = render(<MobileMonthView {...defaultProps} />);
      expect(screen.getByRole('button', { name: 'November 1, 2025' })).toHaveAttribute(
        'tabIndex',
        '0'
      );

      rerender(
        <>
          <MobileMonthView {...defaultProps} date="2025-12-01" selectedDate="2025-12-01" />
        </>
      );
      expect(screen.getByRole('button', { name: 'December 1, 2025' })).toHaveAttribute(
        'tabIndex',
        '0'
      );
      expect(screen.getByRole('button', { name: 'December 6, 2025' })).toHaveAttribute(
        'tabIndex',
        '-1'
      );
    });
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
