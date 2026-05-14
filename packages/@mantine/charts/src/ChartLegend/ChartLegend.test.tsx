import { render, tests, userEvent } from '@mantine-tests/core';
import {
  ChartLegend,
  ChartLegendProps,
  ChartLegendStylesNames,
  getFilteredChartLegendPayload,
} from './ChartLegend';

const payload = [
  {
    dataKey: 'Apples',
    color: 'var(--mantine-color-indigo-6)',
    payload: { name: 'Apples', dataKey: 'Apples' },
  },
  {
    dataKey: 'Oranges',
    color: 'var(--mantine-color-blue-6)',
    payload: { name: 'Oranges', dataKey: 'Oranges' },
  },
  {
    dataKey: 'Tomatoes',
    color: 'var(--mantine-color-teal-6)',
    payload: { name: 'Tomatoes', dataKey: 'Tomatoes' },
  },
];

const series = [
  { name: 'Apples', label: 'Apples sales', color: 'indigo.6' },
  { name: 'Oranges', label: 'Oranges sales', color: 'blue.6' },
  { name: 'Tomatoes', label: 'Tomatoes sales', color: 'teal.6' },
];

const defaultProps: ChartLegendProps = {
  payload,
  onHighlight: () => {},
  legendPosition: 'bottom',
};

describe('@mantine/charts/ChartLegend', () => {
  tests.itSupportsSystemProps<ChartLegendProps, ChartLegendStylesNames>({
    component: ChartLegend,
    props: defaultProps,
    selector: '.mantine-ChartLegend-legend',
    refType: HTMLDivElement,
    displayName: '@mantine/charts/ChartLegend',
    stylesApiSelectors: ['legend', 'legendItem', 'legendItemColor', 'legendItemName'],
  });

  it('renders nothing when payload is undefined', () => {
    const { container } = render(
      <ChartLegend payload={undefined} onHighlight={() => {}} legendPosition="bottom" />
    );
    expect(container.querySelector('.mantine-ChartLegend-legend')).not.toBeInTheDocument();
  });

  it('renders correct number of legend items', () => {
    const { container } = render(<ChartLegend {...defaultProps} />);
    expect(container.querySelectorAll('.mantine-ChartLegend-legendItem')).toHaveLength(3);
  });

  it('displays dataKey as label when no series are provided', () => {
    const { container } = render(<ChartLegend {...defaultProps} />);
    const names = container.querySelectorAll('.mantine-ChartLegend-legendItemName');
    expect(names[0]).toHaveTextContent('Apples');
    expect(names[1]).toHaveTextContent('Oranges');
    expect(names[2]).toHaveTextContent('Tomatoes');
  });

  it('displays series labels when series are provided', () => {
    const { container } = render(<ChartLegend {...defaultProps} series={series} />);
    const names = container.querySelectorAll('.mantine-ChartLegend-legendItemName');
    expect(names[0]).toHaveTextContent('Apples sales');
    expect(names[1]).toHaveTextContent('Oranges sales');
    expect(names[2]).toHaveTextContent('Tomatoes sales');
  });

  it('filters out payload items with color set to none', () => {
    const payloadWithNone = [
      ...payload,
      {
        dataKey: 'Hidden',
        color: 'none',
        payload: { name: 'Hidden', dataKey: 'Hidden' },
      },
    ];
    const { container } = render(<ChartLegend {...defaultProps} payload={payloadWithNone} />);
    expect(container.querySelectorAll('.mantine-ChartLegend-legendItem')).toHaveLength(3);
  });

  it('calls onHighlight with dataKey on mouse enter and null on mouse leave', async () => {
    const onHighlight = jest.fn();
    const { container } = render(<ChartLegend {...defaultProps} onHighlight={onHighlight} />);
    const items = container.querySelectorAll('.mantine-ChartLegend-legendItem');

    await userEvent.hover(items[0]);
    expect(onHighlight).toHaveBeenCalledWith('Apples');

    await userEvent.unhover(items[0]);
    expect(onHighlight).toHaveBeenCalledWith(null);
  });

  it('sets data-without-color attribute when showColor is false', () => {
    const { container } = render(<ChartLegend {...defaultProps} showColor={false} />);
    const items = container.querySelectorAll('.mantine-ChartLegend-legendItem');
    expect(items[0]).toHaveAttribute('data-without-color');
  });

  it('does not set data-without-color attribute when showColor is true', () => {
    const { container } = render(<ChartLegend {...defaultProps} showColor />);
    const items = container.querySelectorAll('.mantine-ChartLegend-legendItem');
    expect(items[0]).not.toHaveAttribute('data-without-color');
  });

  it('sets data-centered modifier when centered is true', () => {
    const { container } = render(<ChartLegend {...defaultProps} centered />);
    expect(container.querySelector('.mantine-ChartLegend-legend')).toHaveAttribute('data-centered');
  });

  it('sets data-position modifier based on legendPosition', () => {
    const { container, rerender } = render(<ChartLegend {...defaultProps} legendPosition="top" />);
    expect(container.querySelector('.mantine-ChartLegend-legend')).toHaveAttribute(
      'data-position',
      'top'
    );

    rerender(<ChartLegend {...defaultProps} legendPosition="bottom" />);
    expect(container.querySelector('.mantine-ChartLegend-legend')).toHaveAttribute(
      'data-position',
      'bottom'
    );
  });

  it('handles nested dataKeys by extracting the last segment', () => {
    const nestedPayload = [
      {
        dataKey: 'salad.ApplesProp',
        color: 'var(--mantine-color-indigo-6)',
        payload: { name: 'salad.ApplesProp', dataKey: 'salad.ApplesProp' },
      },
    ];
    const nestedSeries = [{ name: 'salad.ApplesProp', label: 'Apple Label', color: 'indigo.6' }];

    const { container } = render(
      <ChartLegend {...defaultProps} payload={nestedPayload} series={nestedSeries} />
    );
    const names = container.querySelectorAll('.mantine-ChartLegend-legendItemName');
    expect(names[0]).toHaveTextContent('Apple Label');
  });

  it('uses last segment of nested dataKey as fallback when no series label matches', () => {
    const nestedPayload = [
      {
        dataKey: 'salad.ApplesProp',
        color: 'var(--mantine-color-indigo-6)',
        payload: { name: 'salad.ApplesProp', dataKey: 'salad.ApplesProp' },
      },
    ];

    const { container } = render(<ChartLegend {...defaultProps} payload={nestedPayload} />);
    const names = container.querySelectorAll('.mantine-ChartLegend-legendItemName');
    expect(names[0]).toHaveTextContent('ApplesProp');
  });
});

