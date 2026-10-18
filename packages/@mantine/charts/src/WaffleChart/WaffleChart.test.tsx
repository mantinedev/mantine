import { act, fireEvent, screen } from '@testing-library/react';
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

    const cells = getCells(container);
    expect(cells).toHaveLength(100);
    expect(cells.filter((cell) => !cell.hasAttribute('data-empty'))).toHaveLength(100);
  });

  it('treats non-finite values as zero without emptying the whole grid', () => {
    const { container } = render(
      <WaffleChart
        data={[
          { name: 'A', value: 50, color: 'blue.6' },
          { name: 'B', value: NaN, color: 'red.6' },
        ]}
        rows={10}
        columns={10}
      />
    );

    const filled = getCells(container).filter((cell) => !cell.hasAttribute('data-empty'));
    expect(filled).toHaveLength(100);
    expect(container.querySelector('svg')).toHaveAttribute('aria-label', 'A: 50, B: 0. Total: 50');
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

  it('labels the grid with every segment name and value', () => {
    const { container } = render(<WaffleChart {...defaultProps} withLegend={false} />);
    const grid = container.querySelector('svg')!;

    expect(grid).toHaveAttribute('role', 'img');
    expect(grid).toHaveAttribute('aria-label', 'A: 40, B: 60. Total: 100');
  });

  it('replaces the generated grid name with a caller aria-label', () => {
    const { container } = render(<WaffleChart {...defaultProps} aria-label="Storage usage" />);
    const root = container.querySelector('.mantine-WaffleChart-root')!;
    const grid = container.querySelector('svg')!;

    expect(root).not.toHaveAttribute('role');
    expect(root).not.toHaveAttribute('aria-label');
    expect(grid).toHaveAttribute('role', 'img');
    expect(grid).toHaveAttribute('aria-label', 'Storage usage');
    expect(container.querySelectorAll('[role="img"]')).toHaveLength(1);
  });

  it('replaces the generated grid name with a caller aria-labelledby', () => {
    const { container } = render(
      <>
        <span id="waffle-title">Storage usage</span>
        <WaffleChart {...defaultProps} aria-labelledby="waffle-title" />
      </>
    );
    const grid = container.querySelector('svg')!;

    expect(container.querySelector('.mantine-WaffleChart-root')).not.toHaveAttribute(
      'aria-labelledby'
    );
    expect(grid).toHaveAttribute('role', 'img');
    expect(grid).toHaveAttribute('aria-labelledby', 'waffle-title');
    expect(grid).not.toHaveAttribute('aria-label');
  });

  it('keeps a caller label on the grid when there is no data', () => {
    const { container } = render(<WaffleChart data={[]} aria-label="Storage usage" />);
    const grid = container.querySelector('svg')!;

    expect(grid).toHaveAttribute('role', 'img');
    expect(grid).toHaveAttribute('aria-label', 'Storage usage');
  });

  it('does not add a role to the root when there is no caller label', () => {
    const { container } = render(<WaffleChart {...defaultProps} />);
    expect(container.querySelector('.mantine-WaffleChart-root')).not.toHaveAttribute('role');
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

    expect(container.querySelector('svg')).toHaveAttribute('aria-label', 'A: 40, B: 0. Total: 40');
  });

  it('hides the legend from assistive tech because the grid label repeats it', () => {
    const { container } = render(<WaffleChart {...defaultProps} withLegend />);
    expect(container.querySelector('.mantine-WaffleChart-legend')).toHaveAttribute('aria-hidden');
  });

  it('reports the explicit total in the grid label', () => {
    const { container } = render(
      <WaffleChart data={[{ name: 'Completed', value: 68, color: 'blue.6' }]} total={100} />
    );

    expect(container.querySelector('svg')).toHaveAttribute(
      'aria-label',
      'Completed: 68. Total: 100'
    );
  });

  it('honors size when the gaps alone would exceed it', () => {
    const { container } = render(
      <WaffleChart {...defaultProps} rows={10} columns={10} gap={2} size={10} />
    );

    expect(getSvgSize(container).width).toBeCloseTo(10, 5);
    getCells(container).forEach((cell) => {
      expect(Number(cell.getAttribute('width'))).toBeGreaterThanOrEqual(0);
      expect(Number(cell.getAttribute('height'))).toBeGreaterThanOrEqual(0);
    });
  });

  it('treats size={0} as an explicit size rather than falling back to the default', () => {
    const { container } = render(<WaffleChart {...defaultProps} gap={0} size={0} />);

    expect(getSvgSize(container).width).toBe(0);
  });

  it('keeps the legend layout attributes when a mod prop is passed', () => {
    const { container } = render(
      <WaffleChart {...defaultProps} legendPosition="right" mod={{ custom: true }} />
    );
    const root = container.querySelector('.mantine-WaffleChart-root')!;

    expect(root).toHaveAttribute('data-custom');
    expect(root).toHaveAttribute('data-vertical');
    expect(root).toHaveAttribute('data-legend-position', 'right');
  });

  it('does not print floating point noise for the total', () => {
    const { container } = render(
      <WaffleChart
        data={[
          { name: 'A', value: 0.1, color: 'blue.6' },
          { name: 'B', value: 0.2, color: 'red.6' },
        ]}
      />
    );

    expect(container.querySelector('svg')).toHaveAttribute(
      'aria-label',
      'A: 0.1, B: 0.2. Total: 0.3'
    );
  });

  it('formats values and the total with valueFormatter', () => {
    const { container } = render(
      <WaffleChart {...defaultProps} valueFormatter={(value) => `${value.toFixed(1)}%`} />
    );

    expect(container.querySelector('svg')).toHaveAttribute(
      'aria-label',
      'A: 40.0%, B: 60.0%. Total: 100.0%'
    );
  });

  it('treats a non-finite total as unset', () => {
    const { container } = render(<WaffleChart {...defaultProps} total={NaN} />);

    expect(getCells(container).filter((cell) => cell.hasAttribute('data-empty'))).toHaveLength(0);
    expect(container.querySelector('svg')).toHaveAttribute(
      'aria-label',
      'A: 40, B: 60. Total: 100'
    );
  });

  it('sets the cell radius on the element so it works without styles', () => {
    const { container } = render(<WaffleChart {...defaultProps} cellRadius={4} unstyled />);
    const cell = getCells(container)[0];

    expect(cell).toHaveAttribute('rx', '4');
    expect(cell).toHaveAttribute('ry', '4');
  });

  it('sets the fill of empty cells on the element so it works without styles', () => {
    const { container } = render(
      <WaffleChart {...defaultProps} total={200} emptyColor="gray.3" unstyled />
    );
    const rects = container.querySelectorAll('svg rect');

    expect(rects[rects.length - 1]).toHaveAttribute(
      'fill',
      'var(--waffle-empty-color, var(--mantine-color-default-border))'
    );
  });

  it('shows the hovered segment name and formatted value in the default tooltip', async () => {
    const { container } = render(
      <WaffleChart {...defaultProps} withTooltip valueFormatter={(value) => `${value}%`} />
    );

    await act(async () => {
      fireEvent.mouseEnter(getCells(container)[0]);
    });
    expect(screen.getByText('A: 40%')).toBeInTheDocument();
  });

  it('derives the tooltip from the current data while the pointer rests on a cell', async () => {
    const getTooltipLabel = (segment: { name: string; value: number; count: number }) =>
      `${segment.name}=${segment.value}/${segment.count}`;
    const { container, rerender } = render(
      <WaffleChart {...defaultProps} withTooltip getTooltipLabel={getTooltipLabel} />
    );

    await act(async () => {
      fireEvent.mouseEnter(getCells(container)[50]);
    });
    expect(screen.getByText('B=60/60')).toBeInTheDocument();

    await act(async () => {
      rerender(
        <WaffleChart
          data={[
            { name: 'A', value: 90, color: 'blue.6' },
            { name: 'B', value: 10, color: 'red.6' },
          ]}
          withTooltip
          getTooltipLabel={getTooltipLabel}
        />
      );
    });
    expect(screen.getByText('A=90/90')).toBeInTheDocument();
  });

  it('clears the tooltip when the pointer moves from a cell into a gap', async () => {
    const { container } = render(<WaffleChart {...defaultProps} withTooltip />);

    await act(async () => {
      fireEvent.mouseEnter(getCells(container)[0]);
    });
    expect(screen.getByText('A: 40')).toBeInTheDocument();

    await act(async () => {
      fireEvent.mouseEnter(container.querySelector('svg g > rect:not(.mantine-WaffleChart-cell)')!);
    });
    expect(screen.queryByText('A: 40')).not.toBeInTheDocument();
  });

  it('stops dimming when the hovered legend item is removed from data', () => {
    const { container, rerender } = render(<WaffleChart {...defaultProps} />);
    fireEvent.mouseEnter(container.querySelectorAll('.mantine-WaffleChart-legendItem')[1]);
    expect(getCells(container).filter((cell) => cell.hasAttribute('data-dimmed'))).toHaveLength(40);

    rerender(<WaffleChart {...defaultProps} data={[defaultProps.data[0]]} />);
    expect(container.querySelectorAll('[data-dimmed]')).toHaveLength(0);

    rerender(<WaffleChart {...defaultProps} data={[]} />);
    expect(container.querySelectorAll('[data-dimmed]')).toHaveLength(0);
  });

  it('keeps dimming when data shrinks but the hovered legend item remains', () => {
    const data = [...defaultProps.data, { name: 'C', value: 0, color: 'green.6' }];
    const { container, rerender } = render(<WaffleChart data={data} />);
    fireEvent.mouseEnter(container.querySelectorAll('.mantine-WaffleChart-legendItem')[0]);

    rerender(<WaffleChart data={defaultProps.data} />);
    expect(getCells(container).filter((cell) => cell.hasAttribute('data-dimmed'))).toHaveLength(60);
  });

  it('dims cells and legend items of other segments when a legend item is hovered', () => {
    const { container } = render(<WaffleChart {...defaultProps} />);
    const legendItems = container.querySelectorAll('.mantine-WaffleChart-legendItem');

    fireEvent.mouseEnter(legendItems[0]);
    expect(getCells(container).filter((cell) => cell.hasAttribute('data-dimmed'))).toHaveLength(60);
    expect(legendItems[1]).toHaveAttribute('data-dimmed');
    expect(legendItems[0]).not.toHaveAttribute('data-dimmed');

    fireEvent.mouseLeave(legendItems[0]);
    expect(container.querySelectorAll('[data-dimmed]')).toHaveLength(0);
  });
});
