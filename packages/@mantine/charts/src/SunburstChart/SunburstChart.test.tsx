import { fireEvent } from '@testing-library/react';
import { DEFAULT_THEME, parseThemeColor } from '@mantine/core';
import { render, tests } from '@mantine-tests/core';
import { SunburstChart } from './SunburstChart';

jest.mock('recharts', () => {
  const actual = jest.requireActual('recharts');
  const { cloneElement } = jest.requireActual('react');
  return {
    ...actual,
    ResponsiveContainer: ({ children }: any) => cloneElement(children, { width: 300, height: 300 }),
  };
});

const color = (value: string) => parseThemeColor({ color: value, theme: DEFAULT_THEME }).value;

const defaultProps = {
  data: [
    { name: 'A', value: 100, color: 'blue' },
    { name: 'B', value: 200, color: 'red' },
  ],
};

interface SectorGeometry {
  path: string;
  fill: string | null;
  start: number;
  end: number;
  outerRadius: number;
}

function normalizeAngle(angle: number) {
  return Math.round(((angle % 360) + 360) % 360);
}

function getSectors(container: HTMLElement): SectorGeometry[] {
  return Array.from(container.querySelectorAll('.recharts-sector')).map((node) => {
    const path = node.getAttribute('d') || '';
    const numbers = (path.match(/-?\d+(\.\d+)?|NaN/g) || []).map(Number);
    const [sx, sy, r, , , , , ex, ey] = numbers;
    return {
      path,
      fill: node.getAttribute('fill'),
      start: normalizeAngle((Math.atan2(150 - sy, sx - 150) * 180) / Math.PI),
      end: normalizeAngle((Math.atan2(150 - ey, ex - 150) * 180) / Math.PI),
      outerRadius: r,
    };
  });
}

function getLabels(container: HTMLElement) {
  return Array.from(container.querySelectorAll('[data-sunburst-label]')).map(
    (node) => node.textContent
  );
}

function renderChart(props: { data: any[]; [key: string]: any }) {
  return render(<SunburstChart size={300} innerRadius={50} gap={0} {...props} />);
}

