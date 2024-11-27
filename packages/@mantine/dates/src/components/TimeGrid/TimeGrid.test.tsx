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
    polymorphic: true,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
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
    const { rerender } = render(
      <TimeGrid {...defaultProps} onChange={spy} allowDeselect defaultValue="10:00" />
    );
    await userEvent.click(screen.getByRole('button', { name: '10:00' }));
    expect(spy).toHaveBeenLastCalledWith(null);

    rerender(
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
});
