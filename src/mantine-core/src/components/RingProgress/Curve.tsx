import React from 'react';
import { getThemeColor, useMantineTheme } from '../../theme';

interface CurveProps {
  value?: number;
  size: number;
  offset: number;
  sum: number;
  thickness: number;
  empty?: boolean;
  color?: string;
}

export function Curve({ size, value, offset, sum, thickness, empty, color }: CurveProps) {
  const theme = useMantineTheme();
  const radius = (size * 0.9 - thickness * 2) / 2;
  const deg = (Math.PI * radius * 2) / 100;

  const strokeDasharray = empty
    ? `${(100 - sum) * deg}, ${sum * deg}`
    : `${value * deg}, ${(100 - value) * deg}`;

  return (
    <circle
      fill="none"
      strokeWidth={thickness}
      cx={size / 2}
      cy={size / 2}
      r={radius}
      transform={empty ? `scale(1, -1) translate(0, -${size})` : null}
      strokeDasharray={strokeDasharray}
      strokeDashoffset={empty ? 0 : offset}
      stroke={getThemeColor({
        theme,
        color: color || (theme.colorScheme === 'dark' ? 'dark' : 'gray'),
        shade: color ? 6 : 3,
      })}
    />
  );
}

Curve.displayName = '@mantine/core/Curve';
