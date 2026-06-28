import 'dayjs/locale/ru';

import { DatesProvider } from '@mantine/dates';
import { render, screen, userEvent } from '@mantine-tests/core';
import { ResourcesSchedule, ResourcesScheduleProps } from './ResourcesSchedule';

const resources = [
  { id: 'room-a', label: 'Room A' },
  { id: 'room-b', label: 'Room B' },
];

const defaultProps: ResourcesScheduleProps = {
  resources,
  defaultDate: '2025-01-15',
};

const testEvents = [
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

describe('@mantine/schedule/ResourcesSchedule', () => {
  it('renders ResourcesDayView by default (defaultView="day")', () => {
    const { container } = render(<ResourcesSchedule {...defaultProps} />);
    expect(
      container.querySelector('.mantine-ResourcesDayView-resourcesDayView')
    ).toBeInTheDocument();
  });

  it('switches to month view when view button clicked', async () => {
    const { container } = render(<ResourcesSchedule {...defaultProps} defaultView="day" />);
    expect(
      container.querySelector('.mantine-ResourcesDayView-resourcesDayView')
    ).toBeInTheDocument();

    await userEvent.click(screen.getByRole('tab', { name: 'Switch to month view' }));
    expect(
      container.querySelector('.mantine-ResourcesMonthView-resourcesMonthView')
    ).toBeInTheDocument();
  });

  it('renders with controlled view prop', () => {
    const { container, rerender } = render(<ResourcesSchedule {...defaultProps} view="day" />);
    expect(
      container.querySelector('.mantine-ResourcesDayView-resourcesDayView')
    ).toBeInTheDocument();

    rerender(<ResourcesSchedule {...defaultProps} view="month" />);
    expect(
      container.querySelector('.mantine-ResourcesMonthView-resourcesMonthView')
    ).toBeInTheDocument();
  });

  it('passes events to the active view', () => {
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

    render(<ResourcesSchedule {...defaultProps} events={events} defaultView="day" />);
    expect(screen.getByText('Test Event')).toBeInTheDocument();
  });

  it('shows only Day, Week, and Month in view selector', () => {
    render(<ResourcesSchedule {...defaultProps} />);
    expect(screen.getByRole('tab', { name: 'Switch to day view' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Switch to week view' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Switch to month view' })).toBeInTheDocument();
    expect(screen.queryByRole('tab', { name: 'Switch to year view' })).not.toBeInTheDocument();
  });

  it('defaultView="week" renders ResourcesWeekView', () => {
    const { container } = render(<ResourcesSchedule {...defaultProps} defaultView="week" />);
    expect(
      container.querySelector('.mantine-ResourcesWeekView-resourcesWeekView')
    ).toBeInTheDocument();
  });

  it('defaultView="month" renders ResourcesMonthView', () => {
    const { container } = render(<ResourcesSchedule {...defaultProps} defaultView="month" />);
    expect(
      container.querySelector('.mantine-ResourcesMonthView-resourcesMonthView')
    ).toBeInTheDocument();
  });

  it('supports uncontrolled switching through all views: day → week → month → day', async () => {
    const { container } = render(<ResourcesSchedule {...defaultProps} defaultView="day" />);
    expect(
      container.querySelector('.mantine-ResourcesDayView-resourcesDayView')
    ).toBeInTheDocument();

    await userEvent.click(screen.getByRole('tab', { name: 'Switch to week view' }));
    expect(
      container.querySelector('.mantine-ResourcesWeekView-resourcesWeekView')
    ).toBeInTheDocument();

    await userEvent.click(screen.getByRole('tab', { name: 'Switch to month view' }));
    expect(
      container.querySelector('.mantine-ResourcesMonthView-resourcesMonthView')
    ).toBeInTheDocument();

    await userEvent.click(screen.getByRole('tab', { name: 'Switch to day view' }));
    expect(
      container.querySelector('.mantine-ResourcesDayView-resourcesDayView')
    ).toBeInTheDocument();
  });

  it('calls onViewChange exactly once per tab click', async () => {
    const spy = jest.fn();
    render(<ResourcesSchedule {...defaultProps} defaultView="day" onViewChange={spy} />);

    await userEvent.click(screen.getByRole('tab', { name: 'Switch to week view' }));
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('week');

    await userEvent.click(screen.getByRole('tab', { name: 'Switch to month view' }));
    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenCalledWith('month');

    await userEvent.click(screen.getByRole('tab', { name: 'Switch to day view' }));
    expect(spy).toHaveBeenCalledTimes(3);
    expect(spy).toHaveBeenCalledWith('day');
  });

  it('header nav calls onDateChange in active view', async () => {
    const spy = jest.fn();
    render(<ResourcesSchedule {...defaultProps} defaultView="day" onDateChange={spy} />);

    await userEvent.click(screen.getByRole('button', { name: 'Previous' }));
    expect(spy).toHaveBeenCalled();
  });

  it('controlled date updates view when prop changes', () => {
    const { rerender } = render(
      <ResourcesSchedule {...defaultProps} date="2025-01-15" view="day" />
    );
    expect(screen.getByText('January 15, 2025')).toBeInTheDocument();

    rerender(<ResourcesSchedule {...defaultProps} date="2025-02-20" view="day" />);
    expect(screen.getByText('February 20, 2025')).toBeInTheDocument();
  });

  it('defaultDate initializes correctly', () => {
    render(<ResourcesSchedule resources={resources} defaultDate="2025-03-20" defaultView="day" />);
    expect(screen.getByText('March 20, 2025')).toBeInTheDocument();
  });

  it('dayViewProps affects only ResourcesDayView', async () => {
    const { container } = render(
      <ResourcesSchedule
        {...defaultProps}
        defaultView="day"
        dayViewProps={{ startTime: '10:00:00', endTime: '12:00:00', intervalMinutes: 60 }}
      />
    );

    const daySlots = container.querySelectorAll(
      '.mantine-ResourcesDayView-resourcesDayViewRowSlot'
    );
    expect(daySlots).toHaveLength(2 * 2);

    await userEvent.click(screen.getByRole('tab', { name: 'Switch to week view' }));
    const weekSlots = container.querySelectorAll(
      '.mantine-ResourcesWeekView-resourcesWeekViewRowSlot'
    );
    expect(weekSlots.length).toBeGreaterThan(2 * 2 * 7);
  });

  it('weekViewProps affects only ResourcesWeekView', async () => {
    const { container } = render(
      <ResourcesSchedule
        {...defaultProps}
        defaultView="week"
        weekViewProps={{ startTime: '10:00:00', endTime: '12:00:00', intervalMinutes: 60 }}
      />
    );

    const weekSlots = container.querySelectorAll(
      '.mantine-ResourcesWeekView-resourcesWeekViewRowSlot'
    );
    expect(weekSlots).toHaveLength(2 * 2 * 7);

    await userEvent.click(screen.getByRole('tab', { name: 'Switch to day view' }));
    const daySlots = container.querySelectorAll(
      '.mantine-ResourcesDayView-resourcesDayViewRowSlot'
    );
    expect(daySlots.length).toBeGreaterThan(2 * 2);
  });

  it('monthViewProps affects only ResourcesMonthView', async () => {
    const { container } = render(
      <ResourcesSchedule
        {...defaultProps}
        defaultView="month"
        monthViewProps={{ withWeekendDays: false }}
      />
    );

    const monthCells = container.querySelectorAll(
      '.mantine-ResourcesMonthView-resourcesMonthViewCell'
    );
    const totalDays = monthCells.length / 2;
    expect(totalDays).toBeLessThan(31);

    await userEvent.click(screen.getByRole('tab', { name: 'Switch to day view' }));
    expect(
      container.querySelector('.mantine-ResourcesDayView-resourcesDayView')
    ).toBeInTheDocument();
  });

  it('common props are forwarded across views: locale', () => {
    render(<ResourcesSchedule {...defaultProps} defaultView="day" locale="ru" />);
    expect(screen.getByText('январь 15, 2025')).toBeInTheDocument();
  });

  it('common props are forwarded across views: locale from DatesProvider', () => {
    render(
      <DatesProvider settings={{ locale: 'ru' }}>
        <ResourcesSchedule {...defaultProps} defaultView="day" />
      </DatesProvider>
    );
    expect(screen.getByText('январь 15, 2025')).toBeInTheDocument();
  });

  it('common props are forwarded across views: renderResourceLabel', () => {
    render(
      <ResourcesSchedule
        {...defaultProps}
        defaultView="day"
        renderResourceLabel={(resource) => <span>Custom: {resource.label}</span>}
      />
    );
    expect(screen.getByText('Custom: Room A')).toBeInTheDocument();
    expect(screen.getByText('Custom: Room B')).toBeInTheDocument();
  });

  it('onTimeSlotClick forwarded to day view', async () => {
    const spy = jest.fn();
    render(<ResourcesSchedule {...defaultProps} defaultView="day" onTimeSlotClick={spy} />);

    const slot = screen.getAllByRole('button', { name: /Resource time slot Room A/ })[0];
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

  it('onTimeSlotClick forwarded to week view', async () => {
    const spy = jest.fn();
    render(<ResourcesSchedule {...defaultProps} defaultView="week" onTimeSlotClick={spy} />);

    const slot = screen.getAllByRole('button', { name: /Resource time slot Room A/ })[0];
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

  it('onDayClick forwarded to month view only', async () => {
    const spy = jest.fn();
    render(<ResourcesSchedule {...defaultProps} defaultView="month" onDayClick={spy} />);

    const cell = screen.getByRole('button', { name: 'Room A January 15, 2025' });
    await userEvent.click(cell);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({
        date: expect.any(String),
        nativeEvent: expect.any(Object),
        resourceId: 'room-a',
      })
    );
  });

  it('onEventClick forwarded to active view', async () => {
    const spy = jest.fn();
    render(
      <ResourcesSchedule
        {...defaultProps}
        defaultView="day"
        events={testEvents}
        onEventClick={spy}
      />
    );

    await userEvent.click(screen.getByText('Test Event'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('mode="static" disables interactions in day view', () => {
    const { container } = render(
      <ResourcesSchedule {...defaultProps} defaultView="day" mode="static" />
    );
    const slots = container.querySelectorAll('.mantine-ResourcesDayView-resourcesDayViewRowSlot');
    slots.forEach((slot) => {
      expect(slot).toHaveAttribute('tabIndex', '-1');
    });
  });

  it('mode="static" disables interactions in week view', () => {
    const { container } = render(
      <ResourcesSchedule {...defaultProps} defaultView="week" mode="static" />
    );
    const slots = container.querySelectorAll('.mantine-ResourcesWeekView-resourcesWeekViewRowSlot');
    slots.forEach((slot) => {
      expect(slot).toHaveAttribute('tabIndex', '-1');
    });
  });

  it('withEventResize is forwarded to both day and week views', async () => {
    const { container } = render(
      <ResourcesSchedule {...defaultProps} defaultView="day" events={testEvents} withEventResize />
    );

    expect(
      container.querySelector('.mantine-ResourcesDayView-resourcesDayViewResizeHandle')
    ).toBeInTheDocument();

    await userEvent.click(screen.getByRole('tab', { name: 'Switch to week view' }));
    expect(
      container.querySelector('.mantine-ResourcesDayView-resourcesDayViewResizeHandle')
    ).not.toBeInTheDocument();
    expect(
      container.querySelector('.mantine-ResourcesWeekView-resourcesWeekViewResizeHandle')
    ).toBeInTheDocument();
  });

  it('withEventsDragAndDrop forwarded to day view', () => {
    render(
      <ResourcesSchedule
        {...defaultProps}
        defaultView="day"
        events={testEvents}
        withEventsDragAndDrop
      />
    );

    const event = screen.getByText('Test Event');
    expect(event.closest('[draggable="true"]')).toBeInTheDocument();
  });

  it('withEventsDragAndDrop forwarded to week view', () => {
    const weekEvents = [
      {
        id: 1,
        title: 'Week Event',
        start: '2025-01-15 09:00:00',
        end: '2025-01-15 10:00:00',
        color: 'blue',
        payload: {},
        resourceId: 'room-a',
      },
    ];

    render(
      <ResourcesSchedule
        {...defaultProps}
        defaultView="week"
        events={weekEvents}
        withEventsDragAndDrop
      />
    );

    const event = screen.getByText('Week Event');
    expect(event.closest('[draggable="true"]')).toBeInTheDocument();
  });

  it('canDragEvent forwarded to day view', () => {
    const canDragSpy = jest.fn(() => false);

    render(
      <ResourcesSchedule
        {...defaultProps}
        defaultView="day"
        events={testEvents}
        withEventsDragAndDrop
        canDragEvent={canDragSpy}
      />
    );

    const event = screen.getByText('Test Event');
    expect(event.closest('[draggable="true"]')).not.toBeInTheDocument();
    expect(canDragSpy).toHaveBeenCalled();
  });

  it('canDragEvent forwarded to week view', () => {
    const weekEvents = [
      {
        id: 1,
        title: 'Week Event',
        start: '2025-01-15 09:00:00',
        end: '2025-01-15 10:00:00',
        color: 'blue',
        payload: {},
        resourceId: 'room-a',
      },
    ];
    const canDragSpy = jest.fn(() => false);

    render(
      <ResourcesSchedule
        {...defaultProps}
        defaultView="week"
        events={weekEvents}
        withEventsDragAndDrop
        canDragEvent={canDragSpy}
      />
    );

    const event = screen.getByText('Week Event');
    expect(event.closest('[draggable="true"]')).not.toBeInTheDocument();
    expect(canDragSpy).toHaveBeenCalled();
  });

  it('events render correctly after switching views', async () => {
    const events = [
      {
        id: 1,
        title: 'Visible Event',
        start: '2025-01-15 09:00:00',
        end: '2025-01-15 10:00:00',
        color: 'blue',
        payload: {},
        resourceId: 'room-a',
      },
    ];

    render(<ResourcesSchedule {...defaultProps} defaultView="day" events={events} />);
    expect(screen.getByText('Visible Event')).toBeInTheDocument();

    await userEvent.click(screen.getByRole('tab', { name: 'Switch to week view' }));
    expect(screen.getByText('Visible Event')).toBeInTheDocument();

    await userEvent.click(screen.getByRole('tab', { name: 'Switch to month view' }));
    expect(screen.getByText('Visible Event')).toBeInTheDocument();
  });
});
