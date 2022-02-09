import React, { forwardRef } from 'react';
import {
  PolymorphicComponentProps,
  PolymorphicRef,
  MantineNumberSize,
  DefaultProps,
  getDefaultZIndex,
  useMantineDefaultProps,
} from '@mantine/styles';
import { Box } from '../Box';

interface _OverlayProps extends DefaultProps {
  /** Overlay opacity */
  opacity?: React.CSSProperties['opacity'];

  /** Overlay background-color */
  color?: React.CSSProperties['backgroundColor'];

  /** Use gradient instead of background-color */
  gradient?: string;

  /** Overlay z-index */
  zIndex?: React.CSSProperties['zIndex'];

  /** Value from theme.radius or number to set border-radius in px */
  radius?: MantineNumberSize;
}

export type OverlayProps<C> = C extends React.ElementType
  ? PolymorphicComponentProps<C, _OverlayProps>
  : never;

type OverlayComponent = (<C = 'div'>(props: OverlayProps<C>) => React.ReactElement) & {
  displayName?: string;
};

const defaultProps: Partial<OverlayProps<any>> = {
  opacity: 0.6,
  color: '#fff',
  zIndex: getDefaultZIndex('modal'),
  radius: 0,
};

export const Overlay: OverlayComponent = forwardRef(
  <C extends React.ElementType = 'div'>(props: OverlayProps<C>, ref: PolymorphicRef<C>) => {
    const { opacity, color, gradient, zIndex, component, radius, sx, ...others } =
      useMantineDefaultProps('Overlay', defaultProps, props);
    const background = gradient ? { backgroundImage: gradient } : { backgroundColor: color };

    return (
      <Box<any>
        component={component || 'div'}
        ref={ref}
        sx={[
          (theme) => ({
            ...background,
            opacity,
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            borderRadius: theme.fn.size({ size: radius, sizes: theme.radius }),
            zIndex,
          }),
          sx,
        ]}
        {...others}
      />
    );
  }
);

Overlay.displayName = '@mantine/core/Overlay';
