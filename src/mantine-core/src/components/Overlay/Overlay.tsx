import React, { forwardRef } from 'react';
import {
  MantineNumberSize,
  DefaultProps,
  getDefaultZIndex,
  useMantineDefaultProps,
  CSSObject,
} from '@mantine/styles';
import { createPolymorphicComponent, packSx } from '@mantine/utils';
import { Box } from '../Box';

export interface OverlayProps extends DefaultProps {
  /** Overlay opacity */
  opacity?: React.CSSProperties['opacity'];

  /** Overlay background-color */
  color?: React.CSSProperties['backgroundColor'];

  /** Overlay background blur in px */
  blur?: number;

  /** Use gradient instead of background-color */
  gradient?: string;

  /** Overlay z-index */
  zIndex?: React.CSSProperties['zIndex'];

  /** Value from theme.radius or number to set border-radius in px */
  radius?: MantineNumberSize;
}

const defaultProps: Partial<OverlayProps> = {
  opacity: 0.6,
  color: '#fff',
  zIndex: getDefaultZIndex('modal'),
  radius: 0,
  blur: 0,
};

export const _Overlay = forwardRef<HTMLDivElement, OverlayProps>((props, ref) => {
  const { opacity, blur, color, gradient, zIndex, radius, sx, unstyled, ...others } =
    useMantineDefaultProps('Overlay', defaultProps, props);
  const background = gradient ? { backgroundImage: gradient } : { backgroundColor: color };

  const baseStyles: CSSObject = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex,
  };

  const innerOverlay = (otherProps?: Record<string, any>) => (
    <Box
      ref={ref}
      sx={[
        (theme) => ({
          ...background,
          ...baseStyles,
          opacity,
          borderRadius: theme.fn.size({ size: radius, sizes: theme.radius }),
        }),
        ...packSx(sx),
      ]}
      {...otherProps}
    />
  );

  if (blur) {
    return (
      <Box sx={[{ ...baseStyles, backdropFilter: `blur(${blur}px)` }, ...packSx(sx)]} {...others}>
        {innerOverlay()}
      </Box>
    );
  }

  return innerOverlay(others);
});

_Overlay.displayName = '@mantine/core/Overlay';

export const Overlay = createPolymorphicComponent<'div', OverlayProps>(_Overlay);
