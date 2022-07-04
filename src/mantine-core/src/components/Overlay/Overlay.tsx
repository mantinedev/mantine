import React, { forwardRef } from 'react';
import {
  PolymorphicComponentProps,
  PolymorphicRef,
  MantineNumberSize,
  DefaultProps,
  getDefaultZIndex,
  useMantineDefaultProps,
  CSSObject,
} from '@mantine/styles';
import { Box } from '../Box';

interface _OverlayProps extends DefaultProps {
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

export type OverlayProps<C> = PolymorphicComponentProps<C, _OverlayProps>;

type OverlayComponent = (<C = 'div'>(props: OverlayProps<C>) => React.ReactElement) & {
  displayName?: string;
};

const defaultProps: Partial<OverlayProps<any>> = {
  opacity: 0.6,
  color: '#fff',
  zIndex: getDefaultZIndex('modal'),
  radius: 0,
  blur: 0,
};

export const Overlay: OverlayComponent = forwardRef(
  (props: OverlayProps<'div'>, ref: PolymorphicRef<'div'>) => {
    const { opacity, blur, color, gradient, zIndex, component, radius, sx, ...others } =
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
      <Box<any>
        component={component || 'div'}
        ref={ref}
        sx={[
          (theme) => ({
            ...background,
            ...baseStyles,
            opacity,
            borderRadius: theme.fn.size({ size: radius, sizes: theme.radius }),
          }),
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...otherProps}
      />
    );

    if (blur) {
      return (
        <Box
          sx={[
            () => ({
              ...baseStyles,
              backdropFilter: `blur(${blur}px)`,
            }),
            ...(Array.isArray(sx) ? sx : [sx]),
          ]}
          {...others}
        >
          {innerOverlay()}
        </Box>
      );
    }

    return innerOverlay(others);
  }
) as any;

Overlay.displayName = '@mantine/core/Overlay';
