import { patchConsoleWarn, render } from '@mantine-tests/core';
import { ChartTooltip } from './ChartTooltip';

const payload = [
  {
    className: 'mantine-LineChart-line',
    style: {},
    name: 'Apples',
    fill: 'var(--mantine-color-indigo-6)',
    stroke: 'var(--mantine-color-indigo-6)',
    strokeWidth: 2,
    fillOpacity: 1,
    strokeOpacity: 1,
    dataKey: 'Apples',
    color: 'var(--mantine-color-indigo-6)',
    value: 3129,
    payload: {
      date: 'Mar 26',
      Apples: 3129,
      Oranges: 1726,
      Tomatoes: 2290,
    },
  },
  {
    className: 'mantine-LineChart-line',
    style: {},
    name: 'Oranges',
    fill: 'var(--mantine-color-blue-6)',
    stroke: 'var(--mantine-color-blue-6)',
    strokeWidth: 2,
    fillOpacity: 1,
    strokeOpacity: 1,
    dataKey: 'Oranges',
    color: 'var(--mantine-color-blue-6)',
    value: 1726,
    payload: {
      date: 'Mar 26',
      Apples: 3129,
      Oranges: 1726,
      Tomatoes: 2290,
    },
  },
  {
    className: 'mantine-LineChart-line',
    style: {},
    name: 'Tomatoes',
    fill: 'var(--mantine-color-teal-6)',
    stroke: 'var(--mantine-color-teal-6)',
    strokeWidth: 2,
    fillOpacity: 1,
    strokeOpacity: 1,
    dataKey: 'Tomatoes',
    color: 'var(--mantine-color-teal-6)',
    value: 2290,
    payload: {
      date: 'Mar 26',
      Apples: 3129,
      Oranges: 1726,
      Tomatoes: 2290,
    },
  },
];

const series = [
  {
    name: 'Apples',
    label: 'Apples sales',
    color: 'indigo.6',
  },
  {
    name: 'Oranges',
    label: 'Oranges sales',
    color: 'blue.6',
  },
  {
    name: 'Tomatoes',
    label: 'Tomatoes sales',
    color: 'teal.6',
  },
];

const nestedPayload = [
  {
    className: 'mantine-LineChart-line',
    style: {},
    name: 'salad.ApplesProp',
    fill: 'var(--mantine-color-indigo-6)',
    stroke: 'var(--mantine-color-indigo-6)',
    strokeWidth: 2,
    fillOpacity: 1,
    strokeOpacity: 1,
    dataKey: 'salad.ApplesProp',
    color: 'var(--mantine-color-indigo-6)',
    value: 3129,
    payload: {
      date: 'Mar 26',
      TomatoesProp: 2290,
      salad: {
        ApplesProp: 3129,
        OrangesProp: 1726,
      },
    },
  },
  {
    className: 'mantine-LineChart-line',
    style: {},
    name: 'salad.OrangesProp',
    fill: 'var(--mantine-color-blue-6)',
    stroke: 'var(--mantine-color-blue-6)',
    strokeWidth: 2,
    fillOpacity: 1,
    strokeOpacity: 1,
    dataKey: 'salad.OrangesProp',
    color: 'var(--mantine-color-blue-6)',
    value: 1726,
    payload: {
      date: 'Mar 26',
      TomatoesProp: 2290,
      salad: {
        ApplesProp: 3129,
        OrangesProp: 1726,
      },
    },
  },
  {
    className: 'mantine-LineChart-line',
    style: {},
    name: 'TomatoesProp',
    fill: 'var(--mantine-color-teal-6)',
    stroke: 'var(--mantine-color-teal-6)',
    strokeWidth: 2,
    fillOpacity: 1,
    strokeOpacity: 1,
    dataKey: 'TomatoesProp',
    color: 'var(--mantine-color-teal-6)',
    value: 2290,
    payload: {
      date: 'Mar 26',
      TomatoesProp: 2290,
      salad: {
        ApplesProp: 3129,
        OrangesProp: 1726,
      },
    },
  },
];

const nestedSeries = [
  {
    name: 'salad.ApplesProp',
    color: 'indigo.6',
    label: 'AppleLabel',
  },
  {
    name: 'salad.OrangesProp',
    color: 'blue.6',
    label: 'OrangesLabel',
  },
  {
    name: 'TomatoesProp',
    color: 'teal.6',
    label: 'TomatoesLabel',
  },
];

describe('@mantine/charts/ChartToolTip', () => {
  beforeAll(() => {
    patchConsoleWarn();
  });

  afterAll(() => {
    patchConsoleWarn.release();
  });

  it('accurately renders Tooltip label and data with default shallow names', async () => {
    const { container } = render(<ChartTooltip label="Mar 26" payload={payload} series={series} />);
    expect(container.querySelectorAll('.mantine-ChartTooltip-tooltipItem')).toHaveLength(3);

    const tooltipLabelList = container.querySelectorAll('.mantine-ChartTooltip-tooltipItemBody');
    const tooltipDataList = container.querySelectorAll('.mantine-ChartTooltip-tooltipItemData');

    expect(tooltipLabelList[0].textContent).toBe('Apples sales');
    expect(tooltipDataList[0].textContent).toBe('3129');

    expect(tooltipLabelList[1].textContent).toBe('Oranges sales');
    expect(tooltipDataList[1].textContent).toBe('1726');

    expect(tooltipLabelList[2].textContent).toBe('Tomatoes sales');
    expect(tooltipDataList[2].textContent).toBe('2290');
  });

  it('accurately renders Tooltip label and data with nested names', async () => {
    const { container } = render(
      <ChartTooltip label="Mar 26" payload={nestedPayload} series={nestedSeries} />
    );
    expect(container.querySelectorAll('.mantine-ChartTooltip-tooltipItem')).toHaveLength(3);

    const tooltipLabelList = container.querySelectorAll('.mantine-ChartTooltip-tooltipItemBody');
    const tooltipDataList = container.querySelectorAll('.mantine-ChartTooltip-tooltipItemData');

    expect(tooltipLabelList[0].textContent).toBe('AppleLabel');
    expect(tooltipDataList[0].textContent).toBe('3129');

    expect(tooltipLabelList[1].textContent).toBe('OrangesLabel');
    expect(tooltipDataList[1].textContent).toBe('1726');

    expect(tooltipLabelList[2].textContent).toBe('TomatoesLabel');
    expect(tooltipDataList[2].textContent).toBe('2290');
  });
});
