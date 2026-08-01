import 'dayjs/locale/ru';

import dayjs from 'dayjs';
import { fireEvent } from '@testing-library/react';
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
    expect(screen.getByText('Event in Room A')).toBeInTheDocument();
    expect(screen.getByText('Event in Room B')).toBeInTheDocument();
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

  it('renders with mode="static" (slots not interactive)', () => {
    const { container } = render(<ResourcesDayView {...defaultProps} mode="static" />);
    const slots = container.querySelectorAll('.mantine-ResourcesDayView-resourcesDayViewRowSlot');
    slots.forEach((slot) => {
      expect(slot).toHaveAttribute('tabIndex', '-1');
    });
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

  it('withCurrentTimeIndicator=true on a non-today date shows indicator', () => {
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
      name: 'Resource time slot Room A 2025-01-15 08:00:00 - 09:00:00',
    });
    const secondSlot = screen.getByRole('button', {
      name: 'Resource time slot Room A 2025-01-15 09:00:00 - 10:00:00',
    });
    const roomBFirstSlot = screen.getByRole('button', {
      name: 'Resource time slot Room B 2025-01-15 08:00:00 - 09:00:00',
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

    it('limits visible events and shows "+more" button', () => {
      render(
        <ResourcesDayView {...defaultProps} events={overlappingEvents} maxEventsPerTimeSlot={2} />
      );

      expect(screen.getByText('Event 1')).toBeInTheDocument();
      expect(screen.getByText('Event 2')).toBeInTheDocument();
      expect(screen.queryByText('Event 3')).not.toBeInTheDocument();
      expect(screen.getByRole('button', { name: /more/ })).toBeInTheDocument();
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
      { id: 'room-b', label: 'Room B' },
      { id: 'room-a', label: 'Room A' },
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
});
