import React from 'react';
import { getThemeColor, MantineColor, useMantineTheme } from '@mantine/core';

interface AreaSplitProps {
  offset: number;
  colors: [MantineColor, MantineColor];
  id?: string;
}

export function AreaSplit({ offset, id, colors }: AreaSplitProps) {
  const theme = useMantineTheme();
  return (
    <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
      <stop offset={offset} stopColor={getThemeColor(colors[0], theme)} stopOpacity={1} />
      <stop offset={offset} stopColor={getThemeColor(colors[1], theme)} stopOpacity={1} />
    </linearGradient>
  );
}

AreaSplit.displayName = '@mantine/charts/AreaSplit';