describe('getFilteredChartLegendPayload', () => {
  it('filters out items with color set to none', () => {
    const input = [
      { dataKey: 'Apples', color: 'red', payload: { name: 'Apples', dataKey: 'Apples' } },
      { dataKey: 'Hidden', color: 'none', payload: { name: 'Hidden', dataKey: 'Hidden' } },
    ];
    const result = getFilteredChartLegendPayload(input);
    expect(result).toHaveLength(1);
    expect(result[0].dataKey).toBe('Apples');
  });

  it('extracts last segment from nested dataKeys', () => {
    const input = [
      {
        dataKey: 'salad.ApplesProp',
        color: 'red',
        payload: { name: 'salad.ApplesProp', dataKey: 'salad.ApplesProp' },
      },
    ];
    const result = getFilteredChartLegendPayload(input);
    expect(result[0].dataKey).toBe('ApplesProp');
    expect(result[0].payload.dataKey).toBe('ApplesProp');
    expect(result[0].payload.name).toBe('ApplesProp');
  });

  it('keeps simple dataKeys unchanged', () => {
    const input = [
      { dataKey: 'Apples', color: 'red', payload: { name: 'Apples', dataKey: 'Apples' } },
    ];
    const result = getFilteredChartLegendPayload(input);
    expect(result[0].dataKey).toBe('Apples');
  });
});
