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
});
