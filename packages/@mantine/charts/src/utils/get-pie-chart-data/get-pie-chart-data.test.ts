import { DEFAULT_THEME } from '@mantine/core';
import { getPieChartData } from './get-pie-chart-data';

const data = [
  { name: 'A', value: 10, color: 'red.6' },
  { name: 'B', value: 20, color: 'blue.6' },
  { name: 'C', value: 30, color: 'teal.6' },
];

describe('@mantine/charts/utils/get-pie-chart-data', () => {
  it('injects __segmentIndex matching the data order', () => {
    const result = getPieChartData({
      data,
      theme: DEFAULT_THEME,
      strokeWidth: 1,
      highlightedIndex: null,
      cellProps: undefined,
    });

    expect(result.map((item) => item.__segmentIndex)).toEqual([0, 1, 2]);
  });

  it('dims non-highlighted segments and keeps the highlighted one fully opaque', () => {
    const result = getPieChartData({
      data,
      theme: DEFAULT_THEME,
      strokeWidth: 1,
      highlightedIndex: 1,
      cellProps: undefined,
    });

    expect(result.map((item) => item.fillOpacity)).toEqual([0.2, 1, 0.2]);
  });

  it('respects user cellProps fillOpacity when no segment is highlighted', () => {
    const result = getPieChartData({
      data,
      theme: DEFAULT_THEME,
      strokeWidth: 1,
      highlightedIndex: null,
      cellProps: { fillOpacity: 0.8 },
    });

    expect(result.map((item) => item.fillOpacity)).toEqual([0.8, 0.8, 0.8]);
  });

  it('lets the highlight fillOpacity win over user cellProps while a segment is highlighted', () => {
    const result = getPieChartData({
      data,
      theme: DEFAULT_THEME,
      strokeWidth: 1,
      highlightedIndex: 0,
      cellProps: { fillOpacity: 0.8 },
    });

    expect(result.map((item) => item.fillOpacity)).toEqual([1, 0.2, 0.2]);
  });

  it('supports cellProps as a function', () => {
    const result = getPieChartData({
      data,
      theme: DEFAULT_THEME,
      strokeWidth: 1,
      highlightedIndex: 2,
      cellProps: (item) => ({ fillOpacity: item.name === 'A' ? 0.5 : 0.9 }),
    });

    expect(result.map((item) => item.fillOpacity)).toEqual([0.2, 0.2, 1]);
  });
});
