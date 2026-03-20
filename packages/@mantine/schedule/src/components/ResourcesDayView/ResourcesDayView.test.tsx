import { render, screen, userEvent } from '@mantine-tests/core';
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

    it('renders all events when maxEventsPerTimeSlot is not set', () => {
      render(<ResourcesDayView {...defaultProps} events={overlappingEvents} />);

      expect(screen.getByText('Event 1')).toBeInTheDocument();
      expect(screen.getByText('Event 2')).toBeInTheDocument();
      expect(screen.getByText('Event 3')).toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /more/ })).not.toBeInTheDocument();
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
  });
});
