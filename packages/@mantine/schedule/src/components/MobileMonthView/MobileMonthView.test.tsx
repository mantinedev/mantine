import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import React from 'react';
import { act } from '@testing-library/react';
import { DirectionProvider } from '@mantine/core';
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
    render(<MobileMonthView {...defaultProps} weekendDays={[1, 2]} />);
    expect(screen.getByRole('button', { name: 'November 3, 2025' })).toHaveAttribute(
      'data-weekend'
    );
    expect(screen.getByRole('button', { name: 'November 4, 2025' })).toHaveAttribute(
      'data-weekend'
    );
    expect(screen.getByRole('button', { name: 'November 2, 2025' })).not.toHaveAttribute(
      'data-weekend'
    );
    expect(screen.getByRole('button', { name: 'November 8, 2025' })).not.toHaveAttribute(
      'data-weekend'
    );
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

  describe('keyboard navigation', () => {
    it('only first day should be in tab order when no day is selected', () => {
      render(<MobileMonthView {...defaultProps} selectedDate={null} />);

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

  describe('roving tab stop', () => {
    const getTabStops = (container: HTMLElement) =>
      Array.from(
        container.querySelectorAll<HTMLButtonElement>(
          '.mantine-MobileMonthView-mobileMonthViewDay[tabindex="0"]'
        )
      ).map((node) => node.getAttribute('aria-label'));

    it('uses the selected day as the tab stop', () => {
      const { container } = render(<MobileMonthView {...defaultProps} />);
      expect(getTabStops(container)).toEqual(['November 5, 2025']);
    });

    it('uses the first day of the month when the selected day is in another month', () => {
      const { container } = render(<MobileMonthView {...defaultProps} selectedDate="2025-10-20" />);
      expect(getTabStops(container)).toEqual(['November 1, 2025']);
    });

    it('uses the first day of the month when nothing is selected', () => {
      const { container } = render(<MobileMonthView {...defaultProps} selectedDate={null} />);
      expect(getTabStops(container)).toEqual(['November 1, 2025']);
    });

    it('keeps exactly one visible tab stop after a controlled date change', () => {
      const { container, rerender } = render(
        <MobileMonthView {...defaultProps} date="2025-12-01" selectedDate={null} />
      );
      expect(getTabStops(container)).toEqual(['December 1, 2025']);

      rerender(<MobileMonthView {...defaultProps} date="2025-11-01" selectedDate={null} />);
      expect(getTabStops(container)).toEqual(['November 1, 2025']);
    });

    it('makes the day focused with arrow keys the new tab stop', async () => {
      const { container } = render(<MobileMonthView {...defaultProps} />);
      screen.getByRole('button', { name: 'November 5, 2025' }).focus();
      await userEvent.keyboard('{ArrowRight}{ArrowDown}');
      expect(screen.getByRole('button', { name: 'November 13, 2025' })).toHaveFocus();
      expect(getTabStops(container)).toEqual(['November 13, 2025']);
    });

    it('resets the arrow-focused tab stop when the month changes', async () => {
      const { container, rerender } = render(
        <MobileMonthView {...defaultProps} selectedDate={null} />
      );
      screen.getByRole('button', { name: 'November 1, 2025' }).focus();
      await userEvent.keyboard('{ArrowRight}');
      expect(getTabStops(container)).toEqual(['November 2, 2025']);

      rerender(<MobileMonthView {...defaultProps} date="2025-12-01" selectedDate={null} />);
      expect(getTabStops(container)).toEqual(['December 1, 2025']);

      rerender(<MobileMonthView {...defaultProps} date="2025-11-01" selectedDate={null} />);
      expect(getTabStops(container)).toEqual(['November 1, 2025']);
    });

    it('allows an outside day to be the tab stop when outside days are shown', () => {
      const { container } = render(
        <MobileMonthView {...defaultProps} withOutsideDays selectedDate="2025-10-27" />
      );
      expect(getTabStops(container)).toEqual(['October 27, 2025']);
    });
  });

  it('calls onDateChange with the clicked day', async () => {
    const spy = jest.fn();
    render(<MobileMonthView {...defaultProps} withOutsideDays onDateChange={spy} />);
    await userEvent.click(screen.getByRole('button', { name: 'November 12, 2025' }));
    expect(spy).toHaveBeenLastCalledWith('2025-11-12');

    await userEvent.click(screen.getByRole('button', { name: 'December 3, 2025' }));
    expect(spy).toHaveBeenLastCalledWith('2025-12-03');
  });

  it('hides the week number of a week that has no visible days', () => {
    render(<MobileMonthView {...defaultProps} date="2026-02-01" />);
    const weekButtons = screen.getAllByRole('button', { name: /^Week \d+$/ });
    expect(weekButtons).toHaveLength(5);
  });

  it('supports weekNumber label override', () => {
    render(
      <MobileMonthView
        {...defaultProps}
        labels={{ weekNumber: (weekNumber) => `Semaine ${weekNumber}` }}
      />
    );
    expect(screen.getByRole('button', { name: 'Semaine 44' })).toBeInTheDocument();
  });

  describe('outside days events', () => {
    it('lists events of a selected outside day', async () => {
      render(
        <MobileMonthView
          date="2026-10-01"
          withOutsideDays
          events={[
            {
              id: 'n',
              title: 'Outside event',
              start: '2026-11-01 10:00:00',
              end: '2026-11-01 11:00:00',
              color: 'blue',
            },
          ]}
        />
      );

      await userEvent.click(screen.getByRole('button', { name: 'November 1, 2026' }));
      expect(screen.getByText('Outside event')).toBeInTheDocument();
    });

    it('uses firstDayOfWeek to find the displayed outside days', async () => {
      render(
        <MobileMonthView
          date="2026-10-01"
          firstDayOfWeek={0}
          withOutsideDays
          events={[
            {
              id: 's',
              title: 'Sunday event',
              start: '2026-09-27 10:00:00',
              end: '2026-09-27 11:00:00',
              color: 'blue',
            },
          ]}
        />
      );

      await userEvent.click(screen.getByRole('button', { name: 'September 27, 2026' }));
      expect(screen.getByText('Sunday event')).toBeInTheDocument();
    });

    it('expands recurring events on outside days', async () => {
      render(
        <MobileMonthView
          date="2026-10-01"
          withOutsideDays
          events={[
            {
              id: 'r',
              title: 'Recurring event',
              start: '2026-10-30 10:00:00',
              end: '2026-10-30 11:00:00',
              color: 'blue',
              recurrence: { rrule: 'FREQ=DAILY;COUNT=5' },
            },
          ]}
        />
      );

      await userEvent.click(screen.getByRole('button', { name: 'November 2, 2026' }));
      expect(screen.getByText('Recurring event')).toBeInTheDocument();
    });
  });
});

describe('@mantine/schedule/MobileMonthView disabled days and month changes', () => {
  const getTabStops = (container: HTMLElement) =>
    Array.from(
      container.querySelectorAll<HTMLButtonElement>(
        '.mantine-MobileMonthView-mobileMonthViewDay[tabindex="0"]'
      )
    ).map((node) => node.getAttribute('aria-label'));

  const disableWeekends = (date: string) => ({ disabled: [0, 6].includes(dayjs(date).day()) });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('does not use a disabled today as the tab stop', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-11-01T12:00:00'));
    const { container } = render(
      <MobileMonthView date="2025-11-01" getDayProps={disableWeekends} />
    );
    expect(getTabStops(container)).toEqual(['November 3, 2025']);
  });

  it('does not use a disabled selected day as the tab stop', () => {
    const { container } = render(
      <MobileMonthView date="2025-11-01" selectedDate="2025-11-08" getDayProps={disableWeekends} />
    );
    expect(getTabStops(container)).toEqual(['November 3, 2025']);
  });

  it('renders no tab stop when every visible day is disabled', () => {
    const { container } = render(
      <MobileMonthView date="2025-11-01" getDayProps={() => ({ disabled: true })} />
    );
    expect(getTabStops(container)).toEqual([]);
  });

  function ControlledMonth({ withOutsideDays = true }: { withOutsideDays?: boolean }) {
    const [date, setDate] = React.useState('2025-10-01');
    return (
      <MobileMonthView
        date={date}
        onDateChange={(value) => setDate(dayjs(value).startOf('month').format('YYYY-MM-DD'))}
        withOutsideDays={withOutsideDays}
        selectedDate={null}
      />
    );
  }

  it('keeps focus on an outside day selected with a click after the month changes', async () => {
    render(<ControlledMonth />);
    await userEvent.click(screen.getByRole('button', { name: 'November 1, 2025' }));
    expect(screen.getByText('November 2025')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'November 1, 2025' })).toHaveFocus();
  });

  it('keeps focus on an outside day selected with Enter after the month changes', async () => {
    render(<ControlledMonth />);
    screen.getByRole('button', { name: 'October 31, 2025' }).focus();
    await userEvent.keyboard('{ArrowRight}{Enter}');
    expect(screen.getByText('November 2025')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'November 1, 2025' })).toHaveFocus();
  });

  it('does not move focus back to a day selected in the current month on a later render', async () => {
    let rerender = () => {};
    function Wrapper() {
      const [tick, setTick] = React.useState(0);
      rerender = () => setTick(tick + 1);
      return <ControlledMonth key="month" />;
    }

    render(<Wrapper />);
    const day = screen.getByRole('button', { name: 'October 15, 2025' });
    await userEvent.click(day);
    await userEvent.click(day);
    day.blur();
    expect(document.body).toHaveFocus();
    act(() => rerender());
    expect(document.body).toHaveFocus();
  });

  it('lists events of a selected day that is outside the displayed weeks', () => {
    render(
      <MobileMonthView
        date="2025-11-01"
        selectedDate="2025-10-15"
        events={[
          {
            id: 'o',
            title: 'October event',
            start: '2025-10-15 10:00:00',
            end: '2025-10-15 11:00:00',
            color: 'blue',
          },
        ]}
      />
    );
    expect(screen.getByText('October event')).toBeInTheDocument();
  });

  it('lists recurring events of a selected day that is outside the displayed weeks', () => {
    render(
      <MobileMonthView
        date="2025-11-01"
        selectedDate="2025-10-15"
        events={[
          {
            id: 'r',
            title: 'Weekly event',
            start: '2025-09-03 10:00:00',
            end: '2025-09-03 11:00:00',
            color: 'blue',
            recurrence: { rrule: 'FREQ=WEEKLY;COUNT=20' },
          },
        ]}
      />
    );
    expect(screen.getByText('Weekly event')).toBeInTheDocument();
  });
});

describe('@mantine/schedule/MobileMonthView RTL arrow keys', () => {
  it('mirrors ArrowLeft and ArrowRight', async () => {
    render(
      <DirectionProvider initialDirection="rtl">
        <MobileMonthView {...defaultProps} />
      </DirectionProvider>
    );

    screen.getByRole('button', { name: 'November 12, 2025' }).focus();
    await userEvent.keyboard('{ArrowLeft}');
    expect(screen.getByRole('button', { name: 'November 13, 2025' })).toHaveFocus();
    await userEvent.keyboard('{ArrowRight}{ArrowRight}');
    expect(screen.getByRole('button', { name: 'November 11, 2025' })).toHaveFocus();
  });
});
