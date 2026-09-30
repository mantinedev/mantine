import { Activity, useState } from 'react';
import { act, fireEvent } from '@testing-library/react';
import { hydrateRoot } from 'react-dom/client';
import { renderToString } from 'react-dom/server';
import { render, screen, tests } from '@mantine-tests/core';
import { createTheme, MantineProvider } from '../../core';
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
    <Stat key="3">
      <Stat.Label>Sale ends in</Stat.Label>
      <Stat.Value>01:00:00</Stat.Value>
    </Stat>,
    <Stat label="Conversion" value={4.28} suffix="%" diff={-1.4} loading key="4" />,
    <Stat.Countdown label="Sale ends in" value={Date.now() + 60_000} key="5" />,
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

  it('rounds the default diff to at most one decimal', () => {
    const up = render(<Stat value={100} diff={0.3333} />);
    expect(up.container.querySelector('.mantine-Stat-diff')).toHaveTextContent('+0.3%');
    up.unmount();

    const down = render(<Stat value={100} diff={-12} />);
    expect(down.container.querySelector('.mantine-Stat-diff')).toHaveTextContent('-12%');
  });

  it.each([Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY])(
    'does not render a diff for the non-finite value %s',
    (diff) => {
      const { container } = render(<Stat value={100} diff={diff} />);
      expect(container.querySelector('.mantine-Stat-diff')).toBe(null);
    }
  );

  it.each([-0.04, 0.04, 1e-10])(
    'renders the default diff %s that rounds to zero as neutral',
    (diff) => {
      const { container } = render(<Stat value={100} diff={diff} />);
      const node = container.querySelector('.mantine-Stat-diff');
      expect(node).toHaveAttribute('data-direction', 'none');
      expect(node?.textContent).toBe('0% no change');
      expect(container.querySelector('.mantine-Stat-diffIcon')).toBe(null);
    }
  );

  it('keeps the direction of a default diff that rounds away from zero', () => {
    const up = render(<Stat value={100} diff={0.05} />);
    const upNode = up.container.querySelector('.mantine-Stat-diff');
    expect(upNode).toHaveAttribute('data-direction', 'up');
    expect(upNode?.textContent).toBe('+0.1% increase');
    up.unmount();

    const down = render(<Stat value={100} diff={-0.05} />);
    const downNode = down.container.querySelector('.mantine-Stat-diff');
    expect(downNode).toHaveAttribute('data-direction', 'down');
    expect(downNode?.textContent).toBe('-0.1% decrease');
  });

  it('derives the direction from the raw diff with a custom diffFormatter', () => {
    const { container } = render(
      <Stat value={100} diff={0.04} diffFormatter={(diff) => `${diff}%`} />
    );
    const node = container.querySelector('.mantine-Stat-diff');
    expect(node).toHaveAttribute('data-direction', 'up');
    expect(node?.textContent).toBe('0.04% increase');
  });

  it('exposes the diff direction to assistive technologies', () => {
    const { container } = render(<Stat value={100} diff={5} diffFormatter={(v) => `${v}%`} />);
    const diff = container.querySelector('.mantine-Stat-diff');
    expect(diff?.textContent).toBe('5% increase');
    expect(container.querySelector('.mantine-Stat-diffIcon')).toHaveAttribute(
      'aria-hidden',
      'true'
    );
  });

  it('announces decrease and no change directions', () => {
    const down = render(<Stat value={100} diff={-5} />);
    expect(down.container.querySelector('.mantine-Stat-diff')?.textContent).toBe('-5% decrease');
    down.unmount();

    const neutral = render(<Stat value={100} diff={0} />);
    expect(neutral.container.querySelector('.mantine-Stat-diff')?.textContent).toBe('0% no change');
  });

  it('supports localized direction labels', () => {
    const shorthand = render(
      <Stat value={100} diff={5} diffLabels={{ increase: 'hausse', decrease: 'baisse' }} />
    );
    expect(shorthand.container.querySelector('.mantine-Stat-diff')?.textContent).toBe('+5% hausse');
    shorthand.unmount();

    const compound = render(
      <Stat>
        <Stat.Diff value={-5} labels={{ decrease: 'baisse' }} />
      </Stat>
    );
    expect(compound.container.querySelector('.mantine-Stat-diff')?.textContent).toBe('-5% baisse');
  });

  it('isolates the formatted diff text left-to-right', () => {
    const { container } = render(<Stat value={100} diff={12.4} />);
    const bdi = container.querySelector('.mantine-Stat-diff bdi');
    expect(bdi).toHaveAttribute('dir', 'ltr');
    expect(bdi).toHaveTextContent('+12.4%');
  });

  it('sets explicit dimensions on the diff arrow', () => {
    const { container } = render(<Stat value={100} diff={12.4} unstyled />);
    const icon = container.querySelector('.mantine-Stat-diff svg');
    expect(icon).toHaveAttribute('width', '1em');
    expect(icon).toHaveAttribute('height', '1em');
  });

  it('renders Stat.Diff children without a direction text when value is not set', () => {
    const { container } = render(
      <Stat>
        <Stat.Diff>Custom trend</Stat.Diff>
      </Stat>
    );
    expect(container.querySelector('.mantine-Stat-diff')?.textContent).toBe('Custom trend');
  });

  it('does not render a diff when diff is not set', () => {
    const { container } = render(<Stat value={100} />);
    expect(container.querySelector('.mantine-Stat-diff')).toBe(null);
  });

  it('animates the value with RollingNumber when animate is set', () => {
    const { container } = render(<Stat value={100} animate />);
    expect(container.querySelector('.mantine-RollingNumber-root')).not.toBe(null);
  });

  it('renders a Skeleton in place of the value when loading, keeping prefix and suffix', () => {
    const { container } = render(<Stat value={100} prefix="$" suffix="USD" diff={4} loading />);
    const root = container.querySelector('.mantine-Stat-root');
    expect(container.querySelector('.mantine-Skeleton-root')).not.toBe(null);
    expect(container.querySelector('.mantine-Stat-prefix')).toHaveTextContent('$');
    expect(container.querySelector('.mantine-Stat-suffix')).toHaveTextContent('USD');
    expect(root).toHaveAttribute('data-loading');
    expect(root).toHaveAttribute('aria-busy', 'true');
  });

  it('gives the loading skeleton a hidden placeholder text line', () => {
    const { container } = render(<Stat value={100} prefix="$" loading />);
    const skeleton = container.querySelector('.mantine-Stat-value .mantine-Skeleton-root');
    const placeholder = skeleton?.querySelector('[aria-hidden="true"]');
    expect(skeleton).toHaveAttribute('data-visible');
    expect(placeholder).not.toBe(null);
    expect(placeholder?.textContent).not.toBe('');
  });

  it('hides the diff while loading', () => {
    const { container } = render(<Stat value={100} diff={4} loading />);
    expect(container.querySelector('.mantine-Stat-diff')).toBe(null);
  });

  it('does not set aria-busy when not loading', () => {
    const { container } = render(<Stat value={100} />);
    expect(container.querySelector('.mantine-Stat-root')).not.toHaveAttribute('aria-busy');
  });

  it.each(['12k', '01:00:00', 'N/A', '—'])('renders the string value %s verbatim', (value) => {
    const { container } = render(<Stat value={value} thousandSeparator decimalScale={2} />);
    expect(container.querySelector('.mantine-Stat-value')?.textContent).toBe(value);
  });

  it('formats numeric string values with NumberFormatter', () => {
    const { container } = render(<Stat value="1234.5" thousandSeparator />);
    expect(container.querySelector('.mantine-Stat-value')?.textContent).toBe('1,234.5');
  });

  it.each([Number.NaN, Number.POSITIVE_INFINITY])(
    'renders nothing for the non-finite value %s',
    (value) => {
      const plain = render(<Stat value={value} />);
      expect(plain.container.querySelector('.mantine-Stat-value')?.textContent).toBe('');
      plain.unmount();

      const animated = render(<Stat value={value} animate />);
      expect(animated.container.querySelector('.mantine-Stat-value')?.textContent).toBe('');
      expect(animated.container.querySelector('.mantine-RollingNumber-root')).toBe(null);
    }
  );

  it('passes the raw value to formatter only when value is set', () => {
    const formatter = jest.fn(() => 'formatted');
    const { container } = render(<Stat label="Users" formatter={formatter} />);
    expect(formatter).not.toHaveBeenCalled();
    expect(container.querySelector('.mantine-Stat-value')).toBe(null);
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

function getValueText(container: HTMLElement) {
  return container.querySelector('.mantine-Stat-value')?.textContent;
}

function sampleValues(container: HTMLElement, duration: number, step: number) {
  const samples: { time: number; text: string | null | undefined }[] = [];
  for (let time = step; time <= duration; time += step) {
    act(() => {
      jest.advanceTimersByTime(step);
    });
    samples.push({ time, text: getValueText(container) });
  }
  return samples;
}

function dedupe(values: (string | null | undefined)[]) {
  return values.filter((value, index) => index === 0 || values[index - 1] !== value);
}

describe('@mantine/core/Stat.Countdown', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  beforeEach(() => {
    jest.setSystemTime(new Date('2026-01-01T00:00:00.000Z'));
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.restoreAllMocks();
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

  it('does not announce every tick', () => {
    const regular = render(<Stat.Countdown value={Date.now() + 5000} format="mm:ss" />);
    expect(regular.container.querySelector('.mantine-Stat-value')).toHaveAttribute(
      'aria-live',
      'off'
    );
    regular.unmount();

    const fast = render(<Stat.Countdown value={Date.now() + 5000} format="ss.SSS" />);
    expect(fast.container.querySelector('.mantine-Stat-value')).toHaveAttribute('aria-live', 'off');
  });

  it('renders through Stat compound parts', () => {
    const { container } = render(
      <Stat.Countdown
        value={Date.now() + 5000}
        format="ss"
        label="Ends in"
        icon={<span data-testid="icon" />}
        prefix="T-"
        suffix="s"
        size="xl"
      />
    );
    const root = container.querySelector('.mantine-Stat-root');
    expect(root?.querySelector('.mantine-Stat-icon [data-testid="icon"]')).not.toBe(null);
    expect(root?.querySelector('.mantine-Stat-body .mantine-Stat-label')).toHaveTextContent(
      'Ends in'
    );
    expect(root?.querySelector('.mantine-Stat-prefix')).toHaveTextContent('T-');
    expect(root?.querySelector('.mantine-Stat-suffix')).toHaveTextContent('s');
    expect(root).toHaveStyle({ '--stat-value-fz': 'var(--stat-value-fz-xl)' });
  });

  it('resolves size and color from theme Stat default props', () => {
    const theme = createTheme({
      components: {
        Stat: Stat.extend({ defaultProps: { size: 'xl', color: 'blue' } }),
      },
    });
    const { container } = render(
      <MantineProvider theme={theme}>
        <Stat.Countdown value={Date.now() + 5000} format="ss" />
      </MantineProvider>
    );
    const root = container.querySelector('.mantine-Stat-root');
    expect(root).toHaveStyle({ '--stat-value-fz': 'var(--stat-value-fz-xl)' });
    expect(container.querySelector('.mantine-Stat-value')).toHaveStyle({
      color: 'var(--mantine-color-blue-text)',
    });
  });

  it('prefers theme StatCountdown default props over Stat default props', () => {
    const theme = createTheme({
      components: {
        Stat: Stat.extend({ defaultProps: { size: 'xl', color: 'blue' } }),
        StatCountdown: Stat.Countdown.extend({ defaultProps: { size: 'xs', color: 'red' } }),
      },
    });
    const { container } = render(
      <MantineProvider theme={theme}>
        <Stat.Countdown value={Date.now() + 5000} format="ss" />
      </MantineProvider>
    );
    const root = container.querySelector('.mantine-Stat-root');
    expect(root).toHaveStyle({ '--stat-value-fz': 'var(--stat-value-fz-xs)' });
    expect(container.querySelector('.mantine-Stat-value')).toHaveStyle({
      color: 'var(--mantine-color-red-text)',
    });
  });

  it('ticks down and fires onFinish once when the target is reached', () => {
    const onFinish = jest.fn();
    const onTick = jest.fn();
    const { container } = render(
      <Stat.Countdown value={Date.now() + 3000} format="ss" onFinish={onFinish} onTick={onTick} />
    );

    expect(getValueText(container)).toBe('03');

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(getValueText(container)).toBe('02');

    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(getValueText(container)).toBe('00');
    expect(onFinish).toHaveBeenCalledTimes(1);
    expect(onTick).toHaveBeenCalled();
  });

  it('does not skip a value when a tick fires late', () => {
    const { container } = render(<Stat.Countdown value={Date.now() + 5000} format="ss" />);
    const initial = getValueText(container);
    const fakeNow = Date.now.bind(Date);
    jest.spyOn(Date, 'now').mockImplementation(() => fakeNow() + 1);

    const samples = sampleValues(container, 5100, 50).map((sample) => sample.text);
    expect(dedupe([initial, ...samples])).toEqual(['05', '04', '03', '02', '01', '00']);
  });

  it('changes the displayed value on the boundaries of the target', () => {
    const onFinish = jest.fn();
    const { container } = render(
      <Stat.Countdown value={Date.now() + 2400} format="ss" onFinish={onFinish} />
    );

    expect(getValueText(container)).toBe('03');
    const samples = sampleValues(container, 2600, 100);
    const textAt = (time: number) => samples.find((sample) => sample.time === time)?.text;

    expect(textAt(300)).toBe('03');
    expect(textAt(400)).toBe('02');
    expect(textAt(1300)).toBe('02');
    expect(textAt(1400)).toBe('01');
    expect(textAt(2300)).toBe('01');
    expect(textAt(2400)).toBe('00');
    expect(onFinish).toHaveBeenCalledTimes(1);
  });

  it('computes the remaining time on the first render', () => {
    const html = renderToString(
      <MantineProvider>
        <Stat.Countdown value={Date.now() + 3 * 60 * 60 * 1000} />
      </MantineProvider>
    );
    expect(html).toContain('03:00:00');
    expect(html).not.toContain('00:00:00');
  });

  it('replaces the server-rendered value with the live remaining time after hydration', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
    const target = Date.now() + 3 * 60 * 60 * 1000;
    const ui = (
      <MantineProvider>
        <Stat.Countdown value={target} format="HH:mm" />
      </MantineProvider>
    );

    const container = document.createElement('div');
    container.innerHTML = renderToString(ui);
    document.body.appendChild(container);
    expect(getValueText(container)).toBe('03:00');

    jest.setSystemTime(Date.now() + 1.5 * 60 * 60 * 1000);
    let root: ReturnType<typeof hydrateRoot> | undefined;
    act(() => {
      root = hydrateRoot(container, ui);
    });

    expect(getValueText(container)).toBe('01:30');
    expect(consoleError).not.toHaveBeenCalled();

    act(() => root!.unmount());
    container.remove();
  });

  it('does not call onFinish again when Activity shows a finished countdown', () => {
    const onFinish = jest.fn();
    const target = Date.now() + 2000;
    const view = (mode: 'visible' | 'hidden') => (
      <>
        <Activity mode={mode}>
          <Stat.Countdown value={target} format="ss" onFinish={onFinish} />
        </Activity>
      </>
    );
    const { rerender } = render(view('visible'));

    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(onFinish).toHaveBeenCalledTimes(1);

    rerender(view('hidden'));
    rerender(view('visible'));
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(onFinish).toHaveBeenCalledTimes(1);
  });

  it('does not call onFinish again when format changes after the countdown finished', () => {
    const onFinish = jest.fn();
    const target = Date.now() + 2000;
    const { rerender, container } = render(
      <Stat.Countdown value={target} format="ss" onFinish={onFinish} />
    );

    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(onFinish).toHaveBeenCalledTimes(1);

    rerender(<Stat.Countdown value={target} format="mm:ss.SSS" onFinish={onFinish} />);
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(getValueText(container)).toBe('00:00.000');
    expect(onFinish).toHaveBeenCalledTimes(1);
  });

  it('treats an invalid target as finished without calling callbacks', () => {
    const onFinish = jest.fn();
    const onTick = jest.fn();
    const { container } = render(
      <Stat.Countdown value={new Date('garbage')} onFinish={onFinish} onTick={onTick} />
    );

    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(getValueText(container)).toBe('00:00:00');
    expect(onTick).not.toHaveBeenCalled();
    expect(onFinish).not.toHaveBeenCalled();
  });

  it('clears the timer on unmount', () => {
    const onTick = jest.fn();
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
    const { unmount } = render(<Stat.Countdown value={Date.now() + 5000} onTick={onTick} />);

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    const calls = onTick.mock.calls.length;
    unmount();
    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(onTick).toHaveBeenCalledTimes(calls);
    expect(jest.getTimerCount()).toBe(0);
    expect(consoleError).not.toHaveBeenCalled();
  });

  it('restarts from the new target when value changes', () => {
    const { rerender, container } = render(
      <Stat.Countdown value={Date.now() + 5000} format="ss" />
    );
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(getValueText(container)).toBe('04');

    rerender(<Stat.Countdown value={Date.now() + 30_000} format="ss" />);
    expect(getValueText(container)).toBe('30');

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(getValueText(container)).toBe('29');
  });

  it('keeps counting down when the parent re-renders with the same target', () => {
    function Parent() {
      const [target] = useState(() => Date.now() + 10_000);
      const [renders, setRenders] = useState(0);
      return (
        <>
          <button type="button" onClick={() => setRenders((c) => c + 1)}>
            rerender {renders}
          </button>
          <Stat.Countdown value={target} format="ss" />
        </>
      );
    }

    const { container } = render(<Parent />);
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(getValueText(container)).toBe('07');

    fireEvent.click(screen.getByRole('button'));
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(getValueText(container)).toBe('06');
  });

  it('uses a one second period when S appears only inside escaped literals', () => {
    const onTick = jest.fn();
    render(<Stat.Countdown value={Date.now() + 5000} format="[Sale] mm:ss" onTick={onTick} />);

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(onTick).toHaveBeenCalledTimes(1);
  });

  it('accepts a Date value', () => {
    const { container } = render(
      <Stat.Countdown value={new Date(Date.now() + 10 * 1000)} format="mm:ss" />
    );
    expect(container.querySelector('.mantine-Stat-value')).toHaveTextContent('00:10');
  });
});
