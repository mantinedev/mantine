import { render, screen, userEvent } from '@mantine-tests/core';
import { ResourceMonthView, ResourceMonthViewProps } from './ResourceMonthView';

const resources = [
  { id: 'room-a', label: 'Room A' },
  { id: 'room-b', label: 'Room B' },
];

const defaultProps: ResourceMonthViewProps = {
  date: '2025-01-15',
  resources,
};

describe('@mantine/schedule/ResourceMonthView', () => {
  it('renders resource labels', () => {
    render(<ResourceMonthView {...defaultProps} />);
    expect(screen.getByText('Room A')).toBeInTheDocument();
    expect(screen.getByText('Room B')).toBeInTheDocument();
  });

  it('renders day column headers', () => {
    render(<ResourceMonthView {...defaultProps} />);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('15')).toBeInTheDocument();
    expect(screen.getByText('31')).toBeInTheDocument();
  });

  it('renders "Resources" corner label', () => {
    render(<ResourceMonthView {...defaultProps} />);
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

    render(<ResourceMonthView {...defaultProps} events={events} />);
    expect(screen.getByText('Event A')).toBeInTheDocument();
  });

  it('renders with mode="static"', () => {
    const { container } = render(<ResourceMonthView {...defaultProps} mode="static" />);
    const cells = container.querySelectorAll('.mantine-ResourceMonthView-resourceMonthViewCell');
    cells.forEach((cell) => {
      expect(cell).toHaveAttribute('tabIndex', '-1');
    });
  });

  it('renders header with month navigation', () => {
    render(<ResourceMonthView {...defaultProps} />);
    expect(screen.getByRole('button', { name: 'Previous' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Today' })).toBeInTheDocument();
  });

  it('keyboard navigation between cells (arrow keys)', async () => {
    const { container } = render(<ResourceMonthView {...defaultProps} />);
    const cells = container.querySelectorAll(
      '.mantine-ResourceMonthView-resourceMonthViewCell'
    ) as NodeListOf<HTMLButtonElement>;

    cells[0].focus();
    expect(cells[0]).toHaveFocus();

    await userEvent.keyboard('{ArrowRight}');
    expect(cells[1]).toHaveFocus();

    await userEvent.keyboard('{ArrowLeft}');
    expect(cells[0]).toHaveFocus();
  });

  it('first cell has tabIndex 0', () => {
    const { container } = render(<ResourceMonthView {...defaultProps} />);
    const cells = container.querySelectorAll(
      '.mantine-ResourceMonthView-resourceMonthViewCell'
    ) as NodeListOf<HTMLButtonElement>;
    expect(cells[0]).toHaveAttribute('tabIndex', '0');
    expect(cells[1]).toHaveAttribute('tabIndex', '-1');
  });
});
