import { getThemeColor, MantineColor, MantineTheme } from '@mantine/core';

interface PieChartDataItem {
  color: MantineColor;
  [key: string]: any;
}

interface GetPieChartDataInput<T extends PieChartDataItem> {
  data: T[];
  theme: MantineTheme;
  strokeWidth: number | undefined;
  highlightedIndex: number | null;
  cellProps:
    | ((item: T) => Partial<Omit<React.SVGProps<SVGElement>, 'ref'>>)
    | Partial<Omit<React.SVGProps<SVGElement>, 'ref'>>
    | undefined;
}

export function getPieChartData<T extends PieChartDataItem>({
  data,
  theme,
  strokeWidth,
  highlightedIndex,
  cellProps,
}: GetPieChartDataInput<T>) {
  return data.map((item, index) => ({
    ...item,
    __segmentIndex: index,
    fill: getThemeColor(item.color, theme),
    stroke: 'var(--chart-stroke-color, var(--mantine-color-body))',
    strokeWidth,
    ...(typeof cellProps === 'function' ? cellProps(item) : cellProps),
    ...(highlightedIndex !== null ? { fillOpacity: highlightedIndex === index ? 1 : 0.2 } : null),
  }));
}
