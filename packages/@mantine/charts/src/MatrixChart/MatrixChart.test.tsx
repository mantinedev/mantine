import { render, tests } from '@mantine-tests/core';
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
    expect(rects).toHaveLength(colors.length + 1);
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

  it('marks first legend rect as empty when no emptyColor', () => {
    const { container } = render(<MatrixChart data={testData} withLegend />);
    const legendGroup = container.querySelector('[data-id="legend"]')!;
    const rects = legendGroup.querySelectorAll('rect');
    expect(rects[0].getAttribute('data-empty')).not.toBeNull();
    expect(rects[1].getAttribute('data-empty')).toBeNull();
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

    expect(fills).toStrictEqual(['var(--mantine-color-gray-3)', 'var(--mantine-color-blue-6)']);
  });

  it('exposes a labelled chart as a single image', () => {
    const { container } = render(<MatrixChart data={testData} aria-label="Activity" />);
    expect(container.querySelector('svg')).toHaveAttribute('role', 'img');
  });

  it('generates a data summary when no accessible name is given', () => {
    // Listing every cell would be unusable on a large matrix, so the summary describes the
    // shape and the value range instead
    const { container } = render(<MatrixChart data={testData} />);
    const svg = container.querySelector('svg')!;

    expect(svg).toHaveAttribute('role', 'img');
    expect(svg).toHaveAttribute('aria-label', 'Heatmap, 2 columns by 2 rows, values from 1 to 5');
  });

  it('prefers a caller label over the generated summary', () => {
    const { container } = render(<MatrixChart data={testData} aria-label="Activity" />);
    expect(container.querySelector('svg')).toHaveAttribute('aria-label', 'Activity');
  });
});
