import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { act, createEvent, fireEvent } from '@testing-library/react';
import { DirectionProvider, MantineProvider, UnstyledButton } from '@mantine/core';
import { DatesProvider } from '@mantine/dates';
import { render, screen, userEvent } from '@mantine-tests/core';
import { toDateString } from '../../utils';
import { ResourcesWeekView, ResourcesWeekViewProps } from './ResourcesWeekView';

const resources = [
  { id: 'room-a', label: 'Room A' },
  { id: 'room-b', label: 'Room B' },
];

const defaultProps: ResourcesWeekViewProps = {
  date: '2025-01-15',
  resources,
  startTime: '08:00:00',
  endTime: '12:00:00',
  intervalMinutes: 60,
};

describe('@mantine/schedule/ResourcesWeekView', () => {
  it('renders slots as focusable buttons that do not submit forms', () => {
    const { container } = render(<ResourcesWeekView {...defaultProps} />);
    const slot = container.querySelector('.mantine-ResourcesWeekView-resourcesWeekViewRowSlot')!;
    expect(slot.tagName).toBe('BUTTON');
    expect(slot).toHaveAttribute('type', 'button');
    expect(slot).toHaveClass('mantine-focus-auto', UnstyledButton.classes.root);
  });

  it('renders resource labels', () => {
    render(<ResourcesWeekView {...defaultProps} />);
    expect(screen.getByText('Room A')).toBeInTheDocument();
    expect(screen.getByText('Room B')).toBeInTheDocument();
  });

  it('renders day column headers', () => {
    render(<ResourcesWeekView {...defaultProps} weekdayFormat="ddd D" />);
    expect(screen.getByText('Mon 13')).toBeInTheDocument();
    expect(screen.getByText('Tue 14')).toBeInTheDocument();
    expect(screen.getByText('Wed 15')).toBeInTheDocument();
    expect(screen.getByText('Thu 16')).toBeInTheDocument();
    expect(screen.getByText('Fri 17')).toBeInTheDocument();
  });

  it('renders "Resources" corner label', () => {
    render(<ResourcesWeekView {...defaultProps} />);
    expect(screen.getByText('Resources')).toBeInTheDocument();
  });

  it('renders events in correct resource row and day column', () => {
    const events = [
      {
        id: 1,
        title: 'Event in Room A Wed',
        start: '2025-01-15 09:00:00',
        end: '2025-01-15 10:00:00',
        color: 'blue',
        payload: {},
        resourceId: 'room-a',
      },
      {
        id: 2,
        title: 'Event in Room B Thu',
        start: '2025-01-16 10:00:00',
        end: '2025-01-16 11:00:00',
        color: 'red',
        payload: {},
        resourceId: 'room-b',
      },
    ];

    render(<ResourcesWeekView {...defaultProps} events={events} />);

    const getEventWrapper = (title: string) =>
      screen
        .getByText(title)
        .closest('.mantine-ResourcesWeekView-resourcesWeekViewEventWrapper') as HTMLElement;
    const getRowLabel = (element: HTMLElement) =>
      element
        .closest('.mantine-ResourcesWeekView-resourcesWeekViewRow')!
        .querySelector('.mantine-ResourcesWeekView-resourcesWeekViewResourceLabel');

    const eventA = getEventWrapper('Event in Room A Wed');
    const eventB = getEventWrapper('Event in Room B Thu');

    expect(getRowLabel(eventA)).toHaveTextContent('Room A');
    expect(getRowLabel(eventB)).toHaveTextContent('Room B');
    expect(parseFloat(eventA.style.insetInlineStart)).toBeCloseTo(
      (2 / 7) * 100 + (1 / 4) * (100 / 7),
      2
    );
    expect(parseFloat(eventB.style.insetInlineStart)).toBeCloseTo(
      (3 / 7) * 100 + (2 / 4) * (100 / 7),
      2
    );
  });

  it('renders all-day events as full-width bars', () => {
    const events = [
      {
        id: 'all-day-1',
        title: 'All Day in Room A',
        start: '2025-01-15 00:00:00',
        end: '2025-01-16 00:00:00',
        color: 'blue',
        payload: {},
        resourceId: 'room-a',
      },
    ];

    const { container } = render(<ResourcesWeekView {...defaultProps} events={events} />);
    expect(screen.getByText('All Day in Room A')).toBeInTheDocument();

    const bar = container.querySelector(
      '.mantine-ResourcesWeekView-resourcesWeekViewAllDayEvent'
    ) as HTMLElement;
    expect(bar).toBeInTheDocument();
    expect(parseFloat(bar.style.insetInlineStart.replace('calc(', ''))).toBeCloseTo(
      (2 / 7) * 100,
      2
    );
    expect(parseFloat(bar.style.width.replace('calc(', ''))).toBeCloseTo(100 / 7, 2);
  });

  it('calls onTimeSlotClick with slotStart, slotEnd, and resourceId', async () => {
    const spy = jest.fn();
    render(<ResourcesWeekView {...defaultProps} onTimeSlotClick={spy} />);

    const slot = screen.getAllByRole('button', {
      name: /Resource time slot Room A/,
    })[0];
    await userEvent.click(slot);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({
        slotStart: expect.any(String),
        slotEnd: expect.any(String),
        nativeEvent: expect.any(Object),
        resourceId: 'room-a',
      })
    );
  });

  it('calls onEventClick with correct event', async () => {
    const events = [
      {
        id: 1,
        title: 'Clickable Event',
        start: '2025-01-15 09:00:00',
        end: '2025-01-15 10:00:00',
        color: 'blue',
        payload: {},
        resourceId: 'room-a',
      },
    ];

    const spy = jest.fn();
    render(<ResourcesWeekView {...defaultProps} events={events} onEventClick={spy} />);

    await userEvent.click(screen.getByText('Clickable Event'));

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({
        id: 1,
        title: 'Clickable Event',
      }),
      expect.any(Object)
    );
  });

  it('calls onDateChange with previous week, next week, and today', async () => {
    const spy = jest.fn();
    render(<ResourcesWeekView {...defaultProps} onDateChange={spy} />);

    await userEvent.click(screen.getByRole('button', { name: 'Previous' }));
    expect(spy).toHaveBeenCalledWith(toDateString(dayjs('2025-01-06 00:00:00')));

    await userEvent.click(screen.getByRole('button', { name: 'Next' }));
    expect(spy).toHaveBeenCalledWith(toDateString(dayjs('2025-01-20 00:00:00')));

    await userEvent.click(screen.getByRole('button', { name: 'Today' }));
    expect(spy).toHaveBeenCalledWith(expect.any(String));
  });

  it('navigates to getCurrentTime date when Today control is clicked', async () => {
    const spy = jest.fn();
    render(
      <ResourcesWeekView
        {...defaultProps}
        onDateChange={spy}
        getCurrentTime={() => '2025-12-25 10:00:00'}
      />
    );

    await userEvent.click(screen.getByRole('button', { name: 'Today' }));
    expect(spy).toHaveBeenCalledWith(toDateString(dayjs('2025-12-25 10:00:00')));
  });

  it('calls onViewChange when view tab is clicked', async () => {
    const spy = jest.fn();
    render(<ResourcesWeekView {...defaultProps} onViewChange={spy} />);

    await userEvent.click(screen.getByRole('tab', { name: 'Switch to day view' }));
    expect(spy).toHaveBeenCalledWith('day');

    await userEvent.click(screen.getByRole('tab', { name: 'Switch to month view' }));
    expect(spy).toHaveBeenCalledWith('month');
  });

  it('does not render header when withHeader={false}', () => {
    const { container } = render(<ResourcesWeekView {...defaultProps} withHeader={false} />);
    expect(container.querySelector('.mantine-ResourcesWeekView-header')).not.toBeInTheDocument();
  });

  it('changes slot count based on startTime, endTime, and intervalMinutes', () => {
    const { container } = render(
      <ResourcesWeekView
        {...defaultProps}
        startTime="09:00:00"
        endTime="11:00:00"
        intervalMinutes={30}
      />
    );

    const slots = container.querySelectorAll('.mantine-ResourcesWeekView-resourcesWeekViewRowSlot');
    expect(slots).toHaveLength(2 * 4 * 7);
  });

  it('supports locale prop for day labels', () => {
    const { container } = render(<ResourcesWeekView {...defaultProps} locale="ru" />);
    const dayLabels = container.querySelectorAll(
      '.mantine-ResourcesWeekView-resourcesWeekViewDayLabel'
    );
    const texts = Array.from(dayLabels).map((el) => el.textContent);
    expect(texts.some((t) => /пн/i.test(t!))).toBe(true);
  });

  it('supports locale from DatesProvider', () => {
    const { container } = render(
      <DatesProvider settings={{ locale: 'ru' }}>
        <ResourcesWeekView {...defaultProps} />
      </DatesProvider>
    );
    const dayLabels = container.querySelectorAll(
      '.mantine-ResourcesWeekView-resourcesWeekViewDayLabel'
    );
    const texts = Array.from(dayLabels).map((el) => el.textContent);
    expect(texts.some((t) => /пн/i.test(t!))).toBe(true);
  });

  it('supports firstDayOfWeek to change visible week start', () => {
    const { container } = render(
      <ResourcesWeekView {...defaultProps} firstDayOfWeek={0} weekdayFormat="ddd D" />
    );
    const dayLabels = container.querySelectorAll(
      '.mantine-ResourcesWeekView-resourcesWeekViewDayLabel'
    );
    expect(dayLabels[0]).toHaveTextContent('Sun 12');
  });

  it('marks weekend days with data-weekend attribute', () => {
    const { container } = render(<ResourcesWeekView {...defaultProps} />);
    const weekendDays = container.querySelectorAll(
      '.mantine-ResourcesWeekView-resourcesWeekViewDayLabel[data-weekend]'
    );
    expect(weekendDays).toHaveLength(2);
  });

  it('hides weekend columns when withWeekendDays={false}', () => {
    const { container, rerender } = render(<ResourcesWeekView {...defaultProps} />);
    const allDays = container.querySelectorAll(
      '.mantine-ResourcesWeekView-resourcesWeekViewDayLabel'
    );
    expect(allDays).toHaveLength(7);

    rerender(<ResourcesWeekView {...defaultProps} withWeekendDays={false} />);
    const weekdaysOnly = container.querySelectorAll(
      '.mantine-ResourcesWeekView-resourcesWeekViewDayLabel'
    );
    expect(weekdaysOnly).toHaveLength(5);
  });

  it('supports weekdayFormat with callback', () => {
    const { container } = render(
      <ResourcesWeekView {...defaultProps} weekdayFormat={(date) => dayjs(date).format('dd')} />
    );
    const dayLabels = container.querySelectorAll(
      '.mantine-ResourcesWeekView-resourcesWeekViewDayLabel'
    );
    expect(dayLabels[0]).toHaveTextContent('Mo');
  });

  it('supports weekLabelFormat for header week label', () => {
    render(<ResourcesWeekView {...defaultProps} weekLabelFormat="DD MMM" />);
    expect(screen.getByText(/13 Jan.*19 Jan/)).toBeInTheDocument();
  });

  it('supports renderWeekLabel to replace default week label', () => {
    const { container } = render(
      <ResourcesWeekView
        {...defaultProps}
        renderWeekLabel={({ weekStart, weekEnd }) => (
          <span data-week-label>
            {dayjs(weekStart).format('DD')} - {dayjs(weekEnd).format('DD')}
          </span>
        )}
      />
    );

    const label = container.querySelector('[data-week-label]');
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent('13 - 19');
  });

  it('marks today with data-today attribute when highlightToday is true', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-01-15 12:00:00'));
    const { container, rerender } = render(<ResourcesWeekView {...defaultProps} highlightToday />);
    const todayLabels = container.querySelectorAll(
      '.mantine-ResourcesWeekView-resourcesWeekViewDayLabel[data-today]'
    );
    expect(todayLabels).toHaveLength(1);

    rerender(<ResourcesWeekView {...defaultProps} highlightToday={false} />);
    const noTodayLabels = container.querySelectorAll(
      '.mantine-ResourcesWeekView-resourcesWeekViewDayLabel[data-today]'
    );
    expect(noTodayLabels).toHaveLength(0);
    jest.useRealTimers();
  });

  it('marks today based on getCurrentTime', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-02-20 12:00:00'));

    const { container, rerender } = render(<ResourcesWeekView {...defaultProps} highlightToday />);
    expect(
      container.querySelectorAll('.mantine-ResourcesWeekView-resourcesWeekViewDayLabel[data-today]')
    ).toHaveLength(0);

    rerender(
      <ResourcesWeekView
        {...defaultProps}
        highlightToday
        getCurrentTime={() => '2025-01-15 12:00:00'}
      />
    );
    expect(
      container.querySelectorAll('.mantine-ResourcesWeekView-resourcesWeekViewDayLabel[data-today]')
    ).toHaveLength(1);

    jest.useRealTimers();
  });

  it('shows current time indicator when current time is within range', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-01-15 10:30:00'));
    const { container, rerender } = render(
      <ResourcesWeekView {...defaultProps} withCurrentTimeIndicator />
    );

    expect(
      container.querySelector('.mantine-ResourcesWeekView-resourcesWeekViewCurrentTimeIndicator')
    ).toBeInTheDocument();

    rerender(<ResourcesWeekView {...defaultProps} withCurrentTimeIndicator={false} />);
    expect(
      container.querySelector('.mantine-ResourcesWeekView-resourcesWeekViewCurrentTimeIndicator')
    ).not.toBeInTheDocument();
    jest.useRealTimers();
  });

  it('hides time bubble when withCurrentTimeBubble={false}', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-01-15 10:30:00'));
    const { container, rerender } = render(
      <ResourcesWeekView {...defaultProps} withCurrentTimeIndicator withCurrentTimeBubble={false} />
    );

    expect(
      container.querySelector(
        '.mantine-ResourcesWeekView-resourcesWeekViewCurrentTimeIndicatorTimeBubble'
      )
    ).not.toBeInTheDocument();
    expect(
      container.querySelector(
        '.mantine-ResourcesWeekView-resourcesWeekViewCurrentTimeIndicatorThumb'
      )
    ).toBeInTheDocument();

    rerender(
      <ResourcesWeekView {...defaultProps} withCurrentTimeIndicator withCurrentTimeBubble />
    );
    expect(
      container.querySelector(
        '.mantine-ResourcesWeekView-resourcesWeekViewCurrentTimeIndicatorTimeBubble'
      )
    ).toBeInTheDocument();
    jest.useRealTimers();
  });

  it('uses getCurrentTime to decide whether the indicator is displayed by default', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-02-20 10:30:00'));

    const { container, rerender } = render(<ResourcesWeekView {...defaultProps} />);
    expect(
      container.querySelector('.mantine-ResourcesWeekView-resourcesWeekViewCurrentTimeIndicator')
    ).not.toBeInTheDocument();

    rerender(<ResourcesWeekView {...defaultProps} getCurrentTime={() => '2025-01-15 10:30:00'} />);
    expect(
      container.querySelector('.mantine-ResourcesWeekView-resourcesWeekViewCurrentTimeIndicator')
    ).toBeInTheDocument();

    jest.useRealTimers();
  });

  it('uses getCurrentTime for the current time bubble', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-01-15 11:15:00'));

    const { container } = render(
      <ResourcesWeekView
        {...defaultProps}
        slotLabelFormat="HH:mm"
        withCurrentTimeIndicator
        withCurrentTimeBubble
        getCurrentTime={() => '2025-01-15 09:30:00'}
      />
    );

    expect(
      container.querySelector(
        '.mantine-ResourcesWeekView-resourcesWeekViewCurrentTimeIndicatorTimeBubble'
      )
    ).toHaveTextContent('09:30');

    jest.useRealTimers();
  });

  it('marks slots with business hours attributes when highlightBusinessHours is true', () => {
    const { container } = render(
      <ResourcesWeekView
        {...defaultProps}
        highlightBusinessHours
        businessHours={['09:00:00', '11:00:00']}
      />
    );

    const businessSlots = container.querySelectorAll(
      '.mantine-ResourcesWeekView-resourcesWeekViewRowSlot[data-business-hours]'
    );
    const nonBusinessSlots = container.querySelectorAll(
      '.mantine-ResourcesWeekView-resourcesWeekViewRowSlot[data-non-business-hours]'
    );
    expect(businessSlots).toHaveLength(2 * 7 * 2);
    expect(nonBusinessSlots).toHaveLength(2 * 7 * 2);
  });

  it('marks slots and time labels that contain a business hours boundary as partial', () => {
    const { container } = render(
      <ResourcesWeekView
        {...defaultProps}
        highlightBusinessHours
        businessHours={['09:30:00', '11:15']}
      />
    );

    const slots = container.querySelectorAll<HTMLElement>(
      '.mantine-ResourcesWeekView-resourcesWeekViewRowSlot[data-partial-business-hours]'
    );
    expect(slots).toHaveLength(resources.length * 7 * 2);
    expect(slots[0]).toHaveAttribute('aria-label', expect.stringContaining('09:00 - 10:00'));
    expect(slots[0].style.getPropertyValue('--business-hours-from')).toBe('50%');
    expect(slots[1].style.getPropertyValue('--business-hours-to')).toBe('25%');

    const labels = container.querySelectorAll<HTMLElement>(
      '.mantine-ResourcesWeekView-resourcesWeekViewTimeLabel[data-partial-business-hours]'
    );
    expect(labels).toHaveLength(7 * 2);
    expect(labels[0].style.getPropertyValue('--business-hours-from')).toBe('50%');
  });

  it('supports renderResourceLabel to replace resource labels', () => {
    render(
      <ResourcesWeekView
        {...defaultProps}
        renderResourceLabel={(resource) => <span>Custom: {resource.label}</span>}
      />
    );
    expect(screen.getByText('Custom: Room A')).toBeInTheDocument();
    expect(screen.getByText('Custom: Room B')).toBeInTheDocument();
  });

  it('supports renderEventBody to replace event body', () => {
    const events = [
      {
        id: 1,
        title: 'Original Title',
        start: '2025-01-15 09:00:00',
        end: '2025-01-15 10:00:00',
        color: 'blue',
        payload: { extra: 'info' },
        resourceId: 'room-a',
      },
    ];

    render(
      <ResourcesWeekView
        {...defaultProps}
        events={events}
        renderEventBody={(event) => <span>Custom: {event.title}</span>}
      />
    );
    expect(screen.getByText('Custom: Original Title')).toBeInTheDocument();
  });

  it('supports renderEvent for full custom event rendering', () => {
    const events = [
      {
        id: 1,
        title: 'Custom Rendered',
        start: '2025-01-15 09:00:00',
        end: '2025-01-15 10:00:00',
        color: 'blue',
        payload: {},
        resourceId: 'room-a',
      },
    ];

    render(
      <ResourcesWeekView
        {...defaultProps}
        events={events}
        renderEvent={(event, props) => (
          <button type="button" {...props} data-custom-event>
            {event.title}
          </button>
        )}
      />
    );
    expect(screen.getByText('Custom Rendered').closest('[data-custom-event]')).toBeInTheDocument();
  });

  it('supports labels override for corner label and slot aria-labels', () => {
    render(
      <ResourcesWeekView
        {...defaultProps}
        labels={{
          resources: 'Recursos',
          resourceSlot: 'Slot de recurso',
        }}
      />
    );

    expect(screen.getByText('Recursos')).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /Slot de recurso/ }).length).toBeGreaterThan(0);
  });

  describe('keyboard navigation', () => {
    it('moves focus right with ArrowRight', async () => {
      render(<ResourcesWeekView {...defaultProps} />);

      const firstSlot = screen.getAllByRole('button', {
        name: /Resource time slot Room A January 13, 2025/,
      })[0];
      firstSlot.focus();
      await userEvent.keyboard('{ArrowRight}');

      const nextSlot = screen.getAllByRole('button', {
        name: /Resource time slot Room A January 13, 2025/,
      })[1];
      expect(nextSlot).toHaveFocus();
    });

    it('moves focus down with ArrowDown to next resource', async () => {
      render(<ResourcesWeekView {...defaultProps} />);

      const roomASlot = screen.getAllByRole('button', {
        name: /Resource time slot Room A January 13, 2025/,
      })[0];
      roomASlot.focus();
      await userEvent.keyboard('{ArrowDown}');

      const roomBSlot = screen.getAllByRole('button', {
        name: /Resource time slot Room B January 13, 2025/,
      })[0];
      expect(roomBSlot).toHaveFocus();
    });
  });

  it('forwards scrollAreaProps to ScrollArea', () => {
    const { container } = render(
      <ResourcesWeekView {...defaultProps} scrollAreaProps={{ 'data-test': 'scroll-area' }} />
    );
    expect(container.querySelector('[data-test="scroll-area"]')).toBeInTheDocument();
  });

  it('forwards previousControlProps, nextControlProps, and todayControlProps', () => {
    const { container } = render(
      <ResourcesWeekView
        {...defaultProps}
        previousControlProps={{ 'data-previous-prop': 'test' }}
        nextControlProps={{ 'data-next-prop': 'test' }}
        todayControlProps={{ 'data-today-prop': 'test' }}
      />
    );

    expect(
      container.querySelector('button.mantine-ResourcesWeekView-headerControl[data-previous-prop]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('button.mantine-ResourcesWeekView-headerControl[data-next-prop]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('button.mantine-ResourcesWeekView-headerControl[data-today-prop]')
    ).toBeInTheDocument();
  });

  it('forwards viewSelectProps', () => {
    const { container } = render(
      <ResourcesWeekView {...defaultProps} viewSelectProps={{ 'data-view-select': 'test' }} />
    );
    expect(
      container.querySelector('.mantine-ResourcesWeekView-viewSelect[data-view-select]')
    ).toBeInTheDocument();
  });

  it('makes events draggable when withEventsDragAndDrop is true', () => {
    const events = [
      {
        id: 1,
        title: 'Draggable Event',
        start: '2025-01-15 09:00:00',
        end: '2025-01-15 10:00:00',
        color: 'blue',
        payload: {},
        resourceId: 'room-a',
      },
    ];

    render(<ResourcesWeekView {...defaultProps} events={events} withEventsDragAndDrop />);

    const event = screen.getByText('Draggable Event').closest('button');
    expect(event).toHaveAttribute('draggable', 'true');
  });

  it('prevents specific events from dragging with canDragEvent', () => {
    const events = [
      {
        id: 1,
        title: 'Non-Draggable',
        start: '2025-01-15 09:00:00',
        end: '2025-01-15 10:00:00',
        color: 'blue',
        payload: {},
        resourceId: 'room-a',
      },
      {
        id: 2,
        title: 'Draggable',
        start: '2025-01-15 10:00:00',
        end: '2025-01-15 11:00:00',
        color: 'red',
        payload: {},
        resourceId: 'room-a',
      },
    ];

    render(
      <ResourcesWeekView
        {...defaultProps}
        events={events}
        withEventsDragAndDrop
        canDragEvent={(event) => event.id !== 1}
      />
    );

    const nonDraggable = screen.getByText('Non-Draggable').closest('button');
    const draggable = screen.getByText('Draggable').closest('button');
    expect(nonDraggable).not.toHaveAttribute('draggable', 'true');
    expect(draggable).toHaveAttribute('draggable', 'true');
  });

  describe('event resize', () => {
    const resizeEvents = [
      {
        id: 1,
        title: 'Resizable Event',
        start: '2025-01-15 09:00:00',
        end: '2025-01-15 10:00:00',
        color: 'blue',
        payload: {},
        resourceId: 'room-a',
      },
    ];

    it('withEventResize renders resize handles', () => {
      const { container } = render(
        <ResourcesWeekView {...defaultProps} events={resizeEvents} withEventResize />
      );

      expect(
        container.querySelectorAll('.mantine-ResourcesWeekView-resourcesWeekViewResizeHandle')
          .length
      ).toBeGreaterThan(0);
    });

    it('does not render resize handles when withEventResize is not set', () => {
      const { container } = render(<ResourcesWeekView {...defaultProps} events={resizeEvents} />);

      expect(
        container.querySelectorAll('.mantine-ResourcesWeekView-resourcesWeekViewResizeHandle')
      ).toHaveLength(0);
    });

    it('canResizeEvent suppresses resize handles for blocked events', () => {
      const events = [
        {
          id: 1,
          title: 'No Resize',
          start: '2025-01-15 09:00:00',
          end: '2025-01-15 10:00:00',
          color: 'blue',
          payload: {},
          resourceId: 'room-a',
        },
        {
          id: 2,
          title: 'Can Resize',
          start: '2025-01-15 10:00:00',
          end: '2025-01-15 11:00:00',
          color: 'red',
          payload: {},
          resourceId: 'room-a',
        },
      ];

      const { container } = render(
        <ResourcesWeekView
          {...defaultProps}
          events={events}
          withEventResize
          canResizeEvent={(event) => event.id !== 1}
        />
      );

      // Only the "Can Resize" event renders its two (start/end) handles
      expect(
        container.querySelectorAll('.mantine-ResourcesWeekView-resourcesWeekViewResizeHandle')
      ).toHaveLength(2);
    });

    it('does not fire onEventClick for the click that ends a resize gesture', async () => {
      const spy = jest.fn();

      const { container } = render(
        <ResourcesWeekView
          {...defaultProps}
          events={resizeEvents}
          withEventResize
          onEventClick={spy}
        />
      );

      const handle = container.querySelector<HTMLElement>(
        '.mantine-ResourcesWeekView-resourcesWeekViewResizeHandle[data-edge="end"]'
      )!;

      fireEvent.pointerDown(handle);
      fireEvent.pointerUp(document);
      fireEvent.click(screen.getByText('Resizable Event'));

      expect(spy).not.toHaveBeenCalled();
    });

    it('mode="static" suppresses resize handles', () => {
      const { container } = render(
        <ResourcesWeekView {...defaultProps} mode="static" events={resizeEvents} withEventResize />
      );

      expect(
        container.querySelectorAll('.mantine-ResourcesWeekView-resourcesWeekViewResizeHandle')
      ).toHaveLength(0);
    });
  });

  describe('mode="static"', () => {
    it('suppresses slot clicks', async () => {
      const spy = jest.fn();
      render(<ResourcesWeekView {...defaultProps} mode="static" onTimeSlotClick={spy} />);

      const slot = screen
        .getAllByRole('button')
        .find((btn) =>
          btn.classList.contains('mantine-ResourcesWeekView-resourcesWeekViewRowSlot')
        )!;
      await userEvent.click(slot);
      expect(spy).not.toHaveBeenCalled();
    });

    it('suppresses event clicks', async () => {
      const events = [
        {
          id: 1,
          title: 'Static Event',
          start: '2025-01-15 09:00:00',
          end: '2025-01-15 10:00:00',
          color: 'blue',
          payload: {},
          resourceId: 'room-a',
        },
      ];

      const spy = jest.fn();
      render(
        <ResourcesWeekView {...defaultProps} mode="static" events={events} onEventClick={spy} />
      );

      const event = screen.getByText('Static Event').closest('button')!;
      expect(event).toHaveAttribute('tabIndex', '-1');
      await userEvent.click(event);
      expect(spy).not.toHaveBeenCalled();
    });

    it('sets all slots to tabIndex=-1 for keyboard nav suppression', () => {
      const { container } = render(<ResourcesWeekView {...defaultProps} mode="static" />);
      const slots = container.querySelectorAll(
        '.mantine-ResourcesWeekView-resourcesWeekViewRowSlot'
      );
      expect(slots).toHaveLength(4 * 7 * 2);
      slots.forEach((slot) => {
        expect(slot).toHaveAttribute('tabIndex', '-1');
      });
    });

    it('does not make events draggable', () => {
      const events = [
        {
          id: 1,
          title: 'Static Drag Event',
          start: '2025-01-15 09:00:00',
          end: '2025-01-15 10:00:00',
          color: 'blue',
          payload: {},
          resourceId: 'room-a',
        },
      ];

      render(
        <ResourcesWeekView {...defaultProps} mode="static" events={events} withEventsDragAndDrop />
      );

      const event = screen.getByText('Static Drag Event').closest('button');
      expect(event).not.toHaveAttribute('draggable', 'true');
    });
  });

  it('renders group labels when groups prop is provided', () => {
    const groups = [
      { label: 'Floor 1', resourceIds: ['room-a'] },
      { label: 'Floor 2', resourceIds: ['room-b'] },
    ];

    const { container } = render(<ResourcesWeekView {...defaultProps} groups={groups} />);

    expect(screen.getByText('Floor 1')).toBeInTheDocument();
    expect(screen.getByText('Floor 2')).toBeInTheDocument();
    expect(
      container.querySelector('.mantine-ResourcesWeekView-resourcesWeekViewGroupColumn')
    ).toBeInTheDocument();
  });

  it('does not render group column when groups prop is not provided', () => {
    const { container } = render(<ResourcesWeekView {...defaultProps} />);
    expect(
      container.querySelector('.mantine-ResourcesWeekView-resourcesWeekViewGroupColumn')
    ).not.toBeInTheDocument();
  });

  it('supports renderGroupLabel callback', () => {
    const groups = [{ label: 'Floor 1', resourceIds: ['room-a', 'room-b'] }];

    render(
      <ResourcesWeekView
        {...defaultProps}
        groups={groups}
        renderGroupLabel={(group) => <span data-testid="custom-group">{group.label} Custom</span>}
      />
    );

    expect(screen.getByText('Floor 1 Custom')).toBeInTheDocument();
  });

  it('renders ungrouped resources without group label', () => {
    const threeResources = [
      { id: 'room-a', label: 'Room A' },
      { id: 'room-b', label: 'Room B' },
      { id: 'room-c', label: 'Room C' },
    ];
    const groups = [{ label: 'Floor 1', resourceIds: ['room-a', 'room-b'] }];

    const { container } = render(
      <ResourcesWeekView {...defaultProps} resources={threeResources} groups={groups} />
    );

    expect(screen.getByText('Floor 1')).toBeInTheDocument();
    expect(screen.getByText('Room C')).toBeInTheDocument();
    const emptyGroupCells = container.querySelectorAll(
      '.mantine-ResourcesWeekView-resourcesWeekViewGroupColumnEmpty'
    );
    expect(emptyGroupCells.length).toBe(1);
  });

  describe('maxEventsPerTimeSlot', () => {
    const overlappingEvents = [
      {
        id: 1,
        title: 'Event 1',
        start: '2025-01-15 09:00:00',
        end: '2025-01-15 11:00:00',
        color: 'blue',
        payload: {},
        resourceId: 'room-a',
      },
      {
        id: 2,
        title: 'Event 2',
        start: '2025-01-15 09:00:00',
        end: '2025-01-15 11:00:00',
        color: 'red',
        payload: {},
        resourceId: 'room-a',
      },
      {
        id: 3,
        title: 'Event 3',
        start: '2025-01-15 09:00:00',
        end: '2025-01-15 11:00:00',
        color: 'green',
        payload: {},
        resourceId: 'room-a',
      },
    ];

    it('uses default maxEventsPerTimeSlot of 2', () => {
      render(<ResourcesWeekView {...defaultProps} events={overlappingEvents} />);

      expect(screen.getByText('Event 1')).toBeInTheDocument();
      expect(screen.getByText('Event 2')).toBeInTheDocument();
      expect(screen.queryByText('Event 3')).not.toBeInTheDocument();
      expect(screen.getByRole('button', { name: /\+1 more/ })).toBeInTheDocument();
    });

    it('shows correct hidden events count', () => {
      render(
        <ResourcesWeekView {...defaultProps} events={overlappingEvents} maxEventsPerTimeSlot={1} />
      );

      expect(screen.getByText('Event 1')).toBeInTheDocument();
      expect(screen.queryByText('Event 2')).not.toBeInTheDocument();
      expect(screen.queryByText('Event 3')).not.toBeInTheDocument();
      expect(screen.getByRole('button', { name: /\+2 more/ })).toBeInTheDocument();
    });

    it('does not show "+more" for transitively overlapping events within the limit', () => {
      const chainEvents = [
        {
          id: 1,
          title: 'Workshop',
          start: '2025-01-15 09:00:00',
          end: '2025-01-15 11:00:00',
          color: 'pink',
          payload: {},
          resourceId: 'room-a',
        },
        {
          id: 2,
          title: 'Design Review',
          start: '2025-01-15 09:30:00',
          end: '2025-01-15 10:30:00',
          color: 'orange',
          payload: {},
          resourceId: 'room-a',
        },
        {
          id: 3,
          title: 'Retrospective',
          start: '2025-01-15 10:30:00',
          end: '2025-01-15 11:30:00',
          color: 'violet',
          payload: {},
          resourceId: 'room-a',
        },
      ];

      render(<ResourcesWeekView {...defaultProps} events={chainEvents} maxEventsPerTimeSlot={2} />);

      expect(screen.getByText('Workshop')).toBeInTheDocument();
      expect(screen.getByText('Design Review')).toBeInTheDocument();
      expect(screen.getByText('Retrospective')).toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /more/ })).not.toBeInTheDocument();
    });

    it('shows all events in MoreEvents dropdown when clicked', async () => {
      render(
        <ResourcesWeekView {...defaultProps} events={overlappingEvents} maxEventsPerTimeSlot={1} />
      );

      await userEvent.click(screen.getByRole('button', { name: /more/ }));

      expect(screen.getAllByText('Event 1')).toHaveLength(2);
      expect(screen.getByText('Event 2')).toBeInTheDocument();
      expect(screen.getByText('Event 3')).toBeInTheDocument();
    });

    it('passes moreEventsProps to MoreEvents component', async () => {
      render(
        <ResourcesWeekView
          {...defaultProps}
          events={overlappingEvents}
          maxEventsPerTimeSlot={1}
          moreEventsProps={{ dropdownType: 'modal', modalTitle: 'Hidden events' }}
        />
      );

      await userEvent.click(screen.getByRole('button', { name: /more/ }));

      expect(screen.getByRole('heading', { name: 'Hidden events' })).toBeInTheDocument();
    });

    it('forwards renderEventBody to MoreEvents', async () => {
      render(
        <ResourcesWeekView
          {...defaultProps}
          events={overlappingEvents}
          maxEventsPerTimeSlot={1}
          renderEventBody={(event) => <span>Body[{event.title}]</span>}
        />
      );

      await userEvent.click(screen.getByRole('button', { name: /more/ }));
      expect(screen.getByText('Body[Event 3]')).toBeInTheDocument();
    });

    it('forwards renderEvent to MoreEvents', async () => {
      render(
        <ResourcesWeekView
          {...defaultProps}
          events={overlappingEvents}
          maxEventsPerTimeSlot={1}
          renderEvent={(event, props) => (
            <a href={`#event-${event.id}`} data-testid={`custom-event-${event.id}`}>
              {props.children}
            </a>
          )}
        />
      );

      await userEvent.click(screen.getByRole('button', { name: /more/ }));

      const customized = screen.getByTestId('custom-event-3');
      expect(customized.tagName).toBe('A');
      expect(customized).toHaveAttribute('href', '#event-3');
    });

    it('forwards onEventClick to MoreEvents', async () => {
      const spy = jest.fn();
      render(
        <ResourcesWeekView
          {...defaultProps}
          events={overlappingEvents}
          maxEventsPerTimeSlot={1}
          onEventClick={spy}
        />
      );

      await userEvent.click(screen.getByRole('button', { name: /more/ }));
      await userEvent.click(screen.getByText('Event 3'));

      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(
        expect.objectContaining({ id: 3, title: 'Event 3' }),
        expect.any(Object)
      );
    });

    it('forwards labels to MoreEvents', () => {
      render(
        <ResourcesWeekView
          {...defaultProps}
          events={overlappingEvents}
          maxEventsPerTimeSlot={1}
          labels={{ moreLabel: (count) => `${count} hidden` }}
        />
      );

      expect(screen.getByRole('button', { name: '2 hidden' })).toBeInTheDocument();
    });

    it('forwards styles api classNames to MoreEvents', () => {
      render(
        <ResourcesWeekView
          {...defaultProps}
          events={overlappingEvents}
          maxEventsPerTimeSlot={1}
          classNames={{ moreEventsButton: 'test-more-button' }}
        />
      );

      expect(screen.getByRole('button', { name: /more/ })).toHaveClass('test-more-button');
    });
  });

  describe('eventResizeInterval prop', () => {
    it('resizes on eventResizeInterval independently of intervalMinutes', () => {
      // The resize container is the whole resource row: 7 days x 240 minutes. 1680px makes
      // it exactly 1px per minute, so a day starts at `dayIndex * 240`.
      const rect = {
        top: 0,
        left: 0,
        right: 1680,
        bottom: 240,
        width: 1680,
        height: 240,
        x: 0,
        y: 0,
        toJSON: () => {},
      };
      const spy = jest
        .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
        .mockReturnValue(rect as DOMRect);
      const onEventResize = jest.fn();

      const { container } = render(
        <ResourcesWeekView
          {...defaultProps}
          intervalMinutes={60}
          eventResizeInterval={15}
          withEventResize
          onEventResize={onEventResize}
          events={[
            {
              id: 1,
              title: 'Event',
              start: '2025-01-15 09:00:00',
              end: '2025-01-15 10:00:00',
              color: 'blue',
              payload: {},
              resourceId: 'room-a',
            },
          ]}
        />
      );

      const handle = container.querySelector('[data-edge="end"]')!;
      fireEvent.pointerDown(handle);
      act(() => {
        // 2025-01-15 is a Wednesday, so its column starts at 2 * 240 = 480px. +165 min
        // lands on 10:45 - a 15-min boundary the 60-min grid interval could not produce
        document.dispatchEvent(new MouseEvent('pointermove', { clientX: 645 }));
        document.dispatchEvent(new MouseEvent('pointerup'));
      });

      expect(onEventResize).toHaveBeenCalledWith(
        expect.objectContaining({ newEnd: '2025-01-15 10:45:00' })
      );
      spy.mockRestore();
    });
  });

  describe('eventDragInterval prop', () => {
    const dragEvents = [
      {
        id: 1,
        title: 'E',
        start: '2025-01-15 09:00:00',
        end: '2025-01-15 10:00:00',
        color: 'blue',
        payload: {},
        resourceId: 'room-a',
      },
    ];

    const fireDrag = (node: Element, type: 'dragStart' | 'dragOver' | 'drop', clientX?: number) => {
      const event = createEvent[type](node);
      Object.defineProperty(event, 'dataTransfer', {
        value: {
          effectAllowed: 'move',
          types: ['application/json'],
          getData: jest.fn(),
          setData: jest.fn(),
        },
      });
      if (clientX !== undefined) {
        Object.defineProperty(event, 'clientX', { value: clientX, configurable: true });
      }
      fireEvent(node, event);
    };

    // Give the target row's slots distinct 30px-wide rects (clientX 165 -> slot 5, +15px -> 10:45).
    const mockRowSlotRects = (row: Element) => {
      Array.from(
        row.querySelectorAll('.mantine-ResourcesWeekView-resourcesWeekViewRowSlot')
      ).forEach((node, i) => {
        (node as HTMLElement).getBoundingClientRect = () =>
          ({
            top: 0,
            bottom: 30,
            left: i * 30,
            right: (i + 1) * 30,
            width: 30,
            height: 30,
            x: i * 30,
            y: 0,
            toJSON: () => {},
          }) as DOMRect;
      });
    };

    it('drops on eventDragInterval independently of intervalMinutes', () => {
      const onEventDrop = jest.fn();
      const { container } = render(
        <ResourcesWeekView
          date="2025-01-15"
          resources={resources}
          startTime="08:00:00"
          endTime="16:00:00"
          intervalMinutes={30}
          eventDragInterval={15}
          withEventsDragAndDrop
          onEventDrop={onEventDrop}
          events={dragEvents}
        />
      );

      const row = container.querySelectorAll(
        '.mantine-ResourcesWeekView-resourcesWeekViewRowSlots'
      )[0];
      mockRowSlotRects(row);
      const eventNode = container.querySelector('[data-event-id="1"]')!;

      fireDrag(eventNode, 'dragStart');
      fireDrag(row, 'drop', 165);

      expect(onEventDrop).toHaveBeenCalledWith(
        expect.objectContaining({ newStart: expect.stringContaining('10:45:00') })
      );
    });

    it('shows a drag ghost at the snapped position and clears it', () => {
      const { container } = render(
        <ResourcesWeekView
          date="2025-01-15"
          resources={resources}
          startTime="08:00:00"
          endTime="16:00:00"
          intervalMinutes={30}
          eventDragInterval={15}
          withEventsDragAndDrop
          onEventDrop={jest.fn()}
          events={dragEvents}
        />
      );

      const row = container.querySelectorAll(
        '.mantine-ResourcesWeekView-resourcesWeekViewRowSlots'
      )[0];
      mockRowSlotRects(row);
      const eventNode = container.querySelector('[data-event-id="1"]')!;

      fireDrag(eventNode, 'dragStart');
      fireDrag(row, 'dragOver', 165);

      expect(
        container.querySelector('.mantine-ResourcesWeekView-resourcesWeekViewDragPreview')
      ).toBeInTheDocument();

      fireEvent.dragLeave(row);
      expect(
        container.querySelector('.mantine-ResourcesWeekView-resourcesWeekViewDragPreview')
      ).not.toBeInTheDocument();
    });
  });

  describe('background events', () => {
    const backgroundEventProps: ResourcesWeekViewProps = {
      ...defaultProps,
      events: [
        {
          id: 'bg-1',
          title: 'Unavailable',
          start: '2025-01-15 09:00:00',
          end: '2025-01-15 10:00:00',
          color: 'gray',
          display: 'background',
          resourceId: 'room-a',
        },
      ],
    };

    it('renders background events as non-interactive divs by default', async () => {
      const spy = jest.fn();
      const { container } = render(
        <ResourcesWeekView {...backgroundEventProps} onEventClick={spy} />
      );
      const bgEvent = container.querySelector(
        '.mantine-ResourcesWeekView-resourcesWeekViewBackgroundEvent'
      )!;

      expect(bgEvent.tagName).toBe('DIV');
      await userEvent.click(bgEvent);
      expect(spy).not.toHaveBeenCalled();
    });

    it('calls onEventClick when a background event is clicked with withInteractiveBackgroundEvents', async () => {
      const spy = jest.fn();
      const { container } = render(
        <ResourcesWeekView
          {...backgroundEventProps}
          withInteractiveBackgroundEvents
          onEventClick={spy}
        />
      );
      const bgEvent = container.querySelector(
        '.mantine-ResourcesWeekView-resourcesWeekViewBackgroundEvent'
      )!;

      expect(bgEvent.tagName).toBe('BUTTON');
      await userEvent.click(bgEvent);
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy.mock.calls[0][0].id).toBe('bg-1');
    });

    it('does not make background events interactive in static mode', () => {
      const { container } = render(
        <ResourcesWeekView
          {...backgroundEventProps}
          withInteractiveBackgroundEvents
          mode="static"
        />
      );
      expect(
        container.querySelector('.mantine-ResourcesWeekView-resourcesWeekViewBackgroundEvent')!
          .tagName
      ).toBe('DIV');
    });

    const bgHandleSelector =
      '.mantine-ResourcesWeekView-resourcesWeekViewBackgroundEvent .mantine-ResourcesWeekView-resourcesWeekViewResizeHandle';

    it('renders resize handles with withEventResize and withInteractiveBackgroundEvents', () => {
      const { container } = render(
        <ResourcesWeekView
          {...backgroundEventProps}
          withEventResize
          withInteractiveBackgroundEvents
        />
      );

      const handles = container.querySelectorAll(bgHandleSelector);
      expect(handles).toHaveLength(2);
      expect(handles[0]).toHaveAttribute('data-edge', 'start');
      expect(handles[1]).toHaveAttribute('data-edge', 'end');
    });

    it('does not render resize handles without withInteractiveBackgroundEvents', () => {
      const { container } = render(<ResourcesWeekView {...backgroundEventProps} withEventResize />);
      expect(container.querySelector(bgHandleSelector)).not.toBeInTheDocument();
    });

    it('does not render resize handles on all day background events', () => {
      const { container } = render(
        <ResourcesWeekView
          {...defaultProps}
          withEventResize
          withInteractiveBackgroundEvents
          events={[
            {
              id: 'bg-all-day',
              title: 'Holiday',
              start: '2025-01-15 00:00:00',
              end: '2025-01-16 00:00:00',
              color: 'gray',
              display: 'background',
              resourceId: 'room-a',
            },
          ]}
        />
      );

      expect(container.querySelector(bgHandleSelector)).not.toBeInTheDocument();
    });

    it('calls onEventResize when a background event edge is dragged', () => {
      const spy = jest.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({
        top: 0,
        left: 0,
        right: 700,
        bottom: 100,
        width: 700,
        height: 100,
        x: 0,
        y: 0,
        toJSON: () => {},
      } as DOMRect);
      const onEventResize = jest.fn();

      const { container } = render(
        <ResourcesWeekView
          {...backgroundEventProps}
          withEventResize
          withInteractiveBackgroundEvents
          onEventResize={onEventResize}
        />
      );

      fireEvent.pointerDown(container.querySelectorAll(bgHandleSelector)[1]);
      act(() => {
        document.dispatchEvent(new MouseEvent('pointermove', { clientX: 275 }));
        document.dispatchEvent(new MouseEvent('pointerup'));
      });

      expect(onEventResize).toHaveBeenCalledWith(
        expect.objectContaining({
          eventId: 'bg-1',
          newStart: '2025-01-15 09:00:00',
          newEnd: '2025-01-15 11:00:00',
        })
      );
      spy.mockRestore();
    });
    describe('background events that cross midnight', () => {
      const crossingProps: ResourcesWeekViewProps = {
        date: '2025-01-15',
        resources,
        intervalMinutes: 60,
        withEventResize: true,
        withInteractiveBackgroundEvents: true,
        events: [
          {
            id: 'carry',
            title: 'Carry over',
            start: '2025-01-12 20:00:00',
            end: '2025-01-13 03:00:00',
            color: 'gray',
            display: 'background',
            resourceId: 'room-a',
          },
          {
            id: 'overnight',
            title: 'Overnight',
            start: '2025-01-14 22:00:00',
            end: '2025-01-15 02:00:00',
            color: 'gray',
            display: 'background',
            resourceId: 'room-a',
          },
        ],
      };

      const mockRect = () =>
        jest.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({
          top: 0,
          left: 0,
          right: 700,
          bottom: 100,
          width: 700,
          height: 100,
          x: 0,
          y: 0,
          toJSON: () => {},
        } as DOMRect);

      const getSegments = (container: HTMLElement, id: string) =>
        container.querySelectorAll(`[data-event-id="${id}"]`);

      const resize = (handle: Element, clientX: number) => {
        fireEvent.pointerDown(handle);
        act(() => {
          document.dispatchEvent(new MouseEvent('pointermove', { clientX }));
          document.dispatchEvent(new MouseEvent('pointerup'));
        });
      };

      it('renders a part of the event on every day it covers', () => {
        const { container } = render(<ResourcesWeekView {...crossingProps} />);
        expect(getSegments(container, 'overnight')).toHaveLength(2);
        expect(getSegments(container, 'carry')).toHaveLength(1);
      });

      it('marks the clipped edges of each part', () => {
        const { container } = render(<ResourcesWeekView {...crossingProps} />);
        const [tuesday, wednesday] = Array.from(getSegments(container, 'overnight'));
        expect(tuesday).toHaveAttribute('data-continues-after');
        expect(tuesday).not.toHaveAttribute('data-continues-before');
        expect(wednesday).toHaveAttribute('data-continues-before');
        expect(wednesday).not.toHaveAttribute('data-continues-after');
        expect(getSegments(container, 'carry')[0]).toHaveAttribute('data-continues-before');
      });

      it('does not resize the clipped edge of a part', () => {
        const spy = mockRect();
        const onEventResize = jest.fn();
        const { container } = render(
          <ResourcesWeekView {...crossingProps} onEventResize={onEventResize} />
        );

        resize(getSegments(container, 'carry')[0].querySelector('[data-edge="start"]')!, 20);
        resize(getSegments(container, 'overnight')[0].querySelector('[data-edge="end"]')!, 290);
        expect(onEventResize).not.toHaveBeenCalled();

        resize(getSegments(container, 'overnight')[1].querySelector('[data-edge="end"]')!, 310);
        expect(onEventResize).toHaveBeenCalledTimes(1);
        expect(onEventResize.mock.calls[0][0]).toMatchObject({
          eventId: 'overnight',
          newStart: '2025-01-14 22:00:00',
        });
        expect(onEventResize.mock.calls[0][0].newEnd).not.toBe('2025-01-15 02:00:00');
        spy.mockRestore();
      });
    });
  });

  describe('drop validation', () => {
    const movingEvent = {
      id: 1,
      title: 'Moving',
      start: '2025-01-15 09:00:00',
      end: '2025-01-15 10:00:00',
      color: 'blue',
      payload: {},
      resourceId: 'room-a',
    };

    // jsdom reports empty rects, so a drop on the Room B row resolves to its first slot:
    // 08:00 on Monday, the first day of the week.
    const blockingEvent = {
      id: 2,
      title: 'Blocking',
      start: '2025-01-13 08:30:00',
      end: '2025-01-13 09:30:00',
      color: 'red',
      payload: {},
      resourceId: 'room-b',
    };

    const fireDrag = (node: Element, type: 'dragStart' | 'drop') => {
      const event = createEvent[type](node);
      Object.defineProperty(event, 'dataTransfer', {
        value: {
          effectAllowed: 'move',
          types: ['application/json'],
          getData: jest.fn(),
          setData: jest.fn(),
        },
      });
      Object.defineProperty(event, 'clientX', { value: 0, configurable: true });
      Object.defineProperty(event, 'clientY', { value: 0, configurable: true });
      fireEvent(node, event);
    };

    const dropOnRoomBFirstSlot = (props: Partial<ResourcesWeekViewProps>) => {
      const { container } = render(
        <ResourcesWeekView
          {...defaultProps}
          withEventsDragAndDrop
          events={[movingEvent, blockingEvent]}
          {...props}
        />
      );

      const rowSlots = container.querySelectorAll(
        '.mantine-ResourcesWeekView-resourcesWeekViewRowSlots'
      );

      fireDrag(container.querySelector('[data-event-id="1"]')!, 'dragStart');
      fireDrag(rowSlots[1], 'drop');
    };

    it('calls onEventDrop with the target resource when the placement is allowed', () => {
      const onEventDrop = jest.fn();
      dropOnRoomBFirstSlot({ onEventDrop, preventEventOverlap: true, events: [movingEvent] });

      expect(onEventDrop).toHaveBeenCalledTimes(1);
      expect(onEventDrop.mock.calls[0][0]).toMatchObject({
        eventId: 1,
        newStart: '2025-01-13 08:00:00',
        resourceId: 'room-b',
      });
    });

    it('does not call onEventDrop when preventEventOverlap finds a conflict in the target resource', () => {
      const onEventDrop = jest.fn();
      const onEventPlacementRejected = jest.fn();
      dropOnRoomBFirstSlot({ onEventDrop, onEventPlacementRejected, preventEventOverlap: true });

      expect(onEventDrop).not.toHaveBeenCalled();
      expect(onEventPlacementRejected).toHaveBeenCalledTimes(1);
      expect(onEventPlacementRejected.mock.calls[0][0]).toMatchObject({
        action: 'drop',
        reason: 'overlap',
        resourceId: 'room-b',
      });
      expect(onEventPlacementRejected.mock.calls[0][0].conflicts[0].id).toBe(2);
    });

    it('does not call onEventDrop when canDropEvent returns false', () => {
      const onEventDrop = jest.fn();
      const canDropEvent = jest.fn(() => false);
      dropOnRoomBFirstSlot({ onEventDrop, canDropEvent });

      expect(canDropEvent).toHaveBeenCalledTimes(1);
      expect(canDropEvent).toHaveBeenCalledWith(expect.objectContaining({ resourceId: 'room-b' }));
      expect(onEventDrop).not.toHaveBeenCalled();
    });
  });

  it('formats slot aria-labels with a localized date and short times', () => {
    render(<ResourcesWeekView {...defaultProps} locale="ru" />);
    expect(
      screen.getByRole('button', {
        name: 'Resource time slot Room A январь 13, 2025 08:00 - 09:00',
      })
    ).toBeInTheDocument();
  });

  it('renders recurring instances once per occurrence', () => {
    render(
      <ResourcesWeekView
        {...defaultProps}
        events={[
          {
            id: 'daily',
            title: 'Daily',
            start: '2025-01-13 09:00:00',
            end: '2025-01-13 10:00:00',
            color: 'blue',
            payload: {},
            resourceId: 'room-a',
            recurrence: { rrule: 'FREQ=DAILY;COUNT=3' },
          },
        ]}
      />
    );
    expect(screen.getAllByText('Daily')).toHaveLength(3);
  });
});

