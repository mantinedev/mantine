import { Box, GetStylesApi, getThemeColor, MantineColor, useMantineTheme } from '../../../core';
import { Tooltip } from '../../Tooltip';
import type { RingProgressFactory } from '../RingProgress';
import { getCurveProps } from './get-curve-props';

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

  return (
    <Tooltip.Floating disabled={!tooltip} label={tooltip}>
      <Box
        component="circle"
        {...others}
        {...getStyles('curve')}
        __vars={{ '--curve-color': color ? getThemeColor(color, theme) : undefined }}
        fill="none"
        strokeLinecap={lineRoundCaps ? 'round' : 'butt'}
        {...getCurveProps({ sum, size, thickness, value, offset, root })}
      />
    </Tooltip.Floating>
  );
}

Curve.displayName = '@mantine/core/Curve';
