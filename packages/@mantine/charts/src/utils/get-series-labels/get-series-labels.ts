import { ChartSeries } from '../../types';

type ChartSeriesLabels = Record<string, string | undefined>;

export function getSeriesLabels(series: ChartSeries[] | undefined): ChartSeriesLabels {
  if (!series) {
    return {};
  }

  return series.reduce<ChartSeriesLabels>((acc, item) => {
    const matchFound = item.name.search(/\./);
    if (matchFound >= 0) {
      const key = item.name.substring(matchFound + 1);
      acc[key] = item.label;
      return acc;
    }
    acc[item.name] = item.label;
    return acc;
  }, {});
}