describe('@mantine/schedule/ResourcesWeekView RTL arrow keys', () => {
  it('mirrors ArrowLeft and ArrowRight', async () => {
    render(
      <DirectionProvider initialDirection="rtl">
        <ResourcesWeekView {...defaultProps} />
      </DirectionProvider>
    );

    const slots = screen.getAllByRole('button', {
      name: /Resource time slot Room A January 13, 2025/,
    });
    slots[0].focus();
    await userEvent.keyboard('{ArrowLeft}');
    expect(slots[1]).toHaveFocus();
    await userEvent.keyboard('{ArrowRight}');
    expect(slots[0]).toHaveFocus();
  });
});

describe('@mantine/schedule/ResourcesWeekView current time indicator Styles API', () => {
  it('moves the indicator and updates the bubble every minute', () => {
    jest.useFakeTimers();
    let current = '2025-01-15 10:30:00';
    const { container } = render(
      <ResourcesWeekView
        {...defaultProps}
        slotLabelFormat="HH:mm"
        withCurrentTimeIndicator
        getCurrentTime={() => current}
      />
    );
    const getIndicator = () =>
      container.querySelector(
        '.mantine-ResourcesWeekView-resourcesWeekViewCurrentTimeIndicator'
      ) as HTMLElement;
    const initialOffset = getIndicator().style.getPropertyValue('--indicator-left-offset');
    expect(screen.getByText('10:30')).toBeInTheDocument();

    current = '2025-01-15 11:15:00';
    act(() => {
      jest.advanceTimersByTime(60000);
    });

    expect(screen.getByText('11:15')).toBeInTheDocument();
    expect(getIndicator().style.getPropertyValue('--indicator-left-offset')).not.toBe(
      initialOffset
    );
    jest.useRealTimers();
  });

  it('applies classNames, styles and attributes to every indicator part', () => {
    const { container } = render(
      <MantineProvider
        theme={{
          components: {
            ResourcesWeekView: {
              classNames: { resourcesWeekViewCurrentTimeIndicatorLine: 'theme-line' },
            },
          },
        }}
      >
        <ResourcesWeekView
          {...defaultProps}
          withCurrentTimeIndicator
          withCurrentTimeBubble={false}
          getCurrentTime={() => '2025-01-15 10:30:00'}
          classNames={{
            resourcesWeekViewCurrentTimeIndicator: 'custom-root',
            resourcesWeekViewCurrentTimeIndicatorLine: 'custom-line',
            resourcesWeekViewCurrentTimeIndicatorThumb: 'custom-thumb',
          }}
          styles={{ resourcesWeekViewCurrentTimeIndicatorLine: { opacity: 0.5 } }}
          attributes={{ resourcesWeekViewCurrentTimeIndicatorThumb: { 'data-test': 'thumb' } }}
        />
      </MantineProvider>
    );

    const root = container.querySelector(
      '.mantine-ResourcesWeekView-resourcesWeekViewCurrentTimeIndicator'
    )!;
    expect(root).toHaveClass('custom-root');
    const line = root.querySelector(
      '.mantine-ResourcesWeekView-resourcesWeekViewCurrentTimeIndicatorLine'
    )!;
    expect(line).toHaveClass('custom-line', 'theme-line');
    expect(line).toHaveStyle({ opacity: '0.5' });
    const thumb = root.querySelector(
      '.mantine-ResourcesWeekView-resourcesWeekViewCurrentTimeIndicatorThumb'
    )!;
    expect(thumb).toHaveClass('custom-thumb');
    expect(thumb).toHaveAttribute('data-test', 'thumb');
  });

  it('applies classNames to the time bubble', () => {
    const { container } = render(
      <ResourcesWeekView
        {...defaultProps}
        withCurrentTimeIndicator
        getCurrentTime={() => '2025-01-15 10:30:00'}
        classNames={{ resourcesWeekViewCurrentTimeIndicatorTimeBubble: 'custom-bubble' }}
      />
    );

    expect(
      container.querySelector(
        '.mantine-ResourcesWeekView-resourcesWeekViewCurrentTimeIndicatorTimeBubble'
      )
    ).toHaveClass('custom-bubble');
  });
});
