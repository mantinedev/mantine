import {
  Box,
  BoxProps,
  ElementProps,
  MantineColor,
  MantineRadius,
  MantineSize,
} from '../../../core';
import { useSliderContext } from '../Slider.context';

export interface SliderRootProps extends BoxProps, ElementProps<'div'> {
  size: MantineSize | (string & {}) | number;
  children: React.ReactNode;
  color?: MantineColor | undefined;
  disabled: boolean | undefined;
  variant?: string | undefined;
  thumbSize?: string | number | undefined;
  radius?: MantineRadius | undefined;
  orientation?: 'horizontal' | 'vertical' | undefined;
}

export function SliderRoot({
  size,
  disabled,
  variant,
  color,
  thumbSize,
  radius,
  orientation,
  ...others
}: SliderRootProps) {
  const { getStyles } = useSliderContext();
  return (
    <Box
      tabIndex={-1}
      variant={variant}
      size={size}
      {...getStyles('root')}
      mod={{ orientation }}
      {...others}
    />
  );
}

SliderRoot.displayName = '@mantine/core/SliderRoot';
