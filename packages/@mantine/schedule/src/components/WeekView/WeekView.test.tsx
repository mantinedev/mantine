import 'dayjs/locale/ru';

import dayjs from 'dayjs';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { toDateString } from '../../utils';
import { ScheduleProvider } from '../Schedule/Schedule.context';
import { WeekView, WeekViewProps, WeekViewStylesNames } from './WeekView';

const defaultProps: WeekViewProps = {
  date: '2025-11-03 00:00:00',
};

describe('@mantine/schedule/WeekView', () => {
  tests.itSupportsSystemProps<WeekViewProps, WeekViewStylesNames>({
    component: WeekView,
    props: defaultProps,
    displayName: '@mantine/schedule/WeekView',
    stylesApiSelectors: [
      'weekView',
      'weekViewRoot',
      'weekViewHeader',
      'weekViewInner',
      'weekViewAllDaySlots',
      'weekViewAllDaySlotsLabel',
      'weekViewScrollArea',
      'weekViewCorner',
      'weekViewSlotLabels',
      'weekViewSlotLabel',
      'weekViewDayLabel',
      'weekViewDayWeekday',
      'weekViewDay',
      'weekViewDayNumber',
      'weekViewDaySlot',
      'weekViewDaySlots',
      'weekViewWeekLabel',
      'weekViewWeekNumber',
    ],
  });

  it('renders view of the given week', () => {
    const { container } = render(<WeekView {...defaultProps} />);
    expect(container.querySelectorAll('.mantine-WeekView-weekViewDay')).toHaveLength(7);
    expect(screen.getByRole('button', { name: 'Weekday 2025-11-03' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'All day 2025-11-05' })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Time slot 2025-11-09 10:00:00 - 11:00:00' })
    ).toBeInTheDocument();
  });

  it('supports custom start and end time', () => {
    const { container } = render(
      <WeekView {...defaultProps} startTime="08:00:00" endTime="12:00:00" withAllDaySlots={false} />
    );
    // 7 days * 4 slots = 28 regular slots, all-day slots are disabled
    expect(container.querySelectorAll('.mantine-WeekView-weekViewDaySlot')).toHaveLength(28);
    expect(
      screen.getByRole('button', { name: 'Time slot 2025-11-06 08:00:00 - 09:00:00' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Time slot 2025-11-09 11:00:00 - 12:00:00' })
    ).toBeInTheDocument();
  });

  it('supports custom intervalMinutes prop', () => {
    const { container } = render(
      <WeekView
        {...defaultProps}
        startTime="08:00:00"
        endTime="12:00:00"
        withAllDaySlots={false}
        intervalMinutes={15}
      />
    );

    // 7 days * 16 slots = 112 regular slots, all-day slots are disabled
    expect(container.querySelectorAll('.mantine-WeekView-weekViewDaySlot')).toHaveLength(112);
    expect(
      screen.getByRole('button', { name: 'Time slot 2025-11-04 08:00:00 - 08:15:00' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Time slot 2025-11-07 11:45:00 - 12:00:00' })
    ).toBeInTheDocument();
  });

  it('supports custom slotLabelFormat (dayjs string)', () => {
    render(
      <WeekView
        {...defaultProps}
        startTime="08:00:00"
        endTime="12:00:00"
        withAllDaySlots={false}
        slotLabelFormat="h:mm A"
      />
    );

    expect(screen.getByText('8:00 AM')).toBeInTheDocument();
    expect(screen.getByText('11:00 AM')).toBeInTheDocument();
  });

  it('supports custom slotLabelFormat (function)', () => {
    render(
      <WeekView
        {...defaultProps}
        startTime="08:00:00"
        endTime="12:00:00"
        withAllDaySlots={false}
        slotLabelFormat={(date) => `Test ${dayjs(date).format('HH:mm A')}`}
      />
    );

    expect(screen.getByText('Test 08:00 AM')).toBeInTheDocument();
    expect(screen.getByText('Test 11:00 AM')).toBeInTheDocument();
  });

  it('supports custom firstDayOfWeek (prop)', () => {
    const { container } = render(<WeekView {...defaultProps} firstDayOfWeek={0} />);
    expect(
      container
        .querySelectorAll('.mantine-WeekView-weekViewDayLabel')[0]
        ?.getAttribute('aria-label')
    ).toBe('Weekday 2025-11-02');
  });

  it('supports custom firstDayOfWeek (ScheduleProvider)', () => {
    const { container } = render(
      <ScheduleProvider firstDayOfWeek={0}>
        <WeekView {...defaultProps} />
      </ScheduleProvider>
    );

    expect(
      container
        .querySelectorAll('.mantine-WeekView-weekViewDayLabel')[0]
        ?.getAttribute('aria-label')
    ).toBe('Weekday 2025-11-02');
  });

  it('supports custom weekdayFormat (dayjs string)', () => {
    const { container } = render(<WeekView {...defaultProps} weekdayFormat="dddd" />);
    expect(container.querySelector('.mantine-WeekView-weekViewDayWeekday')).toHaveTextContent(
      'Monday'
    );
  });

  it('supports custom weekdayFormat (function)', () => {
    const { container } = render(
      <WeekView
        {...defaultProps}
        weekdayFormat={(date) => `Test ${dayjs(date).format('DD.MM.YYYY')}`}
      />
    );
    expect(container.querySelector('.mantine-WeekView-weekViewDayWeekday')).toHaveTextContent(
      'Test 03.11.2025'
    );
  });

  it('supports weekendDays (prop)', () => {
    const { container } = render(<WeekView {...defaultProps} weekendDays={[1, 2]} />);
    const weekends = container.querySelectorAll('.mantine-WeekView-weekViewDayLabel[data-weekend]');
    expect(weekends).toHaveLength(2);
    expect(weekends[0]?.getAttribute('aria-label')).toBe('Weekday 2025-11-03');
    expect(weekends[1]?.getAttribute('aria-label')).toBe('Weekday 2025-11-04');
  });

  it('supports weekendDays (ScheduleProvider)', () => {
    const { container } = render(
      <ScheduleProvider weekendDays={[1, 2]}>
        <WeekView {...defaultProps} />
      </ScheduleProvider>
    );

    const weekends = container.querySelectorAll('.mantine-WeekView-weekViewDayLabel[data-weekend]');
    expect(weekends).toHaveLength(2);
    expect(weekends[0]?.getAttribute('aria-label')).toBe('Weekday 2025-11-03');
    expect(weekends[1]?.getAttribute('aria-label')).toBe('Weekday 2025-11-04');
  });

  it('supports withWeekendDays={false}', () => {
    const { container, rerender } = render(<WeekView {...defaultProps} withWeekendDays={false} />);
    const days = container.querySelectorAll('.mantine-WeekView-weekViewDayLabel');
    expect(days).toHaveLength(5);
    expect(days[0]?.getAttribute('aria-label')).toBe('Weekday 2025-11-03');
    expect(days[4]?.getAttribute('aria-label')).toBe('Weekday 2025-11-07');

    rerender(<WeekView {...defaultProps} withWeekendDays={false} weekendDays={[1, 2, 3]} />);
    const daysWithCustomWeekend = container.querySelectorAll('.mantine-WeekView-weekViewDayLabel');
    expect(daysWithCustomWeekend).toHaveLength(4);
    expect(daysWithCustomWeekend[0].getAttribute('aria-label')).toBe('Weekday 2025-11-06');
    expect(daysWithCustomWeekend[daysWithCustomWeekend.length - 1].getAttribute('aria-label')).toBe(
      'Weekday 2025-11-09'
    );
  });

  it('highlights today based on highlightToday prop', () => {
    jest.useFakeTimers().setSystemTime(new Date(defaultProps.date));
    const { container, rerender } = render(<WeekView {...defaultProps} highlightToday="weekday" />);
    expect(
      container.querySelector('.mantine-WeekView-weekViewDayLabel[data-today]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('.mantine-WeekView-weekViewDaySlots[data-today]')
    ).not.toBeInTheDocument();

    rerender(<WeekView {...defaultProps} highlightToday="column" />);
    expect(
      container.querySelector('.mantine-WeekView-weekViewDayLabel[data-today]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('.mantine-WeekView-weekViewDaySlots[data-today]')
    ).toBeInTheDocument();

    rerender(<WeekView {...defaultProps} highlightToday={false} />);
    expect(
      container.querySelector('.mantine-WeekView-weekViewDayLabel[data-today]')
    ).not.toBeInTheDocument();
    expect(
      container.querySelector('.mantine-WeekView-weekViewDaySlots[data-today]')
    ).not.toBeInTheDocument();

    jest.useRealTimers();
  });

  it('passes props down to ScrollArea', () => {
    const { container } = render(
      <WeekView {...defaultProps} scrollAreaProps={{ 'data-test': 'scroll-area', mah: 500 }} />
    );

    expect(container.querySelector('[data-test="scroll-area"]')).toBeInTheDocument();
  });

  it('supports locale (prop)', () => {
    const { container } = render(<WeekView {...defaultProps} locale="ru" />);
    expect(container.querySelector('.mantine-WeekView-weekViewDayWeekday')).toHaveTextContent(
      'пнд'
    );
  });

  it('supports locale (ScheduleProvider)', () => {
    const { container } = render(
      <ScheduleProvider locale="ru">
        <WeekView {...defaultProps} />
      </ScheduleProvider>
    );
    expect(container.querySelector('.mantine-WeekView-weekViewDayWeekday')).toHaveTextContent(
      'пнд'
    );
  });

  it('supports withWeekNumber={false}', () => {
    const { container, rerender } = render(<WeekView {...defaultProps} withWeekNumber={false} />);
    expect(container.querySelector('.mantine-WeekView-weekViewWeekLabel')).not.toBeInTheDocument();

    rerender(<WeekView {...defaultProps} withWeekNumber />);
    expect(container.querySelector('.mantine-WeekView-weekViewWeekLabel')).toBeInTheDocument();
  });

  it('displays current time indicator', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-11-05 10:30:00'));
    const { container, rerender } = render(<WeekView {...defaultProps} withCurrentTimeIndicator />);

    expect(container.querySelector('.mantine-WeekView-currentTimeIndicator')).toBeInTheDocument();

    rerender(<WeekView {...defaultProps} withCurrentTimeIndicator={false} />);
    expect(
      container.querySelector('.mantine-WeekView-currentTimeIndicator')
    ).not.toBeInTheDocument();
    jest.useRealTimers();
  });

  it('supports withCurrentTimeBubble={false}', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-11-05 10:30:00'));
    const { container, rerender } = render(
      <WeekView {...defaultProps} withCurrentTimeIndicator withCurrentTimeBubble={false} />
    );

    expect(
      container.querySelector('.mantine-WeekView-currentTimeIndicatorTimeBubble')
    ).not.toBeInTheDocument();

    rerender(<WeekView {...defaultProps} withCurrentTimeIndicator withCurrentTimeBubble />);
    expect(
      container.querySelector('.mantine-WeekView-currentTimeIndicatorTimeBubble')
    ).toBeInTheDocument();
    jest.useRealTimers();
  });

  it('supports withAllDaySlots={false}', () => {
    const { container, rerender } = render(<WeekView {...defaultProps} withAllDaySlots={false} />);
    expect(
      container.querySelector('.mantine-WeekView-weekViewAllDaySlots')
    ).not.toBeInTheDocument();

    rerender(<WeekView {...defaultProps} withAllDaySlots />);
    expect(container.querySelector('.mantine-WeekView-weekViewAllDaySlots')).toBeInTheDocument();
  });

  it('supports __staticSelector prop', () => {
    const { container } = render(<WeekView {...defaultProps} __staticSelector="CustomWeekView" />);
    expect(container.querySelector('.mantine-CustomWeekView-weekView')).toBeInTheDocument();
  });

  it('renders header based on withHeader prop', () => {
    const { container, rerender } = render(<WeekView {...defaultProps} withHeader={false} />);
    expect(container.querySelector('.mantine-WeekView-header')).not.toBeInTheDocument();

    rerender(<WeekView {...defaultProps} withHeader />);
    expect(container.querySelector('.mantine-WeekView-header')).toBeInTheDocument();
  });

  it('supports todayControlProps, nextControlProps, previousControlProps and viewSelectProps props', () => {
    const { container } = render(
      <WeekView
        {...defaultProps}
        todayControlProps={{ 'data-today-prop': 'test' }}
        nextControlProps={{ 'data-next-prop': 'test' }}
        previousControlProps={{ 'data-previous-prop': 'test' }}
        viewSelectProps={{ 'data-view-select-prop': 'test' }}
      />
    );

    expect(
      container.querySelector('button.mantine-WeekView-headerControl[data-today-prop]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('button.mantine-WeekView-headerControl[data-next-prop]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('button.mantine-WeekView-headerControl[data-previous-prop]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('.mantine-WeekView-viewSelect[data-view-select-prop]')
    ).toBeInTheDocument();
  });

  it('calls onDateChange when navigating with header controls', async () => {
    const spy = jest.fn();
    render(<WeekView {...defaultProps} onDateChange={spy} />);

    await userEvent.click(screen.getByRole('button', { name: 'Previous' }));
    expect(spy).toHaveBeenCalledWith(toDateString(dayjs('2025-10-27 00:00:00')));

    await userEvent.click(screen.getByRole('button', { name: 'Next' }));
    expect(spy).toHaveBeenCalledWith(toDateString(dayjs('2025-11-10 00:00:00')));

    await userEvent.click(screen.getByRole('button', { name: 'Today' }));
    expect(spy).toHaveBeenCalledWith(expect.any(String));
  });

  it('calls onViewChange when view button is clicked', async () => {
    const spy = jest.fn();
    render(<WeekView {...defaultProps} onViewChange={spy} />);
    await userEvent.click(screen.getByRole('button', { name: 'Switch to day view' }));
    expect(spy).toHaveBeenCalledWith('day');
  });
});
