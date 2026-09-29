import { createRef } from 'react';
import { createContextContainer, renderWithAct, screen, userEvent } from '@mantine-tests/core';
import { Tour } from '../Tour';
import { TourBeacon, TourBeaconProps } from './TourBeacon';

const TestContainer = createContextContainer(TourBeacon, Tour.Root, {
  active: true,
  stepsCount: 1,
});

const defaultProps: TourBeaconProps = {
  target: '#beacon-target',
};

describe('@mantine/core/TourBeacon', () => {
  let target: HTMLDivElement;

  beforeEach(() => {
    target = document.createElement('div');
    target.id = 'beacon-target';
    document.body.appendChild(target);
  });

  afterEach(() => {
    document.body.removeChild(target);
  });

  it('has correct displayName', () => {
    expect(TourBeacon.displayName).toBe('@mantine/core/TourBeacon');
  });

  it('renders nothing without target', async () => {
    await renderWithAct(<TestContainer />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('renders a button with default beacon label', async () => {
    await renderWithAct(<TestContainer {...defaultProps} />);
    expect(screen.getByRole('button', { name: 'Start tour' })).toBeInTheDocument();
  });

  it('supports custom aria-label', async () => {
    await renderWithAct(<TestContainer {...defaultProps} aria-label="Open settings step" />);
    expect(screen.getByRole('button', { name: 'Open settings step' })).toBeInTheDocument();
  });

  it('forwards ref to the rendered button', async () => {
    const ref = createRef<HTMLButtonElement>();
    await renderWithAct(
      <Tour.Root active stepsCount={1}>
        <TourBeacon {...defaultProps} ref={ref} />
      </Tour.Root>
    );
    expect(ref.current).toBe(screen.getByRole('button'));
  });

  it('calls onClick when clicked', async () => {
    const onClick = jest.fn();
    await renderWithAct(<TestContainer {...defaultProps} onClick={onClick} />);
    await userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('applies style and styles.beacon to the beacon element', async () => {
    await renderWithAct(
      <TestContainer
        {...defaultProps}
        style={{ maxWidth: 111 }}
        styles={{ beacon: { color: 'red' } }}
        className="custom-beacon"
      />
    );
    const beacon = screen.getByRole('button');
    expect(beacon.style.maxWidth).toBe('111px');
    expect(beacon.style.color).toBe('red');
    expect(beacon).toHaveClass('custom-beacon');
  });

  it('applies Tour.Root attributes.beacon to the beacon element', async () => {
    await renderWithAct(
      <Tour.Root active stepsCount={1} attributes={{ beacon: { 'data-testid': 'beacon' } }}>
        <TourBeacon {...defaultProps} />
      </Tour.Root>
    );
    expect(screen.getByRole('button')).toHaveAttribute('data-testid', 'beacon');
  });
});
