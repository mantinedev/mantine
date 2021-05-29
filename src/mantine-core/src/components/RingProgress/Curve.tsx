import React from 'react';
import { getThemeColor, useMantineTheme, MantineThemeOverride } from '../../theme';

interface CurveProps {
  value?: number;
  size: number;
  offset: number;
  sum: number;
  thickness: number;
  root?: boolean;
  color?: string;
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
  const radius = (size * 0.9 - thickness * 2) / 2;
  const deg = (Math.PI * radius * 2) / 100;

  const strokeDasharray = root
    ? `${(100 - sum) * deg}, ${sum * deg}`
    : `${value * deg}, ${(100 - value) * deg}`;

  return (
    <circle
      fill="none"
      strokeWidth={thickness}
      cx={size / 2}
      cy={size / 2}
      r={radius}
      transform={root ? `scale(1, -1) translate(0, -${size})` : null}
      strokeDasharray={strokeDasharray}
      strokeDashoffset={root ? 0 : offset}
      stroke={getThemeColor({
        theme,
        color: color || (theme.colorScheme === 'dark' ? 'dark' : 'gray'),
        shade: color ? 6 : 3,
      })}
    />
  );
}

Curve.displayName = '@mantine/core/Curve';
