import React from 'react';
import { getThemeColor, useMantineTheme, MantineThemeOverride, MantineColor } from '../../../theme';
import { getCurveProps } from './get-curve-props';

interface CurveProps {
  value?: number;
  size: number;
  offset: number;
  sum: number;
  thickness: number;
  root?: boolean;
  color?: MantineColor;
  themeOverride?: MantineThemeOverride;
}

export function Curve({
  size,
  value,
  offset,
  sum,
  thickness,
  root,
  color,
  themeOverride,
}: CurveProps) {
  const theme = useMantineTheme(themeOverride);

  return (
    <circle
      fill="none"
      stroke={getThemeColor({
        theme,
        color: color || (theme.colorScheme === 'dark' ? 'dark' : 'gray'),
        shade: color
          ? theme.colorScheme === 'dark'
            ? 6
            : 7
          : theme.colorScheme === 'dark'
          ? 4
          : 2,
      })}
      {...getCurveProps({
        sum,
        size,
        thickness,
        value,
        offset,
        root,
      })}
    />
  );
}

Curve.displayName = '@mantine/core/Curve';
