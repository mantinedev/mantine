import { fireEvent } from '@testing-library/react';
import { render, screen, tests } from '@mantine-tests/core';
import { MatrixChart, MatrixChartProps, MatrixChartStylesNames } from './MatrixChart';

const testData = [
  { x: 'A', y: 'Row1', value: 1 },
  { x: 'B', y: 'Row1', value: 5 },
  { x: 'A', y: 'Row2', value: 3 },
  { x: 'B', y: 'Row2', value: null },
];

const defaultProps: MatrixChartProps = {
  data: testData,
  yLabels: ['Row1', 'Row2'],
  withYLabels: true,
  withXLabels: true,
  xLabels: ['A', 'B'],
  withLegend: true,
};

describe('@mantine/charts/MatrixChart', () => {
  tests.itSupportsSystemProps<MatrixChartProps, MatrixChartStylesNames>({
    component: MatrixChart,
    props: defaultProps,
    refType: SVGSVGElement,
    displayName: '@mantine/charts/MatrixChart',
    selector: 'svg',
    stylesApiSelectors: ['root', 'cell', 'xLabel', 'yLabel', 'legend', 'legendLabel', 'legendRect'],
  });

  it('renders correct number of cells', () => {
    const { container } = render(<MatrixChart data={testData} />);
    const cells = container.querySelectorAll('.mantine-MatrixChart-cell');
    expect(cells).toHaveLength(4);
  });

  it('marks null-value cells as empty', () => {
    const { container } = render(<MatrixChart data={testData} />);
    const emptyCells = container.querySelectorAll('[data-empty]');
    expect(emptyCells).toHaveLength(1);
  });

  it('does not mark cells as empty when emptyColor is set', () => {
    const { container } = render(<MatrixChart data={testData} emptyColor="red" />);
    const emptyCells = container.querySelectorAll('[data-empty]');
    expect(emptyCells).toHaveLength(0);
  });

  it('does not render legend by default', () => {
    const { container } = render(<MatrixChart data={testData} />);
    expect(container.querySelector('[data-id="legend"]')).toBeNull();
  });

  it('renders legend when withLegend is set', () => {
    const { container } = render(<MatrixChart data={testData} withLegend />);
    expect(container.querySelector('[data-id="legend"]')).not.toBeNull();
  });

  it('renders correct number of legend rects', () => {
    const colors = ['#a', '#b', '#c'];
    const { container } = render(<MatrixChart data={testData} withLegend colors={colors} />);
    const legendGroup = container.querySelector('[data-id="legend"]')!;
    const rects = legendGroup.querySelectorAll('rect');
    expect(rects).toHaveLength(colors.length);
  });

  it('renders default legend labels', () => {
    const { container } = render(<MatrixChart data={testData} withLegend />);
    const legendGroup = container.querySelector('[data-id="legend"]')!;
    const texts = legendGroup.querySelectorAll('text');
    expect(texts).toHaveLength(2);
    expect(texts[0].textContent).toBe('Less');
    expect(texts[1].textContent).toBe('More');
  });

  it('renders custom legend labels', () => {
    const { container } = render(
      <MatrixChart data={testData} withLegend legendLabels={['Min', 'Max']} />
    );
    const legendGroup = container.querySelector('[data-id="legend"]')!;
    const texts = legendGroup.querySelectorAll('text');
    expect(texts[0].textContent).toBe('Min');
    expect(texts[1].textContent).toBe('Max');
  });

  it('does not include the empty cell swatch in the legend ramp', () => {
    const { container } = render(<MatrixChart data={testData} withLegend emptyColor="red" />);
    const legendGroup = container.querySelector('[data-id="legend"]')!;
    expect(legendGroup.querySelector('[data-empty]')).toBeNull();
    expect(legendGroup.querySelector('[fill="var(--mantine-color-red-filled)"]')).toBeNull();
  });

  it('lays the legend out with measured label widths', () => {
    const original = (SVGElement.prototype as any).getComputedTextLength;
    (SVGElement.prototype as any).getComputedTextLength = function getComputedTextLength() {
      return this.textContent === 'Many WWWW' ? 90 : 70;
    };

    try {
      const { container } = render(
        <MatrixChart
          data={testData}
          withLegend
          colors={['red']}
          cellSize={20}
          gap={1}
          legendLabels={['Few WWWW', 'Many WWWW']}
        />
      );
      const svg = container.querySelector('svg')!;
      const texts = container.querySelectorAll('[data-id="legend"] text');
      const rect = container.querySelector('[data-id="legend"] rect')!;

      expect(Number(rect.getAttribute('x'))).toBe(76);
      expect(Number(texts[1].getAttribute('x'))).toBe(102);
      expect(Number(svg.getAttribute('width'))).toBe(192);
    } finally {
      (SVGElement.prototype as any).getComputedTextLength = original;
    }
  });

  it('orders legend swatches to match the cells when the domain is reversed', () => {
    const data = [
      { x: 'A', y: 'Row1', value: 0 },
      { x: 'B', y: 'Row1', value: 10 },
    ];
    const { container } = render(
      <MatrixChart data={data} domain={[10, 0]} colors={['low', 'high']} withLegend />
    );
    const cellFills = Array.from(container.querySelectorAll('[data-id="all-cells"] rect')).map(
      (rect) => rect.getAttribute('fill')
    );
    const legendFills = Array.from(container.querySelectorAll('[data-id="legend"] rect')).map(
      (rect) => rect.getAttribute('fill')
    );
    const labels = Array.from(container.querySelectorAll('[data-id="legend"] text')).map(
      (text) => text.textContent
    );

    expect(cellFills).toStrictEqual(['high', 'low']);
    expect(legendFills).toStrictEqual(['high', 'low']);
    expect(labels).toStrictEqual(['Less', 'More']);
  });

  it('reserves the horizontal overhang of the last x label', () => {
    const original = (SVGElement.prototype as any).getComputedTextLength;
    (SVGElement.prototype as any).getComputedTextLength = function getComputedTextLength() {
      return this.textContent === 'Late evening' ? 72 : 10;
    };

    const props = {
      data: testData,
      xLabels: ['A', 'Late evening'],
      withXLabels: true,
      cellSize: 20,
      gap: 1,
      fontSize: 12,
    };

    try {
      const { container, rerender } = render(<MatrixChart {...props} xLabelsRotation={0} />);
      const svg = container.querySelector('svg')!;
      expect(Number(svg.getAttribute('width'))).toBe(67);

      rerender(<MatrixChart {...props} xLabelsRotation={-45} xLabelsPosition="top" />);
      expect(Number(svg.getAttribute('width'))).toBe(87);

      rerender(<MatrixChart {...props} xLabelsRotation={-90} />);
      expect(Number(svg.getAttribute('width'))).toBe(41);
    } finally {
      (SVGElement.prototype as any).getComputedTextLength = original;
    }
  });

  it('estimates the last x label overhang before it is measured', () => {
    const { container } = render(
      <MatrixChart
        data={testData}
        xLabels={['A', 'Late evening']}
        withXLabels
        xLabelsRotation={0}
      />
    );
    expect(Number(container.querySelector('svg')!.getAttribute('width'))).toBe(75);
  });

  it('merges className, style and onPointerEnter returned from getCellProps', async () => {
    const onPointerEnter = jest.fn();
    const { container } = render(
      <MatrixChart
        data={testData}
        withTooltip
        getTooltipLabel={(cell) => `tooltip ${cell.x}${cell.y}`}
        getCellProps={() => ({ className: 'custom-cell', style: { opacity: 0.5 }, onPointerEnter })}
        styles={{ cell: { strokeWidth: 3 } }}
      />
    );
    const emptyCell = container.querySelector('[data-empty]')!;
    expect(emptyCell).toHaveClass('mantine-MatrixChart-cell');
    expect(emptyCell).toHaveClass('custom-cell');
    expect(emptyCell).toHaveStyle({ opacity: '0.5', strokeWidth: '3' });

    fireEvent.pointerOver(emptyCell);
    expect(onPointerEnter).toHaveBeenCalledTimes(1);
    expect(await screen.findByText('tooltip BRow2')).toBeInTheDocument();
  });

  it('keeps the chart layout left-to-right in RTL documents', () => {
    const { container } = render(<MatrixChart data={testData} />);
    expect(container.querySelector('svg')).toHaveAttribute('direction', 'ltr');
  });

  it('increases SVG height when legend is enabled', () => {
    const { container: c1 } = render(<MatrixChart data={testData} />);
    const { container: c2 } = render(<MatrixChart data={testData} withLegend />);
    const h1 = Number(c1.querySelector('svg')!.getAttribute('height'));
    const h2 = Number(c2.querySelector('svg')!.getAttribute('height'));
    expect(h2).toBeGreaterThan(h1);
  });

  it('does not render x-axis labels by default', () => {
    const { container } = render(<MatrixChart data={testData} xLabels={['A', 'B']} />);
    const xLabels = container.querySelectorAll('.mantine-MatrixChart-xLabel');
    expect(xLabels).toHaveLength(0);
  });

  it('renders x-axis labels when withXLabels is set', () => {
    const { container } = render(<MatrixChart data={testData} xLabels={['A', 'B']} withXLabels />);
    const xLabels = container.querySelectorAll('.mantine-MatrixChart-xLabel');
    expect(xLabels).toHaveLength(2);
  });

  it('renders x-axis labels from data when xLabels prop is not provided', () => {
    const { container } = render(<MatrixChart data={testData} withXLabels />);
    const xLabels = container.querySelectorAll('.mantine-MatrixChart-xLabel');
    expect(xLabels).toHaveLength(2);
    expect(xLabels[0].textContent).toBe('A');
    expect(xLabels[1].textContent).toBe('B');
  });

  it('renders y-axis labels', () => {
    const { container } = render(
      <MatrixChart data={testData} yLabels={['Row1', 'Row2']} withYLabels />
    );
    const yLabels = container.querySelectorAll('.mantine-MatrixChart-yLabel');
    expect(yLabels).toHaveLength(2);
    expect(yLabels[0].textContent).toBe('Row1');
  });

  it('applies rotation transform to x-axis labels', () => {
    const { container } = render(
      <MatrixChart data={testData} xLabels={['A', 'B']} withXLabels xLabelsRotation={-45} />
    );
    const xLabels = container.querySelectorAll('.mantine-MatrixChart-xLabel');
    expect(xLabels[0].getAttribute('transform')).toContain('rotate(-45');
  });

  it.each([
    ['bottom', -90, 'end', 'central'],
    ['bottom', -45, 'end', 'central'],
    ['bottom', 45, 'start', 'central'],
    ['bottom', 90, 'start', 'central'],
    ['bottom', 0, 'middle', 'hanging'],
    ['bottom', 180, 'middle', 'auto'],
    ['top', -90, 'start', 'central'],
    ['top', -45, 'start', 'central'],
    ['top', 45, 'end', 'central'],
    ['top', 90, 'end', 'central'],
    ['top', 0, 'middle', 'auto'],
    ['top', 180, 'middle', 'hanging'],
  ] as const)(
    'anchors x-axis labels away from the grid (%s, %s deg)',
    (position, rotation, anchor, baseline) => {
      const { container } = render(
        <MatrixChart
          data={testData}
          withXLabels
          xLabelsPosition={position}
          xLabelsRotation={rotation}
          xLabelsHeight={50}
          cellSize={20}
          gap={1}
        />
      );
      const label = container.querySelector('.mantine-MatrixChart-xLabel')!;
      expect(label).toHaveAttribute('text-anchor', anchor);
      expect(label).toHaveAttribute('dominant-baseline', baseline);
      expect(label).toHaveAttribute('y', position === 'top' ? '42' : '49');
    }
  );

  it('does not apply rotation when xLabelsRotation is 0', () => {
    const { container } = render(
      <MatrixChart data={testData} xLabels={['A', 'B']} withXLabels xLabelsRotation={0} />
    );
    const xLabels = container.querySelectorAll('.mantine-MatrixChart-xLabel');
    expect(xLabels[0].getAttribute('transform')).toBeNull();
  });

  it('handles empty data without crashing', () => {
    const { container } = render(<MatrixChart data={[]} />);
    const svg = container.querySelector('svg')!;
    expect(Number(svg.getAttribute('width'))).toBeGreaterThanOrEqual(0);
    expect(Number(svg.getAttribute('height'))).toBeGreaterThanOrEqual(0);
  });

  it('resolves Mantine color values in colors prop', () => {
    const { container } = render(
      <MatrixChart data={testData} colors={['blue.2', 'blue.6']} domain={[1, 5]} />
    );
    const fills = Array.from(container.querySelectorAll('.mantine-MatrixChart-cell')).map((cell) =>
      cell.getAttribute('fill')
    );

    expect(fills).toContain('var(--mantine-color-blue-2)');
    expect(fills).toContain('var(--mantine-color-blue-6)');
  });

  it('resolves Mantine color value in emptyColor prop', () => {
    const { container } = render(<MatrixChart data={testData} emptyColor="gray.3" />);
    const fills = Array.from(container.querySelectorAll('.mantine-MatrixChart-cell')).map((cell) =>
      cell.getAttribute('fill')
    );

    expect(fills).toContain('var(--mantine-color-gray-3)');
  });

  it('passes through raw CSS color values', () => {
    const { container } = render(
      <MatrixChart data={testData} colors={['#ff0000']} emptyColor="rgb(0, 0, 255)" />
    );
    const fills = Array.from(container.querySelectorAll('.mantine-MatrixChart-cell')).map((cell) =>
      cell.getAttribute('fill')
    );

    expect(fills).toContain('#ff0000');
    expect(fills).toContain('rgb(0, 0, 255)');
  });

  it('resolves Mantine color values in the legend', () => {
    const { container } = render(
      <MatrixChart data={testData} colors={['blue.6']} emptyColor="gray.3" withLegend />
    );
    const fills = Array.from(container.querySelectorAll('.mantine-MatrixChart-legendRect')).map(
      (rect) => rect.getAttribute('fill')
    );

    expect(fills).toStrictEqual(['var(--mantine-color-blue-6)']);
  });

  it('exposes a labelled chart as a single image', () => {
    const { container, rerender } = render(<MatrixChart data={[]} />);
    expect(container.querySelector('svg')).not.toHaveAttribute('role');

    rerender(<MatrixChart data={[]} aria-label="Activity" />);
    expect(container.querySelector('svg')).toHaveAttribute('role', 'img');
  });

  it('generates a data summary when no accessible name is given', () => {
    const { container } = render(<MatrixChart data={testData} />);
    const svg = container.querySelector('svg')!;

    expect(svg).toHaveAttribute('role', 'img');
    expect(svg).toHaveAttribute(
      'aria-label',
      'Matrix chart, 2 columns by 2 rows, values from 1 to 5'
    );
  });

  it('describes the displayed data range in the summary, not the custom domain', () => {
    const { container, rerender } = render(<MatrixChart data={testData} domain={[0, 50]} />);
    const svg = container.querySelector('svg')!;
    expect(svg).toHaveAttribute(
      'aria-label',
      'Matrix chart, 2 columns by 2 rows, values from 1 to 5'
    );

    rerender(<MatrixChart data={testData} domain={[10, 0]} />);
    expect(svg).toHaveAttribute(
      'aria-label',
      'Matrix chart, 2 columns by 2 rows, values from 1 to 5'
    );
  });

  it('pluralizes the summary and omits the value range without values', () => {
    const { container, rerender } = render(
      <MatrixChart data={[{ x: 'A', y: 'Row1', value: 4 }]} />
    );
    const svg = container.querySelector('svg')!;
    expect(svg).toHaveAttribute('aria-label', 'Matrix chart, 1 column by 1 row, all values 4');

    rerender(<MatrixChart data={testData.map((cell) => ({ ...cell, value: null }))} />);
    expect(svg).toHaveAttribute('aria-label', 'Matrix chart, 2 columns by 2 rows');
  });

  it('formats summary values with valueFormatter', () => {
    const { container } = render(
      <MatrixChart data={testData} valueFormatter={(value) => `${value} visits`} />
    );
    expect(container.querySelector('svg')).toHaveAttribute(
      'aria-label',
      'Matrix chart, 2 columns by 2 rows, values from 1 visits to 5 visits'
    );
  });

  it('prefers a caller label over the generated summary', () => {
    const { container, rerender } = render(<MatrixChart data={testData} aria-label="Activity" />);
    const svg = container.querySelector('svg')!;
    expect(svg).toHaveAttribute('aria-label', 'Activity');

    rerender(<MatrixChart data={testData} aria-labelledby="title" />);
    expect(svg).toHaveAttribute('aria-labelledby', 'title');
    expect(svg).not.toHaveAttribute('aria-label');
    expect(svg).toHaveAttribute('role', 'img');
  });

  it('computes the color domain from displayed cells only', () => {
    const colors = ['c1', 'c2', 'c3', 'c4'];
    const getFills = (container: HTMLElement) =>
      Array.from(container.querySelectorAll('[data-id="all-cells"] rect')).map((rect) =>
        rect.getAttribute('fill')
      );

    const { container, rerender } = render(
      <MatrixChart
        data={[...testData, { x: 'Hidden', y: 'Row1', value: 1000 }]}
        xLabels={['A', 'B']}
        yLabels={['Row1', 'Row2']}
        colors={colors}
      />
    );
    expect(getFills(container)).toStrictEqual(['c1', 'c4', 'c3', null]);

    rerender(
      <MatrixChart data={[{ x: 'A', y: 'Row1', value: 1000 }, ...testData]} colors={colors} />
    );
    expect(getFills(container)).toStrictEqual(['c1', 'c4', 'c3', null]);
  });

  it('falls back to the data domain when the custom domain is not finite', () => {
    const { container } = render(
      <MatrixChart data={testData} domain={[NaN, 10]} colors={['c1', 'c2', 'c3', 'c4']} />
    );
    const fills = Array.from(container.querySelectorAll('[data-id="all-cells"] rect')).map((rect) =>
      rect.getAttribute('fill')
    );
    expect(fills).toStrictEqual(['c1', 'c4', 'c3', null]);
  });

  it('paints all-equal values with the lowest palette color', () => {
    const { container } = render(
      <MatrixChart
        data={testData.map((cell) => ({ ...cell, value: cell.value === null ? null : 7 }))}
        colors={['c1', 'c2', 'c3', 'c4']}
      />
    );
    const fills = Array.from(container.querySelectorAll('[data-id="all-cells"] rect')).map((rect) =>
      rect.getAttribute('fill')
    );
    expect(fills).toStrictEqual(['c1', 'c1', 'c1', null]);
  });

  it('updates the tooltip of the hovered cell when data changes', async () => {
    const props: MatrixChartProps = {
      data: testData,
      withTooltip: true,
      getTooltipLabel: ({ x, y, value }) => `${x}-${y}: ${value}`,
    };
    const { container, rerender } = render(<MatrixChart {...props} />);
    const svg = container.querySelector('svg')!;
    const cell = container.querySelectorAll('[data-id="all-cells"] rect')[1];

    fireEvent.mouseEnter(svg);
    fireEvent.pointerEnter(cell);
    expect(await screen.findByText('A-Row1: 1')).toBeInTheDocument();

    rerender(
      <MatrixChart
        {...props}
        data={testData.map((item) =>
          item.x === 'A' && item.y === 'Row1' ? { ...item, value: 9 } : item
        )}
      />
    );
    expect(screen.getByText('A-Row1: 9')).toBeInTheDocument();
  });

  it('renders the tooltip outside of the svg element', async () => {
    const { container } = render(
      <MatrixChart
        data={testData}
        withTooltip
        getTooltipLabel={({ value }) => `Value ${value}`}
        tooltipProps={{ withinPortal: false }}
      />
    );
    const svg = container.querySelector('svg')!;
    fireEvent.mouseEnter(svg);
    fireEvent.pointerEnter(container.querySelectorAll('[data-id="all-cells"] rect')[1]);

    const tooltip = await screen.findByText('Value 1');
    expect(svg.contains(tooltip)).toBe(false);
  });
});
