import React, { forwardRef } from 'react';
import {
  DefaultProps,
  getDefaultZIndex,
  MantineNumberSize,
  useComponentDefaultProps,
} from '@mantine/styles';
import { createPolymorphicComponent } from '@mantine/utils';
import { Box } from '../Box';
import useStyles, { OverlayStylesParams } from './Overlay.styles';

export interface OverlayProps extends DefaultProps<never, OverlayStylesParams> {
  variant?: string;

  /** Overlay background-color opacity 0–1, disregarded when gradient prop is set, 0.6 by default */
  opacity?: number;

  /** Overlay background-color, #000 by default */
  color?: React.CSSProperties['backgroundColor'];

  /** Overlay background blur, 0 by default */
  blur?: number | string;

  /** Changes overlay to gradient, if set color prop is ignored */
  gradient?: string;

  /** Overlay z-index, 200 by default */
  zIndex?: React.CSSProperties['zIndex'];

  /** Key of theme.radius or any valid CSS value to set border-radius, theme.defaultRadius by default */
  radius?: MantineNumberSize;

  /** Content rendered inside overlay */
  children?: React.ReactNode;

  /** Determines whether content inside overlay should be vertically and horizontally centered, false by default */
  center?: boolean;

  /** Determines whether overlay should have fixed position instead of absolute, false by default */
  fixed?: boolean;
}

const defaultProps: Partial<OverlayProps> = {
  opacity: 0.6,
  color: '#000',
  zIndex: getDefaultZIndex('modal'),
  radius: 0,
};

const _Overlay = forwardRef<HTMLDivElement, OverlayProps>((props, ref) => {
  const {
    variant,
    opacity,
    color,
    blur,
    gradient,
    zIndex,
    radius,
    children,
    className,
    classNames,
    styles,
    unstyled,
    center,
    fixed,
    ...others
  } = useComponentDefaultProps('Overlay', defaultProps, props);

  const { classes, cx } = useStyles(
    { color, opacity, blur, radius, gradient, fixed, zIndex },
    { name: 'Overlay', classNames, styles, unstyled, variant }
  );

  return (
    <Box
      ref={ref}
      className={cx(classes.root, className)}
      data-center={center || undefined}
      {...others}
    >
      {children}
    </Box>
  );
});

_Overlay.displayName = '@mantine/core/Overlay';
export const Overlay = createPolymorphicComponent<'div', OverlayProps>(_Overlay);
