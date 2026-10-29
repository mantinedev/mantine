import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { act, createEvent, fireEvent } from '@testing-library/react';
import { DirectionProvider, MantineProvider, UnstyledButton } from '@mantine/core';
import { DatesProvider } from '@mantine/dates';
import { render, screen, userEvent } from '@mantine-tests/core';
import { toDateString } from '../../utils';
import { ResourcesDayView, ResourcesDayViewProps } from './ResourcesDayView';

const resources = [
  { id: 'room-a', label: 'Room A' },
  { id: 'room-b', label: 'Room B' },
];

const defaultProps: ResourcesDayViewProps = {
  date: '2025-01-15',
  resources,
  startTime: '08:00:00',
  endTime: '12:00:00',
  intervalMinutes: 60,
};

describe('@mantine/schedule/ResourcesDayView', () => {
  it('renders slots as focusable buttons that do not submit forms', () => {
    const { container } = render(<ResourcesDayView {...defaultProps} />);
    const slot = container.querySelector('.mantine-ResourcesDayView-resourcesDayViewRowSlot')!;
    expect(slot.tagName).toBe('BUTTON');
    expect(slot).toHaveAttribute('type', 'button');
    expect(slot).toHaveClass('mantine-focus-auto', UnstyledButton.classes.root);
  });

  it('renders resource labels', () => {
    render(<ResourcesDayView {...defaultProps} />);
    expect(screen.getByText('Room A')).toBeInTheDocument();
    expect(screen.getByText('Room B')).toBeInTheDocument();
  });

  it('renders time slot labels', () => {
    render(<ResourcesDayView {...defaultProps} slotLabelFormat="HH:mm" />);
    expect(screen.getByText('08:00')).toBeInTheDocument();
    expect(screen.getByText('09:00')).toBeInTheDocument();
    expect(screen.getByText('10:00')).toBeInTheDocument();
    expect(screen.getByText('11:00')).toBeInTheDocument();
  });

  it('renders "Resources" corner label', () => {
    render(<ResourcesDayView {...defaultProps} />);
    expect(screen.getByText('Resources')).toBeInTheDocument();
  });

  it('renders events in correct resource rows', () => {
    const events = [
      {
        id: 1,
        title: 'Event in Room A',
        start: '2025-01-15 09:00:00',
        end: '2025-01-15 10:00:00',
        color: 'blue',
        payload: {},
        resourceId: 'room-a',
      },
      {
        id: 2,
        title: 'Event in Room B',
        start: '2025-01-15 10:00:00',
        end: '2025-01-15 11:00:00',
        color: 'red',
        payload: {},
        resourceId: 'room-b',
      },
    ];

    render(<ResourcesDayView {...defaultProps} events={events} />);

    const getEventWrapper = (title: string) =>
      screen
        .getByText(title)
        .closest('.mantine-ResourcesDayView-resourcesDayViewEventWrapper') as HTMLElement;
    const getRowLabel = (element: HTMLElement) =>
      element
        .closest('.mantine-ResourcesDayView-resourcesDayViewRow')!
        .querySelector('.mantine-ResourcesDayView-resourcesDayViewResourceLabel');

    const eventA = getEventWrapper('Event in Room A');
    const eventB = getEventWrapper('Event in Room B');

    expect(getRowLabel(eventA)).toHaveTextContent('Room A');
    expect(getRowLabel(eventB)).toHaveTextContent('Room B');
    expect(parseFloat(eventA.style.insetInlineStart)).toBeCloseTo(25, 2);
    expect(parseFloat(eventB.style.insetInlineStart)).toBeCloseTo(50, 2);
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

    const { container } = render(<ResourcesDayView {...defaultProps} events={events} />);
    expect(screen.getByText('All Day in Room A')).toBeInTheDocument();
    expect(
      container.querySelector('.mantine-ResourcesDayView-resourcesDayViewAllDayEvent')
    ).not.toBe(null);
  });

  it('renders header with date navigation', () => {
    render(<ResourcesDayView {...defaultProps} />);
    expect(screen.getByText('January 15, 2025')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Previous' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Today' })).toBeInTheDocument();
  });

  it('does not render header when withHeader={false}', () => {
    const { container } = render(<ResourcesDayView {...defaultProps} withHeader={false} />);
    expect(container.querySelector('.mantine-ResourcesDayView-header')).not.toBeInTheDocument();
  });

  it('calls onTimeSlotClick with resourceId when slot is clicked', async () => {
    const spy = jest.fn();
    render(<ResourcesDayView {...defaultProps} onTimeSlotClick={spy} />);

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

  it('supports custom renderResourceLabel', () => {
    render(
      <ResourcesDayView
        {...defaultProps}
        renderResourceLabel={(resource) => <span>Custom: {resource.label}</span>}
      />
    );
    expect(screen.getByText('Custom: Room A')).toBeInTheDocument();
    expect(screen.getByText('Custom: Room B')).toBeInTheDocument();
  });

  it('header navigation calls onDateChange with previous day, next day, and today', async () => {
    const spy = jest.fn();
    render(<ResourcesDayView {...defaultProps} onDateChange={spy} />);

    await userEvent.click(screen.getByRole('button', { name: 'Previous' }));
    expect(spy).toHaveBeenCalledWith(toDateString(dayjs('2025-01-14')));

    await userEvent.click(screen.getByRole('button', { name: 'Next' }));
    expect(spy).toHaveBeenCalledWith(toDateString(dayjs('2025-01-16')));

    await userEvent.click(screen.getByRole('button', { name: 'Today' }));
    expect(spy).toHaveBeenCalledWith(expect.any(String));
  });

  it('navigates to getCurrentTime date when Today control is clicked', async () => {
    const spy = jest.fn();
    render(
      <ResourcesDayView
        {...defaultProps}
        onDateChange={spy}
        getCurrentTime={() => '2025-12-25 10:00:00'}
      />
    );

    await userEvent.click(screen.getByRole('button', { name: 'Today' }));
    expect(spy).toHaveBeenCalledWith(toDateString(dayjs('2025-12-25 10:00:00')));
  });

  it('view tabs call onViewChange with day, week, month', async () => {
    const spy = jest.fn();
    render(<ResourcesDayView {...defaultProps} onViewChange={spy} />);

    await userEvent.click(screen.getByRole('tab', { name: 'Switch to day view' }));
    expect(spy).toHaveBeenCalledWith('day');

    await userEvent.click(screen.getByRole('tab', { name: 'Switch to week view' }));
    expect(spy).toHaveBeenCalledWith('week');

    await userEvent.click(screen.getByRole('tab', { name: 'Switch to month view' }));
    expect(spy).toHaveBeenCalledWith('month');
  });

  it('startTime/endTime/intervalMinutes changes rendered slot count', () => {
    render(
      <ResourcesDayView
        {...defaultProps}
        startTime="09:00:00"
        endTime="11:00:00"
        intervalMinutes={30}
      />
    );

    const slots = screen.getAllByRole('button', {
      name: /Resource time slot Room A/,
    });
    expect(slots).toHaveLength(4);
  });

  it('slotLabelFormat with a callback function', () => {
    render(
      <ResourcesDayView {...defaultProps} slotLabelFormat={(date) => dayjs(date).format('h A')} />
    );

    expect(screen.getByText('8 AM')).toBeInTheDocument();
    expect(screen.getByText('9 AM')).toBeInTheDocument();
    expect(screen.getByText('10 AM')).toBeInTheDocument();
    expect(screen.getByText('11 AM')).toBeInTheDocument();
  });

  it('headerFormat with format string', () => {
    render(<ResourcesDayView {...defaultProps} headerFormat="DD/MM/YYYY" />);
    expect(screen.getByText('15/01/2025')).toBeInTheDocument();
  });

  it('headerFormat with callback', () => {
    render(<ResourcesDayView {...defaultProps} headerFormat={(date) => `Date: ${date}`} />);
    expect(screen.getByText('Date: 2025-01-15 00:00:00')).toBeInTheDocument();
  });

  it('locale prop affects header and slot labels', () => {
    render(<ResourcesDayView {...defaultProps} locale="ru" />);
    expect(screen.getByText('январь 15, 2025')).toBeInTheDocument();
  });

  it('locale from DatesProvider affects labels', () => {
    render(
      <DatesProvider settings={{ locale: 'ru' }}>
        <ResourcesDayView {...defaultProps} />
      </DatesProvider>
    );

    expect(screen.getByText('январь 15, 2025')).toBeInTheDocument();
  });

  it('withCurrentTimeIndicator=true on today shows indicator', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-01-15T10:30:00'));

    const { container } = render(<ResourcesDayView {...defaultProps} withCurrentTimeIndicator />);

    expect(
      container.querySelector('.mantine-ResourcesDayView-resourcesDayViewCurrentTimeIndicator')
    ).toBeInTheDocument();

    jest.useRealTimers();
  });

  it('withCurrentTimeIndicator=false on today hides indicator', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-01-15T10:30:00'));

    const { container } = render(
      <ResourcesDayView {...defaultProps} withCurrentTimeIndicator={false} />
    );

    expect(
      container.querySelector('.mantine-ResourcesDayView-resourcesDayViewCurrentTimeIndicator')
    ).not.toBeInTheDocument();

    jest.useRealTimers();
  });

  it('withCurrentTimeBubble=false hides bubble but keeps indicator', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-01-15T10:30:00'));

    const { container } = render(
      <ResourcesDayView {...defaultProps} withCurrentTimeIndicator withCurrentTimeBubble={false} />
    );

    expect(
      container.querySelector('.mantine-ResourcesDayView-resourcesDayViewCurrentTimeIndicatorThumb')
    ).toBeInTheDocument();
    expect(
      container.querySelector(
        '.mantine-ResourcesDayView-resourcesDayViewCurrentTimeIndicatorTimeBubble'
      )
    ).not.toBeInTheDocument();

    jest.useRealTimers();
  });

  it('uses getCurrentTime to decide whether the indicator is displayed by default', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-01-16 10:30:00'));

    const { container, rerender } = render(<ResourcesDayView {...defaultProps} />);
    expect(
      container.querySelector('.mantine-ResourcesDayView-resourcesDayViewCurrentTimeIndicator')
    ).not.toBeInTheDocument();

    rerender(<ResourcesDayView {...defaultProps} getCurrentTime={() => '2025-01-15 10:30:00'} />);
    expect(
      container.querySelector('.mantine-ResourcesDayView-resourcesDayViewCurrentTimeIndicator')
    ).toBeInTheDocument();

    jest.useRealTimers();
  });

  it('uses getCurrentTime for the current time bubble', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-01-15 11:15:00'));

    const { container } = render(
      <ResourcesDayView
        {...defaultProps}
        slotLabelFormat="HH:mm"
        withCurrentTimeIndicator
        withCurrentTimeBubble
        getCurrentTime={() => '2025-01-15 09:30:00'}
      />
    );

    expect(
      container.querySelector(
        '.mantine-ResourcesDayView-resourcesDayViewCurrentTimeIndicatorTimeBubble'
      )
    ).toHaveTextContent('09:30');

    jest.useRealTimers();
  });

  it('highlightBusinessHours marks business and non-business slots', () => {
    const { container } = render(<ResourcesDayView {...defaultProps} highlightBusinessHours />);

    const slots = container.querySelectorAll('.mantine-ResourcesDayView-resourcesDayViewRowSlot');

    const businessSlots = container.querySelectorAll(
      '.mantine-ResourcesDayView-resourcesDayViewRowSlot[data-business-hours]'
    );
    const nonBusinessSlots = container.querySelectorAll(
      '.mantine-ResourcesDayView-resourcesDayViewRowSlot[data-non-business-hours]'
    );

    expect(businessSlots.length).toBeGreaterThan(0);
    expect(nonBusinessSlots.length).toBeGreaterThan(0);
    expect(businessSlots.length + nonBusinessSlots.length).toBe(slots.length);
  });

  it('marks slots and time labels that contain a business hours boundary as partial', () => {
    const { container } = render(
      <ResourcesDayView
        {...defaultProps}
        highlightBusinessHours
        businessHours={['09:30:00', '11:15']}
      />
    );

    const slots = container.querySelectorAll<HTMLElement>(
      '.mantine-ResourcesDayView-resourcesDayViewRowSlot[data-partial-business-hours]'
    );
    expect(slots).toHaveLength(resources.length * 2);
    expect(slots[0]).toHaveAttribute('aria-label', expect.stringContaining('09:00 - 10:00'));
    expect(slots[0].style.getPropertyValue('--business-hours-from')).toBe('50%');
    expect(slots[0].style.getPropertyValue('--business-hours-to')).toBe('100%');
    expect(slots[1].style.getPropertyValue('--business-hours-from')).toBe('0%');
    expect(slots[1].style.getPropertyValue('--business-hours-to')).toBe('25%');

    const labels = container.querySelectorAll<HTMLElement>(
      '.mantine-ResourcesDayView-resourcesDayViewTimeLabel[data-partial-business-hours]'
    );
    expect(labels).toHaveLength(2);
    expect(labels[0].style.getPropertyValue('--business-hours-from')).toBe('50%');
    expect(labels[1].style.getPropertyValue('--business-hours-to')).toBe('25%');
  });

  it('renderEventBody replaces default body', () => {
    const events = [
      {
        id: 1,
        title: 'Test Event',
        start: '2025-01-15 09:00:00',
        end: '2025-01-15 10:00:00',
        color: 'blue',
        payload: {},
        resourceId: 'room-a',
      },
    ];

    render(
      <ResourcesDayView
        {...defaultProps}
        events={events}
        renderEventBody={(event) => (
          <div>
            <strong>{event.title}</strong>
            <div>Custom body</div>
          </div>
        )}
      />
    );

    expect(screen.getByText('Test Event')).toBeInTheDocument();
    expect(screen.queryAllByText('Custom body').length).toBeGreaterThan(0);
  });

  it('renderEvent allows full custom rendering', () => {
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
      <ResourcesDayView
        {...defaultProps}
        events={events}
        renderEvent={(event, props) => (
          <div data-testid="custom-event" key={props.key}>
            {event.title} - custom
          </div>
        )}
      />
    );

    expect(screen.getByTestId('custom-event')).toBeInTheDocument();
    expect(screen.getByText('Custom Rendered - custom')).toBeInTheDocument();
  });

  it('clicking event calls onEventClick', async () => {
    const spy = jest.fn();
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

    render(<ResourcesDayView {...defaultProps} events={events} onEventClick={spy} />);

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

  it('labels overrides change corner label and slot aria-labels', () => {
    render(
      <ResourcesDayView {...defaultProps} labels={{ resources: 'Rooms', resourceSlot: 'Slot' }} />
    );

    expect(screen.getByText('Rooms')).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /^Slot Room A/ }).length).toBeGreaterThan(0);
  });

  it('arrow key navigation moves focus across slots and between resources', async () => {
    render(
      <ResourcesDayView
        {...defaultProps}
        startTime="08:00:00"
        endTime="10:00:00"
        intervalMinutes={60}
      />
    );

    const firstSlot = screen.getByRole('button', {
      name: 'Resource time slot Room A January 15, 2025 08:00 - 09:00',
    });
    const secondSlot = screen.getByRole('button', {
      name: 'Resource time slot Room A January 15, 2025 09:00 - 10:00',
    });
    const roomBFirstSlot = screen.getByRole('button', {
      name: 'Resource time slot Room B January 15, 2025 08:00 - 09:00',
    });

    firstSlot.focus();
    await userEvent.keyboard('{ArrowRight}');
    expect(secondSlot).toHaveFocus();

    firstSlot.focus();
    await userEvent.keyboard('{ArrowDown}');
    expect(roomBFirstSlot).toHaveFocus();
  });

  it('scrollAreaProps forwarded', () => {
    const { container } = render(
      <ResourcesDayView {...defaultProps} scrollAreaProps={{ className: 'custom-scroll' }} />
    );

    expect(
      container.querySelector('.mantine-ResourcesDayView-resourcesDayViewScrollArea.custom-scroll')
    ).toBeInTheDocument();
  });

  it('previousControlProps, nextControlProps, todayControlProps forwarded', () => {
    const { container } = render(
      <ResourcesDayView
        {...defaultProps}
        previousControlProps={{ className: 'custom-prev' }}
        nextControlProps={{ className: 'custom-next' }}
        todayControlProps={{ className: 'custom-today' }}
      />
    );

    expect(container.querySelector('button.custom-prev')).toBeInTheDocument();
    expect(container.querySelector('button.custom-next')).toBeInTheDocument();
    expect(container.querySelector('button.custom-today')).toBeInTheDocument();
  });

  it('viewSelectProps forwarded', () => {
    const { container } = render(
      <ResourcesDayView {...defaultProps} viewSelectProps={{ className: 'custom-view-select' }} />
    );

    expect(container.querySelector('.custom-view-select')).toBeInTheDocument();
  });

  it('withEventsDragAndDrop makes events draggable', () => {
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

    render(<ResourcesDayView {...defaultProps} events={events} withEventsDragAndDrop />);

    const event = screen.getByTitle('Draggable Event');
    expect(event.closest('[draggable="true"]') || event).toHaveAttribute('draggable', 'true');
  });

  it('canDragEvent prevents specific events from being draggable', () => {
    const events = [
      {
        id: 1,
        title: 'Locked Event',
        start: '2025-01-15 09:00:00',
        end: '2025-01-15 10:00:00',
        color: 'blue',
        payload: {},
        resourceId: 'room-a',
      },
      {
        id: 2,
        title: 'Free Event',
        start: '2025-01-15 10:00:00',
        end: '2025-01-15 11:00:00',
        color: 'red',
        payload: {},
        resourceId: 'room-a',
      },
    ];

    render(
      <ResourcesDayView
        {...defaultProps}
        events={events}
        withEventsDragAndDrop
        canDragEvent={(event) => event.id !== 1}
      />
    );

    const lockedEvent = screen.getByTitle('Locked Event');
    expect(lockedEvent.closest('[draggable="true"]')).not.toBeInTheDocument();

    const freeEvent = screen.getByTitle('Free Event');
    expect(freeEvent.closest('[draggable="true"]') || freeEvent).toHaveAttribute(
      'draggable',
      'true'
    );
  });

  it('withEventResize renders resize handles', () => {
    const events = [
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

    const { container } = render(
      <ResourcesDayView {...defaultProps} events={events} withEventResize />
    );

    expect(
      container.querySelectorAll('.mantine-ResourcesDayView-resourcesDayViewResizeHandle').length
    ).toBeGreaterThan(0);
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
      <ResourcesDayView
        {...defaultProps}
        events={events}
        withEventResize
        canResizeEvent={(event) => event.id !== 1}
      />
    );

    const resizeHandles = container.querySelectorAll(
      '.mantine-ResourcesDayView-resourcesDayViewResizeHandle'
    );
    expect(resizeHandles).toHaveLength(2);
  });

  it('does not fire onEventClick for the click that ends a resize gesture', async () => {
    const spy = jest.fn();
    const events = [
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

    const { container } = render(
      <ResourcesDayView {...defaultProps} events={events} withEventResize onEventClick={spy} />
    );

    const handle = container.querySelector<HTMLElement>(
      '.mantine-ResourcesDayView-resourcesDayViewResizeHandle[data-edge="end"]'
    )!;

    fireEvent.pointerDown(handle);
    fireEvent.pointerUp(document);
    fireEvent.click(screen.getByText('Resizable Event'));

    expect(spy).not.toHaveBeenCalled();
  });

  it('mode="static" suppresses slot clicks, event clicks, keyboard nav, draggable, resize handles', async () => {
    const slotClickSpy = jest.fn();
    const eventClickSpy = jest.fn();
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

    const { container } = render(
      <ResourcesDayView
        {...defaultProps}
        mode="static"
        events={events}
        onTimeSlotClick={slotClickSpy}
        onEventClick={eventClickSpy}
        withEventsDragAndDrop
        withEventResize
      />
    );

    const slot = screen.getAllByRole('button', {
      name: /Resource time slot Room A/,
    })[0];
    await userEvent.click(slot);
    expect(slotClickSpy).not.toHaveBeenCalled();

    expect(slot).toHaveAttribute('tabIndex', '-1');

    const allSlots = container.querySelectorAll(
      '.mantine-ResourcesDayView-resourcesDayViewRowSlot'
    );
    expect(allSlots).toHaveLength(4 * 2);
    allSlots.forEach((s) => {
      expect(s).toHaveAttribute('tabIndex', '-1');
    });

    const eventButton = screen.getByTitle('Static Event');
    await userEvent.click(eventButton);
    expect(eventClickSpy).not.toHaveBeenCalled();
    expect(eventButton.closest('[draggable="true"]')).not.toBeInTheDocument();

    const resizeHandles = container.querySelectorAll(
      '.mantine-ResourcesDayView-resourcesDayViewResizeHandle'
    );
    expect(resizeHandles).toHaveLength(0);
  });

  describe('maxEventsPerTimeSlot', () => {
    const overlappingEvents = [
      {
        id: 1,
        title: 'Event 1',
        start: '2025-01-15 09:00:00',
        end: '2025-01-15 10:00:00',
        color: 'blue',
        payload: {},
        resourceId: 'room-a',
      },
      {
        id: 2,
        title: 'Event 2',
        start: '2025-01-15 09:00:00',
        end: '2025-01-15 10:00:00',
        color: 'red',
        payload: {},
        resourceId: 'room-a',
      },
      {
        id: 3,
        title: 'Event 3',
        start: '2025-01-15 09:00:00',
        end: '2025-01-15 10:00:00',
        color: 'green',
        payload: {},
        resourceId: 'room-a',
      },
    ];

    it('uses default maxEventsPerTimeSlot of 2', () => {
      render(<ResourcesDayView {...defaultProps} events={overlappingEvents} />);

      expect(screen.getByText('Event 1')).toBeInTheDocument();
      expect(screen.getByText('Event 2')).toBeInTheDocument();
      expect(screen.queryByText('Event 3')).not.toBeInTheDocument();
      expect(screen.getByRole('button', { name: /\+1 more/ })).toBeInTheDocument();
    });

    it('shows correct hidden events count in "+more" button', () => {
      render(
        <ResourcesDayView {...defaultProps} events={overlappingEvents} maxEventsPerTimeSlot={1} />
      );

      expect(screen.getByText('Event 1')).toBeInTheDocument();
      expect(screen.queryByText('Event 2')).not.toBeInTheDocument();
      expect(screen.queryByText('Event 3')).not.toBeInTheDocument();
      expect(screen.getByRole('button', { name: /\+2 more/ })).toBeInTheDocument();
    });

    it('does not show "+more" button when events do not exceed the limit', () => {
      render(
        <ResourcesDayView {...defaultProps} events={overlappingEvents} maxEventsPerTimeSlot={5} />
      );

      expect(screen.getByText('Event 1')).toBeInTheDocument();
      expect(screen.getByText('Event 2')).toBeInTheDocument();
      expect(screen.getByText('Event 3')).toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /more/ })).not.toBeInTheDocument();
    });

    it('clamps maxEventsPerTimeSlot to minimum value of 1', () => {
      render(
        <ResourcesDayView {...defaultProps} events={overlappingEvents} maxEventsPerTimeSlot={0} />
      );

      expect(screen.getByText('Event 1')).toBeInTheDocument();
      expect(screen.queryByText('Event 2')).not.toBeInTheDocument();
      expect(screen.getByRole('button', { name: /\+2 more/ })).toBeInTheDocument();
    });

    it('shows all events in MoreEvents dropdown when clicked', async () => {
      render(
        <ResourcesDayView {...defaultProps} events={overlappingEvents} maxEventsPerTimeSlot={1} />
      );

      await userEvent.click(screen.getByRole('button', { name: /more/ }));

      expect(screen.getAllByText('Event 1')).toHaveLength(2);
      expect(screen.getByText('Event 2')).toBeInTheDocument();
      expect(screen.getByText('Event 3')).toBeInTheDocument();
    });

    it('does not affect events in different resources', () => {
      const events = [
        ...overlappingEvents,
        {
          id: 4,
          title: 'Event in Room B',
          start: '2025-01-15 09:00:00',
          end: '2025-01-15 10:00:00',
          color: 'orange',
          payload: {},
          resourceId: 'room-b',
        },
      ];

      render(<ResourcesDayView {...defaultProps} events={events} maxEventsPerTimeSlot={2} />);

      expect(screen.getByText('Event in Room B')).toBeInTheDocument();
      expect(screen.getAllByRole('button', { name: /more/ })).toHaveLength(1);
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

      render(<ResourcesDayView {...defaultProps} events={chainEvents} maxEventsPerTimeSlot={2} />);

      expect(screen.getByText('Workshop')).toBeInTheDocument();
      expect(screen.getByText('Design Review')).toBeInTheDocument();
      expect(screen.getByText('Retrospective')).toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /more/ })).not.toBeInTheDocument();
    });

    it('passes moreEventsProps to MoreEvents component', async () => {
      render(
        <ResourcesDayView
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
        <ResourcesDayView
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
        <ResourcesDayView
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
        <ResourcesDayView
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
        <ResourcesDayView
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
        <ResourcesDayView
          {...defaultProps}
          events={overlappingEvents}
          maxEventsPerTimeSlot={1}
          classNames={{ moreEventsButton: 'test-more-button' }}
        />
      );

      expect(screen.getByRole('button', { name: /more/ })).toHaveClass('test-more-button');
    });
  });

  it('renders group labels when groups prop is provided', () => {
    const groups = [
      { label: 'Floor 1', resourceIds: ['room-a'] },
      { label: 'Floor 2', resourceIds: ['room-b'] },
    ];

    const { container } = render(<ResourcesDayView {...defaultProps} groups={groups} />);

    expect(screen.getByText('Floor 1')).toBeInTheDocument();
    expect(screen.getByText('Floor 2')).toBeInTheDocument();
    expect(
      container.querySelector('.mantine-ResourcesDayView-resourcesDayViewGroupColumn')
    ).toBeInTheDocument();
  });

  it('does not render group column when groups prop is not provided', () => {
    const { container } = render(<ResourcesDayView {...defaultProps} />);
    expect(
      container.querySelector('.mantine-ResourcesDayView-resourcesDayViewGroupColumn')
    ).not.toBeInTheDocument();
  });

  it('reorders resources to match group definition order', () => {
    const reorderedResources = [
      { id: 'room-a', label: 'Room A' },
      { id: 'room-b', label: 'Room B' },
    ];
    const groups = [
      { label: 'Group B', resourceIds: ['room-b'] },
      { label: 'Group A', resourceIds: ['room-a'] },
    ];

    const { container } = render(
      <ResourcesDayView {...defaultProps} resources={reorderedResources} groups={groups} />
    );

    const labels = container.querySelectorAll(
      '.mantine-ResourcesDayView-resourcesDayViewResourceLabel'
    );
    expect(labels[0]).toHaveTextContent('Room B');
    expect(labels[1]).toHaveTextContent('Room A');
  });

  it('supports renderGroupLabel callback', () => {
    const groups = [{ label: 'Floor 1', resourceIds: ['room-a', 'room-b'] }];

    render(
      <ResourcesDayView
        {...defaultProps}
        groups={groups}
        renderGroupLabel={(group) => <span data-testid="custom-group">{group.label} Custom</span>}
      />
    );

    expect(screen.getByText('Floor 1 Custom')).toBeInTheDocument();
    expect(screen.getByTestId('custom-group')).toBeInTheDocument();
  });

  it('renders ungrouped resources without group label', () => {
    const threeResources = [
      { id: 'room-a', label: 'Room A' },
      { id: 'room-b', label: 'Room B' },
      { id: 'room-c', label: 'Room C' },
    ];
    const groups = [{ label: 'Floor 1', resourceIds: ['room-a', 'room-b'] }];

    const { container } = render(
      <ResourcesDayView {...defaultProps} resources={threeResources} groups={groups} />
    );

    expect(screen.getByText('Floor 1')).toBeInTheDocument();
    expect(screen.getByText('Room C')).toBeInTheDocument();
    const emptyGroupCells = container.querySelectorAll(
      '.mantine-ResourcesDayView-resourcesDayViewGroupColumnEmpty'
    );
    expect(emptyGroupCells.length).toBe(1);
  });

  describe('eventResizeInterval prop', () => {
    it('resizes on eventResizeInterval independently of intervalMinutes', () => {
      const rect = {
        top: 0,
        left: 0,
        right: 240,
        bottom: 240,
        width: 240,
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
        <ResourcesDayView
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
        // 240px spans 08:00-12:00, so clientX 165 = 165 min from 08:00 = 10:45 - a 15-min
        // boundary that the 60-min grid interval could not produce
        document.dispatchEvent(new MouseEvent('pointermove', { clientX: 165 }));
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
      Array.from(row.querySelectorAll('.mantine-ResourcesDayView-resourcesDayViewRowSlot')).forEach(
        (node, i) => {
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
        }
      );
    };

    it('drops on eventDragInterval independently of intervalMinutes', () => {
      const onEventDrop = jest.fn();
      const { container } = render(
        <ResourcesDayView
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
        '.mantine-ResourcesDayView-resourcesDayViewRowSlots'
      )[0];
      mockRowSlotRects(row);
      const eventNode = container.querySelector('[data-event-id="1"]')!;

      fireDrag(eventNode, 'dragStart');
      fireDrag(row, 'drop', 165);

      expect(onEventDrop).toHaveBeenCalledWith(
        expect.objectContaining({ newStart: '2025-01-15 10:45:00' })
      );
    });

    it('shows a drag ghost at the snapped position and clears it', () => {
      const { container } = render(
        <ResourcesDayView
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
        '.mantine-ResourcesDayView-resourcesDayViewRowSlots'
      )[0];
      mockRowSlotRects(row);
      const eventNode = container.querySelector('[data-event-id="1"]')!;

      fireDrag(eventNode, 'dragStart');
      fireDrag(row, 'dragOver', 165);

      expect(
        container.querySelector('.mantine-ResourcesDayView-resourcesDayViewDragPreview')
      ).toBeInTheDocument();

      fireEvent.dragLeave(row);
      expect(
        container.querySelector('.mantine-ResourcesDayView-resourcesDayViewDragPreview')
      ).not.toBeInTheDocument();
    });
  });

  describe('background events', () => {
    const backgroundEventProps: ResourcesDayViewProps = {
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
        <ResourcesDayView {...backgroundEventProps} onEventClick={spy} />
      );
      const bgEvent = container.querySelector(
        '.mantine-ResourcesDayView-resourcesDayViewBackgroundEvent'
      )!;

      expect(bgEvent.tagName).toBe('DIV');
      await userEvent.click(bgEvent);
      expect(spy).not.toHaveBeenCalled();
    });

    it('calls onEventClick when a background event is clicked with withInteractiveBackgroundEvents', async () => {
      const spy = jest.fn();
      const { container } = render(
        <ResourcesDayView
          {...backgroundEventProps}
          withInteractiveBackgroundEvents
          onEventClick={spy}
        />
      );
      const bgEvent = container.querySelector(
        '.mantine-ResourcesDayView-resourcesDayViewBackgroundEvent'
      )!;

      expect(bgEvent.tagName).toBe('BUTTON');
      await userEvent.click(bgEvent);
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy.mock.calls[0][0].id).toBe('bg-1');
    });

    it('does not make background events interactive in static mode', () => {
      const { container } = render(
        <ResourcesDayView {...backgroundEventProps} withInteractiveBackgroundEvents mode="static" />
      );
      expect(
        container.querySelector('.mantine-ResourcesDayView-resourcesDayViewBackgroundEvent')!
          .tagName
      ).toBe('DIV');
    });

    const bgHandleSelector =
      '.mantine-ResourcesDayView-resourcesDayViewBackgroundEvent .mantine-ResourcesDayView-resourcesDayViewResizeHandle';

    it('renders resize handles with withEventResize and withInteractiveBackgroundEvents', () => {
      const { container } = render(
        <ResourcesDayView
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
      const { container } = render(<ResourcesDayView {...backgroundEventProps} withEventResize />);
      expect(container.querySelector(bgHandleSelector)).not.toBeInTheDocument();
    });

    it('does not render resize handles on all day background events', () => {
      const { container } = render(
        <ResourcesDayView
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
        right: 240,
        bottom: 240,
        width: 240,
        height: 240,
        x: 0,
        y: 0,
        toJSON: () => {},
      } as DOMRect);
      const onEventResize = jest.fn();

      const { container } = render(
        <ResourcesDayView
          {...backgroundEventProps}
          withEventResize
          withInteractiveBackgroundEvents
          onEventResize={onEventResize}
        />
      );

      fireEvent.pointerDown(container.querySelectorAll(bgHandleSelector)[1]);
      act(() => {
        document.dispatchEvent(new MouseEvent('pointermove', { clientX: 180 }));
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
  });

  describe('drop validation', () => {
    const movingEvent = {
      id: 'moving',
      title: 'Moving',
      start: '2025-01-15 08:00:00',
      end: '2025-01-15 09:00:00',
      color: 'blue',
      payload: {},
      resourceId: 'room-a',
    };

    const roomAEvent = {
      id: 'room-a-event',
      title: 'Room A booking',
      start: '2025-01-15 10:00:00',
      end: '2025-01-15 11:00:00',
      color: 'red',
      payload: {},
      resourceId: 'room-a',
    };

    const roomBEvent = { ...roomAEvent, id: 'room-b-event', resourceId: 'room-b' };

    const fireDrag = (
      node: Element,
      type: 'dragStart' | 'drop',
      clientX?: number,
      types: string[] = ['application/json']
    ) => {
      const dragEvent = createEvent[type](node);
      Object.defineProperty(dragEvent, 'dataTransfer', {
        value: {
          effectAllowed: 'move',
          types,
          getData: jest.fn(),
          setData: jest.fn(),
        },
      });
      if (clientX !== undefined) {
        Object.defineProperty(dragEvent, 'clientX', { value: clientX, configurable: true });
      }
      fireEvent(node, dragEvent);
    };

    // 08:00–12:00 at 60 min = 4 slots of 100px; clientX 250 lands in slot 2 => 10:00.
    const mockRowSlotRects = (row: Element) => {
      Array.from(row.querySelectorAll('.mantine-ResourcesDayView-resourcesDayViewRowSlot')).forEach(
        (node, i) => {
          (node as HTMLElement).getBoundingClientRect = () =>
            ({
              top: 0,
              bottom: 40,
              left: i * 100,
              right: (i + 1) * 100 - 1,
              width: 100,
              height: 40,
              x: i * 100,
              y: 0,
              toJSON: () => {},
            }) as DOMRect;
        }
      );
    };

    const dropOnRoomBAt10 = (props: Partial<ResourcesDayViewProps>) => {
      const { container } = render(
        <ResourcesDayView {...defaultProps} withEventsDragAndDrop preventEventOverlap {...props} />
      );

      const rowSlots = container.querySelectorAll(
        '.mantine-ResourcesDayView-resourcesDayViewRowSlots'
      );
      // index 1 is the Room B row – the resource the event is dragged onto
      mockRowSlotRects(rowSlots[1]);

      fireDrag(container.querySelector('[data-event-id="moving"]')!, 'dragStart');
      fireDrag(rowSlots[1], 'drop', 250);
    };

    it('rejects a drop that conflicts with an event of the target resource', () => {
      const onEventDrop = jest.fn();
      dropOnRoomBAt10({ events: [movingEvent, roomBEvent], onEventDrop });

      expect(onEventDrop).not.toHaveBeenCalled();
    });

    it('allows a drop that only conflicts with an event of another resource', () => {
      const onEventDrop = jest.fn();
      dropOnRoomBAt10({ events: [movingEvent, roomAEvent], onEventDrop });

      expect(onEventDrop).toHaveBeenCalledTimes(1);
      expect(onEventDrop.mock.calls[0][0]).toMatchObject({ resourceId: 'room-b' });
    });

    it('reports the target resource on the rejection', () => {
      const onEventPlacementRejected = jest.fn();
      dropOnRoomBAt10({
        events: [movingEvent, roomBEvent],
        onEventDrop: jest.fn(),
        onEventPlacementRejected,
      });

      expect(onEventPlacementRejected).toHaveBeenCalledTimes(1);
      expect(onEventPlacementRejected.mock.calls[0][0]).toMatchObject({
        action: 'drop',
        reason: 'overlap',
        resourceId: 'room-b',
      });
    });

    const dropExternalItemOnRoomBAt10 = (props: Partial<ResourcesDayViewProps>) => {
      const { container } = render(<ResourcesDayView {...defaultProps} {...props} />);

      const rowSlots = container.querySelectorAll(
        '.mantine-ResourcesDayView-resourcesDayViewRowSlots'
      );
      mockRowSlotRects(rowSlots[1]);

      fireDrag(rowSlots[1], 'drop', 250, ['text/plain']);
    };

    it('calls onExternalEventDrop with the drop datetime and the target resource', () => {
      const onExternalEventDrop = jest.fn();
      dropExternalItemOnRoomBAt10({ onExternalEventDrop });

      expect(onExternalEventDrop).toHaveBeenCalledTimes(1);
      expect(onExternalEventDrop.mock.calls[0][0]).toMatchObject({
        dropDateTime: '2025-01-15 10:00:00',
        resourceId: 'room-b',
      });
    });

    it('does not call onExternalEventDrop when canDropExternalEvent returns false', () => {
      const onExternalEventDrop = jest.fn();
      const canDropExternalEvent = jest.fn(() => false);
      dropExternalItemOnRoomBAt10({ onExternalEventDrop, canDropExternalEvent });

      expect(canDropExternalEvent).toHaveBeenCalledTimes(1);
      expect(canDropExternalEvent).toHaveBeenCalledWith(
        expect.objectContaining({ start: '2025-01-15 10:00:00', resourceId: 'room-b' })
      );
      expect(onExternalEventDrop).not.toHaveBeenCalled();
    });

    it('reports an external drop rejection with the target resource and no end', () => {
      const onEventPlacementRejected = jest.fn();
      dropExternalItemOnRoomBAt10({
        onExternalEventDrop: jest.fn(),
        canDropExternalEvent: () => false,
        onEventPlacementRejected,
      });

      expect(onEventPlacementRejected).toHaveBeenCalledTimes(1);
      const rejection = onEventPlacementRejected.mock.calls[0][0];
      expect(rejection).toMatchObject({
        action: 'external-drop',
        start: '2025-01-15 10:00:00',
        resourceId: 'room-b',
        reason: 'rejected',
        conflicts: [],
      });
      expect(rejection).not.toHaveProperty('end');
    });

    const dragExternalItemOverRoomBAt10 = (
      props: Partial<ResourcesDayViewProps>,
      effectAllowed: DataTransfer['effectAllowed']
    ) => {
      const { container } = render(<ResourcesDayView {...defaultProps} {...props} />);
      const rowSlots = container.querySelectorAll(
        '.mantine-ResourcesDayView-resourcesDayViewRowSlots'
      );
      mockRowSlotRects(rowSlots[1]);
      const dataTransfer = {
        effectAllowed,
        dropEffect: 'none',
        types: ['text/plain'],
        getData: jest.fn(),
        setData: jest.fn(),
      };
      const dragEvent = createEvent.dragOver(rowSlots[1]);
      Object.defineProperty(dragEvent, 'dataTransfer', { value: dataTransfer });
      Object.defineProperty(dragEvent, 'clientX', { value: 250, configurable: true });
      fireEvent(rowSlots[1], dragEvent);
      return { container, dataTransfer };
    };

    it('sets a drop effect that the external item allows, so the browser fires drop', () => {
      const { dataTransfer } = dragExternalItemOverRoomBAt10(
        { onExternalEventDrop: jest.fn() },
        'move'
      );
      expect(dataTransfer.dropEffect).toBe('move');
    });

    it('uses the copy drop effect for external items that allow copying', () => {
      const { dataTransfer } = dragExternalItemOverRoomBAt10(
        { onExternalEventDrop: jest.fn() },
        'copyMove'
      );
      expect(dataTransfer.dropEffect).toBe('copy');
    });

    it('marks the view with data-drop-invalid while an external item is over a rejected target', () => {
      const { container } = dragExternalItemOverRoomBAt10(
        { onExternalEventDrop: jest.fn(), canDropExternalEvent: () => false },
        'copy'
      );
      expect(container.querySelector('.mantine-ResourcesDayView-resourcesDayView')).toHaveAttribute(
        'data-drop-invalid'
      );
    });

    it('does not mark the view with data-drop-invalid over an accepted target', () => {
      const { container } = dragExternalItemOverRoomBAt10(
        { onExternalEventDrop: jest.fn(), canDropExternalEvent: () => true },
        'copy'
      );
      expect(
        container.querySelector('.mantine-ResourcesDayView-resourcesDayView')
      ).not.toHaveAttribute('data-drop-invalid');
    });
  });

  describe('events carried over from other days', () => {
    const rect = {
      top: 0,
      left: 0,
      right: 240,
      bottom: 240,
      width: 240,
      height: 240,
      x: 0,
      y: 0,
      toJSON: () => {},
    };

    const carryOver = {
      id: 'carry',
      title: 'Carry over',
      start: '2025-01-14 22:00:00',
      end: '2025-01-15 10:00:00',
      color: 'blue',
      payload: {},
      resourceId: 'room-a',
    };

    it('passes the original event to onEventClick', async () => {
      const spy = jest.fn();
      render(<ResourcesDayView {...defaultProps} events={[carryOver]} onEventClick={spy} />);
      await userEvent.click(screen.getByText('Carry over'));
      expect(spy).toHaveBeenCalledWith(
        expect.objectContaining({ start: '2025-01-14 22:00:00', end: '2025-01-15 10:00:00' }),
        expect.anything()
      );
    });

    it('does not render a resize handle on the clipped edge', () => {
      const { container } = render(
        <ResourcesDayView {...defaultProps} events={[carryOver]} withEventResize />
      );
      expect(container.querySelector('[data-edge="start"]')).not.toBeInTheDocument();
      expect(container.querySelector('[data-edge="end"]')).toBeInTheDocument();
    });

    it('keeps the original start when the end edge is resized', () => {
      const spy = jest
        .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
        .mockReturnValue(rect as DOMRect);
      const onEventResize = jest.fn();
      const { container } = render(
        <ResourcesDayView
          {...defaultProps}
          events={[carryOver]}
          withEventResize
          onEventResize={onEventResize}
        />
      );

      fireEvent.pointerDown(container.querySelector('[data-edge="end"]')!);
      act(() => {
        document.dispatchEvent(new MouseEvent('pointermove', { clientX: 180 }));
        document.dispatchEvent(new MouseEvent('pointerup'));
      });

      expect(onEventResize).toHaveBeenCalledWith(
        expect.objectContaining({ newStart: '2025-01-14 22:00:00', newEnd: '2025-01-15 11:00:00' })
      );
      spy.mockRestore();
    });

    it('does not resize a background event from its clipped edge', () => {
      const spy = jest
        .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
        .mockReturnValue(rect as DOMRect);
      const onEventResize = jest.fn();
      const { container } = render(
        <ResourcesDayView
          {...defaultProps}
          events={[{ ...carryOver, display: 'background' }]}
          withEventResize
          withInteractiveBackgroundEvents
          onEventResize={onEventResize}
        />
      );

      fireEvent.pointerDown(container.querySelector('[data-edge="start"]')!);
      act(() => {
        document.dispatchEvent(new MouseEvent('pointermove', { clientX: 60 }));
        document.dispatchEvent(new MouseEvent('pointerup'));
      });

      expect(onEventResize).not.toHaveBeenCalled();
      spy.mockRestore();
    });
  });

  it('positions events with logical inline insets so they mirror in RTL', () => {
    render(
      <ResourcesDayView
        {...defaultProps}
        events={[
          {
            id: 1,
            title: 'Logical',
            start: '2025-01-15 09:00:00',
            end: '2025-01-15 10:00:00',
            color: 'blue',
            payload: {},
            resourceId: 'room-a',
          },
        ]}
      />
    );
    const wrapper = screen
      .getByText('Logical')
      .closest('.mantine-ResourcesDayView-resourcesDayViewEventWrapper') as HTMLElement;
    expect(wrapper.style.insetInlineStart).toBe('25%');
    expect(wrapper.style.insetInlineEnd).toBe('calc(50% + 1px)');
    expect(wrapper.style.left).toBe('');
    expect(wrapper.style.right).toBe('');
  });

  it('localizes slot aria-labels', () => {
    render(<ResourcesDayView {...defaultProps} locale="ru" />);
    expect(
      screen.getByRole('button', {
        name: 'Resource time slot Room A январь 15, 2025 08:00 - 09:00',
      })
    ).toBeInTheDocument();
  });

  it('shows minutes in the current time bubble and places the indicator by slot width', () => {
    const { container } = render(
      <ResourcesDayView
        {...defaultProps}
        slotLabelFormat="h A"
        withCurrentTimeIndicator
        getCurrentTime={() => '2025-01-15 10:30:00'}
      />
    );
    expect(screen.getByText('10:30 AM')).toBeInTheDocument();
    const indicator = container.querySelector(
      '.mantine-ResourcesDayView-resourcesDayViewCurrentTimeIndicator'
    ) as HTMLElement;
    expect(indicator.style.getPropertyValue('--indicator-left-offset')).toBe(
      'calc(var(--resources-day-view-resource-label-width) + var(--resources-day-view-slot-width) * 2.5)'
    );
  });
});

describe('@mantine/schedule/ResourcesDayView RTL arrow keys', () => {
  it('mirrors ArrowLeft and ArrowRight', async () => {
    render(
      <DirectionProvider initialDirection="rtl">
        <ResourcesDayView
          {...defaultProps}
          startTime="08:00:00"
          endTime="10:00:00"
          intervalMinutes={60}
        />
      </DirectionProvider>
    );

    const firstSlot = screen.getByRole('button', {
      name: 'Resource time slot Room A January 15, 2025 08:00 - 09:00',
    });
    const secondSlot = screen.getByRole('button', {
      name: 'Resource time slot Room A January 15, 2025 09:00 - 10:00',
    });

    firstSlot.focus();
    await userEvent.keyboard('{ArrowLeft}');
    expect(secondSlot).toHaveFocus();
    await userEvent.keyboard('{ArrowRight}');
    expect(firstSlot).toHaveFocus();
    await userEvent.keyboard('{ArrowRight}');
    expect(firstSlot).toHaveFocus();
  });
});

describe('@mantine/schedule/ResourcesDayView background events clipped edges', () => {
  it('marks the clipped edge of a background event from the previous day', () => {
    const { container } = render(
      <ResourcesDayView
        {...defaultProps}
        withEventResize
        withInteractiveBackgroundEvents
        events={[
          {
            id: 'bg-carry',
            title: 'Maintenance',
            start: '2025-01-14 22:00:00',
            end: '2025-01-15 10:00:00',
            color: 'gray',
            display: 'background',
            resourceId: 'room-a',
          },
        ]}
      />
    );

    const node = container.querySelector(
      '.mantine-ResourcesDayView-resourcesDayViewBackgroundEvent'
    )!;
    expect(node).toHaveAttribute('data-continues-before');
    expect(node).not.toHaveAttribute('data-continues-after');
  });
});

describe('@mantine/schedule/ResourcesDayView current time indicator Styles API', () => {
  it('moves the indicator and updates the bubble every minute', () => {
    jest.useFakeTimers();
    let current = '2025-01-15 10:30:00';
    const { container } = render(
      <ResourcesDayView
        {...defaultProps}
        slotLabelFormat="HH:mm"
        withCurrentTimeIndicator
        getCurrentTime={() => current}
      />
    );
    const getIndicator = () =>
      container.querySelector(
        '.mantine-ResourcesDayView-resourcesDayViewCurrentTimeIndicator'
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
            ResourcesDayView: {
              classNames: { resourcesDayViewCurrentTimeIndicatorLine: 'theme-line' },
            },
          },
        }}
      >
        <ResourcesDayView
          {...defaultProps}
          withCurrentTimeIndicator
          withCurrentTimeBubble={false}
          getCurrentTime={() => '2025-01-15 10:30:00'}
          classNames={{
            resourcesDayViewCurrentTimeIndicator: 'custom-root',
            resourcesDayViewCurrentTimeIndicatorLine: 'custom-line',
            resourcesDayViewCurrentTimeIndicatorThumb: 'custom-thumb',
          }}
          styles={{ resourcesDayViewCurrentTimeIndicatorLine: { opacity: 0.5 } }}
          attributes={{ resourcesDayViewCurrentTimeIndicatorThumb: { 'data-test': 'thumb' } }}
        />
      </MantineProvider>
    );

    const root = container.querySelector(
      '.mantine-ResourcesDayView-resourcesDayViewCurrentTimeIndicator'
    )!;
    expect(root).toHaveClass('custom-root');
    const line = root.querySelector(
      '.mantine-ResourcesDayView-resourcesDayViewCurrentTimeIndicatorLine'
    )!;
    expect(line).toHaveClass('custom-line', 'theme-line');
    expect(line).toHaveStyle({ opacity: '0.5' });
    const thumb = root.querySelector(
      '.mantine-ResourcesDayView-resourcesDayViewCurrentTimeIndicatorThumb'
    )!;
    expect(thumb).toHaveClass('custom-thumb');
    expect(thumb).toHaveAttribute('data-test', 'thumb');
  });

  it('applies classNames to the time bubble', () => {
    const { container } = render(
      <ResourcesDayView
        {...defaultProps}
        withCurrentTimeIndicator
        getCurrentTime={() => '2025-01-15 10:30:00'}
        classNames={{ resourcesDayViewCurrentTimeIndicatorTimeBubble: 'custom-bubble' }}
      />
    );

    expect(
      container.querySelector(
        '.mantine-ResourcesDayView-resourcesDayViewCurrentTimeIndicatorTimeBubble'
      )
    ).toHaveClass('custom-bubble');
  });
});
