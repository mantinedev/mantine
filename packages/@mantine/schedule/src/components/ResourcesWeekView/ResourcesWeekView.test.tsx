import { render, screen } from '@mantine-tests/core';
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

  it('renders with mode="static"', () => {
    const { container } = render(<ResourcesWeekView {...defaultProps} mode="static" />);
    const slots = container.querySelectorAll('.mantine-ResourcesWeekView-resourcesWeekViewRowSlot');
    slots.forEach((slot) => {
      expect(slot).toHaveAttribute('tabIndex', '-1');
    });
  });

  it('renders header with week navigation', () => {
    render(<ResourcesWeekView {...defaultProps} />);
    expect(screen.getByRole('button', { name: 'Previous' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Today' })).toBeInTheDocument();
  });
});
