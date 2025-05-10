import { forwardRef } from 'react';
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
  color?: MantineColor;
  disabled: boolean | undefined;
  variant?: string;
  thumbSize?: string | number;
  radius?: MantineRadius;
}

export const SliderRoot = forwardRef<HTMLDivElement, SliderRootProps>(
  ({ size, disabled, variant, color, thumbSize, radius, ...others }: SliderRootProps, ref) => {
    const { getStyles } = useSliderContext();

    return (
      <Box
        tabIndex={-1}
        variant={variant}
        size={size}
        ref={ref}
        {...getStyles('root')}
        {...others}
      />
    );
  }
);

SliderRoot.displayName = '@mantine/core/SliderRoot';
