import React from 'react';
import { getThemeColor, useMantineTheme, MantineColor } from '../../../theme';
import { getCurveProps } from './get-curve-props';

interface CurveProps {
  value?: number;
  size: number;
  offset: number;
  sum: number;
  thickness: number;
  root?: boolean;
  color?: MantineColor;
}

export function Curve({ size, value, offset, sum, thickness, root, color }: CurveProps) {
  const theme = useMantineTheme();

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
