import React from 'react';
import { useMantineTheme, MantineColor, getThemeColor, GetStylesApi, Box } from '../../../core';
import { Tooltip } from '../../Tooltip';
import { getCurveProps } from './get-curve-props';
import type { RingProgressFactory } from '../RingProgress';

interface CurveProps extends React.ComponentPropsWithRef<'circle'> {
  value?: number;
  size: number;
  offset: number;
  sum: number;
  thickness: number;
  lineRoundCaps: boolean | undefined;
  root?: boolean;
  color?: MantineColor;
  tooltip?: React.ReactNode;
  getStyles: GetStylesApi<RingProgressFactory>;
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
  tooltip,
  getStyles,
  display,
  ...others
}: CurveProps) {
  const theme = useMantineTheme();
  // const stroke = theme.fn.themeColor(
  //   color || (theme.colorScheme === 'dark' ? 'dark' : 'gray'),
  //   color ? theme.fn.primaryShade() : theme.colorScheme === 'dark' ? 4 : 1,
  //   false
  // );

  return (
    <Tooltip.Floating disabled={!tooltip} label={tooltip}>
      <Box
        component="circle"
        {...others}
        {...getStyles('curve')}
        __vars={{ '--curve-color': color ? getThemeColor(color, theme) : undefined }}
        fill="none"
        strokeLinecap={lineRoundCaps ? 'round' : 'butt'}
        // stroke={color ? getThemeColor(color, theme) : undefined}
        {...getCurveProps({ sum, size, thickness, value, offset, root })}
      />
    </Tooltip.Floating>
  );
}

Curve.displayName = '@mantine/core/Curve';
