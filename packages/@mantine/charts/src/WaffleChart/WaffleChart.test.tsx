import { render, tests } from '@mantine-tests/core';
import { WaffleChart, WaffleChartProps, WaffleChartStylesNames } from './WaffleChart';

const defaultProps: WaffleChartProps = {
  data: [
    { name: 'A', value: 40, color: 'blue.6' },
    { name: 'B', value: 60, color: 'red.6' },
  ],
};

function getCells(container: HTMLElement) {
  return Array.from(container.querySelectorAll('.mantine-WaffleChart-cell'));
}

function getSvgSize(container: HTMLElement) {
  const svg = container.querySelector('svg')!;
  return { width: Number(svg.getAttribute('width')), height: Number(svg.getAttribute('height')) };
}

describe('@mantine/charts/WaffleChart', () => {
  tests.itSupportsSystemProps<WaffleChartProps, WaffleChartStylesNames>({
    component: WaffleChart,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@mantine/charts/WaffleChart',
    stylesApiSelectors: ['root', 'cell'],
    size: false,
  });

  it('renders rows * columns cells', () => {
    const { container } = render(<WaffleChart {...defaultProps} rows={5} columns={4} />);
    expect(getCells(container)).toHaveLength(20);
  });

  it('never renders more cells than the grid holds when values are negative', () => {
    const { container } = render(
      <WaffleChart
        data={[
          { name: 'A', value: 10, color: 'blue.6' },
          { name: 'B', value: -5, color: 'red.6' },
        ]}
        rows={10}
        columns={10}
      />
    );

    expect(getCells(container)).toHaveLength(100);
  });

  it('treats negative values as zero', () => {
    const { container } = render(
      <WaffleChart
        data={[
          { name: 'A', value: 50, color: 'blue.6' },
          { name: 'B', value: -50, color: 'red.6' },
        ]}
        rows={10}
        columns={10}
      />
    );

    // The whole grid is filled by segment A alone, none of it by the negative segment
    const filled = getCells(container).filter((cell) => !cell.hasAttribute('data-empty'));
    expect(filled).toHaveLength(100);
  });

  it('keeps every cell inside the svg viewport', () => {
    const { container } = render(<WaffleChart {...defaultProps} rows={10} columns={10} />);
    const { width, height } = getSvgSize(container);

    getCells(container).forEach((cell) => {
      const x = Number(cell.getAttribute('x'));
      const y = Number(cell.getAttribute('y'));
      const cellWidth = Number(cell.getAttribute('width'));
      const cellHeight = Number(cell.getAttribute('height'));

      expect(x).toBeGreaterThanOrEqual(0);
      expect(y).toBeGreaterThanOrEqual(0);
      expect(x + cellWidth).toBeLessThanOrEqual(width);
      expect(y + cellHeight).toBeLessThanOrEqual(height);
    });
  });

  it('does not produce negative svg dimensions for rows or columns of 0', () => {
    const { container } = render(<WaffleChart {...defaultProps} rows={0} columns={0} />);
    const { width, height } = getSvgSize(container);

    expect(width).toBeGreaterThanOrEqual(0);
    expect(height).toBeGreaterThanOrEqual(0);
  });

  it('does not produce negative cell dimensions when size is smaller than the gaps', () => {
    const { container } = render(
      <WaffleChart {...defaultProps} rows={10} columns={10} gap={2} size={10} />
    );

    getCells(container).forEach((cell) => {
      expect(Number(cell.getAttribute('width'))).toBeGreaterThanOrEqual(0);
      expect(Number(cell.getAttribute('height'))).toBeGreaterThanOrEqual(0);
    });
  });

  it('handles empty data without crashing', () => {
    const { container } = render(<WaffleChart data={[]} />);
    const { width, height } = getSvgSize(container);

    expect(width).toBeGreaterThanOrEqual(0);
    expect(height).toBeGreaterThanOrEqual(0);
  });

  it('labels the grid with every segment name and value', () => {
    const { container } = render(<WaffleChart {...defaultProps} withLegend={false} />);
    const grid = container.querySelector('svg')!;

    expect(grid).toHaveAttribute('role', 'img');
    expect(grid).toHaveAttribute('aria-label', 'A: 40, B: 60');
  });

  it('does not label the grid when there is no data', () => {
    const { container } = render(<WaffleChart data={[]} />);
    const grid = container.querySelector('svg')!;

    expect(grid).not.toHaveAttribute('role');
    expect(grid).not.toHaveAttribute('aria-label');
  });

  it('reports clamped values in the grid label', () => {
    const { container } = render(
      <WaffleChart
        data={[
          { name: 'A', value: 40, color: 'blue.6' },
          { name: 'B', value: -10, color: 'red.6' },
        ]}
      />
    );

    expect(container.querySelector('svg')).toHaveAttribute('aria-label', 'A: 40, B: 0');
  });

  it('hides the legend from assistive tech because the grid label repeats it', () => {
    const { container } = render(<WaffleChart {...defaultProps} withLegend />);
    expect(container.querySelector('.mantine-WaffleChart-legend')).toHaveAttribute('aria-hidden');
  });
});
