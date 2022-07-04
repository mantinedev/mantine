import React, { forwardRef } from 'react';
import {
  MantineNumberSize,
  DefaultProps,
  getDefaultZIndex,
  useComponentDefaultProps,
} from '@mantine/styles';
import { createPolymorphicComponent, packSx } from '@mantine/utils';
import { Box } from '../Box';
import useStyles, { OverlayStylesParams } from './Overlay.styles';

export interface OverlayProps extends DefaultProps<never, OverlayStylesParams> {
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
  const { opacity, blur, color, gradient, zIndex, radius, sx, unstyled, className, ...others } =
    useComponentDefaultProps('Overlay', defaultProps, props);
  const { classes, cx } = useStyles({ zIndex }, { name: 'Overlay', unstyled });
  const background = gradient ? { backgroundImage: gradient } : { backgroundColor: color };

  const innerOverlay = (otherProps?: Record<string, any>) => (
    <Box
      ref={ref}
      className={cx(classes.root, className)}
      sx={[
        (theme) => ({
          ...background,
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
      <Box
        className={cx(classes.root, className)}
        sx={[{ backdropFilter: `blur(${blur}px)` }, ...packSx(sx)]}
        {...others}
      >
        {innerOverlay()}
      </Box>
    );
  }

  return innerOverlay(others);
});

_Overlay.displayName = '@mantine/core/Overlay';

export const Overlay = createPolymorphicComponent<'div', OverlayProps>(_Overlay);
