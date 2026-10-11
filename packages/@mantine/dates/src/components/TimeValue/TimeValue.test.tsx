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

  it('renders nothing for invalid or empty value', () => {
    const values = ['12:ab', '', 'ab:30', new Date('invalid')];
    values.forEach((value, index) => {
      render(
        <span data-testid={`value-${index}`}>
          <TimeValue value={value} />
        </span>
      );
      expect(screen.getByTestId(`value-${index}`).textContent).toBe('');
    });

    render(
      <span data-testid="with-seconds">
        <TimeValue value="12:30:xx" withSeconds />
      </span>
    );
    expect(screen.getByTestId('with-seconds').textContent).toBe('');
  });

  it('renders custom amPmLabels', () => {
    const { rerender } = render(
      <TimeValue value="08:15" format="12h" amPmLabels={{ am: 'ДП', pm: 'ПП' }} />
    );
    expect(screen.getByText('8:15 ДП')).toBeInTheDocument();

    rerender(<TimeValue value="20:15" format="12h" amPmLabels={{ am: 'ДП', pm: 'ПП' }} />);
    expect(screen.getByText('8:15 ПП')).toBeInTheDocument();
  });
});
