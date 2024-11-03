import { render, screen } from '@mantine-tests/core';
import { TimeValue } from './TimeValue';

describe('@mantine/dates/TimeValue', () => {
  it('renders given time string', () => {
    const { rerender } = render(<TimeValue value="18:30:56" />);
    expect(screen.getByText('18:30')).toBeInTheDocument();

    rerender(<TimeValue value="18:30" />);
    expect(screen.getByText('18:30')).toBeInTheDocument();

    rerender(<TimeValue value="18:30" format="12h" />);
    expect(screen.getByText('6:30 PM')).toBeInTheDocument();

    rerender(<TimeValue value="18:30" format="12h" withSeconds />);
    expect(screen.getByText('6:30:00 PM')).toBeInTheDocument();
  });

  it('renders given date object', () => {
    const { rerender } = render(<TimeValue value={new Date(2021, 1, 1, 18, 30, 56)} />);
    expect(screen.getByText('18:30')).toBeInTheDocument();

    rerender(<TimeValue value={new Date(2021, 1, 1, 18, 30)} />);
    expect(screen.getByText('18:30')).toBeInTheDocument();
  });
});
