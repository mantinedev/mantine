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
    const { container, rerender } = render(
      <ResourcesSchedule {...defaultProps} view="day" />
    );
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
});
