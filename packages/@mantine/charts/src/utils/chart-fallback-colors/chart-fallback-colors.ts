import { MantineColor, MantineTheme, parseThemeColor } from '@mantine/core';

const CHART_FALLBACK_COLORS = ['blue', 'teal', 'orange', 'grape', 'cyan', 'pink', 'lime', 'indigo'];

function getChartFallbackColor(index: number) {
  return `${CHART_FALLBACK_COLORS[index % CHART_FALLBACK_COLORS.length]}.6`;
}

interface ResolveChartNodeFillInput {
  color: MantineColor | undefined;
  parentFill: string | undefined;
  index: number;
  theme: MantineTheme;
}

export function resolveChartNodeFill({
  color,
  parentFill,
  index,
  theme,
}: ResolveChartNodeFillInput) {
  if (color) {
    return parseThemeColor({ color, theme }).value;
  }

  return parentFill || parseThemeColor({ color: getChartFallbackColor(index), theme }).value;
}
