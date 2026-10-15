import { MantineTheme } from '@mantine/core';
import { resolveChartNodeFill } from '../utils';
import type { SunburstChartData } from './SunburstChart';

export const SUNBURST_VALUE_KEY = '__mantineSunburstValue';

export interface ResolvedSunburstNode {
  name: string;
  fill: string;
  [SUNBURST_VALUE_KEY]: number;
  children?: ResolvedSunburstNode[];
  [key: string]: unknown;
}

export interface ResolvedSunburstRoot {
  name: string;
  [SUNBURST_VALUE_KEY]: number;
  children: ResolvedSunburstNode[];
  [key: string]: unknown;
}

export interface ResolvedSunburstData {
  root: ResolvedSunburstRoot;
  depth: number;
}

export function getSunburstRechartsDataKey(dataKey: string) {
  return dataKey === 'fill' ? SUNBURST_VALUE_KEY : dataKey;
}

function getOwnValue(value: unknown) {
  const numeric = typeof value === 'string' && value.trim() !== '' ? Number(value) : value;
  return typeof numeric === 'number' && Number.isFinite(numeric) && numeric > 0 ? numeric : 0;
}

function resolveNodes(
  data: SunburstChartData[],
  theme: MantineTheme,
  dataKey: string,
  parentFill: string | undefined
): { nodes: ResolvedSunburstNode[]; total: number; depth: number } {
  let total = 0;
  let depth = 0;

  const nodes = data.map((item, index) => {
    const fill = resolveChartNodeFill({ color: item.color, parentFill, index, theme });

    const children = item.children?.length
      ? resolveNodes(item.children, theme, dataKey, fill)
      : null;
    const value = Math.max(getOwnValue(item[dataKey]), children?.total ?? 0);

    total += value;
    depth = Math.max(depth, 1 + (children?.depth ?? 0));

    return {
      ...item,
      [dataKey]: value,
      fill,
      [SUNBURST_VALUE_KEY]: value,
      children: children?.nodes,
    };
  });

  return { nodes, total, depth };
}

export function resolveSunburstData(
  data: SunburstChartData[],
  theme: MantineTheme,
  dataKey: string
): ResolvedSunburstData {
  const { nodes, total, depth } = resolveNodes(data, theme, dataKey, undefined);

  return {
    root: {
      name: 'root',
      [dataKey]: total,
      [SUNBURST_VALUE_KEY]: total,
      children: total > 0 ? nodes : [],
    },
    depth: total > 0 ? depth : 0,
  };
}
