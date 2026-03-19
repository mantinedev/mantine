import { render, screen, userEvent } from '@mantine-tests/core';
import { ResourcesMonthView, ResourcesMonthViewProps } from './ResourcesMonthView';

const resources = [
  { id: 'room-a', label: 'Room A' },
  { id: 'room-b', label: 'Room B' },
];

const defaultProps: ResourcesMonthViewProps = {
  date: '2025-01-15',
  resources,
};

describe('@mantine/schedule/ResourcesMonthView', () => {
  it('renders resource labels', () => {
    render(<ResourcesMonthView {...defaultProps} />);
    expect(screen.getByText('Room A')).toBeInTheDocument();
    expect(screen.getByText('Room B')).toBeInTheDocument();
  });

  it('renders day column headers', () => {
    render(<ResourcesMonthView {...defaultProps} />);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('15')).toBeInTheDocument();
    expect(screen.getByText('31')).toBeInTheDocument();
  });

  it('renders "Resources" corner label', () => {
    render(<ResourcesMonthView {...defaultProps} />);
    expect(screen.getByText('Resources')).toBeInTheDocument();
  });

  it('renders events in cells', () => {
    const events = [
      {
        id: 1,
        title: 'Event A',
        start: '2025-01-15 09:00:00',
        end: '2025-01-15 10:00:00',
        color: 'blue',
        payload: {},
        resourceId: 'room-a',
      },
    ];

    render(<ResourcesMonthView {...defaultProps} events={events} />);
    expect(screen.getByText('Event A')).toBeInTheDocument();
  });

  it('renders with mode="static"', () => {
    const { container } = render(<ResourcesMonthView {...defaultProps} mode="static" />);
    const cells = container.querySelectorAll('.mantine-ResourcesMonthView-resourcesMonthViewCell');
    cells.forEach((cell) => {
      expect(cell).toHaveAttribute('tabIndex', '-1');
    });
  });

  it('renders header with month navigation', () => {
    render(<ResourcesMonthView {...defaultProps} />);
    expect(screen.getByRole('button', { name: 'Previous' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Today' })).toBeInTheDocument();
  });

  it('keyboard navigation between cells (arrow keys)', async () => {
    const { container } = render(<ResourcesMonthView {...defaultProps} />);
    const cells = container.querySelectorAll(
      '.mantine-ResourcesMonthView-resourcesMonthViewCell'
    ) as NodeListOf<HTMLButtonElement>;

    cells[0].focus();
    expect(cells[0]).toHaveFocus();

    await userEvent.keyboard('{ArrowRight}');
    expect(cells[1]).toHaveFocus();

    await userEvent.keyboard('{ArrowLeft}');
    expect(cells[0]).toHaveFocus();
  });

  it('first cell has tabIndex 0', () => {
    const { container } = render(<ResourcesMonthView {...defaultProps} />);
    const cells = container.querySelectorAll(
      '.mantine-ResourcesMonthView-resourcesMonthViewCell'
    ) as NodeListOf<HTMLButtonElement>;
    expect(cells[0]).toHaveAttribute('tabIndex', '0');
    expect(cells[1]).toHaveAttribute('tabIndex', '-1');
  });
});
