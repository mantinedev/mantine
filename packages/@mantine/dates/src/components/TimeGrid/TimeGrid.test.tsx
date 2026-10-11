import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { TimeGrid, TimeGridProps, TimeGridStylesNames } from './TimeGrid';

const defaultProps: TimeGridProps = {
  data: ['10:00', '15:00'],
};

describe('@mantine/dates/TimeGrid', () => {
  tests.axe([<TimeGrid {...defaultProps} />]);

  tests.itSupportsSystemProps<TimeGridProps, TimeGridStylesNames>({
    component: TimeGrid,
    props: defaultProps,
    varsResolver: true,
    polymorphic: true,
    displayName: '@mantine/dates/TimeGrid',
    stylesApiSelectors: ['root'],
  });

  it('calls onChange with correct value when time is clicked', async () => {
    const spy = jest.fn();
    render(<TimeGrid {...defaultProps} onChange={spy} />);
    await userEvent.click(screen.getByRole('button', { name: '10:00' }));
    expect(spy).toHaveBeenLastCalledWith('10:00');
  });

  it('calls onChange with null when time is clicked and allowDeselect is true', async () => {
    const spy = jest.fn();
    const { unmount } = render(
      <TimeGrid {...defaultProps} onChange={spy} allowDeselect defaultValue="10:00" />
    );
    await userEvent.click(screen.getByRole('button', { name: '10:00' }));
    expect(spy).toHaveBeenLastCalledWith(null);

    unmount();
    render(
      <TimeGrid {...defaultProps} onChange={spy} allowDeselect={false} defaultValue="10:00" />
    );
    await userEvent.click(screen.getByRole('button', { name: '10:00' }));
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenLastCalledWith(null);
  });

  it('disables time when disableTime is provided (array)', () => {
    render(<TimeGrid {...defaultProps} disableTime={['10:00']} />);
    expect(screen.getByRole('button', { name: '10:00' })).toBeDisabled();
    expect(screen.getByRole('button', { name: '15:00' })).not.toBeDisabled();
  });

  it('disables time when disableTime is provided (function)', () => {
    render(<TimeGrid {...defaultProps} disableTime={(time) => time === '10:00'} />);
    expect(screen.getByRole('button', { name: '10:00' })).toBeDisabled();
    expect(screen.getByRole('button', { name: '15:00' })).not.toBeDisabled();
  });

  it('disables time before minTime', () => {
    render(<TimeGrid {...defaultProps} minTime="12:00" />);
    expect(screen.getByRole('button', { name: '10:00' })).toBeDisabled();
    expect(screen.getByRole('button', { name: '15:00' })).not.toBeDisabled();
  });

  it('disables time after maxTime', () => {
    render(<TimeGrid {...defaultProps} maxTime="12:00" />);
    expect(screen.getByRole('button', { name: '10:00' })).not.toBeDisabled();
    expect(screen.getByRole('button', { name: '15:00' })).toBeDisabled();
  });

  it('disables all controls when disabled prop is set', () => {
    render(<TimeGrid {...defaultProps} disabled />);
    expect(screen.getByRole('button', { name: '10:00' })).toBeDisabled();
    expect(screen.getByRole('button', { name: '15:00' })).toBeDisabled();
  });

  it('marks the control matching controlled value as pressed', () => {
    const { rerender } = render(<TimeGrid {...defaultProps} value="10:00" onChange={() => {}} />);
    expect(screen.getByRole('button', { name: '10:00' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: '10:00' })).toHaveAttribute('data-active');
    expect(screen.getByRole('button', { name: '15:00' })).toHaveAttribute('aria-pressed', 'false');

    rerender(<TimeGrid {...defaultProps} value="15:00" onChange={() => {}} />);
    expect(screen.getByRole('button', { name: '10:00' })).toHaveAttribute('aria-pressed', 'false');
    expect(screen.getByRole('button', { name: '15:00' })).toHaveAttribute('aria-pressed', 'true');
  });

  it('formats control labels with format, withSeconds and amPmLabels', () => {
    const { rerender } = render(<TimeGrid data={['10:00:15', '15:30:45']} format="12h" />);
    expect(screen.getByRole('button', { name: '10:00 AM' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '3:30 PM' })).toBeInTheDocument();

    rerender(<TimeGrid data={['10:00:15', '15:30:45']} withSeconds />);
    expect(screen.getByRole('button', { name: '10:00:15' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '15:30:45' })).toBeInTheDocument();

    rerender(
      <TimeGrid data={['10:00:15', '15:30:45']} format="12h" amPmLabels={{ am: 'am', pm: 'pm' }} />
    );
    expect(screen.getByRole('button', { name: '10:00 am' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '3:30 pm' })).toBeInTheDocument();
  });
});