describe('@mantine/charts/SunburstChart', () => {
  tests.itSupportsSystemProps({
    component: SunburstChart,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/charts/SunburstChart',
    stylesApiSelectors: ['root'],
  });

  it('treats missing, NaN and negative values as 0 without breaking sibling sectors', () => {
    const { container } = renderChart({
      data: [
        { name: 'Missing' },
        { name: 'A', value: 10 },
        { name: 'NaN', value: NaN },
        { name: 'Negative', value: -5 },
        { name: 'B', value: 10 },
      ],
    });
    const sectors = getSectors(container);
    expect(sectors.every((sector) => !sector.path.includes('NaN'))).toBe(true);
    expect(sectors).toHaveLength(2);
    expect(sectors[0].start).toBe(0);
    expect(sectors[0].end).toBe(180);
    expect(sectors[1].start).toBe(180);
    expect(sectors[1].end).toBe(0);
  });

  it('uses the explicit parent value for both its arc and the total', () => {
    const { container } = renderChart({
      data: [
        { name: 'A', value: 100, children: [{ name: 'a1', value: 10 }] },
        { name: 'B', value: 100 },
      ],
    });
    const sectors = getSectors(container);
    expect(sectors.map((sector) => [sector.start, sector.end])).toEqual([
      [0, 180],
      [0, 18],
      [180, 0],
    ]);
  });

  it('does not let children overflow a parent with a smaller explicit value', () => {
    const { container } = renderChart({
      data: [
        {
          name: 'P',
          value: 10,
          children: [
            { name: 'p1', value: 30 },
            { name: 'p2', value: 30 },
          ],
        },
        { name: 'B', value: 60 },
      ],
    });
    const sectors = getSectors(container);
    expect(sectors.map((sector) => [sector.start, sector.end])).toEqual([
      [0, 180],
      [0, 90],
      [90, 180],
      [180, 0],
    ]);
  });

  it('renders nothing when all values are 0', () => {
    const { container } = renderChart({
      data: [
        { name: 'A', value: 0 },
        { name: 'B', value: 0 },
      ],
    });
    expect(getSectors(container)).toHaveLength(0);
  });

  it('assigns the fallback palette to top-level nodes without color and uses it for the tooltip', () => {
    const { container } = renderChart({
      data: [
        { name: 'A', value: 1 },
        { name: 'B', children: [{ name: 'b', value: 1 }] },
        { name: 'C', value: 1, color: 'red' },
      ],
    });
    const sectors = getSectors(container);
    expect(sectors.map((sector) => sector.fill)).toEqual([
      color('blue.6'),
      color('teal.6'),
      color('teal.6'),
      color('red'),
    ]);

    fireEvent.mouseEnter(container.querySelectorAll('.recharts-sector')[0]);
    const swatch = container.querySelector('.mantine-ChartTooltip-tooltipItemColor circle');
    expect(swatch!.getAttribute('fill')).toBe(color('blue.6'));
  });

  it('supports dataKey="fill" without mixing it with sector colors', () => {
    const data = [
      { name: 'A', fill: 75, color: 'blue.9' },
      { name: 'B', fill: 25, color: 'yellow.4' },
    ];
    const { container } = renderChart({ data, dataKey: 'fill' });
    expect(data[0].fill).toBe(75);
    const sectors = getSectors(container);
    expect(sectors.map((sector) => sector.fill)).toEqual([color('blue.9'), color('yellow.4')]);
    expect(sectors[0].end).toBe(270);
  });

  it('treats endAngle as the absolute end angle', () => {
    const { container } = renderChart({
      data: [
        { name: 'A', value: 1 },
        { name: 'B', value: 1 },
      ],
      startAngle: 90,
      endAngle: 270,
    });
    const sectors = getSectors(container);
    expect(sectors.map((sector) => [sector.start, sector.end])).toEqual([
      [90, 180],
      [180, 270],
    ]);
  });

  it('draws a full circle from startAngle when endAngle is not set', () => {
    const { container } = renderChart({
      data: [
        { name: 'A', value: 1 },
        { name: 'B', value: 1 },
      ],
      startAngle: 90,
    });
    const sectors = getSectors(container);
    expect(sectors.map((sector) => [sector.start, sector.end])).toEqual([
      [90, 270],
      [270, 90],
    ]);
  });

  it('does not render recharts labels when sunburstChartProps.textOptions is set', () => {
    const { container } = renderChart({
      data: [
        { name: 'A', value: 3 },
        { name: 'B', value: 1 },
      ],
      withLabels: true,
      sunburstChartProps: { textOptions: { fill: 'red' } },
    });
    const visibleTexts = Array.from(container.querySelectorAll('text')).filter(
      (node) => node.getAttribute('display') !== 'none'
    );
    expect(visibleTexts.map((node) => node.textContent)).toEqual(['3', '1']);
    expect(getLabels(container)).toEqual(['3', '1']);
  });

  it('uses sunburstChartProps.outerRadius for rings', () => {
    const { container } = renderChart({
      data: [{ name: 'A', children: [{ name: 'a', value: 1 }] }],
      sunburstChartProps: { outerRadius: 100 },
    });
    expect(getSectors(container).map((sector) => sector.outerRadius)).toEqual([75, 100]);
  });

  it('draws numeric string values', () => {
    const { container } = renderChart({
      data: [
        { name: 'A', value: '1' },
        { name: 'B', value: 1 },
      ],
    });
    expect(getSectors(container).map((sector) => [sector.start, sector.end])).toEqual([
      [0, 180],
      [180, 0],
    ]);
  });

  it('passes the drawn value under dataKey to custom tooltip content', () => {
    const content = jest.fn(() => null);
    const { container } = renderChart({
      data: [
        {
          name: 'P',
          value: 10,
          children: [
            { name: 'a', value: 30 },
            { name: 'b', value: 30 },
          ],
        },
        { name: 'Q', children: [{ name: 'q', value: 40 }] },
      ],
      tooltipProps: { content },
    });
    const sectors = container.querySelectorAll('.recharts-sector');
    fireEvent.mouseEnter(sectors[0]);
    const entries = (content.mock.calls as any[])
      .map((call) => call[0].payload?.[0])
      .filter(Boolean);
    const entry = entries[entries.length - 1];
    expect(entry.dataKey).toBe('value');
    expect(entry.value).toBe(60);
    expect(entry.payload.value).toBe(60);

    fireEvent.mouseEnter(sectors[3]);
    const nextEntries = (content.mock.calls as any[])
      .map((call) => call[0].payload?.[0])
      .filter(Boolean);
    expect(nextEntries[nextEntries.length - 1].payload.value).toBe(40);
  });

  it('uses the full radius for rings', () => {
    const flat = renderChart({ data: [{ name: 'A', value: 1 }] });
    expect(getSectors(flat.container)[0].outerRadius).toBe(150);

    const nested = renderChart({
      data: [{ name: 'A', children: [{ name: 'a', children: [{ name: 'a1', value: 1 }] }] }],
    });
    const radii = getSectors(nested.container).map((sector) => sector.outerRadius);
    expect(radii[0]).toBeCloseTo(50 + 100 / 3, 3);
    expect(radii[1]).toBeCloseTo(50 + 200 / 3, 3);
    expect(radii[2]).toBeCloseTo(150, 3);
  });

  it('formats labels with valueFormatter', () => {
    const { container } = renderChart({
      data: [{ name: 'A', value: 1000 }],
      withLabels: true,
      valueFormatter: (value: number) => `$${value}`,
    });
    expect(getLabels(container)).toEqual(['$1000']);
  });

  it('hides labels of zero-value sectors and of sectors too small to fit them', () => {
    const { container } = renderChart({
      data: [
        { name: 'Big', value: 500 },
        { name: 'Zero', value: 0 },
        ...Array.from({ length: 30 }, (_, index) => ({ name: `Tiny ${index}`, value: 1 })),
      ],
      withLabels: true,
    });
    expect(getLabels(container)).toEqual(['500']);
  });

  it('does not render labels when withLabels is not set', () => {
    const { container } = renderChart({ data: [{ name: 'A', value: 1000 }] });
    expect(getLabels(container)).toEqual([]);
  });

  it('exposes the chart as an image when it has an accessible name', () => {
    const labelled = renderChart({ data: [{ name: 'A', value: 1 }], 'aria-label': 'Budget' });
    expect(labelled.container.querySelector('[aria-label="Budget"]')).toHaveAttribute(
      'role',
      'img'
    );

    const unlabelled = renderChart({ data: [{ name: 'A', value: 1 }] });
    expect(unlabelled.container.querySelector('.mantine-SunburstChart-root')).not.toHaveAttribute(
      'role'
    );
  });
});
