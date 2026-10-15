import { act, fireEvent } from '@testing-library/react';
import { render, screen, tests } from '@mantine-tests/core';
import { BulletChart, BulletChartProps, BulletChartStylesNames } from './BulletChart';

const ranges = [{ value: 100, color: 'blue' }];

const q = (container: HTMLElement, selector: string) =>
  container.querySelector<HTMLElement>(`.mantine-BulletChart-${selector}`);

const position = (element: HTMLElement | null) =>
  element?.style.getPropertyValue('--bullet-position');

const defaultProps: BulletChartProps = {
  value: 50,
  target: 80,
  label: 'Revenue',
  ranges: [{ value: 100, color: 'blue' }],
};

const namedRanges = [
  { value: 100, color: 'red', label: 'Poor' },
  { value: 200, color: 'yellow', label: 'Average' },
  { value: 300, color: 'teal', label: 'Good' },
];

describe('@mantine/charts/BulletChart', () => {
  tests.itSupportsSystemProps<BulletChartProps, BulletChartStylesNames>({
    component: BulletChart,
    props: defaultProps,
    size: false,
    varsResolver: true,
    refType: HTMLDivElement,
    displayName: '@mantine/charts/BulletChart',
    stylesApiSelectors: [
      'root',
      'label',
      'trackWrapper',
      'track',
      'range',
      'bar',
      'target',
      'rangeLabel',
      'barLabel',
      'targetLabel',
    ],
  });

  it('exposes the chart as an image named by label, value, range label and target', () => {
    render(
      <BulletChart
        label="Revenue"
        value={230}
        target={150}
        ranges={namedRanges}
        valueFormatter={(v) => `$${v}`}
      />
    );
    expect(
      screen.getByRole('img', { name: 'Revenue value $230, in Good range, target $150' })
    ).toBeInTheDocument();
  });

  it('includes a React node label in the accessible name', () => {
    render(<BulletChart label={<b>Revenue</b>} value={50} ranges={ranges} />);
    expect(screen.getByRole('img', { name: 'Revenue value 50' })).toBeInTheDocument();
  });

  it('omits the range from the accessible name when the value is beyond all ranges or range has no label', () => {
    const { rerender } = render(<BulletChart value={400} ranges={namedRanges} />);
    expect(screen.getByRole('img', { name: 'value 400' })).toBeInTheDocument();

    rerender(<BulletChart value={50} ranges={ranges} />);
    expect(screen.getByRole('img', { name: 'value 50' })).toBeInTheDocument();
  });

  it('hides visual labels from assistive technologies', () => {
    const { container } = render(<BulletChart {...defaultProps} />);
    expect(q(container, 'label')).toHaveAttribute('aria-hidden', 'true');
    expect(q(container, 'trackWrapper')).toHaveAttribute('aria-hidden', 'true');
  });

  it('lets aria-label, aria-labelledby and role override the defaults', () => {
    const { rerender } = render(<BulletChart {...defaultProps} aria-label="Custom" />);
    expect(screen.getByRole('img', { name: 'Custom' })).toBeInTheDocument();

    rerender(
      <>
        <span id="external">External</span>
        <BulletChart {...defaultProps} aria-labelledby="external" />
      </>
    );
    expect(screen.getByRole('img', { name: 'External' })).toBeInTheDocument();

    rerender(<BulletChart {...defaultProps} role="meter" aria-label="Meter" />);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('is focusable only when withTooltip is set', () => {
    const { rerender } = render(<BulletChart {...defaultProps} />);
    expect(screen.getByRole('img')).not.toHaveAttribute('tabindex');

    rerender(<BulletChart {...defaultProps} withTooltip />);
    expect(screen.getByRole('img')).toHaveAttribute('tabindex', '0');
  });

  it('shows the default tooltip with the range label on focus', async () => {
    render(<BulletChart value={230} target={150} ranges={namedRanges} withTooltip />);
    await act(async () => {
      fireEvent.focus(screen.getByRole('img'));
    });
    expect(await screen.findByText('Value: 230 / Range: Good / Target: 150')).toBeInTheDocument();
  });

  it('does not call getTooltipLabel when withTooltip is not set', () => {
    const getTooltipLabel = jest.fn(() => 'label');
    const { rerender } = render(
      <BulletChart {...defaultProps} getTooltipLabel={getTooltipLabel} />
    );
    expect(getTooltipLabel).not.toHaveBeenCalled();

    rerender(<BulletChart {...defaultProps} getTooltipLabel={getTooltipLabel} withTooltip />);
    expect(getTooltipLabel).toHaveBeenCalledWith({ value: 50, target: 80 });
  });

  it('lets styles prop set background color of bar and target when color props are not set', () => {
    const { container } = render(
      <BulletChart
        {...defaultProps}
        styles={{ bar: { backgroundColor: 'red' }, target: { backgroundColor: 'blue' } }}
      />
    );
    expect(q(container, 'bar')?.style.backgroundColor).toBe('red');
    expect(q(container, 'target')?.style.backgroundColor).toBe('blue');
  });

  it('sets data-orientation on the root only', () => {
    const { container } = render(<BulletChart {...defaultProps} orientation="vertical" />);
    expect(q(container, 'root')).toHaveAttribute('data-orientation', 'vertical');
    expect(q(container, 'trackWrapper')).not.toHaveAttribute('data-orientation');
    expect(q(container, 'track')).not.toHaveAttribute('data-orientation');
  });

  it('keeps data-orientation when mod prop is set', () => {
    const { container } = render(
      <BulletChart {...defaultProps} orientation="vertical" mod={{ foo: true }} />
    );
    expect(q(container, 'root')).toHaveAttribute('data-orientation', 'vertical');
    expect(q(container, 'root')).toHaveAttribute('data-foo', 'true');
  });

  it('has a non-empty accessible name when there is nothing to describe', () => {
    render(<BulletChart value={NaN} ranges={ranges} />);
    expect(screen.getByRole('img')).toHaveAccessibleName('No data');
  });

  it('uses only the label as accessible name when value and target are missing', () => {
    render(<BulletChart value={NaN} label="Revenue" ranges={ranges} />);
    expect(screen.getByRole('img')).toHaveAccessibleName('Revenue');
  });

  it('extends the scale to a value beyond the last range', () => {
    const { container } = render(<BulletChart value={200} ranges={ranges} />);
    expect(q(container, 'bar')).toHaveStyle({ width: '100%' });
    expect(q(container, 'range')).toHaveStyle({ width: '50%' });
    expect(position(q(container, 'barLabel'))).toBe('100%');
    expect(q(container, 'barLabel')).toHaveTextContent('200');
  });

  it('extends the scale to a target beyond the last range', () => {
    const { container } = render(<BulletChart value={50} target={200} ranges={ranges} />);
    expect(position(q(container, 'target'))).toBe('100%');
    expect(position(q(container, 'targetLabel'))).toBe('100%');
    expect(q(container, 'range')).toHaveStyle({ width: '50%' });
    expect(q(container, 'bar')).toHaveStyle({ width: '25%' });
  });

  it('extends the scale when vertical', () => {
    const { container } = render(
      <BulletChart value={50} target={200} ranges={ranges} orientation="vertical" />
    );
    expect(position(q(container, 'target'))).toBe('100%');
    expect(q(container, 'range')).toHaveStyle({ height: '50%' });
    expect(q(container, 'bar')).toHaveStyle({ height: '25%' });
  });

  it('draws no bar for a negative value and keeps its label at the scale start', () => {
    const { container } = render(<BulletChart value={-20} target={-10} ranges={ranges} />);
    expect(q(container, 'bar')).toHaveStyle({ width: '0%' });
    expect(q(container, 'barLabel')).toHaveTextContent('-20');
    expect(position(q(container, 'barLabel'))).toBe('0%');
    expect(position(q(container, 'target'))).toBe('0%');
  });

  it('treats non-finite value and target as missing', () => {
    const { container } = render(<BulletChart value={NaN} target={NaN} ranges={ranges} />);
    expect(q(container, 'bar')).toBeNull();
    expect(q(container, 'barLabel')).toBeNull();
    expect(q(container, 'target')).toBeNull();
    expect(q(container, 'targetLabel')).toBeNull();
    expect(container).not.toHaveTextContent('NaN');
    expect(q(container, 'range')).toHaveStyle({ width: '100%' });
  });

  it('ignores ranges with non-finite values', () => {
    const { container } = render(
      <BulletChart value={50} ranges={[...ranges, { value: NaN, color: 'red' }]} />
    );
    expect(container.querySelectorAll('.mantine-BulletChart-range')).toHaveLength(1);
    expect(q(container, 'bar')).toHaveStyle({ width: '50%' });
  });

  it('builds the scale from value and target when ranges are empty', () => {
    const { container } = render(<BulletChart value={100} target={50} ranges={[]} />);
    expect(q(container, 'bar')).toHaveStyle({ width: '100%' });
    expect(position(q(container, 'target'))).toBe('50%');
    expect(position(q(container, 'targetLabel'))).toBe('50%');
  });

  it('marks the track wrapper when a target is displayed', () => {
    const { container, rerender } = render(<BulletChart value={50} target={80} ranges={ranges} />);
    expect(q(container, 'trackWrapper')).toHaveAttribute('data-with-target');

    rerender(<BulletChart value={50} ranges={ranges} />);
    expect(q(container, 'trackWrapper')).not.toHaveAttribute('data-with-target');
  });

  it('leaves default bar and target colors to CSS', () => {
    const { container, rerender } = render(<BulletChart value={50} target={80} ranges={ranges} />);
    expect(q(container, 'bar')?.style.backgroundColor).toBe('');
    expect(q(container, 'target')?.style.backgroundColor).toBe('');

    rerender(
      <BulletChart value={50} target={80} ranges={ranges} barColor="red" targetColor="blue" />
    );
    expect(q(container, 'bar')?.style.backgroundColor).not.toBe('');
    expect(q(container, 'target')?.style.backgroundColor).not.toBe('');
  });
});
