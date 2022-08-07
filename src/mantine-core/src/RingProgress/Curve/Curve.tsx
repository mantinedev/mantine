import React from 'react';
import { useMantineTheme, MantineColor } from '@mantine/styles';
import { getCurveProps } from './get-curve-props';

interface CurveProps {
  value?: number;
  size: number;
  offset: number;
  sum: number;
  thickness: number;
  lineRoundCaps: boolean;
  root?: boolean;
  color?: MantineColor;
}

export function Curve({
  size,
  value,
  offset,
  sum,
  thickness,
  root,
  color,
  lineRoundCaps,
}: CurveProps) {
  const theme = useMantineTheme();
  const stroke = theme.fn.themeColor(
    color || (theme.colorScheme === 'dark' ? 'dark' : 'gray'),
    color ? theme.fn.primaryShade() : theme.colorScheme === 'dark' ? 4 : 1,
    false
  );

  return (
    <circle
      fill="none"
      strokeLinecap={lineRoundCaps ? 'round' : 'butt'}
      stroke={stroke}
      {...getCurveProps({ sum, size, thickness, value, offset, root })}
    />
  );
}

Curve.displayName = '@mantine/core/Curve';
