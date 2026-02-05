import 'dayjs/locale/ru';

import dayjs from 'dayjs';
import { DatesProvider } from '@mantine/dates';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { toDateString } from '../../utils';
import { WeekView, WeekViewProps, WeekViewStylesNames } from './WeekView';

const defaultProps: WeekViewProps = {
  date: '2025-11-03 00:00:00',
};

describe('@mantine/schedule/WeekView', () => {
  tests.itSupportsSystemProps<WeekViewProps, WeekViewStylesNames>({
    component: WeekView,
    props: defaultProps,
    varsResolver: true,
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

  it('supports custom firstDayOfWeek (DatesProvider)', () => {
    const { container } = render(
      <DatesProvider settings={{ firstDayOfWeek: 0 }}>
        <WeekView {...defaultProps} />
      </DatesProvider>
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

  it('supports weekendDays (DatesProvider)', () => {
    const { container } = render(
      <DatesProvider settings={{ weekendDays: [1, 2] }}>
        <WeekView {...defaultProps} />
      </DatesProvider>
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

  it('supports locale (DatesProvider)', () => {
    const { container } = render(
      <DatesProvider settings={{ locale: 'ru' }}>
        <WeekView {...defaultProps} />
      </DatesProvider>
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

  it('supports custom labels prop for header elements', () => {
    render(
      <WeekView
        {...defaultProps}
        labels={{
          today: 'Hoy',
          previous: 'Anterior',
          next: 'Siguiente',
          switchToDayView: 'Ver día',
          switchToWeekView: 'Ver semana',
          switchToMonthView: 'Ver mes',
          switchToYearView: 'Ver año',
        }}
      />
    );

    expect(screen.getByRole('button', { name: 'Hoy' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Anterior' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Siguiente' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Ver día' })).toBeInTheDocument();
  });

  it('supports custom renderWeekLabel', () => {
    const { container } = render(
      <WeekView
        {...defaultProps}
        date="2025-11-03"
        renderWeekLabel={({ weekStart, weekEnd }) => (
          <span data-week-label>
            {dayjs(weekStart).format('DD')} - {dayjs(weekEnd).format('DD')}
          </span>
        )}
      />
    );

    const label = container.querySelector('[data-week-label]');
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent('03 - 09');
  });

  describe('keyboard navigation', () => {
    it('only first slot should be in tab order', () => {
      render(
        <WeekView
          {...defaultProps}
          startTime="08:00:00"
          endTime="10:00:00"
          withAllDaySlots={false}
        />
      );

      expect(
        screen.getByRole('button', { name: 'Time slot 2025-11-03 08:00:00 - 09:00:00' })
      ).toHaveAttribute('tabIndex', '0');
      expect(
        screen.getByRole('button', { name: 'Time slot 2025-11-03 09:00:00 - 10:00:00' })
      ).toHaveAttribute('tabIndex', '-1');
      expect(
        screen.getByRole('button', { name: 'Time slot 2025-11-04 08:00:00 - 09:00:00' })
      ).toHaveAttribute('tabIndex', '-1');
    });

    it('supports ArrowDown/ArrowUp to navigate between time slots', async () => {
      render(
        <WeekView
          {...defaultProps}
          startTime="08:00:00"
          endTime="10:00:00"
          withAllDaySlots={false}
        />
      );

      screen.getByRole('button', { name: 'Time slot 2025-11-03 08:00:00 - 09:00:00' }).focus();
      await userEvent.keyboard('{ArrowDown}');
      expect(
        screen.getByRole('button', { name: 'Time slot 2025-11-03 09:00:00 - 10:00:00' })
      ).toHaveFocus();

      await userEvent.keyboard('{ArrowUp}');
      expect(
        screen.getByRole('button', { name: 'Time slot 2025-11-03 08:00:00 - 09:00:00' })
      ).toHaveFocus();
    });

    it('supports ArrowRight/ArrowLeft to navigate between days', async () => {
      render(
        <WeekView
          {...defaultProps}
          startTime="08:00:00"
          endTime="10:00:00"
          withAllDaySlots={false}
        />
      );

      screen.getByRole('button', { name: 'Time slot 2025-11-03 08:00:00 - 09:00:00' }).focus();
      await userEvent.keyboard('{ArrowRight}');
      expect(
        screen.getByRole('button', { name: 'Time slot 2025-11-04 08:00:00 - 09:00:00' })
      ).toHaveFocus();

      await userEvent.keyboard('{ArrowLeft}');
      expect(
        screen.getByRole('button', { name: 'Time slot 2025-11-03 08:00:00 - 09:00:00' })
      ).toHaveFocus();
    });

    it('does not move focus past boundaries', async () => {
      render(
        <WeekView
          {...defaultProps}
          startTime="08:00:00"
          endTime="10:00:00"
          withAllDaySlots={false}
        />
      );

      // First slot - ArrowUp and ArrowLeft should not move
      const firstSlot = screen.getByRole('button', {
        name: 'Time slot 2025-11-03 08:00:00 - 09:00:00',
      });
      firstSlot.focus();
      await userEvent.keyboard('{ArrowUp}');
      expect(firstSlot).toHaveFocus();
      await userEvent.keyboard('{ArrowLeft}');
      expect(firstSlot).toHaveFocus();

      // Last slot - ArrowDown should not move
      const lastSlot = screen.getByRole('button', {
        name: 'Time slot 2025-11-03 09:00:00 - 10:00:00',
      });
      lastSlot.focus();
      await userEvent.keyboard('{ArrowDown}');
      expect(lastSlot).toHaveFocus();

      // Last day - ArrowRight should not move
      const lastDaySlot = screen.getByRole('button', {
        name: 'Time slot 2025-11-09 08:00:00 - 09:00:00',
      });
      lastDaySlot.focus();
      await userEvent.keyboard('{ArrowRight}');
      expect(lastDaySlot).toHaveFocus();
    });

    it('does not navigate with arrow keys in static mode', () => {
      render(
        <WeekView
          {...defaultProps}
          startTime="08:00:00"
          endTime="10:00:00"
          withAllDaySlots={false}
          mode="static"
        />
      );

      const slots = screen
        .getAllByRole('button')
        .filter((btn) => btn.classList.contains('mantine-WeekView-weekViewDaySlot'));

      slots.forEach((slot) => {
        expect(slot).toHaveAttribute('tabIndex', '-1');
      });
    });
  });

  describe('weekdays row keyboard navigation', () => {
    it('only first weekday should be in tab order', () => {
      render(<WeekView {...defaultProps} />);

      expect(screen.getByRole('button', { name: 'Weekday 2025-11-03' })).toHaveAttribute(
        'tabIndex',
        '0'
      );
      expect(screen.getByRole('button', { name: 'Weekday 2025-11-04' })).toHaveAttribute(
        'tabIndex',
        '-1'
      );
    });

    it('supports ArrowRight/ArrowLeft to navigate between weekdays', async () => {
      render(<WeekView {...defaultProps} />);

      screen.getByRole('button', { name: 'Weekday 2025-11-03' }).focus();
      await userEvent.keyboard('{ArrowRight}');
      expect(screen.getByRole('button', { name: 'Weekday 2025-11-04' })).toHaveFocus();

      await userEvent.keyboard('{ArrowLeft}');
      expect(screen.getByRole('button', { name: 'Weekday 2025-11-03' })).toHaveFocus();
    });

    it('does not move focus past boundaries', async () => {
      render(<WeekView {...defaultProps} />);

      const firstWeekday = screen.getByRole('button', { name: 'Weekday 2025-11-03' });
      firstWeekday.focus();
      await userEvent.keyboard('{ArrowLeft}');
      expect(firstWeekday).toHaveFocus();

      const lastWeekday = screen.getByRole('button', { name: 'Weekday 2025-11-09' });
      lastWeekday.focus();
      await userEvent.keyboard('{ArrowRight}');
      expect(lastWeekday).toHaveFocus();
    });

    it('does not navigate weekdays in static mode', () => {
      render(<WeekView {...defaultProps} mode="static" />);
      expect(screen.getByRole('button', { name: 'Weekday 2025-11-03' })).toHaveAttribute(
        'tabIndex',
        '-1'
      );
    });
  });

  describe('all-day slots keyboard navigation', () => {
    it('only first all-day slot should be in tab order', () => {
      render(<WeekView {...defaultProps} withAllDaySlots />);

      expect(screen.getByRole('button', { name: 'All day 2025-11-03' })).toHaveAttribute(
        'tabIndex',
        '0'
      );
      expect(screen.getByRole('button', { name: 'All day 2025-11-04' })).toHaveAttribute(
        'tabIndex',
        '-1'
      );
    });

    it('supports ArrowRight/ArrowLeft to navigate between all-day slots', async () => {
      render(<WeekView {...defaultProps} withAllDaySlots />);

      screen.getByRole('button', { name: 'All day 2025-11-03' }).focus();
      await userEvent.keyboard('{ArrowRight}');
      expect(screen.getByRole('button', { name: 'All day 2025-11-04' })).toHaveFocus();

      await userEvent.keyboard('{ArrowLeft}');
      expect(screen.getByRole('button', { name: 'All day 2025-11-03' })).toHaveFocus();
    });

    it('supports ArrowDown/ArrowUp to navigate between all-day slot and time slots', async () => {
      render(
        <WeekView {...defaultProps} withAllDaySlots startTime="08:00:00" endTime="10:00:00" />
      );

      screen.getByRole('button', { name: 'All day 2025-11-03' }).focus();
      await userEvent.keyboard('{ArrowDown}');
      expect(
        screen.getByRole('button', { name: 'Time slot 2025-11-03 08:00:00 - 09:00:00' })
      ).toHaveFocus();

      await userEvent.keyboard('{ArrowUp}');
      expect(screen.getByRole('button', { name: 'All day 2025-11-03' })).toHaveFocus();
    });

    it('does not move focus past boundaries', async () => {
      render(<WeekView {...defaultProps} withAllDaySlots />);

      const firstAllDaySlot = screen.getByRole('button', { name: 'All day 2025-11-03' });
      firstAllDaySlot.focus();
      await userEvent.keyboard('{ArrowLeft}');
      expect(firstAllDaySlot).toHaveFocus();

      const lastAllDaySlot = screen.getByRole('button', { name: 'All day 2025-11-09' });
      lastAllDaySlot.focus();
      await userEvent.keyboard('{ArrowRight}');
      expect(lastAllDaySlot).toHaveFocus();
    });
  });

  describe('event interaction callbacks', () => {
    const eventsData = [
      {
        id: 1,
        title: 'Test Event',
        start: '2025-11-03 09:00:00',
        end: '2025-11-03 10:00:00',
        color: 'blue',
        payload: {},
      },
    ];

    it('calls onTimeSlotClick when time slot is clicked', async () => {
      const spy = jest.fn();
      const { container } = render(<WeekView {...defaultProps} onTimeSlotClick={spy} />);

      const slot = container.querySelector(
        '.mantine-WeekView-weekViewDaySlot[data-hour-start]'
      ) as HTMLButtonElement;
      expect(slot).toBeInTheDocument();
      await userEvent.click(slot);

      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(expect.any(Date), expect.any(Date), expect.any(Object));

      const [start, end] = spy.mock.calls[0];
      expect(start).toBeInstanceOf(Date);
      expect(end).toBeInstanceOf(Date);
      expect(end.getTime()).toBeGreaterThan(start.getTime());
    });

    it('calls onAllDaySlotClick when all-day slot is clicked', async () => {
      const spy = jest.fn();
      const { container } = render(<WeekView {...defaultProps} onAllDaySlotClick={spy} />);

      const allDaySlots = container.querySelectorAll('.mantine-WeekView-weekViewDaySlot');
      const allDaySlot = Array.from(allDaySlots).find(
        (slot) => !slot.hasAttribute('data-hour-start')
      ) as HTMLButtonElement;
      expect(allDaySlot).toBeInTheDocument();
      await userEvent.click(allDaySlot);

      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(expect.any(Date), expect.any(Object));
    });

    it('calls onEventClick when event is clicked', async () => {
      const spy = jest.fn();
      render(<WeekView {...defaultProps} events={eventsData} onEventClick={spy} />);

      const event = screen.getByText('Test Event');
      await userEvent.click(event);

      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(
        expect.objectContaining({
          id: expect.anything(),
          title: expect.any(String),
        }),
        expect.any(Object)
      );
    });

    it('does not call callbacks in static mode', async () => {
      const timeSlotSpy = jest.fn();
      const allDaySlotSpy = jest.fn();
      const eventSpy = jest.fn();

      const { container } = render(
        <WeekView
          {...defaultProps}
          mode="static"
          events={eventsData}
          onTimeSlotClick={timeSlotSpy}
          onAllDaySlotClick={allDaySlotSpy}
          onEventClick={eventSpy}
        />
      );

      const slot = container.querySelector(
        '.mantine-WeekView-weekViewDaySlot'
      ) as HTMLButtonElement;

      expect(slot).toBeInTheDocument();

      await userEvent.click(slot);

      expect(timeSlotSpy).not.toHaveBeenCalled();
      expect(allDaySlotSpy).not.toHaveBeenCalled();
      // Note: We don't test event clicks in static mode because ScheduleEvent
      // handles that internally by setting onClick to undefined when mode is static
    });
  });
});
