import React from 'react';
import { useMantineTheme, MantineColor } from '@mantine/styles';
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
  const stroke = theme.fn.themeColor(
    color || (theme.colorScheme === 'dark' ? 'dark' : 'gray'),
    color ? (theme.colorScheme === 'dark' ? 6 : 7) : theme.colorScheme === 'dark' ? 4 : 2
  );

  return (
    <circle
      fill="none"
      stroke={stroke}
      {...getCurveProps({ sum, size, thickness, value, offset, root })}
    />
  );
}

Curve.displayName = '@mantine/core/Curve';
