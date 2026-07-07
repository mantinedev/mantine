import { act } from '@testing-library/react';
import { render, screen, tests } from '@mantine-tests/core';
import { Stat, StatProps, StatStylesNames } from './Stat';
import { StatCountdown } from './StatCountdown';
import { StatDiff } from './StatDiff';
import { StatIcon } from './StatIcon';
import { StatLabel } from './StatLabel';
import { StatValue } from './StatValue';

const defaultProps: StatProps = {
  label: 'Active users',
  value: 92410,
  thousandSeparator: true,
  prefix: '$',
  suffix: 'k',
  diff: 12.4,
  icon: <span>icon</span>,
};

describe('@mantine/core/Stat', () => {
  tests.axe([
    <Stat label="Active users" value={92410} key="1" />,
    <Stat label="Revenue" value={1340.5} prefix="$" diff={12.4} key="2" />,
    <Stat label="Sale ends in" key="3">
      <Stat.Label>Sale ends in</Stat.Label>
      <Stat.Value>01:00:00</Stat.Value>
    </Stat>,
  ]);

  tests.itSupportsSystemProps<StatProps, StatStylesNames>({
    component: Stat,
    props: defaultProps,
    children: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/Stat',
    stylesApiSelectors: [
      'root',
      'body',
      'icon',
      'label',
      'value',
      'prefix',
      'suffix',
      'diff',
      'diffIcon',
    ],
  });

  it('exposes compound components as static properties', () => {
    expect(Stat.Label).toBe(StatLabel);
    expect(Stat.Value).toBe(StatValue);
    expect(Stat.Diff).toBe(StatDiff);
    expect(Stat.Icon).toBe(StatIcon);
    expect(Stat.Countdown).toBe(StatCountdown);
  });

  it('renders the label and formatted value', () => {
    render(<Stat label="Active users" value={92410} thousandSeparator />);
    expect(screen.getByText('Active users')).toBeInTheDocument();
    expect(screen.getByText('92,410')).toBeInTheDocument();
  });

  it('applies decimalScale and fixedDecimalScale', () => {
    const { container } = render(<Stat value={1340.5} decimalScale={2} fixedDecimalScale />);
    expect(container.querySelector('.mantine-Stat-value')).toHaveTextContent('1340.50');
  });

  it('renders prefix and suffix around the value', () => {
    const { container } = render(<Stat value={1340} prefix="$" suffix="USD" />);
    expect(container.querySelector('.mantine-Stat-prefix')).toHaveTextContent('$');
    expect(container.querySelector('.mantine-Stat-suffix')).toHaveTextContent('USD');
  });

  it('renders a custom formatter, overriding number formatting', () => {
    render(<Stat value={1234} formatter={(value) => `#${value}`} />);
    expect(screen.getByText('#1234')).toBeInTheDocument();
  });

  it('renders an up diff indicator for positive values', () => {
    const { container } = render(<Stat value={100} diff={12.4} />);
    const diff = container.querySelector('.mantine-Stat-diff');
    expect(diff).toHaveTextContent('+12.4%');
    expect(diff).toHaveAttribute('data-direction', 'up');
    expect(container.querySelector('.mantine-Stat-diffIcon')).not.toBe(null);
  });

  it('renders a down diff indicator for negative values', () => {
    const { container } = render(<Stat value={100} diff={-3.2} />);
    const diff = container.querySelector('.mantine-Stat-diff');
    expect(diff).toHaveTextContent('-3.2%');
    expect(diff).toHaveAttribute('data-direction', 'down');
  });

  it('renders a neutral diff without an icon for zero', () => {
    const { container } = render(<Stat value={100} diff={0} />);
    const diff = container.querySelector('.mantine-Stat-diff');
    expect(diff).toHaveAttribute('data-direction', 'none');
    expect(container.querySelector('.mantine-Stat-diffIcon')).toBe(null);
  });

  it('hides the diff icon when withDiffIcon is false', () => {
    const { container } = render(<Stat value={100} diff={12} withDiffIcon={false} />);
    expect(container.querySelector('.mantine-Stat-diff')).toHaveTextContent('+12%');
    expect(container.querySelector('.mantine-Stat-diffIcon')).toBe(null);
  });

  it('formats the diff with a custom diffFormatter', () => {
    const { container } = render(
      <Stat value={100} diff={4} diffFormatter={(diff) => `${diff} more`} />
    );
    expect(container.querySelector('.mantine-Stat-diff')).toHaveTextContent('4 more');
  });

  it('does not render a diff when diff is not set', () => {
    const { container } = render(<Stat value={100} />);
    expect(container.querySelector('.mantine-Stat-diff')).toBe(null);
  });

  it('animates the value with RollingNumber when animate is set', () => {
    const { container } = render(<Stat value={100} animate />);
    expect(container.querySelector('.mantine-RollingNumber-root')).not.toBe(null);
  });

  it('renders a Skeleton in place of the value when loading', () => {
    const { container } = render(<Stat value={100} prefix="$" loading />);
    expect(container.querySelector('.mantine-Skeleton-root')).not.toBe(null);
    expect(container.querySelector('.mantine-Stat-prefix')).toBe(null);
    expect(container.querySelector('.mantine-Stat-root')).toHaveAttribute('data-loading');
  });

  it('renders the icon shorthand in the icon slot', () => {
    const { container } = render(<Stat value={100} icon={<span data-testid="icon" />} />);
    expect(container.querySelector('.mantine-Stat-icon')).not.toBe(null);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('renders custom children instead of the shorthand composition', () => {
    render(
      <Stat label="Ignored" value={999}>
        <Stat.Label>Custom label</Stat.Label>
        <Stat.Value>Custom value</Stat.Value>
      </Stat>
    );

    expect(screen.getByText('Custom label')).toBeInTheDocument();
    expect(screen.getByText('Custom value')).toBeInTheDocument();
    expect(screen.queryByText('999')).toBe(null);
  });

  it('forwards compound classNames to secondary selectors', () => {
    const { container } = render(
      <Stat>
        <Stat.Value
          prefix="$"
          suffix="k"
          classNames={{ prefix: 'custom-prefix', suffix: 'custom-suffix' }}
        >
          1
        </Stat.Value>
        <Stat.Diff value={5} classNames={{ diffIcon: 'custom-icon' }} />
      </Stat>
    );

    expect(container.querySelector('.custom-prefix')).toHaveTextContent('$');
    expect(container.querySelector('.custom-suffix')).toHaveTextContent('k');
    expect(container.querySelector('.custom-icon')).not.toBe(null);
  });

  it('distributes a compound icon into the icon slot', () => {
    const { container } = render(
      <Stat>
        <Stat.Icon>
          <span data-testid="compound-icon" />
        </Stat.Icon>
        <Stat.Label>Revenue</Stat.Label>
        <Stat.Value>1,340</Stat.Value>
      </Stat>
    );

    const icon = container.querySelector('.mantine-Stat-icon');
    const body = container.querySelector('.mantine-Stat-body');
    expect(icon?.querySelector('[data-testid="compound-icon"]')).not.toBe(null);
    expect(body?.querySelector('.mantine-Stat-label')).toHaveTextContent('Revenue');
    expect(body?.querySelector('.mantine-Stat-icon')).toBe(null);
  });
});

describe('@mantine/core/Stat.Countdown', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  beforeEach(() => {
    jest.setSystemTime(new Date('2026-01-01T00:00:00.000Z'));
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('renders the remaining time formatted with the format prop', () => {
    const { container } = render(
      <Stat.Countdown value={Date.now() + 65 * 1000} format="mm:ss" label="Sale ends in" />
    );
    expect(screen.getByText('Sale ends in')).toBeInTheDocument();
    expect(container.querySelector('.mantine-Stat-value')).toHaveTextContent('01:05');
  });

  it('sets an aria-live region on the value', () => {
    const { container } = render(<Stat.Countdown value={Date.now() + 5000} format="mm:ss" />);
    expect(container.querySelector('.mantine-Stat-value')).toHaveAttribute('aria-live', 'polite');
  });

  it('ticks down and fires onFinish once when the target is reached', () => {
    const onFinish = jest.fn();
    const onTick = jest.fn();
    const { container } = render(
      <Stat.Countdown value={Date.now() + 3000} format="ss" onFinish={onFinish} onTick={onTick} />
    );

    expect(container.querySelector('.mantine-Stat-value')).toHaveTextContent('03');

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(container.querySelector('.mantine-Stat-value')).toHaveTextContent('02');

    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(container.querySelector('.mantine-Stat-value')).toHaveTextContent('00');
    expect(onFinish).toHaveBeenCalledTimes(1);
    expect(onTick).toHaveBeenCalled();
  });

  it('accepts a Date value', () => {
    const { container } = render(
      <Stat.Countdown value={new Date(Date.now() + 10 * 1000)} format="mm:ss" />
    );
    expect(container.querySelector('.mantine-Stat-value')).toHaveTextContent('00:10');
  });
});
